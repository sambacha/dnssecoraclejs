"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oracle = exports.OutdatedDataError = void 0;
const tslib_1 = require("tslib");
const packet = (0, tslib_1.__importStar)(require("dns-packet"));
const types = (0, tslib_1.__importStar)(require("dns-packet/types"));
const ethers_1 = require("ethers");
const DNSSEC__factory_1 = require("./typechain/factories/DNSSEC__factory");
// import { logger } from './log'
class OutdatedDataError extends Error {
    constructor(answer) {
        super(`Oracle has a newer version of the ${answer.signature.data.typeCovered} RRSET on ${answer.signature.name}`);
        this.name = 'OudatedDataError';
        this.answer = answer;
    }
}
exports.OutdatedDataError = OutdatedDataError;
// Compares two serial numbers using RFC1982 serial number math.
function serialNumberGt(i1, i2) {
    return (i1 < i2 && i2 - i1 > 0x7fffffff) || (i1 > i2 && i1 - i2 < 0x7fffffff);
}
class Oracle {
    constructor(address, provider, now = undefined) {
        this.contract = DNSSEC__factory_1.DNSSEC__factory.connect(address, provider);
        this.now = now || Date.now;
    }
    // Takes a `ProvableAnswer` returned by dnsprovejs and converts it into a blob of proof
    // data for the DNSSEC oracle contract.
    getProofData(answer) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const allProofs = answer.proofs.concat([answer.answer]);
            for (let i = allProofs.length - 1; i >= 0; i--) {
                if (yield this.knownProof(allProofs[i])) {
                    if (i == allProofs.length - 1) {
                        console.log(`All proofs for ${answer.answer.signature.data.typeCovered} ${answer.answer.signature.name} are already known`);
                        return { rrsets: [], proof: allProofs[allProofs.length - 1].toWire(false) };
                    }
                    console.log(`${answer.answer.signature.data.typeCovered} ${answer.answer.signature.name} has ${i + 1} of ${allProofs.length} proofs already known`);
                    return {
                        rrsets: this.encodeProofs(allProofs.slice(i + 1, allProofs.length)),
                        proof: allProofs[i].toWire(false),
                    };
                }
            }
            console.log(`${answer.answer.signature.data.typeCovered} ${answer.answer.signature.name} has no proofs already known`);
            return {
                rrsets: this.encodeProofs(allProofs),
                proof: Buffer.from(ethers_1.utils.arrayify(yield this.contract.anchors())),
            };
        });
    }
    knownProof(proof) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const name = packet.name.encode(proof.signature.name);
            const type = types.toType(proof.signature.data.typeCovered);
            const [inception, expiration, hash] = yield this.contract.rrdata(type, name);
            // If the existing record is newer than our one, throw an error.
            if (serialNumberGt(inception, proof.signature.data.inception)) {
                throw new OutdatedDataError(proof);
            }
            const expired = serialNumberGt(this.now() / 1000, expiration);
            const proofHash = ethers_1.utils.keccak256(proof.toWire(false)).slice(0, 42);
            return (hash == proofHash) && !expired;
        });
    }
    encodeProofs(proofs) {
        return proofs.map((proof) => ({ rrset: proof.toWire(true), sig: proof.signature.data.signature }));
    }
}
exports.Oracle = Oracle;

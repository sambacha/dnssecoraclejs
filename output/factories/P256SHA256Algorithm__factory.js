"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.P256SHA256Algorithm__factory = void 0;
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
const ethers_1 = require("ethers");
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes",
                name: "key",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "data",
                type: "bytes",
            },
            {
                internalType: "bytes",
                name: "signature",
                type: "bytes",
            },
        ],
        name: "verify",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
const _bytecode = "0x608060405234801561001057600080fd5b50610f54806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063de8f50a114610030575b600080fd5b61004361003e366004610d52565b610059565b6040516100509190610e7e565b60405180910390f35b600061013360028686604051610070929190610e71565b602060405180830381855afa15801561008d573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906100b09190610d2c565b6100ef85858080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061013e92505050565b61012e8a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506101a192505050565b6101f0565b979650505050505050565b610146610ca7565b81516040146101705760405162461bcd60e51b815260040161016790610e9c565b60405180910390fd5b604080518082019091528061018684600061038e565b815260209081019061019990859061038e565b905292915050565b6101a9610ca7565b81516044146101ca5760405162461bcd60e51b815260040161016790610e8c565b60408051808201909152806101e084600461038e565b815260200161019984602461038e565b8151600090158061021057508251600080516020610f2883398151915211155b8061021d57506020830151155b1561022a57506000610387565b8151602083015161023b91906103b2565b61024757506000610387565b60008080808061026c8860016020020151600080516020610f288339815191526104a4565b90506102ca7f6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c2967f4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5600080516020610f28833981519152848d0961055b565b885160208a01518b519398509195506102f892909190600080516020610f288339815191529085900961055b565b9094509150600061030b86858786610628565b60408101519091506103265760009650505050505050610387565b60006103478260026020020151600160601b63ffffffff60c01b03196104a4565b9050600160601b63ffffffff60c01b0319808283098351098a5190915061037c600080516020610f2883398151915283610ee7565b149750505050505050505b9392505050565b815160009061039e836020610eac565b11156103a957600080fd5b50016020015190565b60008215806103ce5750600160601b63ffffffff60c01b031983145b806103d7575081155b806103ef5750600160601b63ffffffff60c01b031982145b156103fc5750600061049e565b6000600160601b63ffffffff60c01b031983840990506000600160601b63ffffffff60c01b031985600160601b63ffffffff60c01b0319878809099050600160601b63ffffffff60c01b0319806bfffffffffffffffffffffffd63ffffffff60c01b0319870982089050600160601b63ffffffff60c01b03197f5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b820890501490505b92915050565b60008215806104b257508183145b806104bb575081155b156104c85750600061049e565b818311156104f1578183816104ed57634e487b7160e01b600052601260045260246000fd5b0692505b600060018385835b81156105365781838161051c57634e487b7160e01b600052601260045260246000fd5b9495940485810290940393919283830290039190506104f9565b600085121561054f57505050506000038203905061049e565b50929695505050505050565b60008082610570576000805b91509150610620565b8260011415610583575083905082610620565b826002141561059657610567858561064e565b508390508281816001806105ab600288610ee7565b6105b757600094508495505b600187901c96505b861561060c576105d084848461067e565b919550935091506105e2600288610ee7565b60011415610600576105f88484848989866108d2565b919750955090505b600187901c96506105bf565b6106178686836109d9565b95509550505050505b935093915050565b610630610cc5565b60008061063f87878787610a29565b90925090506101338282610a5e565b600080600061065f8585600161067e565b919650945090506106718585836109d9565b92509250505b9250929050565b60008060008060008060006106938a8a610ab7565b156106ac576000600181965096509650505050506108c9565b600160601b63ffffffff60c01b0319888a099250600160601b63ffffffff60c01b0319600284099250600160601b63ffffffff60c01b03198a84099150600160601b63ffffffff60c01b03198983099150600160601b63ffffffff60c01b0319600283099150600160601b63ffffffff60c01b03198a8b099950600160601b63ffffffff60c01b031960038b099350600160601b63ffffffff60c01b03198889099750600160601b63ffffffff60c01b03196bfffffffffffffffffffffffd63ffffffff60c01b031989099750600160601b63ffffffff60c01b03198885089350600160601b63ffffffff60c01b03198485099050600160601b63ffffffff60c01b0319826002099950600160601b63ffffffff60c01b03196107dd8b600160601b63ffffffff60c01b0319610ec4565b82089050600160601b63ffffffff60c01b031961080882600160601b63ffffffff60c01b0319610ec4565b83089950600160601b63ffffffff60c01b03198a85099950600160601b63ffffffff60c01b0319838a099850600160601b63ffffffff60c01b0319898a099850600160601b63ffffffff60c01b0319896002099850600160601b63ffffffff60c01b03196108848a600160601b63ffffffff60c01b0319610ec4565b8b089550600160601b63ffffffff60c01b03198184099650600160601b63ffffffff60c01b03198384099450600160601b63ffffffff60c01b03198386099450505050505b93509350939050565b60008060008060008060006108e78d8d610ab7565b156108fe57898989965096509650505050506109cd565b6109088a8a610ab7565b1561091f578c8c8c965096509650505050506109cd565b600160601b63ffffffff60c01b0319888d099350600160601b63ffffffff60c01b03198b8a099250600160601b63ffffffff60c01b0319888e099150600160601b63ffffffff60c01b03198b8b099050808214156109a357828414156109995761098a8d8d8d61067e565b965096509650505050506109cd565b600060018161098a565b6109c1600160601b63ffffffff60c01b0319898d0983838688610adb565b91985096509450505050505b96509650969350505050565b60008060006109f684600160601b63ffffffff60c01b03196104a4565b9050600160601b63ffffffff60c01b03198187099250600160601b63ffffffff60c01b0319818609915050935093915050565b6000806000610a3e87876001888860016108d2565b91985096509050610a508787836109d9565b925092505094509492505050565b610a66610cc5565b600160601b63ffffffff60c01b0319600160000860408201819052600160601b63ffffffff60c01b031990840981526040810151600160601b63ffffffff60c01b0319908309602082015292915050565b600082158015610ac5575081155b15610ad25750600161049e565b50600092915050565b600080808080808080600160601b63ffffffff60c01b0319610b0b8b600160601b63ffffffff60c01b0319610ec4565b8a089050600160601b63ffffffff60c01b0319610b368c600160601b63ffffffff60c01b0319610ec4565b8d089450600160601b63ffffffff60c01b03198586099350600160601b63ffffffff60c01b03198182099150600160601b63ffffffff60c01b03198d83099150600160601b63ffffffff60c01b03198c8c089a50600160601b63ffffffff60c01b0319848c099a50600160601b63ffffffff60c01b0319610bc58c600160601b63ffffffff60c01b0319610ec4565b83089150600160601b63ffffffff60c01b03198286099750600160601b63ffffffff60c01b03198585099250600160601b63ffffffff60c01b0319848d099b50600160601b63ffffffff60c01b0319610c2c83600160601b63ffffffff60c01b0319610ec4565b8d089b50600160601b63ffffffff60c01b03198c82099050600160601b63ffffffff60c01b0319838a099850600160601b63ffffffff60c01b0319610c7f8a600160601b63ffffffff60c01b0319610ec4565b82089650600160601b63ffffffff60c01b03198d840995505050505050955095509592505050565b60405180604001604052806002906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b805161049e565b60008083601f840112610cfc57600080fd5b50813567ffffffffffffffff811115610d1457600080fd5b60208301915083600182028301111561067757600080fd5b600060208284031215610d3e57600080fd5b6000610d4a8484610ce3565b949350505050565b60008060008060008060608789031215610d6b57600080fd5b863567ffffffffffffffff811115610d8257600080fd5b610d8e89828a01610cea565b9650965050602087013567ffffffffffffffff811115610dad57600080fd5b610db989828a01610cea565b9450945050604087013567ffffffffffffffff811115610dd857600080fd5b610de489828a01610cea565b92509250509295509295509295565b6000610e00838584610edb565b50500190565b601781526000602082017f496e76616c69642070323536206b6579206c656e677468000000000000000000815291505b5060200190565b601d81526000602082017f496e76616c69642070323536207369676e6174757265206c656e67746800000081529150610e36565b6000610d4a828486610df3565b81151581526020810161049e565b6020808252810161049e81610e06565b6020808252810161049e81610e3d565b60008219821115610ebf57610ebf610efb565b500190565b600082821015610ed657610ed6610efb565b500390565b82818337506000910152565b600082610ef657610ef6610f11565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fdfeffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551a164736f6c6343000804000a";
const isSuperArgs = (xs) => xs.length > 1;
class P256SHA256Algorithm__factory extends ethers_1.ContractFactory {
    constructor(...args) {
        if (isSuperArgs(args)) {
            super(...args);
        }
        else {
            super(_abi, _bytecode, args[0]);
        }
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    attach(address) {
        return super.attach(address);
    }
    connect(signer) {
        return super.connect(signer);
    }
    static createInterface() {
        return new ethers_1.utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    }
}
exports.P256SHA256Algorithm__factory = P256SHA256Algorithm__factory;
P256SHA256Algorithm__factory.bytecode = _bytecode;
P256SHA256Algorithm__factory.abi = _abi;

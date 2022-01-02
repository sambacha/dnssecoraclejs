/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { NSEC3Digest, NSEC3DigestInterface } from "../NSEC3Digest";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "salt",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "iterations",
        type: "uint256",
      },
    ],
    name: "hash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class NSEC3Digest__factory {
  static readonly abi = _abi;
  static createInterface(): NSEC3DigestInterface {
    return new utils.Interface(_abi) as NSEC3DigestInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NSEC3Digest {
    return new Contract(address, _abi, signerOrProvider) as NSEC3Digest;
  }
}

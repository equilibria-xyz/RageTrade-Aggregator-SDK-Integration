/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  WithdrawalVault,
  WithdrawalVaultInterface,
} from "../../../contracts/withdrawal/WithdrawalVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RoleStore",
        name: "_roleStore",
        type: "address",
      },
      {
        internalType: "contract DataStore",
        name: "_dataStore",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "EmptyHoldingAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "EmptyReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "EmptyTokenTranferGasLimit",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
    ],
    name: "InvalidNativeTokenSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "SelfTransferNotSupported",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenTransferError",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "msgSender",
        type: "address",
      },
      {
        internalType: "string",
        name: "role",
        type: "string",
      },
    ],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "dataStore",
    outputs: [
      {
        internalType: "contract DataStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "recordTransferIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "roleStore",
    outputs: [
      {
        internalType: "contract RoleStore",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "syncTokenBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "tokenBalances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "shouldUnwrapNativeToken",
        type: "bool",
      },
    ],
    name: "transferOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferOutNativeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516112c03803806112c083398101604081905261002f9161005e565b6001600160a01b039182166080521660a052610098565b6001600160a01b038116811461005b57600080fd5b50565b6000806040838503121561007157600080fd5b825161007c81610046565b602084015190925061008d81610046565b809150509250929050565b60805160a0516111da6100e660003960008181607b015281816101cf0152818161035d015281816103fe015281816105ba015261061a01526000818161016101526104ed01526111da6000f3fe60806040526004361061006f5760003560e01c8063078d3b79146100dc5780632fb12605146100fc578063352f9aed1461011c5780634a4a7b041461014f578063523fba7f14610190578063660d0d67146101bd578063d443ca94146101f1578063eb40133f1461021157600080fd5b366100d757600061009f7f0000000000000000000000000000000000000000000000000000000000000000610231565b9050336001600160a01b038216146100d5573360405163738d28df60e11b81526004016100cc9190610e58565b60405180910390fd5b005b600080fd5b3480156100e857600080fd5b506100d56100f7366004610e81565b6102e4565b34801561010857600080fd5b506100d5610117366004610ed0565b610344565b34801561012857600080fd5b5061013c610137366004610f23565b6103c8565b6040519081526020015b60405180910390f35b34801561015b57600080fd5b506101837f000000000000000000000000000000000000000000000000000000000000000081565b6040516101469190610e58565b34801561019c57600080fd5b5061013c6101ab366004610f23565b60006020819052908152604090205481565b3480156101c957600080fd5b506101837f000000000000000000000000000000000000000000000000000000000000000081565b3480156101fd57600080fd5b506100d561020c366004610f47565b6103e5565b34801561021d57600080fd5b5061013c61022c366004610f23565b61042f565b6000816001600160a01b03166321f8a7216040516020016102699060208082526003908201526215d39560ea1b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161029d91815260200190565b602060405180830381865afa1580156102ba573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102de9190610f73565b92915050565b6103346040516020016102f690610f90565b604051602081830303815290604052805190602001206040518060400160405280600a81526020016921a7a72a2927a62622a960b11b8152506104d6565b61033f83838361058a565b505050565b6103566040516020016102f690610f90565b60006103817f0000000000000000000000000000000000000000000000000000000000000000610231565b9050806001600160a01b0316856001600160a01b03161480156103a15750815b156103b6576103b18585856105ea565b6103c1565b6103c185858561058a565b5050505050565b60006103dc6040516020016102f690610f90565b6102de82610641565b6103f76040516020016102f690610f90565b60006104227f0000000000000000000000000000000000000000000000000000000000000000610231565b905061033f8184846105ea565b60006104436040516020016102f690610f90565b6040516370a0823160e01b81526000906001600160a01b038416906370a0823190610472903090600401610e58565b602060405180830381865afa15801561048f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104b39190610fb4565b6001600160a01b0384166000908152602081905260409020819055915050919050565b60405163ac4ab3fb60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063ac4ab3fb906105249033908690600401610fcd565b602060405180830381865afa158015610541573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105659190610fe6565b61058657338160405163a35b150b60e01b81526004016100cc929190611053565b5050565b306001600160a01b038316036105b55781604051637387c8a960e11b81526004016100cc9190610e58565b6105e17f00000000000000000000000000000000000000000000000000000000000000008484846106f2565b61033f83610942565b306001600160a01b038316036106155781604051637387c8a960e11b81526004016100cc9190610e58565b6105e17f00000000000000000000000000000000000000000000000000000000000000008484846109cb565b6001600160a01b0381166000818152602081905260408082205490516370a0823160e01b8152919290918391906370a0823190610682903090600401610e58565b602060405180830381865afa15801561069f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c39190610fb4565b6001600160a01b038516600090815260208190526040902081905590506106ea8282611077565b949350505050565b801561093c5761070182610b2b565b6000846001600160a01b031663bd02d0f561071b86610b55565b6040518263ffffffff1660e01b815260040161073991815260200190565b602060405180830381865afa158015610756573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061077a9190610fb4565b90508060000361079f5783604051634fe14bfd60e11b81526004016100cc9190610e58565b60006107ad85858585610bdd565b50905080156107bd57505061093c565b6000866001600160a01b03166321f8a721604051602001610801906020808252600f908201526e484f4c44494e475f4144445245535360881b604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b815260040161083591815260200190565b602060405180830381865afa158015610852573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108769190610f73565b90506001600160a01b03811661089f57604051633a6de2f560e21b815260040160405180910390fd5b6000806108ae88848888610bdd565b9150915081156108c257505050505061093c565b60006108cd82610d45565b5090507fc9f14d9a0a9b46470c7c0b6c508f8283abaab7f795f153953c58cd4250824dae8183604051610901929190611098565b60405180910390a160405163012f3b8f60e71b81526001600160a01b03808b16600483015289166024820152604481018890526064016100cc565b50505050565b6040516370a0823160e01b81526001600160a01b038216906370a082319061096e903090600401610e58565b602060405180830381865afa15801561098b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109af9190610fb4565b6001600160a01b03909116600090815260208190526040902055565b801561093c576109da82610b2b565b604051632e1a7d4d60e01b8152600481018290526001600160a01b03841690632e1a7d4d90602401600060405180830381600087803b158015610a1c57600080fd5b505af1158015610a30573d6000803e3d6000fd5b505050506000846001600160a01b031663bd02d0f5604051602001610a86906020808252601f908201527f4e41544956455f544f4b454e5f5452414e534645525f4741535f4c494d495400604082015260600190565b604051602081830303815290604052805190602001206040518263ffffffff1660e01b8152600401610aba91815260200190565b602060405180830381865afa158015610ad7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610afb9190610fb4565b90506000806000806000868887f190508015610b1857505061093c565b610b23868585610dd5565b505050505050565b6001600160a01b038116610b525760405163d551823d60e01b815260040160405180910390fd5b50565b6000604051602001610b93906020808252601890820152771513d2d15397d514905394d1915497d1d054d7d31253525560421b604082015260600190565b60408051601f198184030181528282528051602091820120908301526001600160a01b03841690820152606001604051602081830303815290604052805190602001209050919050565b60006060600063a9059cbb60e01b8686604051602401610bfe929190610fcd565b604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050509050600080886001600160a01b03168684604051610c4f91906110c6565b60006040518083038160008787f1925050503d8060008114610c8d576040519150601f19603f3d011682016040523d82523d6000602084013e610c92565b606091505b50915091508115610d33578051600003610cf0576001600160a01b0389163b610cf05760006040518060400160405280601481526020017310d85b1b081d1bc81b9bdb8b58dbdb9d1c9858dd60621b81525094509450505050610d3c565b60008151118015610d12575080806020019051810190610d109190610fe6565b155b15610d2557600094509250610d3c915050565b600194509250610d3c915050565b60009450925050505b94509492505050565b60606000604483511015610d6c575050604080516020810190915260008082529092909150565b6000610d79846020015190565b90506307b9e43360e51b6001600160e01b0319821601610db85760048401935083806020019051810190610dad91906110f8565b946001945092505050565b600060405180602001604052806000815250909250925050915091565b80600003610de257505050565b610deb82610b2b565b6000610df684610231565b9050806001600160a01b031663d0e30db0836040518263ffffffff1660e01b81526004016000604051808303818588803b158015610e3357600080fd5b505af1158015610e47573d6000803e3d6000fd5b505050505061093c848285856106f2565b6001600160a01b0391909116815260200190565b6001600160a01b0381168114610b5257600080fd5b600080600060608486031215610e9657600080fd5b8335610ea181610e6c565b92506020840135610eb181610e6c565b929592945050506040919091013590565b8015158114610b5257600080fd5b60008060008060808587031215610ee657600080fd5b8435610ef181610e6c565b93506020850135610f0181610e6c565b9250604085013591506060850135610f1881610ec2565b939692955090935050565b600060208284031215610f3557600080fd5b8135610f4081610e6c565b9392505050565b60008060408385031215610f5a57600080fd5b8235610f6581610e6c565b946020939093013593505050565b600060208284031215610f8557600080fd5b8151610f4081610e6c565b6020808252600a908201526921a7a72a2927a62622a960b11b604082015260600190565b600060208284031215610fc657600080fd5b5051919050565b6001600160a01b03929092168252602082015260400190565b600060208284031215610ff857600080fd5b8151610f4081610ec2565b60005b8381101561101e578181015183820152602001611006565b50506000910152565b6000815180845261103f816020860160208601611003565b601f01601f19169290920160200192915050565b6001600160a01b03831681526040602082018190526000906106ea90830184611027565b818103818111156102de57634e487b7160e01b600052601160045260246000fd5b6040815260006110ab6040830185611027565b82810360208401526110bd8185611027565b95945050505050565b600082516110d8818460208701611003565b9190910192915050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561110a57600080fd5b81516001600160401b038082111561112157600080fd5b818401915084601f83011261113557600080fd5b815181811115611147576111476110e2565b604051601f8201601f19908116603f0116810190838211818310171561116f5761116f6110e2565b8160405282815287602084870101111561118857600080fd5b611199836020830160208801611003565b97965050505050505056fea264697066735822122041fb60c735fd2a10ccf4e1a2e5a410180902cf91df27d0d694e06bd0510ccc3d64736f6c63430008120033";

type WithdrawalVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WithdrawalVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WithdrawalVault__factory extends ContractFactory {
  constructor(...args: WithdrawalVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WithdrawalVault> {
    return super.deploy(
      _roleStore,
      _dataStore,
      overrides || {}
    ) as Promise<WithdrawalVault>;
  }
  override getDeployTransaction(
    _roleStore: PromiseOrValue<string>,
    _dataStore: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_roleStore, _dataStore, overrides || {});
  }
  override attach(address: string): WithdrawalVault {
    return super.attach(address) as WithdrawalVault;
  }
  override connect(signer: Signer): WithdrawalVault__factory {
    return super.connect(signer) as WithdrawalVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WithdrawalVaultInterface {
    return new utils.Interface(_abi) as WithdrawalVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WithdrawalVault {
    return new Contract(address, _abi, signerOrProvider) as WithdrawalVault;
  }
}
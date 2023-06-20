export const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3"
export const abi = [
    {
      "inputs": [],
      "name": "getMyNumber",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_myNumber",
          "type": "uint256"
        }
      ],
      "name": "setMyNumber",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
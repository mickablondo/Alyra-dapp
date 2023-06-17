const Web3 = require('web3');
const rpcURL = "https://goerli.infura.io/v3/<INFURA_ID>";
const web3 = new Web3(rpcURL);

// récupération de l'ABI à partir de REMIX (dans onglet compile)
const ABI = [ { "inputs": [ { "internalType": "uint256", "name": "x", "type": "uint256" } ], "name": "set", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "get", "outputs": [ { "internalType": "uint256", "name": "", "type": "uint256" } ], "stateMutability": "view", "type": "function", "constant": true } ];

// récupération de l'adresse dans REMIX (dans onglet DEPLOY)
const SSaddress = "0x1f9C83F7311c1b0AD188E9925E2705a3B60c4b1d";
const simpleStorage = new web3.eth.Contract(ABI, SSaddress);
simpleStorage.methods.get().call((err, data) => {
  console.log(data);
});
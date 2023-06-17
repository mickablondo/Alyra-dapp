const Web3 = require('web3');
const rpcURL = "https://goerli.infura.io/v3/<INFURA_ID>";
const web3 = new Web3(rpcURL);

// récupération de l'ABI à partir de REMIX (dans onglet compile)
const ABI = [
	{
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const SSaddress = "0xfA95935932ECcd000765C772CF8A731B1E215d06";
const simpleStorage = new web3.eth.Contract(ABI, SSaddress);
simpleStorage.methods.get().call((err, data) => {
  console.log(data);
});
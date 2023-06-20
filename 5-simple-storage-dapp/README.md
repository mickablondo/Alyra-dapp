Commandes exécutées :  
```bash
mkdir backend
mkdir frontend
npx hardhat node
npx hardhat run ./scripts/deploy.js --network localhost
```  
  
<u>Frontend :</u>  
- Copie de ethers.min en [5.7.1 (version stable)](https://cdn.ethers.io/lib/ethers-5.7.esm.min.js)  dans frontend/ethers.min.js  
- Utilisation de Live Server comme extension VSCode pour rafraîchir la page automatiquement : http://127.0.0.1:5500/simple-storage-dapp/frontend/
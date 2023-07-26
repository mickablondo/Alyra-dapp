- 1-askGoerli : premier test pour interroger un Smart Contract déployé sur Goerli via web3js.
- 2-readSmartContractDatas
- 3-TP1

```bash
> npm i web3@1.10.0 (forcer la version de web3 pour le cours car v4.0.1 change beaucoup)
> node app.js
```

- 4-simple-storage-react

```bash
truffle unbox react
ganache -m '...'
cd truffle
truffle migrate
cd ../client
npm start
```

- 5-simple-storage-dapp : Simple Storage avec [ethers.js](https://github.com/ethers-io/ethers.js/)
- 6-bank-dapp : Exercice sur un Bank.sol pour send & withdraw de l'ether via une dApp
- 7-nextjs-init : apprentissage de [Next.js](https://nextjs.org/)
- 8-nextjs-dapp => à récupérer sur le github de Ben
- 9-nextjs-rainbowkit
- 10-nextjsbank <i>à venir</i>

TP10 avec hardhat, commandes ou actions dans l'ordre réalisé :  
```bash
mkdir backend frontend
cd backend
yarn add hardhat
yarn hardhat
# ajout de bank.sol
# script de déploiement
yarn hardhat node
yarn hardhat run .\scripts\deploy.js --network localhost
cd ../frontend
yarn creat next-app .
yarn add @chakra-ui/react @emotion/react @emotion/styled framer-motion
yarn add @rainbow-me/rainbowkit wagmi viem
# ajout d'imports de rainbowkit dans layout mais en mettant HARDHAT dans l'import wagmi/chains
# modif du layout (hardhat / projectid de walletconnect / return avec wagmi + chakra + rainbow)
# création dosser components/Footer/Footer.js /Header/Header.js /Layout/Layout.js
# Header : utilisation de Flex de chakra-ui + ConnectButton de TainbowKit
# Footer : Flex + Text de chakra-ui
# Layout : contient Header + Footer + {children}
# app/page.js : import Layout et ajout dans le render <Layout><Bank /></Layout> => ce qui est entre <Layout> représente les children
# Ne pas oublier de mettre les "use client" dans les pages js
yarn dev
# Modif de Layout.js pour mieux positionner les éléments (children sur toute la page => grow=1 et footer tout en bas)
# fichier frontend/.env
# copier le fichier Bank.sol dans frontend/public pour avoir l'ABI disponible sur Vercel
# Bank.js : "your balance in the bank" + deposit + withdraw + events deposit + events withdraw => 
# ---> habillage : <Heading> & <Flex><Input><Button colorScheme="">
# ---> fonctions : import abi & useState & toast (et useToast !) & ethers.parseEther en v6 & prepareWriteContract + writeContract (wagmi)
# ---> useAccount de Wagmi : permet de récupérer l'account de celui qui est connecté et/ou si qqun est connecté => exemple d'utilisation : ne pas afficher le corps si non connecté
# ---> Get user balance on the SC : readContract de Wagmi & async dans un useEffect (getBalanceAndEvents)
# ---> events par viem : getEvents async => await client.getLogs({event:parseAbiItem ....}) & pour les blocs from/to : getblockactuel + 200k block & depositEvents.map et les afficher
yarn add uuidv4 # outil permettant de générer des identifiants unique car en reactjs chaque élément de la map doit avoir un id unique
```
  
- 11-uniswap-interact : test du [sdk uniswap](https://docs.uniswap.org/sdk/v3/overview)
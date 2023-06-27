# TP du 27/06
## Stack technique
[RainbowKit](https://www.rainbowkit.com/docs/installation) + [wagmi](https://wagmi.sh/react/getting-started) + [NextJS](https://nextjs.org/) + [viem](https://viem.sh/docs/getting-started.html)  
## Pré-requis
Pré-requis : créer un compte sur [WalletConnect.com](https://cloud.walletconnect.com/sign-in) puis créer un nouveau projet et récupérer le projectId.  
## Contenu du TP
```bash
mkdir backend
mkdir frontend
cd backend
npm install hardhat
npx hardhat
# modif contract
# modif deploy.js
npx hardhat node
npx hardhat run scripts/deploy.js  --network localhost
cd frontend
npx create-next-app@latest ./
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install @rainbow-me/rainbowkit wagmi viem
# ajout d'imports de rainbowkit dans layout mais en mettant HARDHAT dans l'import wagmi/chains
# création dosser components
# modif de frontend/next.config.js pour des pb de module
npx next dev
```
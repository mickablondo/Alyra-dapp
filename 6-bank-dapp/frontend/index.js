import { ethers } from './ethers.min.js'
import { abi, contractAddress } from './constants.js'

const connectButton = document.getElementById('connectButton')
const inputSendEthers = document.getElementById('inputSendEthers')
const buttonSendEthers = document.getElementById('buttonSendEthers')
const inputWithdrawEthers = document.getElementById('inputWithdrawEthers')
const buttonWithdrawEthers = document.getElementById('buttonWithdrawEthers')

let connectedAccount

// What happens when the user clicks on the connect button
connectButton.addEventListener('click', async function() {
    if(typeof window.ethereum !== 'undefined') {
        const resultAccount = await window.ethereum.request({ method: 'eth_requestAccounts' })  
        connectedAccount = ethers.utils.getAddress(resultAccount[0])
        connectButton.innerHTML = "Connected with " + connectedAccount.substring(0, 4) + "..." + connectedAccount.substring(connectedAccount.length - 4)
    }
    else {
        connectButton.innerHTML = "Please install Metamask!"
    }
})

buttonSendEthers.addEventListener('click', async function() {
    if(typeof window.ethereum !== "undefined" && connectedAccount) {
        try {
            let ethersAmount = inputSendEthers.value
            ethersAmount = ethers.utils.parseEther(ethersAmount)
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(contractAddress, abi, signer)
            let transaction = await contract.sendEthers({ value: ethersAmount})
            await transaction.wait(1)
        }
        catch(e) {
            console.log(e)
        }
    }
})

buttonWithdrawEthers.addEventListener('click', async function() {
    if(typeof window.ethereum !== "undefined" && connectedAccount) {
        try {
            let ethersAmount = inputSendEthers.value
            ethersAmount = ethers.utils.parseEther(ethersAmount)
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const signer = provider.getSigner()
            const contract = new ethers.Contract(contractAddress, abi, signer)
            let transaction = await contract.withdraw(ethersAmount)
            await transaction.wait(1)
        }
        catch(e) {
            console.log(e)
        }
    }
})

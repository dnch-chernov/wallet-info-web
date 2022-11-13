import Web3 from 'web3';

// const Web3 = require("web3")
const w3 = new Web3("https://cloudflare-eth.com")

export function GetBalance(address) {
    let balance;
    w3.eth.getBalance(address, (err, wei) => {
        balance = web3.utils.fromWei(wei, 'ether')
      })
    
}
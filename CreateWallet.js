const { ECDSA, Wallet, Client } = require('xrpl');

async function createWallet() {
    let newWallet = Wallet.generate(ECDSA.ed25519);
    console.log(newWallet);
}

async function fundWallet() {
    let wallet = Wallet.fromSeed("sEdVN9qzC34BndJGbgfXAJc7G4fPX2e");
    let xrplClient = new Client("wss://s.altnet.rippletest.net:51233"); // Use wss instead of was for WebSocket connection
    await xrplClient.connect();
    console.log("Are we connected? " + xrplClient.isConnected());
    let result = await xrplClient.fundWallet(wallet);
    console.log(result);
}

createWallet();
fundWallet();

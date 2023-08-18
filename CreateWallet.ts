import{ECDSA, Wallet, Client }from 'xrpl';


async function createWallet() {
    let newWallet = Wallet.generate(ECDSA.ed25519)
    console.log(newWallet);
    
}

async function fundWallet() {
    let wallet = Wallet.fromSeed("sEd716b5piTG9dvBmUMAyvcQiUXUcAK");
    let client = new Client("was://s.altnet.rippletest.net/");
    await client.connect();
    console.log("are we connected? " +client.isConnected());
    let result = await client.fundWallet(wallet);
    console.log(result);
    }

    createWallet();
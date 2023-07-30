# Fireblocks SDK

The Fireblocks SDK allows developers to integrate with the Fireblocks platform and perform various operations, such as managing vault accounts and executing transactions.

For detailed documentation and additional resources, please refer to the [Fireblocks Developer Portal](https://developers.fireblocks.com/).

## Installation

To use the Fireblocks SDK, follow these steps:

Install the SDK using npm:

```shell
npm install @fireblocks/ts-sdk
```

## Usage
You can initialize you environment variables in your env file, or just provide them when you initialize and API module.
```javascript
const FIREBLOCKS_API_SECRET_PATH = './fireblocks_secret.key';

process.env.FIREBLOCKS_BASE_PATH = 'https://sandbox-api.fireblocks.io/v1';
process.env.FIREBLOCKS_API_KEY = 'my-api-key';
process.env.FIREBLOCKS_SECRET_KEY = fs.readFileSync(FIREBLOCKS_API_SECRET_PATH, "utf8").replace(/\\n/gm, "\n");
```

Lets see an example. create a vault accounts and make a transaction!
```javascript
import { VaultsApi, TransactionsApi, TransferPeerPathTypeEnum } from "@fireblocks/ts-sdk";
import * as fs from "fs";
const FIREBLOCKS_API_SECRET_PATH = './fireblocks_secret.key';

process.env.FIREBLOCKS_BASE_PATH = 'https://sandbox-api.fireblocks.io/v1';
process.env.FIREBLOCKS_API_KEY = 'my-api-key';
process.env.FIREBLOCKS_SECRET_KEY = fs.readFileSync(FIREBLOCKS_API_SECRET_PATH, "utf8").replace(/\\n/gm, "\n");

async function testAPI(){
    try {
        const vaultAPI = new VaultsApi()
        const vault = await vaultAPI.createVaultAccount({name:'My First Vault Account', hiddenOnUI: false,autoFuel: false});
        const vaults = await vaultAPI.getPagedVaultAccounts({
            limit:3
        });
        console.log(vault.data);
        console.log(vaults.data);
    }catch (e){
        console.log(e);
    }
}

async function createTransaction(assetId, amount, srcId, destId){
    const transactionsApi = new TransactionsApi()
    let payload = {
        assetId,
        amount,
        source: {
            type: TransferPeerPathTypeEnum.VaultAccount,
            id: String(srcId)
        },
        destination: {
            type: TransferPeerPathTypeEnum.VaultAccount,
            id: String(destId)
        },
        note: "Your first transaction!"
    };
    const result = await transactionsApi.createTransaction({transactionRequest:payload});
    console.log(JSON.stringify(result.data, null, 2));
}
testAPI();
createTransaction("ETH_TEST3", "0.001", "0", "1");
```

# Fireblocks SDK

The Fireblocks SDK allows developers to integrate with the Fireblocks platform and perform various operations, such as managing vault accounts and executing transactions.

For detailed documentation and additional resources, please refer to the [Fireblocks Developer Portal](https://developers.fireblocks.com/).

## Installation

To use the Fireblocks SDK, follow these steps:

Install the SDK using npm:

```shell
npm install fireblocks-api-client-typescript
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
import { VaultsApi, TransactionsApi, TransferPeerPath } from "fireblocks-sdk";
import * as fs from "fs";
const FIREBLOCKS_API_SECRET_PATH = './fireblocks_secret.key';

process.env.FIREBLOCKS_BASE_PATH = 'https://sandbox-api.fireblocks.io/v1';
process.env.FIREBLOCKS_API_KEY = 'my-api-key';
process.env.FIREBLOCKS_SECRET_KEY = fs.readFileSync(FIREBLOCKS_API_SECRET_PATH, "utf8").replace(/\\n/gm, "\n");

async function testAPI(): Promise<void> {
    try {
        const vaultAPI = new VaultsApi();
        const vault = await vaultAPI.vaultAccountsPost({ name: 'New Vault Account', hiddenOnUI: false, autoFuel: false });
        const vaults = await vaultAPI.vaultAccountsPagedGet();
        console.log(vault);
        console.log(vaults);
    } catch (e) {
        console.log(e);
    }
}

async function createTransaction(assetId: string, amount: string, srcId: string, destId: string): Promise<void> {
    const transactionsApi = new TransactionsApi();
    const payload = {
        assetId,
        amount,
        source: {
            type: TransferPeerPath.VaultAccount,
            id: String(srcId)
        },
        destination: {
            type: TransferPeerPath.VaultAccount,
            id: String(destId)
    },
        note: "Your first transaction!"
    };
    const result = await transactionsApi.transactionsPost(payload);
    console.log(JSON.stringify(result, null, 2));
}

testAPI();
createTransaction("ETH_TEST3", "0.001", "0", "1");
```

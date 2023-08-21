# Fireblocks Typescript SDK (Beta)

> **Warning**  
> This package is currently in a beta stage and should be used at your own risk.  
> The provided interfaces might go through backwards-incompatibale changes.  
> For a more stable SDK, please use the [Fireblocks Javascript/Typescript SDK](https://github.com/fireblocks/fireblocks-sdk-js)

For detailed API documentation please refer to the [Fireblocks API Reference](https://developers.fireblocks.com/reference/).

## Installation

To use the Fireblocks SDK, follow these steps:

Install the SDK using npm:

```shell
npm install @fireblocks/ts-sdk
```

## Usage
### Initializing the SDK
You can initialize the Fireblocks SDK in two ways, either by setting environment variables or providing the parameters directly:

<p><strong>Using Environment Variables</strong><br>
You can initialize the SDK using environment variables from your .env file or by setting them programmatically:</p>


```javascript
const fs = require("fs");
const { VaultsApi } = require("@fireblocks/ts-sdk");

// Set the environment variables
process.env.FIREBLOCKS_BASE_PATH = "https://sandbox-api.fireblocks.io/v1";
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = fs.readFileSync("./fireblocks_secret.key", "utf8").replace(/\\n/gm, "\n");

// Create a Fireblocks API instance
const vaultApi = new VaultsApi();

```
<p><strong>Providing Local Variables</strong><br>
Alternatively, you can directly pass the required parameters when initializing the Fireblocks API instance:</p>

```javascript
const fs = require("fs");
const { VaultsApi } = require("@fireblocks/ts-sdk");

const FIREBLOCKS_API_SECRET_PATH = "./fireblocks_secret.key";

// Initialize a Fireblocks API instance with local variables
const vaultAPI = new VaultsApi({
    apiKey: "my-api-key",
    basePath: "https://sandbox-api.fireblocks.io/v1",
    secretKey: fs.readFileSync(FIREBLOCKS_API_SECRET_PATH, "utf8").replace(/\\n/gm, "\n"),
});
```
## Examples 
<p><strong>Creating a Vault Account</strong><br>
To create a new vault account, you can use the following function:</p>

```javascript
async function createVault() {
    try {
        const vault = await vaultAPI.createVaultAccount({
            createVaultAccountRequest: {
                name: 'My First Vault Account',
                hiddenOnUI: false,
                autoFuel: false
            }
        });
        return vault;
    } catch (e) {
        console.log(e);
    }
}
```

<p><strong>Retrieving Vault Accounts</strong><br>
To get a list of vault accounts, you can use the following function:</p>

```javascript
async function getVaultPagedAccounts(limit) {
    try {
        const vaults = await vaultAPI.getPagedVaultAccounts({
            limit
        });
        return vaults;
    } catch (e) {
        console.log(e);
    }
}

```

<p><strong>Creating a Transaction</strong><br>
To make a transaction between vault accounts, you can use the following function:</p>

```javascript
const { TransactionsApi, TransferPeerPathTypeEnum } = require("@fireblocks/ts-sdk");

async function createTransaction(assetId, amount, srcId, destId) {
    const transactionsApi = new TransactionsApi();
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
    const result = await transactionsApi.createTransaction({ transactionRequest: payload });
    console.log(JSON.stringify(result, null, 2));
}
```

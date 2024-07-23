# Official Fireblocks TypeScript SDK
[![npm version](https://badge.fury.io/js/@fireblocks%2Fts-sdk.svg)](https://badge.fury.io/js/@fireblocks%2Fts-sdk)

The Fireblocks SDK allows developers to seamlessly integrate with the Fireblocks platform and perform a variety of operations, including managing vault accounts and executing transactions securely.

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

use bash commands to set environment variables:
```bash
export FIREBLOCKS_BASE_PATH="https://sandbox-api.fireblocks.io/v1"
export FIREBLOCKS_API_KEY="my-api-key"
export FIREBLOCKS_SECRET_KEY="my-secret-key"
```

execute the following code to initialize the Fireblocks SDK:
```typescript
import { Fireblocks } from "@fireblocks/ts-sdk";

// Create a Fireblocks API instance
const fireblocks = new Fireblocks();

```

<p><strong>Providing Local Variables</strong><br>
Alternatively, you can directly pass the required parameters when initializing the Fireblocks API instance:</p>

```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from "@fireblocks/ts-sdk";

const FIREBLOCKS_API_SECRET_PATH = "./fireblocks_secret.key";

// Initialize a Fireblocks API instance with local variables
const fireblocks = new Fireblocks({
    apiKey: "my-api-key",
    basePath: BasePath.Sandbox, // or assign directly to "https://sandbox-api.fireblocks.io/v1";
    secretKey: readFileSync(FIREBLOCKS_API_SECRET_PATH, "utf8"),
});
```


## Basic Api Examples
<p><strong>Creating a Vault Account</strong><br>
To create a new vault account, you can use the following function:</p>

```typescript
async function createVault() {
    try {
        const vault = await fireblocks.vaults.createVaultAccount({
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

```typescript
async function getVaultPagedAccounts(limit) {
    try {
        const vaults = await fireblocks.vaults.getPagedVaultAccounts({
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

```typescript
import { TransferPeerPathType } from "@fireblocks/ts-sdk";

async function createTransaction(assetId, amount, srcId, destId) {
    let payload = {
        assetId,
        amount,
        source: {
            type: TransferPeerPathType.VaultAccount,
            id: String(srcId)
        },
        destination: {
            type: TransferPeerPathType.VaultAccount,
            id: String(destId)
        },
        note: "Your first transaction!"
    };
    const result = await fireblocks.transactions.createTransaction({ transactionRequest: payload });
    console.log(JSON.stringify(result, null, 2));
}
```


## Documentation for API Endpoints

All URIs are relative to https://developers.fireblocks.com/reference/

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApiUserApi* | [**createApiUser**](docs/apis/ApiUserApi.md#createApiUser) | **POST** /management/api_users | Create Api user
*ApiUserApi* | [**getApiUsers**](docs/apis/ApiUserApi.md#getApiUsers) | **GET** /management/api_users | Get Api users
*AssetsApi* | [**createAssetsBulk**](docs/apis/AssetsApi.md#createAssetsBulk) | **POST** /vault/assets/bulk | Bulk creation of wallets
*AuditLogsApi* | [**getAuditLogs**](docs/apis/AuditLogsApi.md#getAuditLogs) | **GET** /management/audit_logs | Get audit logs
*AuditLogsApi* | [**getAudits**](docs/apis/AuditLogsApi.md#getAudits) | **GET** /audits | Get audit logs
*BlockchainsAssetsApi* | [**getSupportedAssets**](docs/apis/BlockchainsAssetsApi.md#getSupportedAssets) | **GET** /supported_assets | List all asset types supported by Fireblocks
*BlockchainsAssetsApi* | [**registerNewAsset**](docs/apis/BlockchainsAssetsApi.md#registerNewAsset) | **POST** /assets | Register an asset
*BlockchainsAssetsApi* | [**setAssetPrice**](docs/apis/BlockchainsAssetsApi.md#setAssetPrice) | **POST** /assets/prices/{id} | Set asset price
*ComplianceApi* | [**getAmlPostScreeningPolicy**](docs/apis/ComplianceApi.md#getAmlPostScreeningPolicy) | **GET** /screening/aml/post_screening_policy | AML - View Post-Screening Policy
*ComplianceApi* | [**getAmlScreeningPolicy**](docs/apis/ComplianceApi.md#getAmlScreeningPolicy) | **GET** /screening/aml/screening_policy | AML - View Screening Policy
*ComplianceApi* | [**getPostScreeningPolicy**](docs/apis/ComplianceApi.md#getPostScreeningPolicy) | **GET** /screening/travel_rule/post_screening_policy | Travel Rule - View Post-Screening Policy
*ComplianceApi* | [**getScreeningPolicy**](docs/apis/ComplianceApi.md#getScreeningPolicy) | **GET** /screening/travel_rule/screening_policy | Travel Rule - View Screening Policy
*ComplianceApi* | [**updateAmlScreeningConfiguration**](docs/apis/ComplianceApi.md#updateAmlScreeningConfiguration) | **PUT** /screening/aml/policy_configuration | Update AML Configuration
*ComplianceApi* | [**updateScreeningConfiguration**](docs/apis/ComplianceApi.md#updateScreeningConfiguration) | **PUT** /screening/configurations | Tenant - Screening Configuration
*ComplianceApi* | [**updateTravelRuleConfig**](docs/apis/ComplianceApi.md#updateTravelRuleConfig) | **PUT** /screening/travel_rule/policy_configuration | Update Travel Rule Configuration
*ComplianceScreeningConfigurationApi* | [**getAmlScreeningConfiguration**](docs/apis/ComplianceScreeningConfigurationApi.md#getAmlScreeningConfiguration) | **GET** /screening/aml/policy_configuration | Get AML Screening Policy Configuration
*ComplianceScreeningConfigurationApi* | [**getScreeningConfiguration**](docs/apis/ComplianceScreeningConfigurationApi.md#getScreeningConfiguration) | **GET** /screening/travel_rule/policy_configuration | Get Travel Rule Screening Policy Configuration
*ConsoleUserApi* | [**createConsoleUser**](docs/apis/ConsoleUserApi.md#createConsoleUser) | **POST** /management/users | Create console user
*ConsoleUserApi* | [**getConsoleUsers**](docs/apis/ConsoleUserApi.md#getConsoleUsers) | **GET** /management/users | Get console users
*ContractInteractionsApi* | [**getDeployedContractAbi**](docs/apis/ContractInteractionsApi.md#getDeployedContractAbi) | **GET** /contract_interactions/base_asset_id/{assetId}/contract_address/{contractAddress}/functions | Return deployed contract\&#39;s ABI
*ContractInteractionsApi* | [**readCallFunction**](docs/apis/ContractInteractionsApi.md#readCallFunction) | **POST** /contract_interactions/base_asset_id/{assetId}/contract_address/{contractAddress}/functions/read | Call a read function on a deployed contract
*ContractInteractionsApi* | [**writeCallFunction**](docs/apis/ContractInteractionsApi.md#writeCallFunction) | **POST** /contract_interactions/base_asset_id/{assetId}/contract_address/{contractAddress}/functions/write | Call a write function on a deployed contract
*ContractTemplatesApi* | [**deleteContractTemplateById**](docs/apis/ContractTemplatesApi.md#deleteContractTemplateById) | **DELETE** /tokenization/templates/{contractTemplateId} | Delete a contract template by id
*ContractTemplatesApi* | [**deployContract**](docs/apis/ContractTemplatesApi.md#deployContract) | **POST** /tokenization/templates/{contractTemplateId}/deploy | Deploy contract
*ContractTemplatesApi* | [**getConstructorByContractTemplateId**](docs/apis/ContractTemplatesApi.md#getConstructorByContractTemplateId) | **GET** /tokenization/templates/{contractTemplateId}/constructor | Return contract template\&#39;s constructor
*ContractTemplatesApi* | [**getContractTemplateById**](docs/apis/ContractTemplatesApi.md#getContractTemplateById) | **GET** /tokenization/templates/{contractTemplateId} | Return contract template by id
*ContractTemplatesApi* | [**getContractTemplates**](docs/apis/ContractTemplatesApi.md#getContractTemplates) | **GET** /tokenization/templates | List all contract templates
*ContractTemplatesApi* | [**getFunctionAbiByContractTemplateId**](docs/apis/ContractTemplatesApi.md#getFunctionAbiByContractTemplateId) | **GET** /tokenization/templates/{contractTemplateId}/function | Return contract template\&#39;s function
*ContractTemplatesApi* | [**uploadContractTemplate**](docs/apis/ContractTemplatesApi.md#uploadContractTemplate) | **POST** /tokenization/templates | Upload contract template
*ContractsApi* | [**addContractAsset**](docs/apis/ContractsApi.md#addContractAsset) | **POST** /contracts/{contractId}/{assetId} | Add an asset to a contract
*ContractsApi* | [**createContract**](docs/apis/ContractsApi.md#createContract) | **POST** /contracts | Create a contract
*ContractsApi* | [**deleteContract**](docs/apis/ContractsApi.md#deleteContract) | **DELETE** /contracts/{contractId} | Delete a contract
*ContractsApi* | [**deleteContractAsset**](docs/apis/ContractsApi.md#deleteContractAsset) | **DELETE** /contracts/{contractId}/{assetId} | Delete a contract asset
*ContractsApi* | [**getContract**](docs/apis/ContractsApi.md#getContract) | **GET** /contracts/{contractId} | Find a specific contract
*ContractsApi* | [**getContractAsset**](docs/apis/ContractsApi.md#getContractAsset) | **GET** /contracts/{contractId}/{assetId} | Find a contract asset
*ContractsApi* | [**getContracts**](docs/apis/ContractsApi.md#getContracts) | **GET** /contracts | List contracts
*CosignersBetaApi* | [**getApiKey**](docs/apis/CosignersBetaApi.md#getApiKey) | **GET** /cosigners/{cosignerId}/api_keys/{apiKeyId} | Get API key
*CosignersBetaApi* | [**getApiKeys**](docs/apis/CosignersBetaApi.md#getApiKeys) | **GET** /cosigners/{cosignerId}/api_keys | Get all API keys
*CosignersBetaApi* | [**getCosigner**](docs/apis/CosignersBetaApi.md#getCosigner) | **GET** /cosigners/{cosignerId} | Get cosigner
*CosignersBetaApi* | [**getCosigners**](docs/apis/CosignersBetaApi.md#getCosigners) | **GET** /cosigners | Get all cosigners
*CosignersBetaApi* | [**renameCosigner**](docs/apis/CosignersBetaApi.md#renameCosigner) | **PATCH** /cosigners/{cosignerId} | Rename cosigner
*DeployedContractsApi* | [**getDeployedContractByAddress**](docs/apis/DeployedContractsApi.md#getDeployedContractByAddress) | **GET** /tokenization/contracts/{assetId}/{contractAddress} | Return deployed contract data
*DeployedContractsApi* | [**getDeployedContractById**](docs/apis/DeployedContractsApi.md#getDeployedContractById) | **GET** /tokenization/contracts/{id} | Return deployed contract data by id
*DeployedContractsApi* | [**getDeployedContracts**](docs/apis/DeployedContractsApi.md#getDeployedContracts) | **GET** /tokenization/contracts | List deployed contracts data
*ExchangeAccountsApi* | [**convertAssets**](docs/apis/ExchangeAccountsApi.md#convertAssets) | **POST** /exchange_accounts/{exchangeAccountId}/convert | Convert exchange account funds from the source asset to the destination asset.
*ExchangeAccountsApi* | [**getExchangeAccount**](docs/apis/ExchangeAccountsApi.md#getExchangeAccount) | **GET** /exchange_accounts/{exchangeAccountId} | Find a specific exchange account
*ExchangeAccountsApi* | [**getExchangeAccountAsset**](docs/apis/ExchangeAccountsApi.md#getExchangeAccountAsset) | **GET** /exchange_accounts/{exchangeAccountId}/{assetId} | Find an asset for an exchange account
*ExchangeAccountsApi* | [**getPagedExchangeAccounts**](docs/apis/ExchangeAccountsApi.md#getPagedExchangeAccounts) | **GET** /exchange_accounts/paged | Pagination list exchange accounts
*ExchangeAccountsApi* | [**internalTransfer**](docs/apis/ExchangeAccountsApi.md#internalTransfer) | **POST** /exchange_accounts/{exchangeAccountId}/internal_transfer | Internal transfer for exchange accounts
*ExternalWalletsApi* | [**addAssetToExternalWallet**](docs/apis/ExternalWalletsApi.md#addAssetToExternalWallet) | **POST** /external_wallets/{walletId}/{assetId} | Add an asset to an external wallet.
*ExternalWalletsApi* | [**createExternalWallet**](docs/apis/ExternalWalletsApi.md#createExternalWallet) | **POST** /external_wallets | Create an external wallet
*ExternalWalletsApi* | [**deleteExternalWallet**](docs/apis/ExternalWalletsApi.md#deleteExternalWallet) | **DELETE** /external_wallets/{walletId} | Delete an external wallet
*ExternalWalletsApi* | [**getExternalWallet**](docs/apis/ExternalWalletsApi.md#getExternalWallet) | **GET** /external_wallets/{walletId} | Find an external wallet
*ExternalWalletsApi* | [**getExternalWalletAsset**](docs/apis/ExternalWalletsApi.md#getExternalWalletAsset) | **GET** /external_wallets/{walletId}/{assetId} | Get an asset from an external wallet
*ExternalWalletsApi* | [**getExternalWallets**](docs/apis/ExternalWalletsApi.md#getExternalWallets) | **GET** /external_wallets | List external wallets
*ExternalWalletsApi* | [**removeAssetFromExternalWallet**](docs/apis/ExternalWalletsApi.md#removeAssetFromExternalWallet) | **DELETE** /external_wallets/{walletId}/{assetId} | Delete an asset from an external wallet
*ExternalWalletsApi* | [**setExternalWalletCustomerRefId**](docs/apis/ExternalWalletsApi.md#setExternalWalletCustomerRefId) | **POST** /external_wallets/{walletId}/set_customer_ref_id | Set an AML customer reference ID for an external wallet
*FiatAccountsApi* | [**depositFundsFromLinkedDDA**](docs/apis/FiatAccountsApi.md#depositFundsFromLinkedDDA) | **POST** /fiat_accounts/{accountId}/deposit_from_linked_dda | Deposit funds from DDA
*FiatAccountsApi* | [**getFiatAccount**](docs/apis/FiatAccountsApi.md#getFiatAccount) | **GET** /fiat_accounts/{accountId} | Find a specific fiat account
*FiatAccountsApi* | [**getFiatAccounts**](docs/apis/FiatAccountsApi.md#getFiatAccounts) | **GET** /fiat_accounts | List fiat accounts
*FiatAccountsApi* | [**redeemFundsToLinkedDDA**](docs/apis/FiatAccountsApi.md#redeemFundsToLinkedDDA) | **POST** /fiat_accounts/{accountId}/redeem_to_linked_dda | Redeem funds to DDA
*GasStationsApi* | [**getGasStationByAssetId**](docs/apis/GasStationsApi.md#getGasStationByAssetId) | **GET** /gas_station/{assetId} | Get gas station settings by asset
*GasStationsApi* | [**getGasStationInfo**](docs/apis/GasStationsApi.md#getGasStationInfo) | **GET** /gas_station | Get gas station settings
*GasStationsApi* | [**updateGasStationConfiguration**](docs/apis/GasStationsApi.md#updateGasStationConfiguration) | **PUT** /gas_station/configuration | Edit gas station settings
*GasStationsApi* | [**updateGasStationConfigurationByAssetId**](docs/apis/GasStationsApi.md#updateGasStationConfigurationByAssetId) | **PUT** /gas_station/configuration/{assetId} | Edit gas station settings for an asset
*InternalWalletsApi* | [**createInternalWallet**](docs/apis/InternalWalletsApi.md#createInternalWallet) | **POST** /internal_wallets | Create an internal wallet
*InternalWalletsApi* | [**createInternalWalletAsset**](docs/apis/InternalWalletsApi.md#createInternalWalletAsset) | **POST** /internal_wallets/{walletId}/{assetId} | Add an asset to an internal wallet
*InternalWalletsApi* | [**deleteInternalWallet**](docs/apis/InternalWalletsApi.md#deleteInternalWallet) | **DELETE** /internal_wallets/{walletId} | Delete an internal wallet
*InternalWalletsApi* | [**deleteInternalWalletAsset**](docs/apis/InternalWalletsApi.md#deleteInternalWalletAsset) | **DELETE** /internal_wallets/{walletId}/{assetId} | Delete a whitelisted address from an internal wallet
*InternalWalletsApi* | [**getInternalWallet**](docs/apis/InternalWalletsApi.md#getInternalWallet) | **GET** /internal_wallets/{walletId} | Get assets for internal wallet
*InternalWalletsApi* | [**getInternalWalletAsset**](docs/apis/InternalWalletsApi.md#getInternalWalletAsset) | **GET** /internal_wallets/{walletId}/{assetId} | Get an asset from an internal wallet
*InternalWalletsApi* | [**getInternalWallets**](docs/apis/InternalWalletsApi.md#getInternalWallets) | **GET** /internal_wallets | List internal wallets
*InternalWalletsApi* | [**setCustomerRefIdForInternalWallet**](docs/apis/InternalWalletsApi.md#setCustomerRefIdForInternalWallet) | **POST** /internal_wallets/{walletId}/set_customer_ref_id | Set an AML/KYT customer reference ID for an internal wallet
*JobManagementApi* | [**cancelJob**](docs/apis/JobManagementApi.md#cancelJob) | **POST** /batch/{jobId}/cancel | Cancel a running job
*JobManagementApi* | [**continueJob**](docs/apis/JobManagementApi.md#continueJob) | **POST** /batch/{jobId}/continue | Continue a paused job
*JobManagementApi* | [**getJob**](docs/apis/JobManagementApi.md#getJob) | **GET** /batch/{jobId} | Get job details
*JobManagementApi* | [**getJobTasks**](docs/apis/JobManagementApi.md#getJobTasks) | **GET** /batch/{jobId}/tasks | Return a list of tasks for given job
*JobManagementApi* | [**getJobs**](docs/apis/JobManagementApi.md#getJobs) | **GET** /batch/jobs | Return a list of jobs belonging to tenant
*JobManagementApi* | [**pauseJob**](docs/apis/JobManagementApi.md#pauseJob) | **POST** /batch/{jobId}/pause | Pause a job
*KeyLinkBetaApi* | [**createSigningKey**](docs/apis/KeyLinkBetaApi.md#createSigningKey) | **POST** /key_link/signing_keys | Add a new signing key
*KeyLinkBetaApi* | [**createValidationKey**](docs/apis/KeyLinkBetaApi.md#createValidationKey) | **POST** /key_link/validation_keys | Add a new validation key
*KeyLinkBetaApi* | [**disableValidationKey**](docs/apis/KeyLinkBetaApi.md#disableValidationKey) | **PATCH** /key_link/validation_keys/{keyId} | Disables a validation key
*KeyLinkBetaApi* | [**getSigningKey**](docs/apis/KeyLinkBetaApi.md#getSigningKey) | **GET** /key_link/signing_keys/{keyId} | Get a signing key by &#x60;keyId&#x60;
*KeyLinkBetaApi* | [**getSigningKeysList**](docs/apis/KeyLinkBetaApi.md#getSigningKeysList) | **GET** /key_link/signing_keys | Get list of signing keys
*KeyLinkBetaApi* | [**getValidationKey**](docs/apis/KeyLinkBetaApi.md#getValidationKey) | **GET** /key_link/validation_keys/{keyId} | Get a validation key by &#x60;keyId&#x60;
*KeyLinkBetaApi* | [**getValidationKeysList**](docs/apis/KeyLinkBetaApi.md#getValidationKeysList) | **GET** /key_link/validation_keys | Get list of registered validation keys
*KeyLinkBetaApi* | [**setAgentId**](docs/apis/KeyLinkBetaApi.md#setAgentId) | **PATCH** /key_link/signing_keys/{keyId}/agent_user_id | Set agent user id that can sign with the signing key identified by the Fireblocks provided &#x60;keyId&#x60;
*KeyLinkBetaApi* | [**updateSigningKey**](docs/apis/KeyLinkBetaApi.md#updateSigningKey) | **PATCH** /key_link/signing_keys/{keyId} | Modify the signing by Fireblocks provided &#x60;keyId&#x60;
*NFTsApi* | [**getNFT**](docs/apis/NFTsApi.md#getNFT) | **GET** /nfts/tokens/{id} | List token data by ID
*NFTsApi* | [**getNFTs**](docs/apis/NFTsApi.md#getNFTs) | **GET** /nfts/tokens | List tokens by IDs
*NFTsApi* | [**getOwnershipTokens**](docs/apis/NFTsApi.md#getOwnershipTokens) | **GET** /nfts/ownership/tokens | List all owned tokens (paginated)
*NFTsApi* | [**listOwnedCollections**](docs/apis/NFTsApi.md#listOwnedCollections) | **GET** /nfts/ownership/collections | List owned collections (paginated)
*NFTsApi* | [**listOwnedTokens**](docs/apis/NFTsApi.md#listOwnedTokens) | **GET** /nfts/ownership/assets | List all distinct owned tokens (paginated)
*NFTsApi* | [**refreshNFTMetadata**](docs/apis/NFTsApi.md#refreshNFTMetadata) | **PUT** /nfts/tokens/{id} | Refresh token metadata
*NFTsApi* | [**updateOwnershipTokens**](docs/apis/NFTsApi.md#updateOwnershipTokens) | **PUT** /nfts/ownership/tokens | Refresh vault account tokens
*NFTsApi* | [**updateTokenOwnershipStatus**](docs/apis/NFTsApi.md#updateTokenOwnershipStatus) | **PUT** /nfts/ownership/tokens/{id}/status | Update token ownership status
*NFTsApi* | [**updateTokensOwnershipSpam**](docs/apis/NFTsApi.md#updateTokensOwnershipSpam) | **PUT** /nfts/ownership/tokens/spam | Update tokens ownership spam property
*NFTsApi* | [**updateTokensOwnershipStatus**](docs/apis/NFTsApi.md#updateTokensOwnershipStatus) | **PUT** /nfts/ownership/tokens/status | Update tokens ownership status
*NetworkConnectionsApi* | [**checkThirdPartyRouting**](docs/apis/NetworkConnectionsApi.md#checkThirdPartyRouting) | **GET** /network_connections/{connectionId}/is_third_party_routing/{assetType} | Retrieve third-party network routing validation by asset type.
*NetworkConnectionsApi* | [**createNetworkConnection**](docs/apis/NetworkConnectionsApi.md#createNetworkConnection) | **POST** /network_connections | Creates a new network connection
*NetworkConnectionsApi* | [**createNetworkId**](docs/apis/NetworkConnectionsApi.md#createNetworkId) | **POST** /network_ids | Creates a new Network ID
*NetworkConnectionsApi* | [**deleteNetworkConnection**](docs/apis/NetworkConnectionsApi.md#deleteNetworkConnection) | **DELETE** /network_connections/{connectionId} | Deletes a network connection by ID
*NetworkConnectionsApi* | [**deleteNetworkId**](docs/apis/NetworkConnectionsApi.md#deleteNetworkId) | **DELETE** /network_ids/{networkId} | Deletes specific network ID.
*NetworkConnectionsApi* | [**getNetwork**](docs/apis/NetworkConnectionsApi.md#getNetwork) | **GET** /network_connections/{connectionId} | Get a network connection
*NetworkConnectionsApi* | [**getNetworkConnections**](docs/apis/NetworkConnectionsApi.md#getNetworkConnections) | **GET** /network_connections | List network connections
*NetworkConnectionsApi* | [**getNetworkId**](docs/apis/NetworkConnectionsApi.md#getNetworkId) | **GET** /network_ids/{networkId} | Returns specific network ID.
*NetworkConnectionsApi* | [**getNetworkIds**](docs/apis/NetworkConnectionsApi.md#getNetworkIds) | **GET** /network_ids | Returns all network IDs, both local IDs and discoverable remote IDs
*NetworkConnectionsApi* | [**getRoutingPolicyAssetGroups**](docs/apis/NetworkConnectionsApi.md#getRoutingPolicyAssetGroups) | **GET** /network_ids/routing_policy_asset_groups | Returns all enabled routing policy asset groups
*NetworkConnectionsApi* | [**setNetworkIdDiscoverability**](docs/apis/NetworkConnectionsApi.md#setNetworkIdDiscoverability) | **PATCH** /network_ids/{networkId}/set_discoverability | Update network ID\&#39;s discoverability.
*NetworkConnectionsApi* | [**setNetworkIdName**](docs/apis/NetworkConnectionsApi.md#setNetworkIdName) | **PATCH** /network_ids/{networkId}/set_name | Update network ID\&#39;s name.
*NetworkConnectionsApi* | [**setNetworkIdRoutingPolicy**](docs/apis/NetworkConnectionsApi.md#setNetworkIdRoutingPolicy) | **PATCH** /network_ids/{networkId}/set_routing_policy | Update network id routing policy.
*NetworkConnectionsApi* | [**setRoutingPolicy**](docs/apis/NetworkConnectionsApi.md#setRoutingPolicy) | **PATCH** /network_connections/{connectionId}/set_routing_policy | Update network connection routing policy.
*OTABetaApi* | [**getOtaStatus**](docs/apis/OTABetaApi.md#getOtaStatus) | **GET** /management/ota | Returns current OTA status
*OTABetaApi* | [**setOtaStatus**](docs/apis/OTABetaApi.md#setOtaStatus) | **PUT** /management/ota | Enable or disable transactions to OTA
*OffExchangesApi* | [**addOffExchange**](docs/apis/OffExchangesApi.md#addOffExchange) | **POST** /off_exchange/add | add collateral
*OffExchangesApi* | [**getOffExchangeCollateralAccounts**](docs/apis/OffExchangesApi.md#getOffExchangeCollateralAccounts) | **GET** /off_exchange/collateral_accounts/{mainExchangeAccountId} | Find a specific collateral exchange account
*OffExchangesApi* | [**getOffExchangeSettlementTransactions**](docs/apis/OffExchangesApi.md#getOffExchangeSettlementTransactions) | **GET** /off_exchange/settlements/transactions | get settlements transactions from exchange
*OffExchangesApi* | [**removeOffExchange**](docs/apis/OffExchangesApi.md#removeOffExchange) | **POST** /off_exchange/remove | remove collateral
*OffExchangesApi* | [**settleOffExchangeTrades**](docs/apis/OffExchangesApi.md#settleOffExchangeTrades) | **POST** /off_exchange/settlements/trader | create settlement for a trader
*PaymentsPayoutApi* | [**createPayout**](docs/apis/PaymentsPayoutApi.md#createPayout) | **POST** /payments/payout | Create a payout instruction set
*PaymentsPayoutApi* | [**executePayoutAction**](docs/apis/PaymentsPayoutApi.md#executePayoutAction) | **POST** /payments/payout/{payoutId}/actions/execute | Execute a payout instruction set
*PaymentsPayoutApi* | [**getPayout**](docs/apis/PaymentsPayoutApi.md#getPayout) | **GET** /payments/payout/{payoutId} | Get the status of a payout instruction set
*PolicyEditorBetaApi* | [**getActivePolicy**](docs/apis/PolicyEditorBetaApi.md#getActivePolicy) | **GET** /tap/active_policy | Get the active policy and its validation
*PolicyEditorBetaApi* | [**getDraft**](docs/apis/PolicyEditorBetaApi.md#getDraft) | **GET** /tap/draft | Get the active draft
*PolicyEditorBetaApi* | [**publishDraft**](docs/apis/PolicyEditorBetaApi.md#publishDraft) | **POST** /tap/draft | Send publish request for a certain draft id
*PolicyEditorBetaApi* | [**publishPolicyRules**](docs/apis/PolicyEditorBetaApi.md#publishPolicyRules) | **POST** /tap/publish | Send publish request for a set of policy rules
*PolicyEditorBetaApi* | [**updateDraft**](docs/apis/PolicyEditorBetaApi.md#updateDraft) | **PUT** /tap/draft | Update the draft with a new set of rules
*ResetDeviceApi* | [**resetDevice**](docs/apis/ResetDeviceApi.md#resetDevice) | **POST** /management/users/{id}/reset_device | Resets device
*SmartTransferApi* | [**cancelTicket**](docs/apis/SmartTransferApi.md#cancelTicket) | **PUT** /smart-transfers/{ticketId}/cancel | Cancel Ticket
*SmartTransferApi* | [**createTicket**](docs/apis/SmartTransferApi.md#createTicket) | **POST** /smart-transfers | Create Ticket
*SmartTransferApi* | [**createTicketTerm**](docs/apis/SmartTransferApi.md#createTicketTerm) | **POST** /smart-transfers/{ticketId}/terms | Create leg (term)
*SmartTransferApi* | [**findTicketById**](docs/apis/SmartTransferApi.md#findTicketById) | **GET** /smart-transfers/{ticketId} | Search Tickets by ID
*SmartTransferApi* | [**findTicketTermById**](docs/apis/SmartTransferApi.md#findTicketTermById) | **GET** /smart-transfers/{ticketId}/terms/{termId} | Search ticket by leg (term) ID
*SmartTransferApi* | [**fulfillTicket**](docs/apis/SmartTransferApi.md#fulfillTicket) | **PUT** /smart-transfers/{ticketId}/fulfill | Fund ticket manually
*SmartTransferApi* | [**fundTicketTerm**](docs/apis/SmartTransferApi.md#fundTicketTerm) | **PUT** /smart-transfers/{ticketId}/terms/{termId}/fund | Define funding source
*SmartTransferApi* | [**getSmartTransferUserGroups**](docs/apis/SmartTransferApi.md#getSmartTransferUserGroups) | **GET** /smart-transfers/settings/user-groups | Get user group
*SmartTransferApi* | [**manuallyFundTicketTerm**](docs/apis/SmartTransferApi.md#manuallyFundTicketTerm) | **PUT** /smart-transfers/{ticketId}/terms/{termId}/manually-fund | Manually add term transaction
*SmartTransferApi* | [**removeTicketTerm**](docs/apis/SmartTransferApi.md#removeTicketTerm) | **DELETE** /smart-transfers/{ticketId}/terms/{termId} | Delete ticket leg (term)
*SmartTransferApi* | [**searchTickets**](docs/apis/SmartTransferApi.md#searchTickets) | **GET** /smart-transfers | Find Ticket
*SmartTransferApi* | [**setExternalRefId**](docs/apis/SmartTransferApi.md#setExternalRefId) | **PUT** /smart-transfers/{ticketId}/external-id | Add external ref. ID
*SmartTransferApi* | [**setTicketExpiration**](docs/apis/SmartTransferApi.md#setTicketExpiration) | **PUT** /smart-transfers/{ticketId}/expires-in | Set expiration
*SmartTransferApi* | [**setUserGroups**](docs/apis/SmartTransferApi.md#setUserGroups) | **POST** /smart-transfers/settings/user-groups | Set user group
*SmartTransferApi* | [**submitTicket**](docs/apis/SmartTransferApi.md#submitTicket) | **PUT** /smart-transfers/{ticketId}/submit | Submit ticket
*SmartTransferApi* | [**updateTicketTerm**](docs/apis/SmartTransferApi.md#updateTicketTerm) | **PUT** /smart-transfers/{ticketId}/terms/{termId} | Update ticket leg (term)
*StakingBetaApi* | [**approveTermsOfServiceByProviderId**](docs/apis/StakingBetaApi.md#approveTermsOfServiceByProviderId) | **POST** /staking/providers/{providerId}/approveTermsOfService | 
*StakingBetaApi* | [**executeAction**](docs/apis/StakingBetaApi.md#executeAction) | **POST** /staking/chains/{chainDescriptor}/{actionId} | 
*StakingBetaApi* | [**getAllDelegations**](docs/apis/StakingBetaApi.md#getAllDelegations) | **GET** /staking/positions | 
*StakingBetaApi* | [**getChainInfo**](docs/apis/StakingBetaApi.md#getChainInfo) | **GET** /staking/chains/{chainDescriptor}/chainInfo | 
*StakingBetaApi* | [**getChains**](docs/apis/StakingBetaApi.md#getChains) | **GET** /staking/chains | 
*StakingBetaApi* | [**getDelegationById**](docs/apis/StakingBetaApi.md#getDelegationById) | **GET** /staking/positions/{id} | 
*StakingBetaApi* | [**getProviders**](docs/apis/StakingBetaApi.md#getProviders) | **GET** /staking/providers | 
*StakingBetaApi* | [**getSummary**](docs/apis/StakingBetaApi.md#getSummary) | **GET** /staking/positions/summary | 
*StakingBetaApi* | [**getSummaryByVault**](docs/apis/StakingBetaApi.md#getSummaryByVault) | **GET** /staking/positions/summary/vaults | 
*TokenizationApi* | [**getLinkedToken**](docs/apis/TokenizationApi.md#getLinkedToken) | **GET** /tokenization/tokens/{id} | Return a linked token
*TokenizationApi* | [**getLinkedTokens**](docs/apis/TokenizationApi.md#getLinkedTokens) | **GET** /tokenization/tokens | List all linked tokens
*TokenizationApi* | [**issueNewToken**](docs/apis/TokenizationApi.md#issueNewToken) | **POST** /tokenization/tokens | Issue a new token
*TokenizationApi* | [**link**](docs/apis/TokenizationApi.md#link) | **POST** /tokenization/tokens/link | Link a token
*TokenizationApi* | [**unlink**](docs/apis/TokenizationApi.md#unlink) | **DELETE** /tokenization/tokens/{id} | Unlink a token
*TransactionsApi* | [**cancelTransaction**](docs/apis/TransactionsApi.md#cancelTransaction) | **POST** /transactions/{txId}/cancel | Cancel a transaction
*TransactionsApi* | [**createTransaction**](docs/apis/TransactionsApi.md#createTransaction) | **POST** /transactions | Create a new transaction
*TransactionsApi* | [**dropTransaction**](docs/apis/TransactionsApi.md#dropTransaction) | **POST** /transactions/{txId}/drop | Drop ETH transaction by ID
*TransactionsApi* | [**estimateNetworkFee**](docs/apis/TransactionsApi.md#estimateNetworkFee) | **GET** /estimate_network_fee | Estimate the required fee for an asset
*TransactionsApi* | [**estimateTransactionFee**](docs/apis/TransactionsApi.md#estimateTransactionFee) | **POST** /transactions/estimate_fee | Estimate transaction fee
*TransactionsApi* | [**freezeTransaction**](docs/apis/TransactionsApi.md#freezeTransaction) | **POST** /transactions/{txId}/freeze | Freeze a transaction
*TransactionsApi* | [**getTransaction**](docs/apis/TransactionsApi.md#getTransaction) | **GET** /transactions/{txId} | Find a specific transaction by Fireblocks transaction ID
*TransactionsApi* | [**getTransactionByExternalId**](docs/apis/TransactionsApi.md#getTransactionByExternalId) | **GET** /transactions/external_tx_id/{externalTxId} | Find a specific transaction by external transaction ID
*TransactionsApi* | [**getTransactions**](docs/apis/TransactionsApi.md#getTransactions) | **GET** /transactions | List transaction history
*TransactionsApi* | [**setConfirmationThresholdByTransactionHash**](docs/apis/TransactionsApi.md#setConfirmationThresholdByTransactionHash) | **POST** /txHash/{txHash}/set_confirmation_threshold | Set confirmation threshold by transaction hash
*TransactionsApi* | [**setTransactionConfirmationThreshold**](docs/apis/TransactionsApi.md#setTransactionConfirmationThreshold) | **POST** /transactions/{txId}/set_confirmation_threshold | Set confirmation threshold by transaction ID
*TransactionsApi* | [**unfreezeTransaction**](docs/apis/TransactionsApi.md#unfreezeTransaction) | **POST** /transactions/{txId}/unfreeze | Unfreeze a transaction
*TransactionsApi* | [**validateAddress**](docs/apis/TransactionsApi.md#validateAddress) | **GET** /transactions/validate_address/{assetId}/{address} | Validate destination address
*TravelRuleBetaApi* | [**getVASPByDID**](docs/apis/TravelRuleBetaApi.md#getVASPByDID) | **GET** /screening/travel_rule/vasp/{did} | Get VASP details
*TravelRuleBetaApi* | [**getVASPs**](docs/apis/TravelRuleBetaApi.md#getVASPs) | **GET** /screening/travel_rule/vasp | Get All VASPs
*TravelRuleBetaApi* | [**updateVasp**](docs/apis/TravelRuleBetaApi.md#updateVasp) | **PUT** /screening/travel_rule/vasp/update | Add jsonDidKey to VASP details
*TravelRuleBetaApi* | [**validateFullTravelRuleTransaction**](docs/apis/TravelRuleBetaApi.md#validateFullTravelRuleTransaction) | **POST** /screening/travel_rule/transaction/validate/full | Validate Full Travel Rule Transaction
*TravelRuleBetaApi* | [**validateTravelRuleTransaction**](docs/apis/TravelRuleBetaApi.md#validateTravelRuleTransaction) | **POST** /screening/travel_rule/transaction/validate | Validate Travel Rule Transaction
*UserGroupsBetaApi* | [**createUserGroup**](docs/apis/UserGroupsBetaApi.md#createUserGroup) | **POST** /management/user_groups | Create user group
*UserGroupsBetaApi* | [**deleteUserGroup**](docs/apis/UserGroupsBetaApi.md#deleteUserGroup) | **DELETE** /management/user_groups/{groupId} | Delete user group
*UserGroupsBetaApi* | [**getUserGroup**](docs/apis/UserGroupsBetaApi.md#getUserGroup) | **GET** /management/user_groups/{groupId} | Get user group
*UserGroupsBetaApi* | [**getUserGroups**](docs/apis/UserGroupsBetaApi.md#getUserGroups) | **GET** /management/user_groups | List user groups
*UserGroupsBetaApi* | [**updateUserGroup**](docs/apis/UserGroupsBetaApi.md#updateUserGroup) | **PUT** /management/user_groups/{groupId} | Update user group
*UsersApi* | [**getUsers**](docs/apis/UsersApi.md#getUsers) | **GET** /users | List users
*VaultsApi* | [**activateAssetForVaultAccount**](docs/apis/VaultsApi.md#activateAssetForVaultAccount) | **POST** /vault/accounts/{vaultAccountId}/{assetId}/activate | Activate a wallet in a vault account
*VaultsApi* | [**createLegacyAddress**](docs/apis/VaultsApi.md#createLegacyAddress) | **POST** /vault/accounts/{vaultAccountId}/{assetId}/addresses/{addressId}/create_legacy | Convert a segwit address to legacy format
*VaultsApi* | [**createMultipleAccounts**](docs/apis/VaultsApi.md#createMultipleAccounts) | **POST** /vault/accounts/bulk | Bulk creation of new vault accounts
*VaultsApi* | [**createVaultAccount**](docs/apis/VaultsApi.md#createVaultAccount) | **POST** /vault/accounts | Create a new vault account
*VaultsApi* | [**createVaultAccountAsset**](docs/apis/VaultsApi.md#createVaultAccountAsset) | **POST** /vault/accounts/{vaultAccountId}/{assetId} | Create a new wallet
*VaultsApi* | [**createVaultAccountAssetAddress**](docs/apis/VaultsApi.md#createVaultAccountAssetAddress) | **POST** /vault/accounts/{vaultAccountId}/{assetId}/addresses | Create new asset deposit address
*VaultsApi* | [**getAssetWallets**](docs/apis/VaultsApi.md#getAssetWallets) | **GET** /vault/asset_wallets | List asset wallets (Paginated)
*VaultsApi* | [**getMaxSpendableAmount**](docs/apis/VaultsApi.md#getMaxSpendableAmount) | **GET** /vault/accounts/{vaultAccountId}/{assetId}/max_spendable_amount | Get the maximum spendable amount in a single transaction.
*VaultsApi* | [**getPagedVaultAccounts**](docs/apis/VaultsApi.md#getPagedVaultAccounts) | **GET** /vault/accounts_paged | List vault accounts (Paginated)
*VaultsApi* | [**getPublicKeyInfo**](docs/apis/VaultsApi.md#getPublicKeyInfo) | **GET** /vault/public_key_info | Get the public key information
*VaultsApi* | [**getPublicKeyInfoForAddress**](docs/apis/VaultsApi.md#getPublicKeyInfoForAddress) | **GET** /vault/accounts/{vaultAccountId}/{assetId}/{change}/{addressIndex}/public_key_info | Get the public key for a vault account
*VaultsApi* | [**getUnspentInputs**](docs/apis/VaultsApi.md#getUnspentInputs) | **GET** /vault/accounts/{vaultAccountId}/{assetId}/unspent_inputs | Get UTXO unspent inputs information
*VaultsApi* | [**getVaultAccount**](docs/apis/VaultsApi.md#getVaultAccount) | **GET** /vault/accounts/{vaultAccountId} | Find a vault account by ID
*VaultsApi* | [**getVaultAccountAsset**](docs/apis/VaultsApi.md#getVaultAccountAsset) | **GET** /vault/accounts/{vaultAccountId}/{assetId} | Get the asset balance for a vault account
*VaultsApi* | [**getVaultAccountAssetAddressesPaginated**](docs/apis/VaultsApi.md#getVaultAccountAssetAddressesPaginated) | **GET** /vault/accounts/{vaultAccountId}/{assetId}/addresses_paginated | List addresses (Paginated)
*VaultsApi* | [**getVaultAssets**](docs/apis/VaultsApi.md#getVaultAssets) | **GET** /vault/assets | Get asset balance for chosen assets
*VaultsApi* | [**getVaultBalanceByAsset**](docs/apis/VaultsApi.md#getVaultBalanceByAsset) | **GET** /vault/assets/{assetId} | Get vault balance by asset
*VaultsApi* | [**hideVaultAccount**](docs/apis/VaultsApi.md#hideVaultAccount) | **POST** /vault/accounts/{vaultAccountId}/hide | Hide a vault account in the console
*VaultsApi* | [**setCustomerRefIdForAddress**](docs/apis/VaultsApi.md#setCustomerRefIdForAddress) | **POST** /vault/accounts/{vaultAccountId}/{assetId}/addresses/{addressId}/set_customer_ref_id | Assign AML customer reference ID
*VaultsApi* | [**setVaultAccountAutoFuel**](docs/apis/VaultsApi.md#setVaultAccountAutoFuel) | **POST** /vault/accounts/{vaultAccountId}/set_auto_fuel | Turn autofueling on or off
*VaultsApi* | [**setVaultAccountCustomerRefId**](docs/apis/VaultsApi.md#setVaultAccountCustomerRefId) | **POST** /vault/accounts/{vaultAccountId}/set_customer_ref_id | Set an AML/KYT customer reference ID for a vault account
*VaultsApi* | [**unhideVaultAccount**](docs/apis/VaultsApi.md#unhideVaultAccount) | **POST** /vault/accounts/{vaultAccountId}/unhide | Unhide a vault account in the console
*VaultsApi* | [**updateVaultAccount**](docs/apis/VaultsApi.md#updateVaultAccount) | **PUT** /vault/accounts/{vaultAccountId} | Rename a vault account
*VaultsApi* | [**updateVaultAccountAssetAddress**](docs/apis/VaultsApi.md#updateVaultAccountAssetAddress) | **PUT** /vault/accounts/{vaultAccountId}/{assetId}/addresses/{addressId} | Update address description
*VaultsApi* | [**updateVaultAccountAssetBalance**](docs/apis/VaultsApi.md#updateVaultAccountAssetBalance) | **POST** /vault/accounts/{vaultAccountId}/{assetId}/balance | Refresh asset balance data
*Web3ConnectionsApi* | [**create**](docs/apis/Web3ConnectionsApi.md#create) | **POST** /connections/wc | Create a new Web3 connection.
*Web3ConnectionsApi* | [**get**](docs/apis/Web3ConnectionsApi.md#get) | **GET** /connections | List all open Web3 connections.
*Web3ConnectionsApi* | [**remove**](docs/apis/Web3ConnectionsApi.md#remove) | **DELETE** /connections/wc/{id} | Remove an existing Web3 connection.
*Web3ConnectionsApi* | [**submit**](docs/apis/Web3ConnectionsApi.md#submit) | **PUT** /connections/wc/{id} | Respond to a pending Web3 connection request.
*WebhooksApi* | [**resendTransactionWebhooks**](docs/apis/WebhooksApi.md#resendTransactionWebhooks) | **POST** /webhooks/resend/{txId} | Resend failed webhooks for a transaction by ID
*WebhooksApi* | [**resendWebhooks**](docs/apis/WebhooksApi.md#resendWebhooks) | **POST** /webhooks/resend | Resend failed webhooks
*WhitelistIpAddressesApi* | [**getWhitelistIpAddresses**](docs/apis/WhitelistIpAddressesApi.md#getWhitelistIpAddresses) | **GET** /management/api_users/{userId}/whitelist_ip_addresses | Gets whitelisted ip addresses
*WorkspaceStatusBetaApi* | [**getWorkspaceStatus**](docs/apis/WorkspaceStatusBetaApi.md#getWorkspaceStatus) | **GET** /management/workspace_status | Returns current workspace status


## Documentation for Models

 - [APIUser](docs/models/APIUser.md)
 - [APIUsers](docs/models/APIUsers.md)
 - [AbiFunction](docs/models/AbiFunction.md)
 - [Account](docs/models/Account.md)
 - [AccountType](docs/models/AccountType.md)
 - [AddAssetToExternalWalletRequest](docs/models/AddAssetToExternalWalletRequest.md)
 - [AddAssetToExternalWalletRequestOneOf](docs/models/AddAssetToExternalWalletRequestOneOf.md)
 - [AddAssetToExternalWalletRequestOneOf1](docs/models/AddAssetToExternalWalletRequestOneOf1.md)
 - [AddAssetToExternalWalletRequestOneOf1AdditionalInfo](docs/models/AddAssetToExternalWalletRequestOneOf1AdditionalInfo.md)
 - [AddAssetToExternalWalletRequestOneOf1AdditionalInfoOneOf](docs/models/AddAssetToExternalWalletRequestOneOf1AdditionalInfoOneOf.md)
 - [AddAssetToExternalWalletRequestOneOf1AdditionalInfoOneOf1](docs/models/AddAssetToExternalWalletRequestOneOf1AdditionalInfoOneOf1.md)
 - [AddAssetToExternalWalletRequestOneOf1AdditionalInfoOneOf2](docs/models/AddAssetToExternalWalletRequestOneOf1AdditionalInfoOneOf2.md)
 - [AddCollateralRequestBody](docs/models/AddCollateralRequestBody.md)
 - [AddContractAssetRequest](docs/models/AddContractAssetRequest.md)
 - [AdditionalInfoDto](docs/models/AdditionalInfoDto.md)
 - [AmlRegistrationResult](docs/models/AmlRegistrationResult.md)
 - [AmlScreeningResult](docs/models/AmlScreeningResult.md)
 - [AmountAggregationTimePeriodMethod](docs/models/AmountAggregationTimePeriodMethod.md)
 - [AmountAndChainDescriptor](docs/models/AmountAndChainDescriptor.md)
 - [AmountInfo](docs/models/AmountInfo.md)
 - [ApiKey](docs/models/ApiKey.md)
 - [ApiKeysPaginatedResponse](docs/models/ApiKeysPaginatedResponse.md)
 - [AssetAlreadyExistHttpError](docs/models/AssetAlreadyExistHttpError.md)
 - [AssetAmount](docs/models/AssetAmount.md)
 - [AssetBadRequestErrorResponse](docs/models/AssetBadRequestErrorResponse.md)
 - [AssetConflictErrorResponse](docs/models/AssetConflictErrorResponse.md)
 - [AssetDoesNotExistHttpError](docs/models/AssetDoesNotExistHttpError.md)
 - [AssetForbiddenErrorResponse](docs/models/AssetForbiddenErrorResponse.md)
 - [AssetInternalServerErrorResponse](docs/models/AssetInternalServerErrorResponse.md)
 - [AssetMetadataDto](docs/models/AssetMetadataDto.md)
 - [AssetNotFoundErrorResponse](docs/models/AssetNotFoundErrorResponse.md)
 - [AssetPriceForbiddenErrorResponse](docs/models/AssetPriceForbiddenErrorResponse.md)
 - [AssetPriceNotFoundErrorResponse](docs/models/AssetPriceNotFoundErrorResponse.md)
 - [AssetPriceResponse](docs/models/AssetPriceResponse.md)
 - [AssetResponse](docs/models/AssetResponse.md)
 - [AssetResponseMetadata](docs/models/AssetResponseMetadata.md)
 - [AssetResponseOnchain](docs/models/AssetResponseOnchain.md)
 - [AssetTypeResponse](docs/models/AssetTypeResponse.md)
 - [AssetWallet](docs/models/AssetWallet.md)
 - [AuditLogData](docs/models/AuditLogData.md)
 - [AuditLogsData](docs/models/AuditLogsData.md)
 - [AuditorData](docs/models/AuditorData.md)
 - [AuthorizationGroups](docs/models/AuthorizationGroups.md)
 - [AuthorizationInfo](docs/models/AuthorizationInfo.md)
 - [BlockInfo](docs/models/BlockInfo.md)
 - [CancelTransactionResponse](docs/models/CancelTransactionResponse.md)
 - [ChainInfoResponseDto](docs/models/ChainInfoResponseDto.md)
 - [CollectionMetadataDto](docs/models/CollectionMetadataDto.md)
 - [CollectionOwnershipResponse](docs/models/CollectionOwnershipResponse.md)
 - [ComplianceResult](docs/models/ComplianceResult.md)
 - [ComplianceScreeningResult](docs/models/ComplianceScreeningResult.md)
 - [ConfigChangeRequestStatus](docs/models/ConfigChangeRequestStatus.md)
 - [ConfigConversionOperationSnapshot](docs/models/ConfigConversionOperationSnapshot.md)
 - [ConfigDisbursementOperationSnapshot](docs/models/ConfigDisbursementOperationSnapshot.md)
 - [ConfigOperation](docs/models/ConfigOperation.md)
 - [ConfigOperationSnapshot](docs/models/ConfigOperationSnapshot.md)
 - [ConfigOperationStatus](docs/models/ConfigOperationStatus.md)
 - [ConfigTransferOperationSnapshot](docs/models/ConfigTransferOperationSnapshot.md)
 - [ConsoleUser](docs/models/ConsoleUser.md)
 - [ConsoleUsers](docs/models/ConsoleUsers.md)
 - [ContractAbiResponseDto](docs/models/ContractAbiResponseDto.md)
 - [ContractAttributes](docs/models/ContractAttributes.md)
 - [ContractDeployRequest](docs/models/ContractDeployRequest.md)
 - [ContractDeployResponse](docs/models/ContractDeployResponse.md)
 - [ContractDoc](docs/models/ContractDoc.md)
 - [ContractMetadataDto](docs/models/ContractMetadataDto.md)
 - [ContractTemplateDto](docs/models/ContractTemplateDto.md)
 - [ContractUploadRequest](docs/models/ContractUploadRequest.md)
 - [ConversionConfigOperation](docs/models/ConversionConfigOperation.md)
 - [ConversionOperationConfigParams](docs/models/ConversionOperationConfigParams.md)
 - [ConversionOperationExecution](docs/models/ConversionOperationExecution.md)
 - [ConversionOperationExecutionOutput](docs/models/ConversionOperationExecutionOutput.md)
 - [ConversionOperationExecutionParams](docs/models/ConversionOperationExecutionParams.md)
 - [ConversionOperationExecutionParamsExecutionParams](docs/models/ConversionOperationExecutionParamsExecutionParams.md)
 - [ConversionOperationFailure](docs/models/ConversionOperationFailure.md)
 - [ConversionOperationPreview](docs/models/ConversionOperationPreview.md)
 - [ConversionOperationPreviewOutput](docs/models/ConversionOperationPreviewOutput.md)
 - [ConversionOperationType](docs/models/ConversionOperationType.md)
 - [ConversionValidationFailure](docs/models/ConversionValidationFailure.md)
 - [ConvertAssetsRequest](docs/models/ConvertAssetsRequest.md)
 - [ConvertAssetsResponse](docs/models/ConvertAssetsResponse.md)
 - [Cosigner](docs/models/Cosigner.md)
 - [CosignersPaginatedResponse](docs/models/CosignersPaginatedResponse.md)
 - [CreateAPIUser](docs/models/CreateAPIUser.md)
 - [CreateAddressRequest](docs/models/CreateAddressRequest.md)
 - [CreateAddressResponse](docs/models/CreateAddressResponse.md)
 - [CreateAssetsBulkRequest](docs/models/CreateAssetsBulkRequest.md)
 - [CreateAssetsRequest](docs/models/CreateAssetsRequest.md)
 - [CreateConfigOperationRequest](docs/models/CreateConfigOperationRequest.md)
 - [CreateConnectionRequest](docs/models/CreateConnectionRequest.md)
 - [CreateConnectionResponse](docs/models/CreateConnectionResponse.md)
 - [CreateConsoleUser](docs/models/CreateConsoleUser.md)
 - [CreateContractRequest](docs/models/CreateContractRequest.md)
 - [CreateConversionConfigOperationRequest](docs/models/CreateConversionConfigOperationRequest.md)
 - [CreateDisbursementConfigOperationRequest](docs/models/CreateDisbursementConfigOperationRequest.md)
 - [CreateInternalTransferRequest](docs/models/CreateInternalTransferRequest.md)
 - [CreateInternalWalletAssetRequest](docs/models/CreateInternalWalletAssetRequest.md)
 - [CreateMultipleAccountsRequest](docs/models/CreateMultipleAccountsRequest.md)
 - [CreateNcwConnectionRequest](docs/models/CreateNcwConnectionRequest.md)
 - [CreateNetworkIdRequest](docs/models/CreateNetworkIdRequest.md)
 - [CreatePayoutRequest](docs/models/CreatePayoutRequest.md)
 - [CreateSigningKeyDto](docs/models/CreateSigningKeyDto.md)
 - [CreateTokenRequestDto](docs/models/CreateTokenRequestDto.md)
 - [CreateTokenRequestDtoCreateParams](docs/models/CreateTokenRequestDtoCreateParams.md)
 - [CreateTransactionResponse](docs/models/CreateTransactionResponse.md)
 - [CreateTransferConfigOperationRequest](docs/models/CreateTransferConfigOperationRequest.md)
 - [CreateUserGroupResponse](docs/models/CreateUserGroupResponse.md)
 - [CreateValidationKeyDto](docs/models/CreateValidationKeyDto.md)
 - [CreateValidationKeyResponseDto](docs/models/CreateValidationKeyResponseDto.md)
 - [CreateVaultAccountConnectionRequest](docs/models/CreateVaultAccountConnectionRequest.md)
 - [CreateVaultAccountRequest](docs/models/CreateVaultAccountRequest.md)
 - [CreateVaultAssetResponse](docs/models/CreateVaultAssetResponse.md)
 - [CreateWalletRequest](docs/models/CreateWalletRequest.md)
 - [CreateWorkflowExecutionRequestParamsInner](docs/models/CreateWorkflowExecutionRequestParamsInner.md)
 - [CustomRoutingDest](docs/models/CustomRoutingDest.md)
 - [DefaultNetworkRoutingDest](docs/models/DefaultNetworkRoutingDest.md)
 - [DelegationDto](docs/models/DelegationDto.md)
 - [DelegationSummaryDto](docs/models/DelegationSummaryDto.md)
 - [DeleteNetworkConnectionResponse](docs/models/DeleteNetworkConnectionResponse.md)
 - [DeleteNetworkIdResponse](docs/models/DeleteNetworkIdResponse.md)
 - [DeployedContractResponseDto](docs/models/DeployedContractResponseDto.md)
 - [DeployedContractsPaginatedResponse](docs/models/DeployedContractsPaginatedResponse.md)
 - [DepositFundsFromLinkedDDAResponse](docs/models/DepositFundsFromLinkedDDAResponse.md)
 - [Destination](docs/models/Destination.md)
 - [DestinationTransferPeerPath](docs/models/DestinationTransferPeerPath.md)
 - [DestinationTransferPeerPathResponse](docs/models/DestinationTransferPeerPathResponse.md)
 - [DisbursementAmountInstruction](docs/models/DisbursementAmountInstruction.md)
 - [DisbursementConfigOperation](docs/models/DisbursementConfigOperation.md)
 - [DisbursementInstruction](docs/models/DisbursementInstruction.md)
 - [DisbursementInstructionOutput](docs/models/DisbursementInstructionOutput.md)
 - [DisbursementOperationConfigParams](docs/models/DisbursementOperationConfigParams.md)
 - [DisbursementOperationExecution](docs/models/DisbursementOperationExecution.md)
 - [DisbursementOperationExecutionOutput](docs/models/DisbursementOperationExecutionOutput.md)
 - [DisbursementOperationExecutionParams](docs/models/DisbursementOperationExecutionParams.md)
 - [DisbursementOperationExecutionParamsExecutionParams](docs/models/DisbursementOperationExecutionParamsExecutionParams.md)
 - [DisbursementOperationInput](docs/models/DisbursementOperationInput.md)
 - [DisbursementOperationPreview](docs/models/DisbursementOperationPreview.md)
 - [DisbursementOperationPreviewOutput](docs/models/DisbursementOperationPreviewOutput.md)
 - [DisbursementOperationPreviewOutputInstructionSetInner](docs/models/DisbursementOperationPreviewOutputInstructionSetInner.md)
 - [DisbursementOperationType](docs/models/DisbursementOperationType.md)
 - [DisbursementPercentageInstruction](docs/models/DisbursementPercentageInstruction.md)
 - [DisbursementValidationFailure](docs/models/DisbursementValidationFailure.md)
 - [DispatchPayoutResponse](docs/models/DispatchPayoutResponse.md)
 - [DraftResponse](docs/models/DraftResponse.md)
 - [DraftReviewAndValidationResponse](docs/models/DraftReviewAndValidationResponse.md)
 - [DropTransactionRequest](docs/models/DropTransactionRequest.md)
 - [DropTransactionResponse](docs/models/DropTransactionResponse.md)
 - [EVMTokenCreateParamsDto](docs/models/EVMTokenCreateParamsDto.md)
 - [EditGasStationConfigurationResponse](docs/models/EditGasStationConfigurationResponse.md)
 - [ErrorResponse](docs/models/ErrorResponse.md)
 - [ErrorResponseError](docs/models/ErrorResponseError.md)
 - [ErrorSchema](docs/models/ErrorSchema.md)
 - [EstimatedNetworkFeeResponse](docs/models/EstimatedNetworkFeeResponse.md)
 - [EstimatedTransactionFeeResponse](docs/models/EstimatedTransactionFeeResponse.md)
 - [ExchangeAccount](docs/models/ExchangeAccount.md)
 - [ExchangeAccountsPaged](docs/models/ExchangeAccountsPaged.md)
 - [ExchangeAccountsPagedPaging](docs/models/ExchangeAccountsPagedPaging.md)
 - [ExchangeAsset](docs/models/ExchangeAsset.md)
 - [ExchangeSettlementTransactionsResponse](docs/models/ExchangeSettlementTransactionsResponse.md)
 - [ExchangeTradingAccount](docs/models/ExchangeTradingAccount.md)
 - [ExchangeType](docs/models/ExchangeType.md)
 - [ExecuteActionRequest](docs/models/ExecuteActionRequest.md)
 - [ExecuteActionResponse](docs/models/ExecuteActionResponse.md)
 - [ExecutionConversionOperation](docs/models/ExecutionConversionOperation.md)
 - [ExecutionDisbursementOperation](docs/models/ExecutionDisbursementOperation.md)
 - [ExecutionOperationStatus](docs/models/ExecutionOperationStatus.md)
 - [ExecutionScreeningOperation](docs/models/ExecutionScreeningOperation.md)
 - [ExecutionTransferOperation](docs/models/ExecutionTransferOperation.md)
 - [ExternalWalletAsset](docs/models/ExternalWalletAsset.md)
 - [FeeInfo](docs/models/FeeInfo.md)
 - [FiatAccount](docs/models/FiatAccount.md)
 - [FiatAccountType](docs/models/FiatAccountType.md)
 - [FiatAsset](docs/models/FiatAsset.md)
 - [FreezeTransactionResponse](docs/models/FreezeTransactionResponse.md)
 - [FunctionDoc](docs/models/FunctionDoc.md)
 - [Funds](docs/models/Funds.md)
 - [GasStationConfiguration](docs/models/GasStationConfiguration.md)
 - [GasStationConfigurationResponse](docs/models/GasStationConfigurationResponse.md)
 - [GasStationPropertiesResponse](docs/models/GasStationPropertiesResponse.md)
 - [GetAPIUsersResponse](docs/models/GetAPIUsersResponse.md)
 - [GetAuditLogsResponse](docs/models/GetAuditLogsResponse.md)
 - [GetAuditLogsResponseDTO](docs/models/GetAuditLogsResponseDTO.md)
 - [GetConnectionsResponse](docs/models/GetConnectionsResponse.md)
 - [GetConsoleUsersResponse](docs/models/GetConsoleUsersResponse.md)
 - [GetContractsResponse](docs/models/GetContractsResponse.md)
 - [GetExchangeAccountsCredentialsPublicKeyResponse](docs/models/GetExchangeAccountsCredentialsPublicKeyResponse.md)
 - [GetExchangeAccountsResponse](docs/models/GetExchangeAccountsResponse.md)
 - [GetExternalWalletsResponse](docs/models/GetExternalWalletsResponse.md)
 - [GetFiatAccountsResponse](docs/models/GetFiatAccountsResponse.md)
 - [GetFilterParameter](docs/models/GetFilterParameter.md)
 - [GetInternalWalletsResponse](docs/models/GetInternalWalletsResponse.md)
 - [GetMaxSpendableAmountResponse](docs/models/GetMaxSpendableAmountResponse.md)
 - [GetNFTsResponse](docs/models/GetNFTsResponse.md)
 - [GetNetworkConnectionsResponse](docs/models/GetNetworkConnectionsResponse.md)
 - [GetNetworkIdsResponse](docs/models/GetNetworkIdsResponse.md)
 - [GetOtaStatusResponse](docs/models/GetOtaStatusResponse.md)
 - [GetOwnershipTokensResponse](docs/models/GetOwnershipTokensResponse.md)
 - [GetPagedExchangeAccountsResponse](docs/models/GetPagedExchangeAccountsResponse.md)
 - [GetRoutingPolicyAssetGroupsResponse](docs/models/GetRoutingPolicyAssetGroupsResponse.md)
 - [GetSigningKeyResponseDto](docs/models/GetSigningKeyResponseDto.md)
 - [GetSupportedAssetsResponse](docs/models/GetSupportedAssetsResponse.md)
 - [GetTransactionOperation](docs/models/GetTransactionOperation.md)
 - [GetTransactionsResponse](docs/models/GetTransactionsResponse.md)
 - [GetUnspentInputsResponse](docs/models/GetUnspentInputsResponse.md)
 - [GetUsersResponse](docs/models/GetUsersResponse.md)
 - [GetValidationKeyResponseDto](docs/models/GetValidationKeyResponseDto.md)
 - [GetVaultAccountAssetAddressesResponse](docs/models/GetVaultAccountAssetAddressesResponse.md)
 - [GetVaultAccountsResponse](docs/models/GetVaultAccountsResponse.md)
 - [GetVaultAssetsResponse](docs/models/GetVaultAssetsResponse.md)
 - [GetWhitelistIpAddressesResponse](docs/models/GetWhitelistIpAddressesResponse.md)
 - [GetWorkspaceStatusResponse](docs/models/GetWorkspaceStatusResponse.md)
 - [HttpContractDoesNotExistError](docs/models/HttpContractDoesNotExistError.md)
 - [InstructionAmount](docs/models/InstructionAmount.md)
 - [InternalTransferResponse](docs/models/InternalTransferResponse.md)
 - [Job](docs/models/Job.md)
 - [JobCreated](docs/models/JobCreated.md)
 - [Jobs](docs/models/Jobs.md)
 - [LeanAbiFunction](docs/models/LeanAbiFunction.md)
 - [LeanContractDto](docs/models/LeanContractDto.md)
 - [LeanDeployedContractResponseDto](docs/models/LeanDeployedContractResponseDto.md)
 - [ListOwnedCollectionsResponse](docs/models/ListOwnedCollectionsResponse.md)
 - [ListOwnedTokensResponse](docs/models/ListOwnedTokensResponse.md)
 - [MediaEntityResponse](docs/models/MediaEntityResponse.md)
 - [ModifySigningKeyAgentIdDto](docs/models/ModifySigningKeyAgentIdDto.md)
 - [ModifySigningKeyDto](docs/models/ModifySigningKeyDto.md)
 - [ModifyValidationKeyDto](docs/models/ModifyValidationKeyDto.md)
 - [NetworkChannel](docs/models/NetworkChannel.md)
 - [NetworkConnection](docs/models/NetworkConnection.md)
 - [NetworkConnectionResponse](docs/models/NetworkConnectionResponse.md)
 - [NetworkConnectionRoutingPolicy](docs/models/NetworkConnectionRoutingPolicy.md)
 - [NetworkConnectionRoutingPolicyValue](docs/models/NetworkConnectionRoutingPolicyValue.md)
 - [NetworkConnectionStatus](docs/models/NetworkConnectionStatus.md)
 - [NetworkFee](docs/models/NetworkFee.md)
 - [NetworkId](docs/models/NetworkId.md)
 - [NetworkIdResponse](docs/models/NetworkIdResponse.md)
 - [NetworkIdRoutingPolicy](docs/models/NetworkIdRoutingPolicy.md)
 - [NetworkIdRoutingPolicyValue](docs/models/NetworkIdRoutingPolicyValue.md)
 - [NetworkRecord](docs/models/NetworkRecord.md)
 - [NoneNetworkRoutingDest](docs/models/NoneNetworkRoutingDest.md)
 - [NotFoundException](docs/models/NotFoundException.md)
 - [OneTimeAddress](docs/models/OneTimeAddress.md)
 - [OneTimeAddressAccount](docs/models/OneTimeAddressAccount.md)
 - [OperationExecutionFailure](docs/models/OperationExecutionFailure.md)
 - [PaginatedAddressResponse](docs/models/PaginatedAddressResponse.md)
 - [PaginatedAddressResponsePaging](docs/models/PaginatedAddressResponsePaging.md)
 - [PaginatedAssetWalletResponse](docs/models/PaginatedAssetWalletResponse.md)
 - [PaginatedAssetWalletResponsePaging](docs/models/PaginatedAssetWalletResponsePaging.md)
 - [Paging](docs/models/Paging.md)
 - [Parameter](docs/models/Parameter.md)
 - [ParameterWithValue](docs/models/ParameterWithValue.md)
 - [ParameterWithValueList](docs/models/ParameterWithValueList.md)
 - [PayeeAccount](docs/models/PayeeAccount.md)
 - [PayeeAccountResponse](docs/models/PayeeAccountResponse.md)
 - [PayeeAccountType](docs/models/PayeeAccountType.md)
 - [PaymentAccount](docs/models/PaymentAccount.md)
 - [PaymentAccountResponse](docs/models/PaymentAccountResponse.md)
 - [PaymentAccountType](docs/models/PaymentAccountType.md)
 - [PayoutInitMethod](docs/models/PayoutInitMethod.md)
 - [PayoutInstruction](docs/models/PayoutInstruction.md)
 - [PayoutInstructionResponse](docs/models/PayoutInstructionResponse.md)
 - [PayoutInstructionState](docs/models/PayoutInstructionState.md)
 - [PayoutResponse](docs/models/PayoutResponse.md)
 - [PayoutState](docs/models/PayoutState.md)
 - [PayoutStatus](docs/models/PayoutStatus.md)
 - [PolicyAndValidationResponse](docs/models/PolicyAndValidationResponse.md)
 - [PolicyCheckResult](docs/models/PolicyCheckResult.md)
 - [PolicyMetadata](docs/models/PolicyMetadata.md)
 - [PolicyResponse](docs/models/PolicyResponse.md)
 - [PolicyRule](docs/models/PolicyRule.md)
 - [PolicyRuleAmount](docs/models/PolicyRuleAmount.md)
 - [PolicyRuleAmountAggregation](docs/models/PolicyRuleAmountAggregation.md)
 - [PolicyRuleAuthorizationGroups](docs/models/PolicyRuleAuthorizationGroups.md)
 - [PolicyRuleAuthorizationGroupsGroupsInner](docs/models/PolicyRuleAuthorizationGroupsGroupsInner.md)
 - [PolicyRuleCheckResult](docs/models/PolicyRuleCheckResult.md)
 - [PolicyRuleDesignatedSigners](docs/models/PolicyRuleDesignatedSigners.md)
 - [PolicyRuleDst](docs/models/PolicyRuleDst.md)
 - [PolicyRuleError](docs/models/PolicyRuleError.md)
 - [PolicyRuleOperators](docs/models/PolicyRuleOperators.md)
 - [PolicyRuleRawMessageSigning](docs/models/PolicyRuleRawMessageSigning.md)
 - [PolicyRuleRawMessageSigningDerivationPath](docs/models/PolicyRuleRawMessageSigningDerivationPath.md)
 - [PolicyRuleSrc](docs/models/PolicyRuleSrc.md)
 - [PolicyRules](docs/models/PolicyRules.md)
 - [PolicySrcOrDestSubType](docs/models/PolicySrcOrDestSubType.md)
 - [PolicySrcOrDestType](docs/models/PolicySrcOrDestType.md)
 - [PolicyStatus](docs/models/PolicyStatus.md)
 - [PolicyValidation](docs/models/PolicyValidation.md)
 - [PreScreening](docs/models/PreScreening.md)
 - [ProviderDto](docs/models/ProviderDto.md)
 - [PublicKeyInformation](docs/models/PublicKeyInformation.md)
 - [PublishDraftRequest](docs/models/PublishDraftRequest.md)
 - [PublishResult](docs/models/PublishResult.md)
 - [ReadAbiFunction](docs/models/ReadAbiFunction.md)
 - [ReadCallFunctionDto](docs/models/ReadCallFunctionDto.md)
 - [RedeemFundsToLinkedDDAResponse](docs/models/RedeemFundsToLinkedDDAResponse.md)
 - [RegisterNewAssetRequest](docs/models/RegisterNewAssetRequest.md)
 - [RelatedTransactionDto](docs/models/RelatedTransactionDto.md)
 - [RemoveCollateralRequestBody](docs/models/RemoveCollateralRequestBody.md)
 - [RenameCosigner](docs/models/RenameCosigner.md)
 - [RenameVaultAccountResponse](docs/models/RenameVaultAccountResponse.md)
 - [ResendTransactionWebhooksRequest](docs/models/ResendTransactionWebhooksRequest.md)
 - [ResendWebhooksByTransactionIdResponse](docs/models/ResendWebhooksByTransactionIdResponse.md)
 - [ResendWebhooksResponse](docs/models/ResendWebhooksResponse.md)
 - [RespondToConnectionRequest](docs/models/RespondToConnectionRequest.md)
 - [RewardInfo](docs/models/RewardInfo.md)
 - [RewardsInfo](docs/models/RewardsInfo.md)
 - [ScreeningConfigurationsRequest](docs/models/ScreeningConfigurationsRequest.md)
 - [ScreeningOperationExecution](docs/models/ScreeningOperationExecution.md)
 - [ScreeningOperationExecutionOutput](docs/models/ScreeningOperationExecutionOutput.md)
 - [ScreeningOperationFailure](docs/models/ScreeningOperationFailure.md)
 - [ScreeningOperationType](docs/models/ScreeningOperationType.md)
 - [ScreeningPolicyResponse](docs/models/ScreeningPolicyResponse.md)
 - [ScreeningProviderRulesConfigurationResponse](docs/models/ScreeningProviderRulesConfigurationResponse.md)
 - [ScreeningUpdateConfigurationsRequest](docs/models/ScreeningUpdateConfigurationsRequest.md)
 - [ScreeningValidationFailure](docs/models/ScreeningValidationFailure.md)
 - [ScreeningVerdict](docs/models/ScreeningVerdict.md)
 - [ScreeningVerdictMatchedRule](docs/models/ScreeningVerdictMatchedRule.md)
 - [SessionDTO](docs/models/SessionDTO.md)
 - [SessionMetadata](docs/models/SessionMetadata.md)
 - [SetAdminQuorumThresholdRequest](docs/models/SetAdminQuorumThresholdRequest.md)
 - [SetAdminQuorumThresholdResponse](docs/models/SetAdminQuorumThresholdResponse.md)
 - [SetAssetPriceRequest](docs/models/SetAssetPriceRequest.md)
 - [SetAutoFuelRequest](docs/models/SetAutoFuelRequest.md)
 - [SetConfirmationsThresholdRequest](docs/models/SetConfirmationsThresholdRequest.md)
 - [SetConfirmationsThresholdResponse](docs/models/SetConfirmationsThresholdResponse.md)
 - [SetCustomerRefIdForAddressRequest](docs/models/SetCustomerRefIdForAddressRequest.md)
 - [SetCustomerRefIdRequest](docs/models/SetCustomerRefIdRequest.md)
 - [SetNetworkIdDiscoverabilityRequest](docs/models/SetNetworkIdDiscoverabilityRequest.md)
 - [SetNetworkIdNameRequest](docs/models/SetNetworkIdNameRequest.md)
 - [SetNetworkIdResponse](docs/models/SetNetworkIdResponse.md)
 - [SetNetworkIdRoutingPolicyRequest](docs/models/SetNetworkIdRoutingPolicyRequest.md)
 - [SetOtaStatusRequest](docs/models/SetOtaStatusRequest.md)
 - [SetOtaStatusResponse](docs/models/SetOtaStatusResponse.md)
 - [SetOtaStatusResponseOneOf](docs/models/SetOtaStatusResponseOneOf.md)
 - [SetRoutingPolicyRequest](docs/models/SetRoutingPolicyRequest.md)
 - [SetRoutingPolicyResponse](docs/models/SetRoutingPolicyResponse.md)
 - [SettlementRequestBody](docs/models/SettlementRequestBody.md)
 - [SettlementResponse](docs/models/SettlementResponse.md)
 - [SignedMessage](docs/models/SignedMessage.md)
 - [SignedMessageSignature](docs/models/SignedMessageSignature.md)
 - [SignedMessages](docs/models/SignedMessages.md)
 - [SigningKeyDto](docs/models/SigningKeyDto.md)
 - [SmartTransferBadRequestResponse](docs/models/SmartTransferBadRequestResponse.md)
 - [SmartTransferCreateTicket](docs/models/SmartTransferCreateTicket.md)
 - [SmartTransferCreateTicketTerm](docs/models/SmartTransferCreateTicketTerm.md)
 - [SmartTransferForbiddenResponse](docs/models/SmartTransferForbiddenResponse.md)
 - [SmartTransferFundTerm](docs/models/SmartTransferFundTerm.md)
 - [SmartTransferManuallyFundTerm](docs/models/SmartTransferManuallyFundTerm.md)
 - [SmartTransferNotFoundResponse](docs/models/SmartTransferNotFoundResponse.md)
 - [SmartTransferSetTicketExpiration](docs/models/SmartTransferSetTicketExpiration.md)
 - [SmartTransferSetTicketExternalId](docs/models/SmartTransferSetTicketExternalId.md)
 - [SmartTransferSetUserGroups](docs/models/SmartTransferSetUserGroups.md)
 - [SmartTransferSubmitTicket](docs/models/SmartTransferSubmitTicket.md)
 - [SmartTransferTicket](docs/models/SmartTransferTicket.md)
 - [SmartTransferTicketFilteredResponse](docs/models/SmartTransferTicketFilteredResponse.md)
 - [SmartTransferTicketResponse](docs/models/SmartTransferTicketResponse.md)
 - [SmartTransferTicketTerm](docs/models/SmartTransferTicketTerm.md)
 - [SmartTransferTicketTermResponse](docs/models/SmartTransferTicketTermResponse.md)
 - [SmartTransferUpdateTicketTerm](docs/models/SmartTransferUpdateTicketTerm.md)
 - [SmartTransferUserGroups](docs/models/SmartTransferUserGroups.md)
 - [SmartTransferUserGroupsResponse](docs/models/SmartTransferUserGroupsResponse.md)
 - [SolanaBlockchainDataDto](docs/models/SolanaBlockchainDataDto.md)
 - [SourceTransferPeerPath](docs/models/SourceTransferPeerPath.md)
 - [SourceTransferPeerPathResponse](docs/models/SourceTransferPeerPathResponse.md)
 - [SpamOwnershipResponse](docs/models/SpamOwnershipResponse.md)
 - [SpamTokenResponse](docs/models/SpamTokenResponse.md)
 - [SrcOrDestAttributes](docs/models/SrcOrDestAttributes.md)
 - [SrcOrDestAttributesInner](docs/models/SrcOrDestAttributesInner.md)
 - [StakeRequestDto](docs/models/StakeRequestDto.md)
 - [StakeResponseDto](docs/models/StakeResponseDto.md)
 - [StakingGetAllDelegationsResponse](docs/models/StakingGetAllDelegationsResponse.md)
 - [StakingGetChainsResponse](docs/models/StakingGetChainsResponse.md)
 - [StakingGetProvidersResponse](docs/models/StakingGetProvidersResponse.md)
 - [StakingGetSummaryByVaultResponse](docs/models/StakingGetSummaryByVaultResponse.md)
 - [StellarRippleCreateParamsDto](docs/models/StellarRippleCreateParamsDto.md)
 - [SystemMessageInfo](docs/models/SystemMessageInfo.md)
 - [Task](docs/models/Task.md)
 - [Tasks](docs/models/Tasks.md)
 - [TemplatesPaginatedResponse](docs/models/TemplatesPaginatedResponse.md)
 - [ThirdPartyRouting](docs/models/ThirdPartyRouting.md)
 - [ToCollateralTransaction](docs/models/ToCollateralTransaction.md)
 - [ToExchangeTransaction](docs/models/ToExchangeTransaction.md)
 - [TokenCollectionResponse](docs/models/TokenCollectionResponse.md)
 - [TokenLinkDto](docs/models/TokenLinkDto.md)
 - [TokenLinkDtoTokenMetadata](docs/models/TokenLinkDtoTokenMetadata.md)
 - [TokenLinkExistsHttpError](docs/models/TokenLinkExistsHttpError.md)
 - [TokenLinkRequestDto](docs/models/TokenLinkRequestDto.md)
 - [TokenOwnershipResponse](docs/models/TokenOwnershipResponse.md)
 - [TokenOwnershipSpamUpdatePayload](docs/models/TokenOwnershipSpamUpdatePayload.md)
 - [TokenOwnershipStatusUpdatePayload](docs/models/TokenOwnershipStatusUpdatePayload.md)
 - [TokenResponse](docs/models/TokenResponse.md)
 - [TokensPaginatedResponse](docs/models/TokensPaginatedResponse.md)
 - [TradingAccountType](docs/models/TradingAccountType.md)
 - [Transaction](docs/models/Transaction.md)
 - [TransactionFee](docs/models/TransactionFee.md)
 - [TransactionOperation](docs/models/TransactionOperation.md)
 - [TransactionRequest](docs/models/TransactionRequest.md)
 - [TransactionRequestAmount](docs/models/TransactionRequestAmount.md)
 - [TransactionRequestDestination](docs/models/TransactionRequestDestination.md)
 - [TransactionRequestFee](docs/models/TransactionRequestFee.md)
 - [TransactionRequestGasLimit](docs/models/TransactionRequestGasLimit.md)
 - [TransactionRequestGasPrice](docs/models/TransactionRequestGasPrice.md)
 - [TransactionRequestNetworkFee](docs/models/TransactionRequestNetworkFee.md)
 - [TransactionRequestNetworkStaking](docs/models/TransactionRequestNetworkStaking.md)
 - [TransactionRequestPriorityFee](docs/models/TransactionRequestPriorityFee.md)
 - [TransactionResponse](docs/models/TransactionResponse.md)
 - [TransactionResponseContractCallDecodedData](docs/models/TransactionResponseContractCallDecodedData.md)
 - [TransactionResponseDestination](docs/models/TransactionResponseDestination.md)
 - [TransferConfigOperation](docs/models/TransferConfigOperation.md)
 - [TransferOperationConfigParams](docs/models/TransferOperationConfigParams.md)
 - [TransferOperationExecution](docs/models/TransferOperationExecution.md)
 - [TransferOperationExecutionOutput](docs/models/TransferOperationExecutionOutput.md)
 - [TransferOperationExecutionParams](docs/models/TransferOperationExecutionParams.md)
 - [TransferOperationExecutionParamsExecutionParams](docs/models/TransferOperationExecutionParamsExecutionParams.md)
 - [TransferOperationFailure](docs/models/TransferOperationFailure.md)
 - [TransferOperationFailureData](docs/models/TransferOperationFailureData.md)
 - [TransferOperationPreview](docs/models/TransferOperationPreview.md)
 - [TransferOperationPreviewOutput](docs/models/TransferOperationPreviewOutput.md)
 - [TransferOperationType](docs/models/TransferOperationType.md)
 - [TransferPeerPathSubType](docs/models/TransferPeerPathSubType.md)
 - [TransferPeerPathType](docs/models/TransferPeerPathType.md)
 - [TransferValidationFailure](docs/models/TransferValidationFailure.md)
 - [TravelRuleAddress](docs/models/TravelRuleAddress.md)
 - [TravelRuleCreateTransactionRequest](docs/models/TravelRuleCreateTransactionRequest.md)
 - [TravelRuleGetAllVASPsResponse](docs/models/TravelRuleGetAllVASPsResponse.md)
 - [TravelRuleIssuer](docs/models/TravelRuleIssuer.md)
 - [TravelRuleIssuers](docs/models/TravelRuleIssuers.md)
 - [TravelRuleOwnershipProof](docs/models/TravelRuleOwnershipProof.md)
 - [TravelRulePiiIVMS](docs/models/TravelRulePiiIVMS.md)
 - [TravelRulePolicyRuleResponse](docs/models/TravelRulePolicyRuleResponse.md)
 - [TravelRuleTransactionBlockchainInfo](docs/models/TravelRuleTransactionBlockchainInfo.md)
 - [TravelRuleUpdateVASPDetails](docs/models/TravelRuleUpdateVASPDetails.md)
 - [TravelRuleVASP](docs/models/TravelRuleVASP.md)
 - [TravelRuleValidateFullTransactionRequest](docs/models/TravelRuleValidateFullTransactionRequest.md)
 - [TravelRuleValidateTransactionRequest](docs/models/TravelRuleValidateTransactionRequest.md)
 - [TravelRuleValidateTransactionResponse](docs/models/TravelRuleValidateTransactionResponse.md)
 - [UnfreezeTransactionResponse](docs/models/UnfreezeTransactionResponse.md)
 - [UnmanagedWallet](docs/models/UnmanagedWallet.md)
 - [UnspentInput](docs/models/UnspentInput.md)
 - [UnspentInputsResponse](docs/models/UnspentInputsResponse.md)
 - [UnstakeRequestDto](docs/models/UnstakeRequestDto.md)
 - [UpdateTokenOwnershipStatusDto](docs/models/UpdateTokenOwnershipStatusDto.md)
 - [UpdateTokensOwnershipSpamRequest](docs/models/UpdateTokensOwnershipSpamRequest.md)
 - [UpdateTokensOwnershipStatusRequest](docs/models/UpdateTokensOwnershipStatusRequest.md)
 - [UpdateVaultAccountAssetAddressRequest](docs/models/UpdateVaultAccountAssetAddressRequest.md)
 - [UpdateVaultAccountRequest](docs/models/UpdateVaultAccountRequest.md)
 - [UserGroupCreateRequest](docs/models/UserGroupCreateRequest.md)
 - [UserGroupCreateResponse](docs/models/UserGroupCreateResponse.md)
 - [UserGroupResponse](docs/models/UserGroupResponse.md)
 - [UserGroupUpdateRequest](docs/models/UserGroupUpdateRequest.md)
 - [UserGroupsResponse](docs/models/UserGroupsResponse.md)
 - [UserResponse](docs/models/UserResponse.md)
 - [UserRole](docs/models/UserRole.md)
 - [UserStatus](docs/models/UserStatus.md)
 - [UserType](docs/models/UserType.md)
 - [ValidateAddressResponse](docs/models/ValidateAddressResponse.md)
 - [ValidationKeyDto](docs/models/ValidationKeyDto.md)
 - [ValidatorDto](docs/models/ValidatorDto.md)
 - [VaultAccount](docs/models/VaultAccount.md)
 - [VaultAccountsPagedResponse](docs/models/VaultAccountsPagedResponse.md)
 - [VaultAccountsPagedResponsePaging](docs/models/VaultAccountsPagedResponsePaging.md)
 - [VaultActionStatus](docs/models/VaultActionStatus.md)
 - [VaultAsset](docs/models/VaultAsset.md)
 - [VaultWalletAddress](docs/models/VaultWalletAddress.md)
 - [VendorDto](docs/models/VendorDto.md)
 - [WalletAsset](docs/models/WalletAsset.md)
 - [WalletAssetAdditionalInfo](docs/models/WalletAssetAdditionalInfo.md)
 - [WithdrawRequestDto](docs/models/WithdrawRequestDto.md)
 - [WorkflowConfigStatus](docs/models/WorkflowConfigStatus.md)
 - [WorkflowConfigurationId](docs/models/WorkflowConfigurationId.md)
 - [WorkflowExecutionOperation](docs/models/WorkflowExecutionOperation.md)
 - [WriteAbiFunction](docs/models/WriteAbiFunction.md)
 - [WriteCallFunctionDto](docs/models/WriteCallFunctionDto.md)
 - [WriteCallFunctionResponseDto](docs/models/WriteCallFunctionResponseDto.md)



<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="bearerTokenAuth"></a>
### bearerTokenAuth

- **Type**: Bearer authentication (JWT)

<a id="ApiKeyAuth"></a>
### ApiKeyAuth

- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header


## Author

support@fireblocks.com

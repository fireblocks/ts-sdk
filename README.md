# Fireblocks Typescript SDK (Beta)
[![npm version](https://badge.fury.io/js/@fireblocks%2Fts-sdk.svg)](https://badge.fury.io/js/@fireblocks%2Fts-sdk)

> **Warning**
> This package is currently in a beta stage and should be used at your own risk.
> The provided interfaces might go through backwards-incompatibale changes.
> For a more stable SDK, please use the [Fireblocks Javascript/Typescript SDK](https://github.com/fireblocks/fireblocks-sdk-js)


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


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from "@fireblocks/ts-sdk";

// Set the environment variables
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox // or assign directly to "https://sandbox-api.fireblocks.io/v1";
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

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
import { Fireblocks, TransferPeerPathTypeEnum } from "@fireblocks/ts-sdk";

async function createTransaction(assetId, amount, srcId, destId) {
    const fireblocks = new Fireblocks();
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
    const result = await fireblocks.transactions.createTransaction({ transactionRequest: payload });
    console.log(JSON.stringify(result, null, 2));
}
```


## Documentation for API Endpoints

All URIs are relative to https://developers.fireblocks.com/reference/

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AdminQuorumApi* | [**setAdminQuorumThreshold**](docs/apis/AdminQuorumApi.md#setAdminQuorumThreshold) | **PUT** /admin_quorum | Update admin quorum threshold
*ApiUserApi* | [**createApiUser**](docs/apis/ApiUserApi.md#createApiUser) | **POST** /management/api_users | create api user
*ApiUserApi* | [**getApiUsers**](docs/apis/ApiUserApi.md#getApiUsers) | **GET** /management/api_users | get api users
*AssetsApi* | [**getAssetBalance**](docs/apis/AssetsApi.md#getAssetBalance) | **POST** /vault/assets/bulk | Bulk creation of wallets
*AuditLogsApi* | [**getAuditLogs**](docs/apis/AuditLogsApi.md#getAuditLogs) | **GET** /management/audit_logs | Get audit logs
*AuditLogsApi* | [**getAudits**](docs/apis/AuditLogsApi.md#getAudits) | **GET** /audits | Get audit logs
*BlockchainsAssetsApi* | [**getSupportedAssets**](docs/apis/BlockchainsAssetsApi.md#getSupportedAssets) | **GET** /supported_assets | List all asset types supported by Fireblocks
*ComplianceScreeningConfigurationApi* | [**travelRuleApiControllerGetPostScreeningPolicy**](docs/apis/ComplianceScreeningConfigurationApi.md#travelRuleApiControllerGetPostScreeningPolicy) | **GET** /screening/travel_rule/post_screening_policy | Travel Rule - View Post-Screening Policy
*ComplianceScreeningConfigurationApi* | [**travelRuleApiControllerGetScreeningConfiguration**](docs/apis/ComplianceScreeningConfigurationApi.md#travelRuleApiControllerGetScreeningConfiguration) | **GET** /screening/travel_rule/policy_configuration | Get Travel Rule Screening Policy Configuration
*ComplianceScreeningConfigurationApi* | [**travelRuleApiControllerGetScreeningPolicy**](docs/apis/ComplianceScreeningConfigurationApi.md#travelRuleApiControllerGetScreeningPolicy) | **GET** /screening/travel_rule/screening_policy | Travel Rule - View Screening Policy
*ComplianceScreeningConfigurationApi* | [**travelRuleApiControllerUpdateTravelRuleConfig**](docs/apis/ComplianceScreeningConfigurationApi.md#travelRuleApiControllerUpdateTravelRuleConfig) | **PUT** /screening/travel_rule/policy_configuration | Update Travel Rule Configuration
*ConsoleUserApi* | [**createConsoleUser**](docs/apis/ConsoleUserApi.md#createConsoleUser) | **POST** /management/users | create console user
*ConsoleUserApi* | [**getConsoleUsers**](docs/apis/ConsoleUserApi.md#getConsoleUsers) | **GET** /management/users | get console users
*ContractsApi* | [**addContractAsset**](docs/apis/ContractsApi.md#addContractAsset) | **POST** /contracts/{contractId}/{assetId} | Add an asset to a contract
*ContractsApi* | [**createContract**](docs/apis/ContractsApi.md#createContract) | **POST** /contracts | Create a contract
*ContractsApi* | [**deleteContract**](docs/apis/ContractsApi.md#deleteContract) | **DELETE** /contracts/{contractId} | Delete a contract
*ContractsApi* | [**deleteContractAsset**](docs/apis/ContractsApi.md#deleteContractAsset) | **DELETE** /contracts/{contractId}/{assetId} | Delete a contract asset
*ContractsApi* | [**getContract**](docs/apis/ContractsApi.md#getContract) | **GET** /contracts/{contractId} | Find a specific contract
*ContractsApi* | [**getContractAsset**](docs/apis/ContractsApi.md#getContractAsset) | **GET** /contracts/{contractId}/{assetId} | Find a contract asset
*ContractsApi* | [**getContracts**](docs/apis/ContractsApi.md#getContracts) | **GET** /contracts | List contracts
*DefaultApi* | [**cancelJob**](docs/apis/DefaultApi.md#cancelJob) | **POST** /batch/{jobId}/cancel | Cancel a running job
*DefaultApi* | [**continueJob**](docs/apis/DefaultApi.md#continueJob) | **POST** /batch/{jobId}/continue | Continue a paused job
*DefaultApi* | [**getJob**](docs/apis/DefaultApi.md#getJob) | **GET** /batch/{jobId} | Get job details
*DefaultApi* | [**getJobTasks**](docs/apis/DefaultApi.md#getJobTasks) | **GET** /batch/{jobId}/tasks | Return a list of tasks for given job
*DefaultApi* | [**getJobs**](docs/apis/DefaultApi.md#getJobs) | **GET** /batch/jobs | Return a list of jobs belonging to tenant
*DefaultApi* | [**pauseJob**](docs/apis/DefaultApi.md#pauseJob) | **POST** /batch/{jobId}/pause | Pause a job
*ExchangeAccountsApi* | [**convertAssets**](docs/apis/ExchangeAccountsApi.md#convertAssets) | **POST** /exchange_accounts/{exchangeAccountId}/convert | Convert exchange account funds from the source asset to the destination asset.
*ExchangeAccountsApi* | [**getExchangeAccount**](docs/apis/ExchangeAccountsApi.md#getExchangeAccount) | **GET** /exchange_accounts/{exchangeAccountId} | Find a specific exchange account
*ExchangeAccountsApi* | [**getExchangeAccountAsset**](docs/apis/ExchangeAccountsApi.md#getExchangeAccountAsset) | **GET** /exchange_accounts/{exchangeAccountId}/{assetId} | Find an asset for an exchange account
*ExchangeAccountsApi* | [**getExchangeAccounts**](docs/apis/ExchangeAccountsApi.md#getExchangeAccounts) | **GET** /exchange_accounts | List exchange accounts
*ExchangeAccountsApi* | [**getPagedExchangeAccounts**](docs/apis/ExchangeAccountsApi.md#getPagedExchangeAccounts) | **GET** /exchange_accounts/paged | Pagination list exchange accounts
*ExchangeAccountsApi* | [**internalTransfer**](docs/apis/ExchangeAccountsApi.md#internalTransfer) | **POST** /exchange_accounts/{exchangeAccountId}/internal_transfer | Internal transfer for exchange accounts
*ExternalWalletsApi* | [**addAssetToExternalWallet**](docs/apis/ExternalWalletsApi.md#addAssetToExternalWallet) | **POST** /external_wallets/{walletId}/{assetId} | Add an asset to an external wallet.
*ExternalWalletsApi* | [**createExternalWallet**](docs/apis/ExternalWalletsApi.md#createExternalWallet) | **POST** /external_wallets | Create an external wallet
*ExternalWalletsApi* | [**deleteExternalWallet**](docs/apis/ExternalWalletsApi.md#deleteExternalWallet) | **DELETE** /external_wallets/{walletId} | Delete an external wallet
*ExternalWalletsApi* | [**getExternalWallet**](docs/apis/ExternalWalletsApi.md#getExternalWallet) | **GET** /external_wallets/{walletId} | Find an external wallet
*ExternalWalletsApi* | [**getExternalWalletAsset**](docs/apis/ExternalWalletsApi.md#getExternalWalletAsset) | **GET** /external_wallets/{walletId}/{assetId} | Get an asset from an external wallet
*ExternalWalletsApi* | [**getExternalWallets**](docs/apis/ExternalWalletsApi.md#getExternalWallets) | **GET** /external_wallets | List external wallets
*ExternalWalletsApi* | [**removeAssetFromExternalWallet**](docs/apis/ExternalWalletsApi.md#removeAssetFromExternalWallet) | **DELETE** /external_wallets/{walletId}/{assetId} | Delete an asset from an external wallet
*ExternalWalletsApi* | [**setCustomerRefIdForExternalWallet**](docs/apis/ExternalWalletsApi.md#setCustomerRefIdForExternalWallet) | **POST** /external_wallets/{walletId}/set_customer_ref_id | Set an AML customer reference ID for an external wallet
*FiatAccountsApi* | [**depositFundsFromLinkedDDA**](docs/apis/FiatAccountsApi.md#depositFundsFromLinkedDDA) | **POST** /fiat_accounts/{accountId}/deposit_from_linked_dda | Deposit funds from DDA
*FiatAccountsApi* | [**getFiatAccount**](docs/apis/FiatAccountsApi.md#getFiatAccount) | **GET** /fiat_accounts/{accountId} | Find a specific fiat account
*FiatAccountsApi* | [**getFiatAccounts**](docs/apis/FiatAccountsApi.md#getFiatAccounts) | **GET** /fiat_accounts | List fiat accounts
*FiatAccountsApi* | [**redeemFundsToLinkedDda**](docs/apis/FiatAccountsApi.md#redeemFundsToLinkedDda) | **POST** /fiat_accounts/{accountId}/redeem_to_linked_dda | Redeem funds to DDA
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
*NetworkConnectionsApi* | [**setDiscoverabilityForNetworkId**](docs/apis/NetworkConnectionsApi.md#setDiscoverabilityForNetworkId) | **PATCH** /network_ids/{networkId}/set_discoverability | Update network ID\&#39;s discoverability.
*NetworkConnectionsApi* | [**setNetworkIdName**](docs/apis/NetworkConnectionsApi.md#setNetworkIdName) | **PATCH** /network_ids/{networkId}/set_name | Update network ID\&#39;s name.
*NetworkConnectionsApi* | [**setRoutingPolicy**](docs/apis/NetworkConnectionsApi.md#setRoutingPolicy) | **PATCH** /network_connections/{connectionId}/set_routing_policy | Update network connection routing policy.
*NetworkConnectionsApi* | [**setRoutingPolicyForNetworkId**](docs/apis/NetworkConnectionsApi.md#setRoutingPolicyForNetworkId) | **PATCH** /network_ids/{networkId}/set_routing_policy | Update network id routing policy.
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
*ResetDeviceApi* | [**resetDevice**](docs/apis/ResetDeviceApi.md#resetDevice) | **POST** /management/users/{id}/reset_device | resets device
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
*TravelRuleBetaApi* | [**travelRuleApiControllerUpdateVasp**](docs/apis/TravelRuleBetaApi.md#travelRuleApiControllerUpdateVasp) | **PUT** /screening/travel_rule/vasp/update | Add jsonDidKey to VASP details
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
*VaultsApi* | [**getVaultAccountAssetAddresses**](docs/apis/VaultsApi.md#getVaultAccountAssetAddresses) | **GET** /vault/accounts/{vaultAccountId}/{assetId}/addresses | Get asset addresses
*VaultsApi* | [**getVaultAccountAssetAddressesPaginated**](docs/apis/VaultsApi.md#getVaultAccountAssetAddressesPaginated) | **GET** /vault/accounts/{vaultAccountId}/{assetId}/addresses_paginated | List addresses (Paginated)
*VaultsApi* | [**getVaultAccounts**](docs/apis/VaultsApi.md#getVaultAccounts) | **GET** /vault/accounts | List vault accounts
*VaultsApi* | [**getVaultAssets**](docs/apis/VaultsApi.md#getVaultAssets) | **GET** /vault/assets | Get asset balance for chosen assets
*VaultsApi* | [**getVaultBalanceByAsset**](docs/apis/VaultsApi.md#getVaultBalanceByAsset) | **GET** /vault/assets/{assetId} | Get vault balance by asset
*VaultsApi* | [**hideVaultAccount**](docs/apis/VaultsApi.md#hideVaultAccount) | **POST** /vault/accounts/{vaultAccountId}/hide | Hide a vault account in the console
*VaultsApi* | [**setAutoFuelForVaultAccount**](docs/apis/VaultsApi.md#setAutoFuelForVaultAccount) | **POST** /vault/accounts/{vaultAccountId}/set_auto_fuel | Turn autofueling on or off
*VaultsApi* | [**setCustomerRefIdForAddress**](docs/apis/VaultsApi.md#setCustomerRefIdForAddress) | **POST** /vault/accounts/{vaultAccountId}/{assetId}/addresses/{addressId}/set_customer_ref_id | Assign AML customer reference ID
*VaultsApi* | [**setCustomerRefIdForVaultAccount**](docs/apis/VaultsApi.md#setCustomerRefIdForVaultAccount) | **POST** /vault/accounts/{vaultAccountId}/set_customer_ref_id | Set an AML/KYT customer reference ID for a vault account
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
*WhitelistIpAddressesApi* | [**getWhitelistIpAddresses**](docs/apis/WhitelistIpAddressesApi.md#getWhitelistIpAddresses) | **GET** /management/api_users/{userId}/whitelist_ip_addresses | gets ip addresses
*WorkspaceApi* | [**freezeWorkspace**](docs/apis/WorkspaceApi.md#freezeWorkspace) | **POST** /workspace/freeze | Freeze Workspace
*WorkspaceStatusBetaApi* | [**getWorkspaceStatus**](docs/apis/WorkspaceStatusBetaApi.md#getWorkspaceStatus) | **GET** /management/workspace_status | Returns current workspace status


## Documentation for Models

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
 - [AmlScreeningResult](docs/models/AmlScreeningResult.md)
 - [AmountAggregationTimePeriodMethod](docs/models/AmountAggregationTimePeriodMethod.md)
 - [AmountAndChainDescriptor](docs/models/AmountAndChainDescriptor.md)
 - [AmountInfo](docs/models/AmountInfo.md)
 - [AssetTypeResponse](docs/models/AssetTypeResponse.md)
 - [AssetWallet](docs/models/AssetWallet.md)
 - [AuthorizationGroups](docs/models/AuthorizationGroups.md)
 - [AuthorizationInfo](docs/models/AuthorizationInfo.md)
 - [BlockInfo](docs/models/BlockInfo.md)
 - [CancelTransactionResponse](docs/models/CancelTransactionResponse.md)
 - [ChainInfoResponseDto](docs/models/ChainInfoResponseDto.md)
 - [CheckThirdPartyRouting200Response](docs/models/CheckThirdPartyRouting200Response.md)
 - [CollectionOwnershipResponse](docs/models/CollectionOwnershipResponse.md)
 - [ConfigChangeRequestStatus](docs/models/ConfigChangeRequestStatus.md)
 - [ConvertAssetsRequest](docs/models/ConvertAssetsRequest.md)
 - [CreateAPIUser](docs/models/CreateAPIUser.md)
 - [CreateAddressResponse](docs/models/CreateAddressResponse.md)
 - [CreateConnectionRequest](docs/models/CreateConnectionRequest.md)
 - [CreateConnectionResponse](docs/models/CreateConnectionResponse.md)
 - [CreateConsoleUser](docs/models/CreateConsoleUser.md)
 - [CreateContractRequest](docs/models/CreateContractRequest.md)
 - [CreateInternalTransferRequest](docs/models/CreateInternalTransferRequest.md)
 - [CreateInternalWalletAssetRequest](docs/models/CreateInternalWalletAssetRequest.md)
 - [CreateInternalWalletRequest](docs/models/CreateInternalWalletRequest.md)
 - [CreateMultipleAccountsRequest](docs/models/CreateMultipleAccountsRequest.md)
 - [CreateNcwConnectionRequest](docs/models/CreateNcwConnectionRequest.md)
 - [CreateNetworkIdRequest](docs/models/CreateNetworkIdRequest.md)
 - [CreatePayoutRequest](docs/models/CreatePayoutRequest.md)
 - [CreateRequest](docs/models/CreateRequest.md)
 - [CreateTicket201Response](docs/models/CreateTicket201Response.md)
 - [CreateTicketTerm201Response](docs/models/CreateTicketTerm201Response.md)
 - [CreateTransactionResponse](docs/models/CreateTransactionResponse.md)
 - [CreateUserGroupResponse](docs/models/CreateUserGroupResponse.md)
 - [CreateVaultAccountAssetAddressRequest](docs/models/CreateVaultAccountAssetAddressRequest.md)
 - [CreateVaultAccountAssetRequest](docs/models/CreateVaultAccountAssetRequest.md)
 - [CreateVaultAccountRequest](docs/models/CreateVaultAccountRequest.md)
 - [CreateVaultAssetResponse](docs/models/CreateVaultAssetResponse.md)
 - [CustomCryptoRoutingDest](docs/models/CustomCryptoRoutingDest.md)
 - [CustomFiatRoutingDest](docs/models/CustomFiatRoutingDest.md)
 - [DefaultNetworkRoutingDest](docs/models/DefaultNetworkRoutingDest.md)
 - [DelegationDto](docs/models/DelegationDto.md)
 - [DelegationSummaryDto](docs/models/DelegationSummaryDto.md)
 - [DestinationTransferPeerPath](docs/models/DestinationTransferPeerPath.md)
 - [DestinationTransferPeerPathResponse](docs/models/DestinationTransferPeerPathResponse.md)
 - [DispatchPayoutResponse](docs/models/DispatchPayoutResponse.md)
 - [DraftResponse](docs/models/DraftResponse.md)
 - [DraftReviewAndValidationResponse](docs/models/DraftReviewAndValidationResponse.md)
 - [DropTransactionRequest](docs/models/DropTransactionRequest.md)
 - [DropTransactionResponse](docs/models/DropTransactionResponse.md)
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
 - [ExecuteAction201Response](docs/models/ExecuteAction201Response.md)
 - [ExecuteActionRequest](docs/models/ExecuteActionRequest.md)
 - [ExternalWalletAsset](docs/models/ExternalWalletAsset.md)
 - [FeeInfo](docs/models/FeeInfo.md)
 - [FiatAccount](docs/models/FiatAccount.md)
 - [FiatAccountType](docs/models/FiatAccountType.md)
 - [FiatAsset](docs/models/FiatAsset.md)
 - [FindTicketById200Response](docs/models/FindTicketById200Response.md)
 - [FindTicketTermById200Response](docs/models/FindTicketTermById200Response.md)
 - [FreezeTransactionResponse](docs/models/FreezeTransactionResponse.md)
 - [GasStationConfiguration](docs/models/GasStationConfiguration.md)
 - [GasStationPropertiesResponse](docs/models/GasStationPropertiesResponse.md)
 - [GetAssetBalanceRequest](docs/models/GetAssetBalanceRequest.md)
 - [GetAuditLogsResponseDTO](docs/models/GetAuditLogsResponseDTO.md)
 - [GetConnectionsResponse](docs/models/GetConnectionsResponse.md)
 - [GetFilterParameter](docs/models/GetFilterParameter.md)
 - [GetOtaStatus200Response](docs/models/GetOtaStatus200Response.md)
 - [GetOwnershipTokens200Response](docs/models/GetOwnershipTokens200Response.md)
 - [GetSmartTransferUserGroups200Response](docs/models/GetSmartTransferUserGroups200Response.md)
 - [GetTransactionOperation](docs/models/GetTransactionOperation.md)
 - [GetUsersResponse](docs/models/GetUsersResponse.md)
 - [GetWorkspaceStatus200Response](docs/models/GetWorkspaceStatus200Response.md)
 - [InstructionAmount](docs/models/InstructionAmount.md)
 - [Job](docs/models/Job.md)
 - [JobCreated](docs/models/JobCreated.md)
 - [ListOwnedCollections200Response](docs/models/ListOwnedCollections200Response.md)
 - [ListOwnedTokens200Response](docs/models/ListOwnedTokens200Response.md)
 - [MediaEntityResponse](docs/models/MediaEntityResponse.md)
 - [NetworkChannel](docs/models/NetworkChannel.md)
 - [NetworkConnection](docs/models/NetworkConnection.md)
 - [NetworkConnectionResponse](docs/models/NetworkConnectionResponse.md)
 - [NetworkConnectionRoutingPolicy](docs/models/NetworkConnectionRoutingPolicy.md)
 - [NetworkConnectionRoutingPolicyCrypto](docs/models/NetworkConnectionRoutingPolicyCrypto.md)
 - [NetworkConnectionRoutingPolicySen](docs/models/NetworkConnectionRoutingPolicySen.md)
 - [NetworkConnectionRoutingPolicySenTest](docs/models/NetworkConnectionRoutingPolicySenTest.md)
 - [NetworkConnectionRoutingPolicySignet](docs/models/NetworkConnectionRoutingPolicySignet.md)
 - [NetworkConnectionRoutingPolicySignetTest](docs/models/NetworkConnectionRoutingPolicySignetTest.md)
 - [NetworkFee](docs/models/NetworkFee.md)
 - [NetworkId](docs/models/NetworkId.md)
 - [NetworkIdResponse](docs/models/NetworkIdResponse.md)
 - [NetworkIdRoutingPolicy](docs/models/NetworkIdRoutingPolicy.md)
 - [NetworkIdRoutingPolicyCrypto](docs/models/NetworkIdRoutingPolicyCrypto.md)
 - [NetworkIdRoutingPolicySen](docs/models/NetworkIdRoutingPolicySen.md)
 - [NetworkIdRoutingPolicySenTest](docs/models/NetworkIdRoutingPolicySenTest.md)
 - [NetworkRecord](docs/models/NetworkRecord.md)
 - [NoneNetworkRoutingDest](docs/models/NoneNetworkRoutingDest.md)
 - [OneTimeAddress](docs/models/OneTimeAddress.md)
 - [PaginatedAddressResponse](docs/models/PaginatedAddressResponse.md)
 - [PaginatedAddressResponsePaging](docs/models/PaginatedAddressResponsePaging.md)
 - [PaginatedAssetWalletResponse](docs/models/PaginatedAssetWalletResponse.md)
 - [PaginatedAssetWalletResponsePaging](docs/models/PaginatedAssetWalletResponsePaging.md)
 - [Paging](docs/models/Paging.md)
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
 - [PolicySrcOrDestSubType](docs/models/PolicySrcOrDestSubType.md)
 - [PolicySrcOrDestType](docs/models/PolicySrcOrDestType.md)
 - [PolicyStatus](docs/models/PolicyStatus.md)
 - [PolicyValidation](docs/models/PolicyValidation.md)
 - [ProviderDto](docs/models/ProviderDto.md)
 - [PublicKeyInformation](docs/models/PublicKeyInformation.md)
 - [PublishDraftRequest](docs/models/PublishDraftRequest.md)
 - [PublishPolicyRulesRequest](docs/models/PublishPolicyRulesRequest.md)
 - [PublishResult](docs/models/PublishResult.md)
 - [RedeemFundsToLinkedDdaRequest](docs/models/RedeemFundsToLinkedDdaRequest.md)
 - [RelatedTransactionDto](docs/models/RelatedTransactionDto.md)
 - [RemoveCollateralRequestBody](docs/models/RemoveCollateralRequestBody.md)
 - [ResendTransactionWebhooksRequest](docs/models/ResendTransactionWebhooksRequest.md)
 - [ResendWebhooksResponse](docs/models/ResendWebhooksResponse.md)
 - [RespondToConnectionRequest](docs/models/RespondToConnectionRequest.md)
 - [RewardInfo](docs/models/RewardInfo.md)
 - [RewardsInfo](docs/models/RewardsInfo.md)
 - [SearchTickets200Response](docs/models/SearchTickets200Response.md)
 - [SessionDTO](docs/models/SessionDTO.md)
 - [SessionMetadata](docs/models/SessionMetadata.md)
 - [SetAdminQuorumThresholdRequest](docs/models/SetAdminQuorumThresholdRequest.md)
 - [SetAutoFuelForVaultAccountRequest](docs/models/SetAutoFuelForVaultAccountRequest.md)
 - [SetConfirmationsThresholdRequest](docs/models/SetConfirmationsThresholdRequest.md)
 - [SetConfirmationsThresholdResponse](docs/models/SetConfirmationsThresholdResponse.md)
 - [SetCustomerRefIdForVaultAccountRequest](docs/models/SetCustomerRefIdForVaultAccountRequest.md)
 - [SetDiscoverabilityForNetworkIdRequest](docs/models/SetDiscoverabilityForNetworkIdRequest.md)
 - [SetNetworkIdNameRequest](docs/models/SetNetworkIdNameRequest.md)
 - [SetOtaStatusRequest](docs/models/SetOtaStatusRequest.md)
 - [SetRoutingPolicy200Response](docs/models/SetRoutingPolicy200Response.md)
 - [SetRoutingPolicyForNetworkIdRequest](docs/models/SetRoutingPolicyForNetworkIdRequest.md)
 - [SetRoutingPolicyRequest](docs/models/SetRoutingPolicyRequest.md)
 - [SetUserGroups201Response](docs/models/SetUserGroups201Response.md)
 - [SettlementRequestBody](docs/models/SettlementRequestBody.md)
 - [SettlementResponse](docs/models/SettlementResponse.md)
 - [SignedMessage](docs/models/SignedMessage.md)
 - [SignedMessageSignature](docs/models/SignedMessageSignature.md)
 - [SmartTransferBadRequestResponse](docs/models/SmartTransferBadRequestResponse.md)
 - [SmartTransferCreateTicketDto](docs/models/SmartTransferCreateTicketDto.md)
 - [SmartTransferCreateTicketTermDto](docs/models/SmartTransferCreateTicketTermDto.md)
 - [SmartTransferForbiddenResponse](docs/models/SmartTransferForbiddenResponse.md)
 - [SmartTransferFundTermDto](docs/models/SmartTransferFundTermDto.md)
 - [SmartTransferManuallyFundTermDto](docs/models/SmartTransferManuallyFundTermDto.md)
 - [SmartTransferNotFoundResponse](docs/models/SmartTransferNotFoundResponse.md)
 - [SmartTransferSetTicketExpirationDto](docs/models/SmartTransferSetTicketExpirationDto.md)
 - [SmartTransferSetTicketExternalIdDto](docs/models/SmartTransferSetTicketExternalIdDto.md)
 - [SmartTransferSetUserGroupsDto](docs/models/SmartTransferSetUserGroupsDto.md)
 - [SmartTransferSubmitTicketDto](docs/models/SmartTransferSubmitTicketDto.md)
 - [SmartTransferTicketDto](docs/models/SmartTransferTicketDto.md)
 - [SmartTransferTicketFilteredResponseDto](docs/models/SmartTransferTicketFilteredResponseDto.md)
 - [SmartTransferTicketResponseDto](docs/models/SmartTransferTicketResponseDto.md)
 - [SmartTransferTicketResponseDtoData](docs/models/SmartTransferTicketResponseDtoData.md)
 - [SmartTransferTicketTermDto](docs/models/SmartTransferTicketTermDto.md)
 - [SmartTransferTicketTermResponseDto](docs/models/SmartTransferTicketTermResponseDto.md)
 - [SmartTransferTicketTermResponseDtoData](docs/models/SmartTransferTicketTermResponseDtoData.md)
 - [SmartTransferUpdateTicketTermDto](docs/models/SmartTransferUpdateTicketTermDto.md)
 - [SmartTransferUserGroupsDto](docs/models/SmartTransferUserGroupsDto.md)
 - [SmartTransferUserGroupsResponseDto](docs/models/SmartTransferUserGroupsResponseDto.md)
 - [SmartTransferUserGroupsResponseDtoData](docs/models/SmartTransferUserGroupsResponseDtoData.md)
 - [SolanaBlockchainDataDto](docs/models/SolanaBlockchainDataDto.md)
 - [SourceTransferPeerPathResponse](docs/models/SourceTransferPeerPathResponse.md)
 - [SpamOwnershipResponse](docs/models/SpamOwnershipResponse.md)
 - [SpamTokenResponse](docs/models/SpamTokenResponse.md)
 - [SrcOrDestAttributesInner](docs/models/SrcOrDestAttributesInner.md)
 - [StakeRequestDto](docs/models/StakeRequestDto.md)
 - [StakeResponseDto](docs/models/StakeResponseDto.md)
 - [SystemMessageInfo](docs/models/SystemMessageInfo.md)
 - [Task](docs/models/Task.md)
 - [ToCollateralTransaction](docs/models/ToCollateralTransaction.md)
 - [ToExchangeTransaction](docs/models/ToExchangeTransaction.md)
 - [TokenCollectionResponse](docs/models/TokenCollectionResponse.md)
 - [TokenOwnershipResponse](docs/models/TokenOwnershipResponse.md)
 - [TokenOwnershipSpamUpdatePayload](docs/models/TokenOwnershipSpamUpdatePayload.md)
 - [TokenOwnershipStatusUpdatePayload](docs/models/TokenOwnershipStatusUpdatePayload.md)
 - [TokenResponse](docs/models/TokenResponse.md)
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
 - [TransferPeerPath](docs/models/TransferPeerPath.md)
 - [TravelRuleAddress](docs/models/TravelRuleAddress.md)
 - [TravelRuleConfigurationsRequest](docs/models/TravelRuleConfigurationsRequest.md)
 - [TravelRuleCreateTransactionRequest](docs/models/TravelRuleCreateTransactionRequest.md)
 - [TravelRuleGetAllVASPsResponse](docs/models/TravelRuleGetAllVASPsResponse.md)
 - [TravelRuleIssuer](docs/models/TravelRuleIssuer.md)
 - [TravelRuleIssuers](docs/models/TravelRuleIssuers.md)
 - [TravelRuleOwnershipProof](docs/models/TravelRuleOwnershipProof.md)
 - [TravelRulePiiIVMS](docs/models/TravelRulePiiIVMS.md)
 - [TravelRulePolicyResponse](docs/models/TravelRulePolicyResponse.md)
 - [TravelRulePolicyRuleResponse](docs/models/TravelRulePolicyRuleResponse.md)
 - [TravelRuleProviderRulesConfigurationResponse](docs/models/TravelRuleProviderRulesConfigurationResponse.md)
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
 - [UpdateDraftRequest](docs/models/UpdateDraftRequest.md)
 - [UpdateTokenOwnershipStatusDto](docs/models/UpdateTokenOwnershipStatusDto.md)
 - [UpdateVaultAccountAssetAddressRequest](docs/models/UpdateVaultAccountAssetAddressRequest.md)
 - [UpdateVaultAccountRequest](docs/models/UpdateVaultAccountRequest.md)
 - [UserGroupCreateRequest](docs/models/UserGroupCreateRequest.md)
 - [UserGroupCreateResponse](docs/models/UserGroupCreateResponse.md)
 - [UserGroupResponse](docs/models/UserGroupResponse.md)
 - [UserGroupUpdateRequest](docs/models/UserGroupUpdateRequest.md)
 - [UserResponse](docs/models/UserResponse.md)
 - [ValidateAddressResponse](docs/models/ValidateAddressResponse.md)
 - [ValidatorDto](docs/models/ValidatorDto.md)
 - [VaultAccount](docs/models/VaultAccount.md)
 - [VaultAccountsPagedResponse](docs/models/VaultAccountsPagedResponse.md)
 - [VaultAccountsPagedResponsePaging](docs/models/VaultAccountsPagedResponsePaging.md)
 - [VaultAsset](docs/models/VaultAsset.md)
 - [VaultWalletAddress](docs/models/VaultWalletAddress.md)
 - [WalletAsset](docs/models/WalletAsset.md)
 - [WalletAssetAdditionalInfo](docs/models/WalletAssetAdditionalInfo.md)
 - [WithdrawRequestDto](docs/models/WithdrawRequestDto.md)



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

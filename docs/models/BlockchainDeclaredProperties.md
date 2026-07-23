# BlockchainDeclaredProperties

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**chainName** | **string** | Human-readable name of the blockchain. | [default to undefined]|
|**chainId** | **number** | EVM chain ID of the blockchain. | [default to undefined]|
|**symbolName** | **string** | Native asset symbol of the blockchain. | [default to undefined]|
|**rpcUrls** | **Array&lt;string&gt;** | RPC endpoint URLs for the blockchain. | [default to undefined]|
|**environmentType** | **string** | Network environment (mainnet or testnet). | [default to undefined]|
|**decimals** | **number** | Number of decimals for the native asset. | [optional] [default to undefined]|
|**blockExplorerUrl** | **string** | Base URL of the block explorer. | [optional] [default to undefined]|
|**blockExplorerTransactionPath** | **string** | Path template for a transaction on the block explorer. | [optional] [default to undefined]|
|**blockExplorerAddressPath** | **string** | Path template for an address on the block explorer. | [optional] [default to undefined]|
|**networkId** | **number** | EVM network ID of the blockchain. | [optional] [default to undefined]|
|**hasFee** | **boolean** | Whether the blockchain charges transaction fees. | [optional] [default to undefined]|
|**isPoa** | **boolean** | Whether the blockchain uses proof-of-authority consensus. | [optional] [default to undefined]|
|**hasLayeredFee** | **boolean** | Whether the blockchain uses a layered fee model. | [optional] [default to undefined]|
|**nodeType** | **string** | Node client type for the blockchain. | [optional] [default to undefined]|
|**transactionFormat** | **number** | Transaction format identifier. | [optional] [default to undefined]|
|**baseAssetTenantIds** | **Array&lt;string&gt;** | Tenant IDs that share this base asset. | [optional] [default to undefined]|
|**explorerApiUrl** | **string** | Block explorer API base URL. | [optional] [default to undefined]|
|**explorerApiKey** | **string** | API key for the block explorer API. | [optional] [default to undefined]|
|**isTraceEnabled** | **boolean** | Whether trace/debug RPC methods are enabled. | [optional] [default to undefined]|
|**rpcAuth** | [**BlockchainRpcAuth**](BlockchainRpcAuth.md) |  | [optional] [default to undefined]|


## Enum: BlockchainDeclaredPropertiesEnvironmentTypeEnum


* `Mainnet` (value: `'ENVIRONMENT_TYPE_MAINNET'`)

* `Testnet` (value: `'ENVIRONMENT_TYPE_TESTNET'`)



## Enum: BlockchainDeclaredPropertiesNodeTypeEnum


* `CoreGeth` (value: `'NODE_TYPE_CORE_GETH'`)

* `Fantom` (value: `'NODE_TYPE_FANTOM'`)

* `Erigon` (value: `'NODE_TYPE_ERIGON'`)

* `Parity` (value: `'NODE_TYPE_PARITY'`)

* `Besu` (value: `'NODE_TYPE_BESU'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

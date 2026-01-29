# OnchainTransaction

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Unique identifier for the transaction | [default to undefined]|
|**baseAssetId** | **string** | The blockchain base asset identifier | [default to undefined]|
|**blockHash** | **string** | Hash of the block containing this transaction | [default to undefined]|
|**blockNumber** | **number** | Block number containing this transaction | [default to undefined]|
|**blockTimestamp** | **string** | Timestamp when the block was mined | [default to undefined]|
|**chainId** | **number** | Chain ID of the blockchain | [default to undefined]|
|**cumulativeGasUsed** | **string** | Cumulative gas used in the block up to this transaction | [default to undefined]|
|**effectiveGasPrice** | **string** | Effective gas price paid for the transaction | [default to undefined]|
|**fromAddress** | **string** | Address that initiated the transaction | [default to undefined]|
|**gasUsed** | **string** | Amount of gas used by this transaction | [default to undefined]|
|**status** | **string** | Transaction status | [default to undefined]|
|**transactionHash** | **string** | Hash of the transaction | [default to undefined]|
|**transactionIndex** | **string** | Index of the transaction in the block | [default to undefined]|
|**type** | **string** | Transaction type | [default to undefined]|
|**contractAddress** | **string** | Contract address if this is a contract transaction | [optional] [default to undefined]|
|**decodedLogs** | [**DecodedLog**](DecodedLog.md) |  | [optional] [default to undefined]|
|**toAddress** | **string** | Address that received the transaction | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

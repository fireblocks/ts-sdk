# TransactionReceiptResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**blockHash** | **string** | The block hash | [default to undefined]|
|**blockNumber** | **number** | The block number | [default to undefined]|
|**cumulativeGasUsed** | **number** | The cumulative gas used in the transaction | [default to undefined]|
|**effectiveGasPrice** | **number** | The effective gas price | [default to undefined]|
|**from** | **string** | Sender address | [default to undefined]|
|**gasUsed** | **number** | Gas used by the transaction | [default to undefined]|
|**logs** | [**Array&lt;TxLog&gt;**](TxLog.md) | Array of transaction logs | [default to undefined]|
|**logsBloom** | **string** | Logs bloom filter | [default to undefined]|
|**status** | **number** | Transaction status (1 for success, 0 for failure) | [default to undefined]|
|**transactionHash** | **string** | The transaction hash | [default to undefined]|
|**transactionIndex** | **number** | Transaction index in the block | [default to undefined]|
|**type** | **string** | Type of transaction | [default to undefined]|
|**contractAddress** | **string** | The address of deployed contract | [optional] [default to undefined]|
|**to** | **string** | Recipient address | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

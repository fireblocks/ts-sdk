# Quote

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**via** | [**AccessType**](AccessType.md) |  | [default to undefined]|
|**id** | **string** |  | [default to undefined]|
|**type** | **string** | Indicates this is an indicative quote | [default to undefined]|
|**quoteAssetId** | **string** |  | [default to undefined]|
|**baseAssetId** | **string** |  | [default to undefined]|
|**baseAmount** | **string** |  | [default to undefined]|
|**quoteAmount** | **string** |  | [default to undefined]|
|**side** | **string** | Side of the order | [default to undefined]|
|**expiresAt** | **string** | ISO 8601 timestamp of the expiration time of the quote. | [default to undefined]|
|**priceImpact** | **number** |  | [optional] [default to undefined]|
|**quoteMinAmount** | **string** |  | [optional] [default to undefined]|
|**executionSteps** | [**Array&lt;ExecutionStepDetails&gt;**](ExecutionStepDetails.md) |  | [optional] [default to undefined]|
|**generalFees** | [**Array&lt;Fee&gt;**](Fee.md) |  | [optional] [default to undefined]|


## Enum: QuoteTypeEnum


* `Indicative` (value: `'INDICATIVE'`)



## Enum: QuoteSideEnum


* `Buy` (value: `'BUY'`)

* `Sell` (value: `'SELL'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

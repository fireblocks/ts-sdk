# QuoteExecutionResponseDetails

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**side** | **string** | Side of the order | [default to SideEnum_Buy]|
|**baseAmount** | **string** | Amount to convert | [default to undefined]|
|**baseAssetId** | **string** | Source asset identifier | [default to undefined]|
|**quoteAssetId** | **string** | Target asset identifier | [default to undefined]|
|**type** | **string** | Order type for quote orders | [default to undefined]|
|**quoteId** | **string** | Quote ID for quote orders | [default to undefined]|
|**quoteAmount** | **string** | Quote amount for quote orders | [default to undefined]|
|**baseAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**quoteAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|


## Enum: QuoteExecutionResponseDetailsSideEnum


* `Buy` (value: `'BUY'`)

* `Sell` (value: `'SELL'`)



## Enum: QuoteExecutionResponseDetailsTypeEnum


* `Quote` (value: `'QUOTE'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

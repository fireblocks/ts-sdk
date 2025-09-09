# ExecutionRequestDetails

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | **string** | Order type for limit orders | [default to undefined]|
|**timeInForce** | [**TimeInForce**](TimeInForce.md) |  | [default to undefined]|
|**limitPrice** | **string** | Price for limit orders | [default to undefined]|
|**side** | **string** | Side of the order | [default to SideEnum_Buy]|
|**baseAmount** | **string** | Amount to convert | [default to undefined]|
|**baseAssetId** | **string** | Source asset identifier | [default to undefined]|
|**quoteAssetId** | **string** | Target asset identifier | [default to undefined]|
|**quoteId** | **string** | Quote ID for quote orders | [default to undefined]|
|**baseAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**quoteAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**reQuote** | [**QuoteExecutionWithRequoteRequestDetailsAllOfReQuote**](QuoteExecutionWithRequoteRequestDetailsAllOfReQuote.md) |  | [optional] [default to undefined]|


## Enum: ExecutionRequestDetailsTypeEnum


* `Limit` (value: `'LIMIT'`)

* `Market` (value: `'MARKET'`)

* `Quote` (value: `'QUOTE'`)



## Enum: ExecutionRequestDetailsSideEnum


* `Buy` (value: `'BUY'`)

* `Sell` (value: `'SELL'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

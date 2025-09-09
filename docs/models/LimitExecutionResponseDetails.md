# LimitExecutionResponseDetails

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**side** | **string** | Side of the order | [default to SideEnum_Buy]|
|**baseAmount** | **string** | Amount to convert | [default to undefined]|
|**baseAssetId** | **string** | Source asset identifier | [default to undefined]|
|**quoteAssetId** | **string** | Target asset identifier | [default to undefined]|
|**type** | **string** | Order type for limit orders | [default to undefined]|
|**timeInForce** | [**TimeInForce**](TimeInForce.md) |  | [default to undefined]|
|**limitPrice** | **string** | Price for limit orders | [default to undefined]|
|**baseAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**quoteAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|


## Enum: LimitExecutionResponseDetailsSideEnum


* `Buy` (value: `'BUY'`)

* `Sell` (value: `'SELL'`)



## Enum: LimitExecutionResponseDetailsTypeEnum


* `Limit` (value: `'LIMIT'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

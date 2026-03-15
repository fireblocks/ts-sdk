# ExecutionRequestDetails

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | [**QuoteTypeEnum**](QuoteTypeEnum.md) |  | [default to undefined]|
|**side** | [**Side**](Side.md) |  | [default to undefined]|
|**baseAmount** | **string** | Amount in baseAssetId. BUY &#x3D; base amount to receive; SELL &#x3D; base amount to sell. | [default to undefined]|
|**baseAssetId** | **string** | The asset you receive on BUY / give on SELL. | [default to undefined]|
|**quoteAssetId** | **string** | Counter asset used to pay/receive | [default to undefined]|
|**quoteId** | **string** | Quote ID for quote orders | [default to undefined]|
|**baseAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**quoteAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**reQuote** | [**ReQuoteDetailsReQuote**](ReQuoteDetailsReQuote.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

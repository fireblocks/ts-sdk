# RateOffer

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**via** | [**AccessType**](AccessType.md) |  | [default to undefined]|
|**baseAssetId** | **string** | The source asset identifier | [default to undefined]|
|**quoteAssetId** | **string** | The target asset identifier | [default to undefined]|
|**rate** | **string** | The indicative exchange rate — the number of units of the quote asset that equal 1 unit of the base asset. For example, if base is BTC and quote is USD, a rate of 75000 means 1 BTC &#x3D; 75,000 USD. | [default to undefined]|
|**offerType** | **string** | The type of offer — RATE for indicative pricing. | [default to undefined]|
|**baseAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**quoteAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|


## Enum: RateOfferOfferTypeEnum


* `Rate` (value: `'RATE'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

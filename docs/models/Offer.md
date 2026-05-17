# Offer

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**via** | [**AccessType**](AccessType.md) |  | [default to undefined]|
|**baseAssetId** | **string** | The source asset identifier. | [default to undefined]|
|**quoteAssetId** | **string** | The target asset identifier. | [default to undefined]|
|**rate** | **string** | The indicative exchange rate — the number of units of the quote asset that equal 1 unit of the base asset. For example, if base is BTC and quote is USD, a rate of 75000 means 1 BTC &#x3D; 75,000 USD. | [default to undefined]|
|**offerType** | **string** | The type of offer — QUOTE for executable committed quotes. | [default to undefined]|
|**id** | **string** | The unique identifier of the quote. | [default to undefined]|
|**baseAmount** | **string** | The amount of the base asset. | [default to undefined]|
|**quoteAmount** | **string** | The amount of the quote asset. | [default to undefined]|
|**side** | [**Side**](Side.md) |  | [default to undefined]|
|**expiresAt** | **string** | The expiration time of the quote in ISO 8601 format. | [default to undefined]|
|**type** | **string** | The type of the quote. | [default to undefined]|
|**baseAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**quoteAssetRail** | [**TransferRail**](TransferRail.md) |  | [optional] [default to undefined]|
|**priceImpact** | **number** | The estimated price impact as a decimal fraction. | [optional] [default to undefined]|
|**quoteMinAmount** | **string** | The minimum guaranteed amount of the quote asset. | [optional] [default to undefined]|
|**isSlippageApplied** | **boolean** | Indicates if slippage was applied to the quote. | [optional] [default to false]|
|**executionSteps** | [**Array&lt;QuoteExecutionStep&gt;**](QuoteExecutionStep.md) | Ordered list of execution steps for the quote. | [optional] [default to undefined]|
|**generalFees** | [**Array&lt;Fee&gt;**](Fee.md) | General fees associated with the quote. | [optional] [default to undefined]|
|**orderCreationRequirements** | **string** | A JSON Schema Draft-7 document in string format describing the fields required when creating an order so clients can validate their order payload before sending.  | [optional] [default to undefined]|


## Enum: OfferOfferTypeEnum


* `Quote` (value: `'QUOTE'`)



## Enum: OfferTypeEnum


* `Committed` (value: `'COMMITTED'`)

* `Indicative` (value: `'INDICATIVE'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

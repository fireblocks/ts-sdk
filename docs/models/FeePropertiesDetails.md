# FeePropertiesDetails

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**feeType** | **string** | The type of fee, such as ORDER, NETWORK, or SPREAD. ORDER - Fee for executing the order. NETWORK - Fee for network transactions. SPREAD - Fee for the difference between buy and sell prices.  | [default to undefined]|
|**assetId** | **string** | The asset identifier for the fee. | [default to undefined]|
|**amountType** | **string** | The type of amount for the fee, either FIXED or BPS (basis points). | [default to undefined]|


## Enum: FeePropertiesDetailsFeeTypeEnum


* `Order` (value: `'ORDER'`)

* `Network` (value: `'NETWORK'`)

* `Spread` (value: `'SPREAD'`)



## Enum: FeePropertiesDetailsAmountTypeEnum


* `Fixed` (value: `'FIXED'`)

* `Bps` (value: `'BPS'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

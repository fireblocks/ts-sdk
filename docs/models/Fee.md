# Fee

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**feeType** | **string** | The type of fee, such as ORDER, NETWORK, or SPREAD. ORDER - Fee for executing the order. NETWORK - Fee for network transactions. SPREAD - Fee for the difference between buy and sell prices.  | [default to undefined]|
|**assetId** | **string** | The asset identifier for the fee. | [default to undefined]|
|**amountType** | **string** |  | [default to undefined]|
|**amount** | **number** | Fee in basis points (1 &#x3D; 0.01%, 10000 &#x3D; 100%) | [default to undefined]|


## Enum: FeeFeeTypeEnum


* `Order` (value: `'ORDER'`)

* `Network` (value: `'NETWORK'`)

* `Spread` (value: `'SPREAD'`)



## Enum: FeeAmountTypeEnum


* `Bps` (value: `'BPS'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

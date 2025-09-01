# DestinationConfig

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | [**AccountType2**](AccountType2.md) |  | [default to undefined]|
|**operator** | [**PolicyOperator**](PolicyOperator.md) |  | [default to undefined]|
|**addressType** | **string** | Type of destination addresses allowed | [default to undefined]|
|**subType** | [**Array&lt;AccountIdentifier&gt;**](AccountIdentifier.md) |  | [optional] [default to undefined]|
|**ids** | [**Array&lt;AccountIdentifier&gt;**](AccountIdentifier.md) |  | [optional] [default to undefined]|
|**matchFrom** | **string** | Whether to match from account or source | [optional] [default to undefined]|


## Enum: DestinationConfigAddressTypeEnum


* `All` (value: `'ALL'`)

* `Star` (value: `'*'`)

* `Whitelisted` (value: `'WHITELISTED'`)

* `OneTime` (value: `'ONE_TIME'`)

* `OecPartner` (value: `'OEC_PARTNER'`)



## Enum: DestinationConfigMatchFromEnum


* `Account` (value: `'ACCOUNT'`)

* `Source` (value: `'SOURCE'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

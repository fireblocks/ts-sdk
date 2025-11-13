# DestinationConfig

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**operator** | [**PolicyOperator**](PolicyOperator.md) |  | [default to undefined]|
|**addressType** | **string** | Type of destination addresses allowed | [default to undefined]|
|**type** | [**Array&lt;AccountType2&gt;**](AccountType2.md) | Destination account types | [optional] [default to undefined]|
|**subType** | [**Array&lt;AccountIdentifier&gt;**](AccountIdentifier.md) |  | [optional] [default to undefined]|
|**ids** | [**Array&lt;AccountIdentifier&gt;**](AccountIdentifier.md) |  | [optional] [default to undefined]|
|**tags** | [**Array&lt;PolicyTag&gt;**](PolicyTag.md) | Tags for destination matching | [optional] [default to undefined]|
|**matchFrom** | **string** | Whether to match from account or source (relevant only for ORDER policy type). If set to ACCOUNT, only matchFrom is allowed and other fields are not required. | [optional] [default to undefined]|


## Enum: DestinationConfigAddressTypeEnum


* `Star` (value: `'*'`)

* `Whitelisted` (value: `'WHITELISTED'`)

* `OneTime` (value: `'ONE_TIME'`)



## Enum: DestinationConfigMatchFromEnum


* `Account` (value: `'ACCOUNT'`)

* `Source` (value: `'SOURCE'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# AbiFunction

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | **string** | The type if the function | [default to undefined]|
|**inputs** | [**Array&lt;Parameter&gt;**](Parameter.md) | The parameters that this function/constructor posses | [default to undefined]|
|**name** | **string** | The name of the contract function as it appears in the ABI | [optional] [default to undefined]|
|**stateMutability** | **string** | The state mutability of the contract function as it appears in the ABI | [optional] [default to undefined]|
|**outputs** | [**Array&lt;Parameter&gt;**](Parameter.md) | The parameters that this \&#39;read\&#39; function returns | [optional] [default to undefined]|
|**description** | **string** | The documentation of this function (if has any) | [optional] [default to undefined]|


## Enum: AbiFunctionTypeEnum


* `Function` (value: `'function'`)

* `Constructor` (value: `'constructor'`)



## Enum: AbiFunctionStateMutabilityEnum


* `Pure` (value: `'pure'`)

* `View` (value: `'view'`)

* `Nonpayable` (value: `'nonpayable'`)

* `Payable` (value: `'payable'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

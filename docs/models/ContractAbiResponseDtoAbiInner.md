# ContractAbiResponseDtoAbiInner

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**name** | **string** | The name of the instruction | [default to undefined]|
|**type** | **string** | The type of the function | [default to undefined]|
|**discriminator** | **Array&lt;number&gt;** | The discriminator for the instruction. Acts as a function selector | [default to undefined]|
|**accounts** | [**Array&lt;SOLAccount&gt;**](SOLAccount.md) |  | [default to undefined]|
|**args** | [**Array&lt;SolParameter&gt;**](SolParameter.md) |  | [default to undefined]|
|**stateMutability** | **string** | The state mutability of the contract function as it appears in the ABI | [optional] [default to undefined]|
|**inputs** | [**Array&lt;Parameter&gt;**](Parameter.md) | The parameters that this function/constructor posses | [optional] [default to undefined]|
|**outputs** | [**Array&lt;Parameter&gt;**](Parameter.md) | The parameters that this \&#39;read\&#39; function returns | [optional] [default to undefined]|
|**description** | **string** | The documentation of this function (if has any) | [optional] [default to undefined]|


## Enum: ContractAbiResponseDtoAbiInnerTypeEnum


* `Constructor` (value: `'constructor'`)

* `Function` (value: `'function'`)

* `Error` (value: `'error'`)

* `Event` (value: `'event'`)

* `Receive` (value: `'receive'`)

* `Fallback` (value: `'fallback'`)



## Enum: ContractAbiResponseDtoAbiInnerStateMutabilityEnum


* `Pure` (value: `'pure'`)

* `View` (value: `'view'`)

* `Nonpayable` (value: `'nonpayable'`)

* `Payable` (value: `'payable'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

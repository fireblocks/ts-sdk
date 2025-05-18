# WriteCallFunctionDtoAbiFunction

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**stateMutability** | **string** |  | [default to undefined]|
|**type** | **string** |  | [default to undefined]|
|**name** | **string** | The name of the instruction | [default to undefined]|
|**inputs** | [**Array&lt;ParameterWithValue&gt;**](ParameterWithValue.md) |  | [default to undefined]|
|**discriminator** | **Array&lt;number&gt;** | The discriminator for the instruction. Acts as a function selector | [default to undefined]|
|**accounts** | [**Array&lt;SOLAccountWithValue&gt;**](SOLAccountWithValue.md) |  | [default to undefined]|
|**args** | [**Array&lt;SolParameterWithValue&gt;**](SolParameterWithValue.md) | The arguments of the instruction | [default to undefined]|
|**outputs** | [**Array&lt;Parameter&gt;**](Parameter.md) |  | [optional] [default to undefined]|
|**description** | **string** |  | [optional] [default to undefined]|


## Enum: WriteCallFunctionDtoAbiFunctionStateMutabilityEnum


* `Payable` (value: `'payable'`)

* `Nonpayable` (value: `'nonpayable'`)



## Enum: WriteCallFunctionDtoAbiFunctionTypeEnum


* `Function` (value: `'function'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# ParameterWithValue

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**name** | **string** | The name of the parameter as it appears in the ABI | [default to undefined]|
|**type** | **string** | The type of the parameter as it appears in the ABI | [default to undefined]|
|**description** | **string** | A description of the parameter, fetched from the devdoc of this contract | [optional] [default to undefined]|
|**internalType** | **string** | The  internal type of the parameter as it appears in the ABI | [optional] [default to undefined]|
|**components** | [**Array&lt;Parameter&gt;**](Parameter.md) |  | [optional] [default to undefined]|
|**value** | **any** | The value of the parameter. The shape follows the ABI &#x60;type&#x60;: a string for &#x60;string&#x60;/&#x60;address&#x60;/&#x60;bytes*&#x60;, a number for &#x60;uint*&#x60;/&#x60;int*&#x60;, a boolean for &#x60;bool&#x60;, an array for &#x60;T[]&#x60;, and for &#x60;tuple&#x60; an array of nested ParameterWithValue objects (one per entry in &#x60;components&#x60;, in ABI order). | [optional] [default to undefined]|
|**functionValue** | [**LeanAbiFunction**](LeanAbiFunction.md) | The function value of this param (if has one). If this is set, the &#x60;value&#x60; shouldn&#x60;t be. Used for proxies | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

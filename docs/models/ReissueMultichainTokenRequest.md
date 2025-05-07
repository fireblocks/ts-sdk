# ReissueMultichainTokenRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**vaultAccountId** | **string** | The id of the vault account that initiated the request to issue the token | [default to undefined]|
|**chains** | **Array&lt;string&gt;** | The base asset identifiers of the blockchains you want to deploy to | [default to undefined]|
|**useGasless** | **boolean** | Whether to use gasless deployment or not | [optional] [default to undefined]|
|**fee** | **string** | Max fee amount for the deploy request. Interchangeable with the \&#39;feeLevel\&#39; field | [optional] [default to undefined]|
|**feeLevel** | **string** | Fee level for the deploy request. Interchangeable with the \&#39;fee\&#39; field | [optional] [default to undefined]|


## Enum: ReissueMultichainTokenRequestFeeLevelEnum


* `Low` (value: `'LOW'`)

* `Medium` (value: `'MEDIUM'`)

* `High` (value: `'HIGH'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

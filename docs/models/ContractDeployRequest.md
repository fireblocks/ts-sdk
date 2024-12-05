# ContractDeployRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**assetId** | **string** | The base asset identifier of the blockchain you want to deploy to | [default to undefined]|
|**vaultAccountId** | **string** | The vault account id you wish to deploy from | [default to undefined]|
|**constructorParameters** | [**Array&lt;ParameterWithValue&gt;**](ParameterWithValue.md) | The constructor parameters of this contract | [optional] [default to undefined]|
|**useGasless** | **boolean** | Indicates whether the token should be created in a gasless manner, utilizing the ERC-2771 standard. When set to true, the transaction will be relayed by a designated relayer. The workspace must be configured to use Fireblocks gasless relay. | [optional] [default to undefined]|
|**fee** | **string** | Max fee amount for the write function transaction. interchangeable with the \&#39;feeLevel\&#39; field | [optional] [default to undefined]|
|**feeLevel** | **string** | Fee level for the write function transaction. interchangeable with the \&#39;fee\&#39; field | [optional] [default to undefined]|


## Enum: ContractDeployRequestFeeLevelEnum


* `Low` (value: `'LOW'`)

* `Medium` (value: `'MEDIUM'`)

* `High` (value: `'HIGH'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

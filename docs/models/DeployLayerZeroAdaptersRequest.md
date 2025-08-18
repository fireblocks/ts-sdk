# DeployLayerZeroAdaptersRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**vaultAccountId** | **string** | The id of the vault account that initiated the request to deploy adapter for the token | [default to undefined]|
|**createParams** | [**Array&lt;LayerZeroAdapterCreateParams&gt;**](LayerZeroAdapterCreateParams.md) | Array of creation parameters for LayerZero adapters, one per tokenLink. | [default to undefined]|
|**displayName** | **string** | The display name of the contract | [optional] [default to undefined]|
|**useGasless** | **boolean** | Whether to use gasless deployment or not | [optional] [default to undefined]|
|**feeLevel** | **string** | Fee level for the write function transaction. interchangeable with the \&#39;fee\&#39; field | [optional] [default to undefined]|
|**fee** | **string** | Max fee amount for the write function transaction. interchangeable with the \&#39;feeLevel\&#39; field | [optional] [default to undefined]|
|**salt** | **string** | The salt to calculate the deterministic address. Must be a number between 0 and 2^256 -1, for it to fit in the bytes32 parameter | [optional] [default to undefined]|


## Enum: DeployLayerZeroAdaptersRequestFeeLevelEnum


* `Low` (value: `'LOW'`)

* `Medium` (value: `'MEDIUM'`)

* `High` (value: `'HIGH'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

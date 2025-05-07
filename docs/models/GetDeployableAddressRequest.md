# GetDeployableAddressRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**chainDescriptor** | **string** | The base asset identifier of the blockchain (legacyId) to calculate deterministic address | [default to undefined]|
|**templateId** | **string** | The template identifier | [default to undefined]|
|**initParams** | [**Array&lt;ParameterWithValue&gt;**](ParameterWithValue.md) | The deploy function parameters and values of the contract template | [default to undefined]|
|**salt** | **string** | The salt to calculate the deterministic address. Must be a number between 0 and 2^256 -1, for it to fit in the bytes32 parameter | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

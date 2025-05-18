# CreateTokenRequestDtoCreateParams

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**contractId** | **string** | The id of the contract template that will be used to create the token | [default to undefined]|
|**symbol** | **string** | The symbol for the token, typically an abbreviated representation. | [default to undefined]|
|**name** | **string** | The name of the token or asset being created. | [default to undefined]|
|**issuerAddress** | **string** | The address of the issuer of this token. Will be part of the identifier of this token on chain. | [default to undefined]|
|**decimals** | **number** | The number of decimal places the token supports (e.g., 9 for typical Solana tokens). | [default to undefined]|
|**deployFunctionParams** | [**Array&lt;ParameterWithValue&gt;**](ParameterWithValue.md) | The deploy function parameters and values of the contract template | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

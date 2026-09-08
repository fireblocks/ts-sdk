# AccessTypeResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | **string** | Indicates this uses account-based access | [default to undefined]|
|**providerId** | **string** | The ID of the provider | [default to undefined]|
|**accountId** | **string** | The ID of the account | [default to undefined]|
|**subProviders** | **Array&lt;string&gt;** | The underlying providers or tools that this direct-access route is composed of, in execution order. Response-only: this field is populated by the server and is never accepted from client requests. | [optional] [default to undefined]|


## Enum: AccessTypeResponseTypeEnum


* `ProviderAccount` (value: `'PROVIDER_ACCOUNT'`)

* `Provider` (value: `'PROVIDER'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

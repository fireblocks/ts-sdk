# EarnProvider

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**providerId** | **string** | Stable protocol identifier (&#x60;MORPHO&#x60; or &#x60;AAVE&#x60;). | [optional] [default to undefined]|
|**displayName** | **string** | Human-readable protocol name for UI. | [optional] [default to undefined]|
|**logoUrl** | **string** | URL for the provider logo asset. | [optional] [default to undefined]|
|**supportedChainIds** | **Array&lt;number&gt;** | EVM chain IDs where this provider is supported. | [optional] [default to undefined]|
|**isTermsApprovalRequired** | **boolean** | Whether the user must accept terms before using this provider. | [optional] [default to undefined]|
|**termsOfServiceUrl** | **string** | URL to the provider terms of service, when applicable. | [optional] [default to undefined]|
|**isTermsOfServiceApproved** | **boolean** | Whether terms have been approved for this workspace / context. | [optional] [default to undefined]|


## Enum: EarnProviderProviderIdEnum


* `Morpho` (value: `'MORPHO'`)

* `Aave` (value: `'AAVE'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

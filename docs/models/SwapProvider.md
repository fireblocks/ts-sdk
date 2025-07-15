# SwapProvider

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The uuid that identifies the provider | [default to undefined]|
|**name** | **string** | Name of the provider | [default to undefined]|
|**protocols** | [**Array&lt;SwapProviderProtocolsEnum&gt;**](SwapProviderProtocolsEnum.md) | List of supported protocols. Protocols are specific per provider | [default to undefined]|
|**category** | [**ProviderCategoryEnum**](ProviderCategoryEnum.md) |  | [default to undefined]|
|**isTermsApprovalRequired** | **boolean** | Indicates whether the terms of service are required for the provider. if &#x60;true&#x60;, the user must approve the terms of service before using the provider. otherwise, &#x60;termsOfServiceUrl&#x60; and &#x60;isTermsOfServiceApproved&#x60; are not shown under the provider data. | [default to undefined]|
|**termsOfServiceUrl** | **string** | URL to the terms of service | [optional] [default to undefined]|
|**isTermsOfServiceApproved** | **boolean** | Indicates whether the terms of service are approved by the user | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

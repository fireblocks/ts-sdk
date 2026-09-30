# CantonCallDetails

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**version** | **number** | The shape of this block. Stamped at creation and never changed, so a reader always knows which version it is holding. | [optional] [default to undefined]|
|**domain** | [**CantonDomainEnum**](CantonDomainEnum.md) |  | [optional] [default to undefined]|
|**type** | **string** | The call type, matching the &#x60;type&#x60; sent when the call was created. | [optional] [default to undefined]|
|**vendor** | [**CantonVendorEnum**](CantonVendorEnum.md) |  | [optional] [default to undefined]|
|**originalTransactionId** | **string** | The transaction this call acts on. On a withdraw it is the allocation that was withdrawn, so the withdraw transaction read on its own still says what it withdrew. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

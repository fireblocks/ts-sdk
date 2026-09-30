# UpdateWebhookMtlsConfigRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**name** | **string** | A new label for this mTLS configuration, or &#x60;null&#x60; to remove it. Letters, digits and spaces only. | [optional] [default to undefined]|
|**signedCert** | **string** | A replacement signed certificate PEM. Every webhook and OAuth credentials set using this configuration switches to it, and the private key it was issued for is re-derived from the certificate. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

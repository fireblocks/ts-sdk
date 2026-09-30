# CreateWebhookMtlsConfigRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**signedCert** | **string** | Signed client certificate PEM, issued for the CSR from &#x60;GET /v1/webhooks_settings/mtls_csr&#x60;. The private key it belongs to is derived from the certificate itself. | [default to undefined]|
|**name** | **string** | A label for this mTLS configuration, to tell several certificates apart. Letters, digits and spaces only. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# WebhookOAuth

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**clientId** | **string** | OAuth client ID used to authenticate with the token endpoint. | [default to undefined]|
|**clientSecret** | **string** | OAuth client secret. Write-only — never returned in responses. | [default to undefined]|
|**url** | **string** | Token endpoint URL. Must be HTTPS. | [default to undefined]|
|**mtlsClientSignedCert** | **string** | Signed client certificate PEM used for mTLS when connecting to the token endpoint. Same format as the webhook mTLS certificate. Send &#x60;null&#x60; to remove. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

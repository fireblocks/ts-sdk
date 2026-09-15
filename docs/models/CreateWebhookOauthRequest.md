# CreateWebhookOauthRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**name** | **string** | A label for this credential set, shown when listing them. | [default to undefined]|
|**clientId** | **string** | OAuth client ID used to authenticate with the token endpoint. | [default to undefined]|
|**clientSecret** | **string** | OAuth client secret. Write-only — never returned. Limited to 480 bytes UTF-8 encoded. With &#x60;client_secret_jwt&#x60; it signs the assertion rather than being sent. | [default to undefined]|
|**url** | **string** | Token endpoint URL. HTTPS on port 443 only, and the host must resolve publicly — localhost and private, link-local or loopback addresses are rejected. | [default to undefined]|
|**authMethod** | **string** | How the client credentials reach the token endpoint. &#x60;client_secret_basic&#x60; uses an HTTP Basic header, &#x60;client_secret_post&#x60; uses form fields in the body, and &#x60;client_secret_jwt&#x60; sends a JWT assertion signed with the secret, so the secret itself is never transmitted. Defaults to &#x60;client_secret_basic&#x60;. | [optional] [default to &#39;client_secret_basic&#39;]|
|**customJwtClaims** | [**WebhookOauthCustomJwtClaims**](WebhookOauthCustomJwtClaims.md) |  | [optional] [default to undefined]|
|**customBodyParams** | [**WebhookOauthCustomBodyParams**](WebhookOauthCustomBodyParams.md) |  | [optional] [default to undefined]|
|**customHeaders** | [**WebhookOauthCustomHeaders**](WebhookOauthCustomHeaders.md) |  | [optional] [default to undefined]|
|**mtlsClientSignedCert** | **string** | PEM-encoded client certificate for mTLS when fetching tokens. Must be a valid X.509 certificate inside its validity window. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

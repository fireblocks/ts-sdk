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
|**webhookMtlsId** | **string** | The id of the mTLS configuration presented to the token endpoint, from &#x60;/v1/webhooks_settings/mtls&#x60;. It can be the same configuration a webhook uses, so one certificate, signed from &#x60;GET /v1/webhooks_settings/mtls_csr&#x60;, serves both the token endpoint and the receiver. Omit, or send &#x60;null&#x60;, for a token request without mTLS. Requires the mTLS feature to be enabled for the workspace (&#x60;403&#x60; otherwise), a configuration of this workspace (&#x60;404&#x60; otherwise), and one linked to a private key (&#x60;400&#x60; otherwise). | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

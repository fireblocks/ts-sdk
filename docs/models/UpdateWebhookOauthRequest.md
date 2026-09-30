# UpdateWebhookOauthRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**name** | **string** | A label for this credential set. Omit to leave it unchanged. | [optional] [default to undefined]|
|**clientId** | **string** | OAuth client ID. Omit to leave it unchanged. | [optional] [default to undefined]|
|**clientSecret** | **string** | A new OAuth client secret. Limited to 480 bytes when UTF-8 encoded, so a secret using non-ASCII characters fits fewer than 480 of them. Write-only — never returned in any response. Send this on its own to rotate the secret without changing anything else. Omit to leave it unchanged. | [optional] [default to undefined]|
|**url** | **string** | Token endpoint URL. HTTPS on port 443 only, and the host must resolve publicly. Omit to leave it unchanged. | [optional] [default to undefined]|
|**authMethod** | **string** | &#x60;client_secret_basic&#x60;, &#x60;client_secret_post&#x60; or &#x60;client_secret_jwt&#x60;. Omit to leave it unchanged — it does not revert to the default. | [optional] [default to undefined]|
|**customJwtClaims** | [**WebhookOauthCustomJwtClaimsUpdate**](WebhookOauthCustomJwtClaimsUpdate.md) |  | [optional] [default to undefined]|
|**customBodyParams** | [**WebhookOauthCustomBodyParamsUpdate**](WebhookOauthCustomBodyParamsUpdate.md) |  | [optional] [default to undefined]|
|**customHeaders** | [**WebhookOauthCustomHeadersUpdate**](WebhookOauthCustomHeadersUpdate.md) |  | [optional] [default to undefined]|
|**webhookMtlsId** | **string** | The id of the mTLS configuration presented to the token endpoint, from &#x60;/v1/webhooks_settings/mtls&#x60;. Omit to leave it unchanged, or send &#x60;null&#x60; to stop using mTLS for the token request. Requires the mTLS feature to be enabled for the workspace (&#x60;403&#x60; otherwise), a configuration of this workspace (&#x60;404&#x60; otherwise), and one linked to a private key (&#x60;400&#x60; otherwise). | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

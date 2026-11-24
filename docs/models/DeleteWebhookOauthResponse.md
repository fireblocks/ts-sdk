# DeleteWebhookOauthResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The id of the OAuth credentials. Pass this as a webhook\&#39;s &#x60;webhookOauthId&#x60; to attach them. | [default to undefined]|
|**name** | **string** | The label given to this credential set. | [default to undefined]|
|**clientId** | **string** | OAuth client ID used to authenticate with the token endpoint. | [default to undefined]|
|**url** | **string** | Token endpoint URL. | [default to undefined]|
|**authMethod** | **string** | How the client credentials are presented to the token endpoint: &#x60;client_secret_basic&#x60;, &#x60;client_secret_post&#x60;, &#x60;client_secret_jwt&#x60; or &#x60;private_key_jwt&#x60;. Credentials created without this field report &#x60;client_secret_basic&#x60;, which is what they use. | [default to &#39;client_secret_basic&#39;]|
|**createdAt** | **number** | The date and time the OAuth credentials were created, in milliseconds. | [default to undefined]|
|**updatedAt** | **number** | The date and time the OAuth credentials were last updated, in milliseconds. | [default to undefined]|
|**detachedWebhookIds** | **Array&lt;string&gt;** | Webhooks whose &#x60;webhookOauthId&#x60; was cleared. The webhooks themselves are not deleted and keep delivering, just without an &#x60;Authorization&#x60; header. Empty unless &#x60;forceDelete&#x3D;true&#x60; detached something. | [default to undefined]|
|**signingAlg** | [**WebhookOauthSigningAlg**](WebhookOauthSigningAlg.md) | Algorithm of the key pairs, and of the assertions signed with them. Present only when &#x60;authMethod&#x60; is &#x60;private_key_jwt&#x60;. Which key is signing is never returned; each assertion names it in its &#x60;kid&#x60; header. Defaults to &#x60;RS256&#x60; on create only. | [optional] [default to undefined]|
|**customJwtClaims** | **Array&lt;string&gt;** | Names of the additional claims placed in the JWT assertion. Claim values are write-only and are never returned. Absent when no custom claims are configured. | [optional] [default to undefined]|
|**customBodyParams** | **Array&lt;string&gt;** | Names of the additional parameters added to the token request body. Parameter values are write-only and are never returned. Absent when no custom parameters are configured. | [optional] [default to undefined]|
|**webhookCustomHeadersId** | **string** | The id of the set of custom headers added to **the token request sent to the authorization server** — not to the webhook delivery. Absent when the token request adds none. Header values are write-only and are never returned; read the header names from &#x60;/v1/webhooks_settings/custom_headers/{webhookCustomHeadersId}&#x60;. | [optional] [default to undefined]|
|**webhookMtlsId** | **string** | The id of the mTLS configuration presented to the token endpoint. Absent when the token request does not use mTLS. Read the certificate from &#x60;/v1/webhooks_settings/mtls/{id}&#x60;. | [optional] [default to undefined]|
|**jwksUri** | **string** | The public URL of these credentials\&#39; JWKS. Register it as the client\&#39;s jwks_uri on your authorization server. Present for private_key_jwt only. | [optional] [readonly] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

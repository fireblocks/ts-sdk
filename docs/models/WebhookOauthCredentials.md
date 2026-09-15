# WebhookOauthCredentials

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The id of the OAuth credentials. Pass this as a webhook\&#39;s &#x60;webhookOauthId&#x60; to attach them. | [default to undefined]|
|**name** | **string** | The label given to this credential set. | [default to undefined]|
|**clientId** | **string** | OAuth client ID used to authenticate with the token endpoint. | [default to undefined]|
|**url** | **string** | Token endpoint URL. | [default to undefined]|
|**authMethod** | **string** | How the client credentials are presented to the token endpoint: &#x60;client_secret_basic&#x60;, &#x60;client_secret_post&#x60; or &#x60;client_secret_jwt&#x60;. Credentials created without this field report &#x60;client_secret_basic&#x60;, which is what they use. | [default to &#39;client_secret_basic&#39;]|
|**createdAt** | **number** | The date and time the OAuth credentials were created, in milliseconds. | [default to undefined]|
|**updatedAt** | **number** | The date and time the OAuth credentials were last updated, in milliseconds. | [default to undefined]|
|**customJwtClaims** | **Array&lt;string&gt;** | Names of the additional claims placed in the JWT assertion. Claim values are write-only and are never returned. Absent when no custom claims are configured. | [optional] [default to undefined]|
|**customBodyParams** | **Array&lt;string&gt;** | Names of the additional parameters added to the token request body. Parameter values are write-only and are never returned. Absent when no custom parameters are configured. | [optional] [default to undefined]|
|**customHeaders** | **Array&lt;string&gt;** | Names of the additional HTTP headers added to **the token request sent to the authorization server** — not to the webhook delivery, which has its own separate &#x60;customHeaders&#x60;. Header values are write-only and are never returned. Absent when no custom headers are configured. | [optional] [default to undefined]|
|**mtlsClientSignedCert** | **string** | PEM-encoded client certificate used for mTLS when fetching OAuth tokens. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

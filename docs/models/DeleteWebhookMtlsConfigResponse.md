# DeleteWebhookMtlsConfigResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The unique identifier of the mTLS configuration, to be set as &#x60;webhookMtlsId&#x60; on a webhook or on OAuth credentials. | [default to undefined]|
|**signedCert** | **string** | The signed client certificate PEM. | [default to undefined]|
|**expiresAt** | **number** | When the certificate itself expires, in milliseconds since the epoch. | [default to undefined]|
|**createdAt** | **number** | When the certificate was uploaded, in milliseconds since the epoch. | [default to undefined]|
|**updatedAt** | **number** | When this configuration was last changed, in milliseconds since the epoch. Differs from createdAt once the certificate has been replaced or the configuration renamed. | [default to undefined]|
|**detachedWebhookIds** | **Array&lt;string&gt;** | Webhooks whose &#x60;webhookMtlsId&#x60; was cleared. The webhooks themselves are not deleted and keep delivering, just without a client certificate. Empty unless &#x60;forceDelete&#x3D;true&#x60; detached something. | [default to undefined]|
|**detachedWebhookOauthIds** | **Array&lt;string&gt;** | OAuth credentials whose &#x60;webhookMtlsId&#x60; was cleared. Their token requests continue without a client certificate. Empty unless &#x60;forceDelete&#x3D;true&#x60; detached something. | [default to undefined]|
|**name** | **string** | The label given to this mTLS configuration. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

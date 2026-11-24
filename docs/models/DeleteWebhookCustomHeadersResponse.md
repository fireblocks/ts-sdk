# DeleteWebhookCustomHeadersResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The id of the custom headers set. Pass this as a webhook\&#39;s, or OAuth credentials\&#39;, &#x60;webhookCustomHeadersId&#x60; to attach it. | [default to undefined]|
|**name** | **string** | The label given to this set. | [default to undefined]|
|**headerNames** | **Array&lt;string&gt;** | Names of the headers in the set, lowercased. Header values are never returned. | [default to undefined]|
|**createdAt** | **number** | The date and time the set was created, in milliseconds. | [default to undefined]|
|**updatedAt** | **number** | The date and time the set was last updated, in milliseconds. | [default to undefined]|
|**detachedWebhookIds** | **Array&lt;string&gt;** | Webhooks whose &#x60;webhookCustomHeadersId&#x60; was cleared. The webhooks themselves are not deleted and keep delivering, just without these headers. Empty unless &#x60;forceDelete&#x3D;true&#x60; detached something. | [default to undefined]|
|**detachedWebhookOauthIds** | **Array&lt;string&gt;** | OAuth credentials whose &#x60;webhookCustomHeadersId&#x60; was cleared. The credentials themselves are not deleted; their token requests just no longer carry these headers. Empty unless &#x60;forceDelete&#x3D;true&#x60; detached something. | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

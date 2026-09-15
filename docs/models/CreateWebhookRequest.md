# CreateWebhookRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**url** | **string** | The url of the webhook where notifications will be sent. URL must be valid, unique and https. | [default to undefined]|
|**events** | [**Array&lt;WebhookEvent&gt;**](WebhookEvent.md) | event types the webhook will subscribe to | [default to undefined]|
|**description** | **string** | description of the webhook. should not contain special characters. | [optional] [default to undefined]|
|**enabled** | **boolean** | The status of the webhook. If false, the webhook will not receive notifications. | [optional] [default to true]|
|**mtls** | [**WebhookMtls**](WebhookMtls.md) |  | [optional] [default to undefined]|
|**webhookOauthId** | **string** | The id of the OAuth credentials this webhook authenticates with, from &#x60;/v1/webhooks_settings/oauth&#x60;. Several webhooks may share one credential set, so rotating its client secret covers all of them at once. Send &#x60;null&#x60; to stop using OAuth for this webhook. | [optional] [default to undefined]|
|**customHeaders** | [**WebhookCustomHeaders**](WebhookCustomHeaders.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

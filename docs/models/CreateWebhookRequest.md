# CreateWebhookRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**url** | **string** | The url of the webhook where notifications will be sent. URL must be valid, unique and https. | [default to undefined]|
|**events** | [**Array&lt;WebhookEvent&gt;**](WebhookEvent.md) | event types the webhook will subscribe to | [default to undefined]|
|**description** | **string** | description of the webhook. should not contain special characters. | [optional] [default to undefined]|
|**enabled** | **boolean** | The status of the webhook. If false, the webhook will not receive notifications. | [optional] [default to true]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

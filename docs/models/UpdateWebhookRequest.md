# UpdateWebhookRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**url** | **string** | The url of the webhook where notifications will be sent. URL must be valid, unique and https. | [optional] [default to undefined]|
|**description** | **string** | description of the webhook of what it is used for.should not contain special characters. | [optional] [default to undefined]|
|**events** | [**Array&lt;WebhookEvent&gt;**](WebhookEvent.md) | The events that the webhook will be subscribed to | [optional] [default to undefined]|
|**enabled** | **boolean** | The status of the webhook | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

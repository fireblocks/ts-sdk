# Webhook

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The id of the webhook | [optional] [default to undefined]|
|**url** | **string** | The url of the webhook where notifications will be sent. Must be a valid URL and https. | [optional] [default to undefined]|
|**description** | **string** | description of the webhook of what it is used for | [optional] [default to undefined]|
|**events** | [**Array&lt;WebhookEvent&gt;**](WebhookEvent.md) | The events that the webhook will be subscribed to | [optional] [default to undefined]|
|**status** | **string** | The status of the webhook | [optional] [default to undefined]|
|**createdAt** | **string** | The date and time the webhook was created | [optional] [default to undefined]|
|**updatedAt** | **string** | The date and time the webhook was last updated | [optional] [default to undefined]|


## Enum: WebhookStatusEnum


* `Disabled` (value: `'DISABLED'`)

* `Enabled` (value: `'ENABLED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

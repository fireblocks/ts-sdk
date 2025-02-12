# Webhook

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The id of the webhook | [default to undefined]|
|**url** | **string** | The url of the webhook where notifications will be sent. Must be a valid URL and https. | [default to undefined]|
|**events** | [**Array&lt;WebhookEvent&gt;**](WebhookEvent.md) | The events that the webhook will be subscribed to | [default to undefined]|
|**status** | **string** | The status of the webhook | [default to undefined]|
|**createdAt** | **number** | The date and time the webhook was created in milliseconds | [default to undefined]|
|**updatedAt** | **number** | The date and time the webhook was last updated in milliseconds | [default to undefined]|
|**description** | **string** | description of the webhook of what it is used for | [optional] [default to undefined]|


## Enum: WebhookStatusEnum


* `Disabled` (value: `'DISABLED'`)

* `Enabled` (value: `'ENABLED'`)

* `Suspended` (value: `'SUSPENDED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# Notification

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The id of the Notification | [default to undefined]|
|**createdAt** | **number** | The creation date of the notification in milliseconds | [default to undefined]|
|**updatedAt** | **number** | The date when the notification was updated in milliseconds | [default to undefined]|
|**status** | [**NotificationStatus**](NotificationStatus.md) |  | [default to undefined]|
|**eventType** | [**WebhookEvent**](WebhookEvent.md) |  | [default to undefined]|
|**attempts** | [**Array&lt;NotificationAttempt&gt;**](NotificationAttempt.md) | The attempts related to Notification | [default to undefined]|
|**resourceId** | **string** | The resource id of the event which the Notification is listen to | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

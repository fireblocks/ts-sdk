# NotificationWithData

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** |  | [default to undefined]|
|**createdAt** | **string** | The creation date of the notification | [default to undefined]|
|**updatedAt** | **string** | The date when the notification was updated | [default to undefined]|
|**status** | [**NotificationStatus**](NotificationStatus.md) |  | [default to undefined]|
|**eventType** | [**WebhookEvent**](WebhookEvent.md) |  | [default to undefined]|
|**eventVersion** | **number** | The event version which the Notification is listen to | [default to undefined]|
|**attempts** | **Array&lt;string&gt;** | The attempts related to Notification | [default to undefined]|
|**resourceId** | **string** | The resource id of the event which the Notification is listen to | [optional] [default to undefined]|
|**data** | **object** | notification data | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

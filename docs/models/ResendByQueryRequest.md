# ResendByQueryRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**statuses** | [**Array&lt;NotificationStatus&gt;**](NotificationStatus.md) | (optional) List of notification statuses to resend     - Default if missing: &#x60;[\&quot;FAILED\&quot;, \&quot;ON_HOLD\&quot;]&#x60;  | [optional] [default to undefined]|
|**startTime** | **number** | (optional) Start time for the resend window in milliseconds since epoch, within the last 72 hours - Default if missing means 24 hours before the current time in milliseconds since epoch - Maximum value is current time in milliseconds since epoch - Minimum value is 72 hours before the current time in milliseconds since epoch  | [optional] [default to undefined]|
|**endTime** | **number** | (optional) End time for the resend window in milliseconds since epoch, within the last 72 hours - Default if missing means current time in milliseconds since epoch - Requires startTime to be provided - Must be after startTime - Time window between startTime and endTime must not exceed 24 hours  | [optional] [default to undefined]|
|**events** | [**Array&lt;WebhookEvent&gt;**](WebhookEvent.md) | (optional) Event types to resend, default is all event types     - Default if missing means all events will be included     - Empty array means all events will be included  | [optional] [default to undefined]|
|**resourceId** | **string** | (optional) Resource ID to filter notifications by  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

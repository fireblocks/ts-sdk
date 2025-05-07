# ResendNotificationsByResourceIdRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**resourceId** | **string** | The resource id to resend notifications for | [default to undefined]|
|**excludeStatuses** | [**Array&lt;NotificationStatus&gt;**](NotificationStatus.md) | (optional) List of notification statuses to exclude from the resend operation     - Empty array means all statuses will be included     - If you want to exclude some statuses, you can use the following example: [ IN_PROGRESS, FAILED ]     - Default if missing, means all statuses other than \&quot;COMPLETED\&quot; will be included  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

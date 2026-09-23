# AuditLogEntry

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**timestamp** | **string** | Unix timestamp in seconds when the event occurred, encoded as a string. | [default to undefined]|
|**eventType** | [**AuditEventTypeEnum**](AuditEventTypeEnum.md) |  | [default to undefined]|
|**data** | **string** | The event payload, JSON serialised and then base64 encoded. Its shape depends on &#x60;eventType&#x60; — decode it to read the event. | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

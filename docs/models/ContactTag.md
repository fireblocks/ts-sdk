# ContactTag

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The unique identifier of the tag | [default to undefined]|
|**label** | **string** | The tag label | [default to undefined]|
|**isProtected** | **boolean** | Whether the tag is protected, meaning changes to it and to its attachments are approval-gated. | [default to undefined]|
|**pendingApprovalRequest** | [**ContactApprovalRequest**](ContactApprovalRequest.md) |  | [default to undefined]|
|**pendingAttachment** | [**ContactTagAttachmentPending**](ContactTagAttachmentPending.md) |  | [default to undefined]|
|**color** | **string** | The tag color in hex format. Absent when the tag has none. | [optional] [default to undefined]|
|**description** | **string** | Description for the tag. Absent when the tag has none. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

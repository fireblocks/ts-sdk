# ApprovalApiKey

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | The unique key ID, used to delete the key. | [default to undefined]|
|**name** | **string** | A human-readable label for the key. | [default to undefined]|
|**createdAt** | **string** | Creation time as epoch time in seconds. | [default to undefined]|
|**lastUsedAt** | **string** | Last time the key was used to sign, as epoch time in seconds (0 if never used). | [default to undefined]|
|**approvalApiPublicKey** | [**ApprovalApiPublicKey**](ApprovalApiPublicKey.md) |  | [default to undefined]|
|**userId** | **string** | The ID of the API user who owns this key. | [default to undefined]|
|**status** | **string** | The state of the key. &#x60;APPROVAL_API_KEY_STATUS_PENDING_REGISTRATION&#x60; - registered but waiting for approval, cannot sign yet. &#x60;APPROVAL_API_KEY_STATUS_ENABLED&#x60; - active. &#x60;APPROVAL_API_KEY_STATUS_PENDING_DELETION&#x60; - removal is waiting for approval, the key stays active until then. &#x60;APPROVAL_API_KEY_STATUS_UNSPECIFIED&#x60; - unknown. | [default to undefined]|


## Enum: ApprovalApiKeyStatusEnum


* `Unspecified` (value: `'APPROVAL_API_KEY_STATUS_UNSPECIFIED'`)

* `PendingRegistration` (value: `'APPROVAL_API_KEY_STATUS_PENDING_REGISTRATION'`)

* `Enabled` (value: `'APPROVAL_API_KEY_STATUS_ENABLED'`)

* `PendingDeletion` (value: `'APPROVAL_API_KEY_STATUS_PENDING_DELETION'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

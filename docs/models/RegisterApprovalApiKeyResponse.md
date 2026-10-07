# RegisterApprovalApiKeyResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**keyId** | **string** | The server-generated ID of the registered key, used for deletion. | [default to undefined]|
|**ccrIdPendingRegistration** | **string** | Always returned. An empty string when the key is active immediately. Otherwise, the ID of the approval request that must be approved before the key becomes active. The request appears in &#x60;GET /v1/approvals&#x60;. | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

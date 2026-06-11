# OrderRequirementDetails

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**requirementId** | **string** | Unique identifier of the order requirement request as issued by the provider. | [default to undefined]|
|**requiredData** | **string** | A JSON Schema (Draft-7) in string format describing the shape of the &#x60;data&#x60; object expected on the corresponding POST /trading/orders/{orderId}/requirement/data request. The schema is the contract: the client builds the &#x60;data&#x60; payload to match it, and SDKs can validate before sending. The string content is expected to be valid JSON (application/json).  | [default to undefined]|
|**requiredFiles** | [**Array&lt;OrderRequirementFile&gt;**](OrderRequirementFile.md) | Descriptors for files the provider requires as part of the order requirement response. Empty when no files are required. Each entry\&#39;s &#x60;fileKey&#x60; is used to correlate uploads on the corresponding upload request. | [default to undefined]|
|**dueBy** | **string** | ISO-8601 timestamp indicating when the order requirement submission is due. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

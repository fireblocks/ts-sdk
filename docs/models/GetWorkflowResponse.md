# GetWorkflowResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**workflowId** | **string** | Unique identifier of the workflow. | [default to undefined]|
|**status** | [**WorkflowStatusEnum**](WorkflowStatusEnum.md) |  | [default to undefined]|
|**title** | **string** | User-facing display name for the workflow. | [default to undefined]|
|**createdAt** | **string** | Unix timestamp in seconds when the workflow was provisioned, encoded as a string. | [default to undefined]|
|**steps** | [**Array&lt;StepConfig&gt;**](StepConfig.md) | Flat list — one step per connector. | [default to undefined]|
|**templateId** | **string** | The template this workflow was provisioned from, if any. | [optional] [default to undefined]|
|**description** | **string** | User-facing free-text description of the workflow\&#39;s purpose. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

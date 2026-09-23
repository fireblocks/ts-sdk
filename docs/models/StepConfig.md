# StepConfig

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**stepId** | **string** | Unique within the workflow. | [default to undefined]|
|**connectorId** | **string** | Identifies which connector this step invokes. | [default to undefined]|
|**operations** | [**Array&lt;StepOperationConfig&gt;**](StepOperationConfig.md) | One entry per operation the step\&#39;s connector handles. | [default to undefined]|
|**order** | **number** | Execution order among the workflow\&#39;s steps, lowest first. | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

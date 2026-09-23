# GetScreeningResultResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**screeningId** | **string** | Identifier of the screening being queried. | [default to undefined]|
|**workflowId** | **string** | Identifier of the workflow that produced this screening. | [default to undefined]|
|**screeningStatus** | [**ComplianceScreeningStatusEnum**](ComplianceScreeningStatusEnum.md) |  | [default to undefined]|
|**steps** | [**Array&lt;StepResult&gt;**](StepResult.md) | Flat step list. | [default to undefined]|
|**auditLog** | [**Array&lt;AuditLogEntry&gt;**](AuditLogEntry.md) | Append-only audit trail for this screening. | [default to undefined]|
|**outcome** | [**ScreeningOutcomeEnum**](ScreeningOutcomeEnum.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

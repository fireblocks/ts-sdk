# StepResult

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**stepId** | **string** | Identifier of this step within the workflow. | [default to undefined]|
|**connectorId** | **string** | Identifier of the connector that executed this step. | [default to undefined]|
|**operation** | [**ScreeningOperationEnum**](ScreeningOperationEnum.md) |  | [default to undefined]|
|**triggerRuleOutcome** | [**TriggerRuleOutcomeEnum**](TriggerRuleOutcomeEnum.md) |  | [default to undefined]|
|**outcomeRuleOutcome** | [**ScreeningOutcomeEnum**](ScreeningOutcomeEnum.md) |  | [default to undefined]|
|**outcome** | [**ScreeningOutcomeEnum**](ScreeningOutcomeEnum.md) |  | [default to undefined]|
|**matchedTriggerRule** | [**Rule**](Rule.md) |  | [optional] [default to undefined]|
|**matchedOutcomeRule** | [**Rule**](Rule.md) |  | [optional] [default to undefined]|
|**metadata** | [**StepResultMetadata**](StepResultMetadata.md) |  | [optional] [default to undefined]|
|**ticketId** | **string** | The connector-side screening ticket identifier. | [optional] [default to undefined]|
|**verdict** | [**ConnectorVerdictEnum**](ConnectorVerdictEnum.md) |  | [optional] [default to undefined]|
|**connectorStatus** | [**ConnectorStatusEnum**](ConnectorStatusEnum.md) |  | [optional] [default to undefined]|
|**bypassReason** | [**BypassReasonEnum**](BypassReasonEnum.md) |  | [optional] [default to undefined]|
|**risk** | [**RiskLevelEnum**](RiskLevelEnum.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

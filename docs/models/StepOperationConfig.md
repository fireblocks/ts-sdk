# StepOperationConfig

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**operation** | [**ScreeningOperationEnum**](ScreeningOperationEnum.md) |  | [optional] [default to undefined]|
|**requiredParameters** | **Array&lt;string&gt;** | Resolved server-side on every &#x60;GetWorkflow&#x60; call from the step\&#39;s connector definition for this operation. Read-only: ignored on write. | [optional] [default to undefined]|
|**optionalParameters** | **Array&lt;string&gt;** | Like &#x60;requiredParameters&#x60;, but optional inputs to the operation. | [optional] [default to undefined]|
|**triggerRuleParameters** | **Array&lt;string&gt;** | Fields a condition in &#x60;triggerRuleSetStruct&#x60; may reference. | [optional] [default to undefined]|
|**outcomeEvaluationParameters** | **Array&lt;string&gt;** | Provider response fields a condition in &#x60;outcomeRuleSetStruct&#x60; may reference. | [optional] [default to undefined]|
|**outcomeMetaParameters** | **Array&lt;string&gt;** | Additional provider response fields returned with the result; not usable in &#x60;outcomeRuleSetStruct&#x60; conditions. | [optional] [default to undefined]|
|**triggerRuleSetStruct** | [**RuleSet**](RuleSet.md) |  | [optional] [default to undefined]|
|**triggerRuleSetJson** | **string** | The tenant\&#39;s trigger rules, as a JSON-encoded string. Set for steps whose rules are still defined as a legacy screening policy rather than natively in Compliance Orchestrator, and refreshed on every read. Mutually exclusive with &#x60;triggerRuleSetStruct&#x60;. | [optional] [default to undefined]|
|**outcomeRuleSetStruct** | [**RuleSet**](RuleSet.md) |  | [optional] [default to undefined]|
|**outcomeRuleSetJson** | **string** | The tenant\&#39;s outcome rules, as a JSON-encoded string. Set for steps whose rules are still defined as a legacy screening policy rather than natively in Compliance Orchestrator, and refreshed on every read. Mutually exclusive with &#x60;outcomeRuleSetStruct&#x60;. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

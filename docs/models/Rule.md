# Rule

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**ruleId** | **string** | UUID, unique within the rule set. | [optional] [default to undefined]|
|**conditions** | [**Array&lt;RuleCondition&gt;**](RuleCondition.md) | Conditions AND-ed together within this rule. | [optional] [default to undefined]|
|**ruleAction** | [**RuleActionEnum**](RuleActionEnum.md) |  | [optional] [default to undefined]|
|**order** | **number** | Zero-based evaluation order among the rule set\&#39;s rules, lowest first. | [optional] [default to undefined]|
|**title** | **string** | User-facing label for the rule. Cosmetic only — not read by rule evaluation. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

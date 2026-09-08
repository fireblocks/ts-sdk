# QuorumRuleset

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**groupMatch** | **string** | Whether every tier in &#x60;groups&#x60; must be satisfied (&#x60;ALL&#x60;) or any single one of them (&#x60;ANY&#x60;). | [default to undefined]|
|**status** | [**QuorumApprovalState**](QuorumApprovalState.md) |  | [default to undefined]|
|**groups** | [**Array&lt;QuorumGroup&gt;**](QuorumGroup.md) | The tiers of this sub-request, evaluated according to &#x60;groupMatch&#x60;. | [default to undefined]|


## Enum: QuorumRulesetGroupMatchEnum


* `All` (value: `'ALL'`)

* `Any` (value: `'ANY'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

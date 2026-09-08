# RulesetQuorum

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | **string** | Discriminator identifying the multi-tier shape. | [default to undefined]|
|**rulesetMatch** | **string** | Whether every sub-request in &#x60;rulesets&#x60; must be satisfied (&#x60;ALL&#x60;) or any single one of them (&#x60;ANY&#x60;). | [default to undefined]|
|**status** | [**QuorumApprovalState**](QuorumApprovalState.md) |  | [default to undefined]|
|**rulesets** | [**Array&lt;QuorumRuleset&gt;**](QuorumRuleset.md) | The sub-requests of the approval criteria, evaluated according to &#x60;rulesetMatch&#x60;. | [default to undefined]|
|**isMandatoryOwnerApproved** | **boolean** | Present only when this request additionally requires the workspace owner\&#39;s approval. &#x60;false&#x60; means the owner has not approved yet. Absent when no owner approval is required. | [optional] [default to undefined]|


## Enum: RulesetQuorumTypeEnum


* `Ruleset` (value: `'RULESET'`)



## Enum: RulesetQuorumRulesetMatchEnum


* `All` (value: `'ALL'`)

* `Any` (value: `'ANY'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

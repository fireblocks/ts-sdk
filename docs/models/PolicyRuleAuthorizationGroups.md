# PolicyRuleAuthorizationGroups

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**logic** | **string** | * AND - requires approval of all authorization groups * OR - requires approval of at least one of the authorization groups  | [optional] [default to undefined]|
|**allowOperatorAsAuthorizer** | **boolean** | Defines whether the user who initiates a transaction can approve their own transaction and count toward the approval threshold for their transaction | [optional] [default to undefined]|
|**groups** | [**Array&lt;PolicyRuleAuthorizationGroupsGroupsInner&gt;**](PolicyRuleAuthorizationGroupsGroupsInner.md) | Groups of entities which can approve the transaction | [optional] [default to undefined]|


## Enum: PolicyRuleAuthorizationGroupsLogicEnum


* `And` (value: `'AND'`)

* `Or` (value: `'OR'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# SecurityFindingDetailed

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Unique identifier of the finding | [default to undefined]|
|**status** | **string** | Current status of the finding | [default to undefined]|
|**severity** | **string** | Severity level of the finding | [default to undefined]|
|**category** | **string** | Category of the finding | [default to undefined]|
|**createdAt** | **string** | When the finding was first detected | [default to undefined]|
|**title** | **string** | Human-readable title of the finding | [default to undefined]|
|**info** | [**FindingInfo**](FindingInfo.md) |  | [default to undefined]|
|**complianceReqs** | [**Array&lt;ComplianceRequirement&gt;**](ComplianceRequirement.md) | Compliance requirements this finding relates to | [default to undefined]|
|**riskExplanation** | **string** | Explanation of the risk this finding represents | [default to undefined]|
|**mitigationGuidance** | **string** | Guidance on how to mitigate this finding | [default to undefined]|
|**statusUpdatedAt** | **string** | When the finding status was last updated, omitted if the status was never updated | [optional] [default to undefined]|
|**statusUpdatedByUserId** | **string** | The user who last updated the finding status, omitted if the status was never updated | [optional] [default to undefined]|
|**statusUpdatedReason** | **string** | The reason provided for the last status update, omitted if none was provided | [optional] [default to undefined]|


## Enum: SecurityFindingDetailedStatusEnum


* `Open` (value: `'OPEN'`)

* `Accepted` (value: `'ACCEPTED'`)

* `Resolved` (value: `'RESOLVED'`)



## Enum: SecurityFindingDetailedSeverityEnum


* `Info` (value: `'INFO'`)

* `Low` (value: `'LOW'`)

* `Medium` (value: `'MEDIUM'`)

* `High` (value: `'HIGH'`)



## Enum: SecurityFindingDetailedCategoryEnum


* `UserManagement` (value: `'USER_MANAGEMENT'`)

* `ApprovalGroupManagement` (value: `'APPROVAL_GROUP_MANAGEMENT'`)

* `PolicyEngineUtilization` (value: `'POLICY_ENGINE_UTILIZATION'`)

* `WorkspaceConfiguration` (value: `'WORKSPACE_CONFIGURATION'`)

* `DefiAccess` (value: `'DEFI_ACCESS'`)

* `FleetManagement` (value: `'FLEET_MANAGEMENT'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

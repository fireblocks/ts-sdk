# SecurityFinding

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Unique identifier of the finding | [optional] [default to undefined]|
|**status** | **string** | Current status of the finding | [optional] [default to undefined]|
|**severity** | **string** | Severity level of the finding | [optional] [default to undefined]|
|**category** | **string** | Category of the finding | [optional] [default to undefined]|
|**createdAt** | **string** | When the finding was first detected | [optional] [default to undefined]|
|**title** | **string** | Human-readable title of the finding | [optional] [default to undefined]|


## Enum: SecurityFindingStatusEnum


* `Open` (value: `'OPEN'`)

* `Accepted` (value: `'ACCEPTED'`)

* `Resolved` (value: `'RESOLVED'`)



## Enum: SecurityFindingSeverityEnum


* `Info` (value: `'INFO'`)

* `Low` (value: `'LOW'`)

* `Medium` (value: `'MEDIUM'`)

* `High` (value: `'HIGH'`)



## Enum: SecurityFindingCategoryEnum


* `UserManagement` (value: `'USER_MANAGEMENT'`)

* `ApprovalGroupManagement` (value: `'APPROVAL_GROUP_MANAGEMENT'`)

* `PolicyEngineUtilization` (value: `'POLICY_ENGINE_UTILIZATION'`)

* `WorkspaceConfiguration` (value: `'WORKSPACE_CONFIGURATION'`)

* `DefiAccess` (value: `'DEFI_ACCESS'`)

* `FleetManagement` (value: `'FLEET_MANAGEMENT'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

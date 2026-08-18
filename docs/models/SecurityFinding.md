# SecurityFinding

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Unique identifier of the finding | [optional] [default to undefined]|
|**type** | **string** | The finding type identifier | [optional] [default to undefined]|
|**status** | **string** | Current status of the finding | [optional] [default to undefined]|
|**severity** | **string** | Severity level of the finding | [optional] [default to undefined]|
|**category** | **string** | Category of the finding | [optional] [default to undefined]|
|**createdAt** | **string** | When the finding was first detected | [optional] [default to undefined]|
|**title** | **string** | Human-readable title of the finding | [optional] [default to undefined]|


## Enum: SecurityFindingTypeEnum


* `ApiUserNotWhitelisted` (value: `'API_USER_NOT_WHITELISTED'`)

* `ConsoleIpAllowlistDeactivated` (value: `'CONSOLE_IP_ALLOWLIST_DEACTIVATED'`)

* `AdminThSetToAllAndMoreThan2Admins` (value: `'ADMIN_TH_SET_TO_ALL_AND_MORE_THAN_2_ADMINS'`)

* `ApiUsersCountPassesThAndOwnerNotMandatory` (value: `'API_USERS_COUNT_PASSES_TH_AND_OWNER_NOT_MANDATORY'`)

* `ApiCosignerWithNoCallback` (value: `'API_COSIGNER_WITH_NO_CALLBACK'`)

* `ApiUserDidntApproveCcrInXDays` (value: `'API_USER_DIDNT_APPROVE_CCR_IN_X_DAYS'`)

* `NonViewerDidntInitiateApproveOrSignTxOrCcrLastXDays` (value: `'NON_VIEWER_DIDNT_INITIATE_APPROVE_OR_SIGN_TX_OR_CCR_LAST_X_DAYS'`)

* `ThSetTo1AndMoreThan3Approvers` (value: `'TH_SET_TO_1_AND_MORE_THAN_3_APPROVERS'`)

* `AdminThSetTo1AndMoreThan3Admins` (value: `'ADMIN_TH_SET_TO_1_AND_MORE_THAN_3_ADMINS'`)

* `NonEvmDappConnectionsEnabledButUnused` (value: `'NON_EVM_DAPP_CONNECTIONS_ENABLED_BUT_UNUSED'`)

* `OtaEnabledButUnused` (value: `'OTA_ENABLED_BUT_UNUSED'`)

* `PolicyNotUpdatedRecently` (value: `'POLICY_NOT_UPDATED_RECENTLY'`)

* `RawSigningEnabledButUnused` (value: `'RAW_SIGNING_ENABLED_BUT_UNUSED'`)

* `ApiUserUnusedFor90Days` (value: `'API_USER_UNUSED_FOR_90_DAYS'`)

* `UnusedUnlimitedTokenAllowances` (value: `'UNUSED_UNLIMITED_TOKEN_ALLOWANCES'`)

* `UnusedWhitelistedAddress` (value: `'UNUSED_WHITELISTED_ADDRESS'`)

* `TransactionRepetitionAttack` (value: `'TRANSACTION_REPETITION_ATTACK'`)

* `UserEmailDomainNonBusiness` (value: `'USER_EMAIL_DOMAIN_NON_BUSINESS'`)

* `OutdatedMobileAppVersion` (value: `'OUTDATED_MOBILE_APP_VERSION'`)

* `SingleHopDrainAttack` (value: `'SINGLE_HOP_DRAIN_ATTACK'`)

* `LateralMovementDrainAttack` (value: `'LATERAL_MOVEMENT_DRAIN_ATTACK'`)

* `WorkspaceUserDormantForXDays` (value: `'WORKSPACE_USER_DORMANT_FOR_X_DAYS'`)



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

* `AccessControl` (value: `'ACCESS_CONTROL'`)

* `AdminManagement` (value: `'ADMIN_MANAGEMENT'`)

* `Security` (value: `'SECURITY'`)

* `Configuration` (value: `'CONFIGURATION'`)

* `ApprovalGroupManagement` (value: `'APPROVAL_GROUP_MANAGEMENT'`)

* `PolicyEngineUtilization` (value: `'POLICY_ENGINE_UTILIZATION'`)

* `WorkspaceConfiguration` (value: `'WORKSPACE_CONFIGURATION'`)

* `DefiAccess` (value: `'DEFI_ACCESS'`)

* `FleetManagement` (value: `'FLEET_MANAGEMENT'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

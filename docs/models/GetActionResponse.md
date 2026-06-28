# GetActionResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Action sequence id (UUID). | [default to undefined]|
|**vaultAccountId** | **string** | Fireblocks vault account that executed the action. | [default to undefined]|
|**userId** | **string** | User who initiated the action. | [default to undefined]|
|**status** | **string** | Intent status (e.g. CREATED, IN_PROGRESS, COMPLETED). | [default to undefined]|
|**providerId** | **string** | Lending protocol identifier. | [default to undefined]|
|**actionType** | **string** | Whether this action is a deposit or withdraw flow. | [default to undefined]|
|**opportunityId** | **string** | Target lending opportunity identifier. | [default to undefined]|
|**amount** | **string** | Human-readable amount for the action. | [default to undefined]|
|**createdAt** | **string** | Creation time (ISO-8601). | [default to undefined]|
|**updatedAt** | **string** | Last update time (ISO-8601). | [default to undefined]|
|**records** | [**Array&lt;ActionRecord&gt;**](ActionRecord.md) | Ordered execution steps for this action. | [default to undefined]|
|**positionId** | **string** | Position id in the system when applicable. | [optional] [default to undefined]|


## Enum: GetActionResponseProviderIdEnum


* `Morpho` (value: `'MORPHO'`)

* `Aave` (value: `'AAVE'`)



## Enum: GetActionResponseActionTypeEnum


* `Deposit` (value: `'DEPOSIT'`)

* `Withdraw` (value: `'WITHDRAW'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

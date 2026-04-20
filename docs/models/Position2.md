# Position2

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Position UUID. | [optional] [default to undefined]|
|**status** | **string** | Lifecycle status of the position. | [optional] [default to undefined]|
|**inFlight** | **boolean** | True while an action is in progress for this position. | [optional] [default to undefined]|
|**positionType** | **string** | Whether the position is lend- or borrow-side. | [optional] [default to undefined]|
|**vaultAccountId** | **string** | Fireblocks vault account holding the position. | [optional] [default to undefined]|
|**opportunityId** | **string** | Opportunity / vault or market identifier. | [optional] [default to undefined]|
|**chainId** | **string** | Chain identifier as a string (e.g. \&quot;1\&quot;). | [optional] [default to undefined]|
|**providerId** | **string** | Lending protocol. | [optional] [default to undefined]|
|**origin** | **string** | Whether the position was opened natively in Fireblocks or imported externally. | [optional] [default to undefined]|
|**principalAssetId** | **string** | Fireblocks asset id for the principal (underlying) asset. | [optional] [default to undefined]|
|**positionAssetId** | **string** | Fireblocks asset id for the position / share token. | [optional] [default to undefined]|
|**principalBalance** | **string** | Human-readable principal balance. | [optional] [default to undefined]|
|**positionBalance** | **string** | Human-readable position token balance. | [optional] [default to undefined]|
|**createdAt** | **string** | Creation time (ISO-8601). | [optional] [default to undefined]|
|**updatedAt** | **string** | Last update time (ISO-8601). | [optional] [default to undefined]|
|**lastSyncedAt** | **string** | Last successful on-chain sync time (ISO-8601). | [optional] [default to undefined]|
|**availableActions** | **Array&lt;string&gt;** | Actions the API allows next for this position. | [optional] [default to undefined]|


## Enum: Position2StatusEnum


* `Active` (value: `'ACTIVE'`)

* `Inactive` (value: `'INACTIVE'`)



## Enum: Position2PositionTypeEnum


* `Lend` (value: `'LEND'`)

* `Borrow` (value: `'BORROW'`)



## Enum: Position2ProviderIdEnum


* `Morpho` (value: `'MORPHO'`)

* `Aave` (value: `'AAVE'`)



## Enum: Position2OriginEnum


* `Native` (value: `'NATIVE'`)

* `External` (value: `'EXTERNAL'`)



## Enum: Array&lt;Position2AvailableActionsEnum&gt;


* `Deposit` (value: `'DEPOSIT'`)

* `Withdraw` (value: `'WITHDRAW'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

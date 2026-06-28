# Position2

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Position UUID. | [default to undefined]|
|**status** | **string** | Lifecycle status of the position. | [default to undefined]|
|**inFlight** | **boolean** | True while an action is in progress for this position. | [default to undefined]|
|**positionType** | **string** | Whether the position is lend- or borrow-side. | [default to undefined]|
|**vaultAccountId** | **string** | Fireblocks vault account holding the position. | [default to undefined]|
|**opportunityId** | **string** | Opportunity / vault or market identifier. | [default to undefined]|
|**chainId** | **string** | Chain identifier as a string (e.g. \&quot;1\&quot;). | [default to undefined]|
|**providerId** | **string** | Lending protocol. | [default to undefined]|
|**origin** | **string** | Whether the position was opened natively in Fireblocks or imported externally. | [default to undefined]|
|**principalAssetId** | **string** | Fireblocks asset id for the principal (underlying) asset. | [default to undefined]|
|**positionAssetId** | **string** | Fireblocks asset id for the position / share token. | [default to undefined]|
|**principalBalance** | **string** | Human-readable principal balance. | [default to undefined]|
|**positionBalance** | **string** | Human-readable position token balance. | [default to undefined]|
|**createdAt** | **string** | Creation time (ISO-8601). | [default to undefined]|
|**updatedAt** | **string** | Last update time (ISO-8601). | [default to undefined]|
|**availableActions** | **Array&lt;string&gt;** | Actions the API allows next for this position. | [default to undefined]|
|**lastSyncedAt** | **string** | Last successful on-chain sync time (ISO-8601). | [optional] [default to undefined]|
|**_yield** | **string** | Accrued yield in principal token units (decimal string). Only present for Morpho positions. | [optional] [default to undefined]|


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

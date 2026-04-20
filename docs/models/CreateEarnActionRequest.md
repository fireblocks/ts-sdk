# CreateEarnActionRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**action** | **string** | Whether to deposit into or withdraw from the lending opportunity. | [default to undefined]|
|**opportunityId** | **string** | Identifier of the vault or market (lending opportunity). | [default to undefined]|
|**vaultAccountId** | **string** | Fireblocks vault account that will execute the action. | [default to undefined]|
|**amount** | **string** | Human-readable token amount (e.g. \&quot;1.6\&quot;) or the keyword \&quot;max\&quot; for the full position or available balance. | [default to undefined]|


## Enum: CreateEarnActionRequestActionEnum


* `Deposit` (value: `'DEPOSIT'`)

* `Withdraw` (value: `'WITHDRAW'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

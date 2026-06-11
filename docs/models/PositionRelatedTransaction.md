# PositionRelatedTransaction

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**txId** | **string** | The transaction ID. | [default to undefined]|
|**timestamp** | **string** | ISO timestamp when the transaction was initiated (send time). | [default to undefined]|
|**status** | **string** | Transaction outcome. | [default to undefined]|
|**txHash** | **string** | On-chain transaction hash. Absent while the transaction is pending. | [optional] [default to undefined]|
|**stakingOperation** | **string** | Staking operation type. One of APPROVE, STAKE, UNSTAKE, WITHDRAW, CLAIM_REWARDS, SPLIT, CONSOLIDATE, MERGE, TRANSFER, AUTHORIZE, ADD_TO_STAKE. Absent on legacy persisted rows. | [optional] [default to undefined]|
|**amount** | **string** | Portion of position amount this transaction moved (native units). Absent on legacy rows. | [optional] [default to undefined]|
|**txNote** | **string** | User-provided note from the transfer request. Omitted when not set. | [optional] [default to undefined]|


## Enum: PositionRelatedTransactionStatusEnum


* `Pending` (value: `'PENDING'`)

* `Completed` (value: `'COMPLETED'`)

* `Failed` (value: `'FAILED'`)



## Enum: PositionRelatedTransactionStakingOperationEnum


* `Approve` (value: `'APPROVE'`)

* `Stake` (value: `'STAKE'`)

* `Unstake` (value: `'UNSTAKE'`)

* `Withdraw` (value: `'WITHDRAW'`)

* `ClaimRewards` (value: `'CLAIM_REWARDS'`)

* `Split` (value: `'SPLIT'`)

* `Consolidate` (value: `'CONSOLIDATE'`)

* `Merge` (value: `'MERGE'`)

* `Transfer` (value: `'TRANSFER'`)

* `Authorize` (value: `'AUTHORIZE'`)

* `AddToStake` (value: `'ADD_TO_STAKE'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

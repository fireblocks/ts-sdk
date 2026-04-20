# ActionRecord

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**actionType** | **string** | Kind of step in the lending sequence. | [default to undefined]|
|**status** | **string** | Step lifecycle status. | [default to undefined]|
|**updatedAt** | **string** | Last update time (ISO-8601); may be empty when status is NOT_STARTED. | [default to undefined]|
|**txId** | **string** | Fireblocks transaction id when applicable (unset when NOT_STARTED). | [optional] [default to undefined]|
|**txHash** | **string** | On-chain transaction hash when applicable (unset when NOT_STARTED). | [optional] [default to undefined]|
|**errorMessage** | **string** | Error detail when the step failed. | [optional] [default to undefined]|


## Enum: ActionRecordActionTypeEnum


* `Approve` (value: `'APPROVE'`)

* `Deposit` (value: `'DEPOSIT'`)

* `Withdraw` (value: `'WITHDRAW'`)



## Enum: ActionRecordStatusEnum


* `NotStarted` (value: `'NOT_STARTED'`)

* `Processing` (value: `'PROCESSING'`)

* `PendingSignature` (value: `'PENDING_SIGNATURE'`)

* `Broadcasting` (value: `'BROADCASTING'`)

* `Confirming` (value: `'CONFIRMING'`)

* `Completed` (value: `'COMPLETED'`)

* `Failed` (value: `'FAILED'`)

* `Canceled` (value: `'CANCELED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

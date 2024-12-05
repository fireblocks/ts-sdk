# SmartTransferTicketTerm

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Unique id of Smart Transfer ticket term | [default to undefined]|
|**ticketId** | **string** | Unique id of Smart Transfer ticket | [default to undefined]|
|**asset** | **string** | Asset name | [default to undefined]|
|**amount** | **string** | Amount | [default to undefined]|
|**fromNetworkId** | **string** | Identifier of the origination Network Profile | [default to undefined]|
|**fromNetworkIdName** | **string** | Source network name | [default to undefined]|
|**toNetworkId** | **string** | Identifier of the destination Network Profile | [default to undefined]|
|**toNetworkIdName** | **string** | Destination network name | [default to undefined]|
|**txHash** | **string** | Blockchain TX hash | [default to undefined]|
|**fbTxId** | **string** | Fireblocks transaction ID. It is set when the funding transaction is created. | [default to undefined]|
|**txStatus** | **string** | Ticket term transaction status | [default to undefined]|
|**status** | **string** | Ticket term status | [default to undefined]|
|**createdAt** | **string** | Date and time when the term is created. | [default to undefined]|
|**updatedAt** | **string** | Date and time of last term update. | [default to undefined]|
|**dvpSrcDstVaultId** | **string** | Identifier of the source and destination vault for DVP execution | [optional] [default to undefined]|
|**amountUsd** | **string** | Amount USD | [optional] [default to undefined]|


## Enum: SmartTransferTicketTermTxStatusEnum


* `Queued` (value: `'queued'`)

* `Submitted` (value: `'submitted'`)

* `PendingSignature` (value: `'pendingSignature'`)

* `PendingAuthorization` (value: `'pendingAuthorization'`)

* `Broadcasting` (value: `'broadcasting'`)

* `Confirming` (value: `'confirming'`)

* `PendingAmlScreening` (value: `'pendingAmlScreening'`)

* `Completed` (value: `'completed'`)

* `Cancelled` (value: `'cancelled'`)

* `Failed` (value: `'failed'`)

* `Rejected` (value: `'rejected'`)

* `Blocked` (value: `'blocked'`)

* `ThirdPartyPendingManualApproval` (value: `'thirdPartyPendingManualApproval'`)

* `ThirdPartyPending` (value: `'thirdPartyPending'`)

* `PartiallyCompleted` (value: `'partiallyCompleted'`)

* `Cancelling` (value: `'cancelling'`)



## Enum: SmartTransferTicketTermStatusEnum


* `Created` (value: `'CREATED'`)

* `Funding` (value: `'FUNDING'`)

* `FundingFailed` (value: `'FUNDING_FAILED'`)

* `Funded` (value: `'FUNDED'`)

* `Rejected` (value: `'REJECTED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

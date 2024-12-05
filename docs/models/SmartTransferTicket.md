# SmartTransferTicket

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Unique id of Smart Transfer ticket | [default to undefined]|
|**type** | **string** | Kind of Smart Transfer. Can be either &#x60;ASYNC&#x60; or &#x60;DVP&#x60; | [default to undefined]|
|**status** | **string** | Current status of Smart Transfer ticket | [default to undefined]|
|**createdByNetworkId** | **string** | ID of network profile that created ticket | [default to undefined]|
|**createdByNetworkIdName** | **string** | Name of network profile that created ticket | [default to undefined]|
|**createdAt** | **string** | Date and time at which the ticket is created. | [default to undefined]|
|**updatedAt** | **string** | Date and time of last ticket update. | [default to undefined]|
|**direction** | **string** | Direction of Smart Transfer. | [optional] [default to undefined]|
|**dvpExecutionStatus** | **string** | Current status of DVP execution | [optional] [default to undefined]|
|**orderCreatedByNetworkId** | **string** | ID of network profile that created order | [optional] [default to undefined]|
|**terms** | [**Array&lt;SmartTransferTicketTerm&gt;**](SmartTransferTicketTerm.md) | Ticket terms (legs) | [optional] [default to undefined]|
|**expiresIn** | **number** | Number of hours for expiration.This data is valid only it ticket not in DRAFT state and it will be used to calculate expiresAt value | [optional] [default to undefined]|
|**expiresAt** | **string** | Date and time at which the ticket will expire if no funding is performed. | [optional] [default to undefined]|
|**submittedAt** | **string** | Date and time when ticket is submitted. | [optional] [default to undefined]|
|**expiredAt** | **string** | Date and time when ticket is expired. | [optional] [default to undefined]|
|**canceledAt** | **string** | Date and time when ticket is canceled. | [optional] [default to undefined]|
|**fulfilledAt** | **string** | Date and time when ticket is fulfilled. | [optional] [default to undefined]|
|**externalRefId** | **string** | External Ref ID for Smart Transfer ticket. | [optional] [default to undefined]|
|**note** | **string** | Note | [optional] [default to undefined]|
|**canceledByNetworkIdName** | **string** | Name of network profile that canceled ticket | [optional] [default to undefined]|
|**canceledByMe** | **boolean** |  | [optional] [default to undefined]|
|**createdByMe** | **boolean** |  | [optional] [default to undefined]|


## Enum: SmartTransferTicketTypeEnum


* `Async` (value: `'ASYNC'`)

* `Dvp` (value: `'DVP'`)



## Enum: SmartTransferTicketStatusEnum


* `Draft` (value: `'DRAFT'`)

* `PendingApproval` (value: `'PENDING_APPROVAL'`)

* `Open` (value: `'OPEN'`)

* `InSettlement` (value: `'IN_SETTLEMENT'`)

* `Fulfilled` (value: `'FULFILLED'`)

* `Expired` (value: `'EXPIRED'`)

* `Canceled` (value: `'CANCELED'`)



## Enum: SmartTransferTicketDirectionEnum


* `Exchange` (value: `'EXCHANGE'`)

* `Send` (value: `'SEND'`)

* `Receive` (value: `'RECEIVE'`)

* `Intermediate` (value: `'INTERMEDIATE'`)



## Enum: SmartTransferTicketDvpExecutionStatusEnum


* `Started` (value: `'STARTED'`)

* `CreatingOrder` (value: `'CREATING_ORDER'`)

* `OrderCreated` (value: `'ORDER_CREATED'`)

* `Fulfilling` (value: `'FULFILLING'`)

* `FulfillingOrderFailed` (value: `'FULFILLING_ORDER_FAILED'`)

* `CreatingOrderFailed` (value: `'CREATING_ORDER_FAILED'`)

* `Fulfilled` (value: `'FULFILLED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

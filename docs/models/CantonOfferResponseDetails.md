# CantonOfferResponseDetails

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**version** | **number** | The shape of this block. Stamped at creation and never changed, so a reader always knows which version it is holding. | [optional] [default to undefined]|
|**domain** | [**CantonDomainEnum**](CantonDomainEnum.md) |  | [optional] [default to undefined]|
|**vendor** | [**CantonVendorEnum**](CantonVendorEnum.md) |  | [optional] [default to undefined]|
|**availableResponses** | **Array&lt;string&gt;** | The responses this offer accepts — copy one into &#x60;responseType&#x60; to answer it. Present on the offer only, set when it arrives and never changed: it states what the offer TYPE accepts, not whether it is answerable right now. The respond endpoint is the authority on that, and answers &#x60;409&#x60; when the offer\&#39;s state or expiry rules a response out — for example an &#x60;ALLOCATION_WITHDRAW&#x60; sent before the accept has settled. An empty array means nothing is answerable on this transaction — the difference between an actionable offer and a linked leg that shares its sub-status. | [optional] [default to undefined]|
|**expiresAt** | **string** | When the offer expires, where it has a deadline. | [optional] [default to undefined]|
|**approvalTransactionId** | **string** | The response transaction, once one has been dispatched for this offer. | [optional] [default to undefined]|
|**originalTransactionId** | **string** | The transaction this one relates to — the offer a response answered. | [optional] [default to undefined]|
|**responseType** | **string** | On a response transaction, which answer it is — the &#x60;responseType&#x60; that was sent. Absent on the offer itself. | [optional] [default to undefined]|
|**allocationTransactionId** | **string** | On an &#x60;ALLOCATION_WITHDRAW&#x60; response only — the accept whose allocation this withdraw released, so the withdraw transaction read on its own says what it undid. | [optional] [default to undefined]|
|**verdict** | **string** | The outcome, set once the transaction reaches a terminal status. | [optional] [default to undefined]|


## Enum: CantonOfferResponseDetailsVerdictEnum


* `Accepted` (value: `'ACCEPTED'`)

* `Rejected` (value: `'REJECTED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

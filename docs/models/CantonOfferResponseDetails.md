# CantonOfferResponseDetails

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**version** | **number** | The shape of this block. Stamped at creation and never changed, so a reader always knows which version it is holding. | [optional] [default to undefined]|
|**domain** | [**CantonDomainEnum**](CantonDomainEnum.md) |  | [optional] [default to undefined]|
|**vendor** | [**CantonVendorEnum**](CantonVendorEnum.md) |  | [optional] [default to undefined]|
|**availableResponses** | **Array&lt;string&gt;** | The responses that can be sent for this offer right now. An empty array means nothing is answerable on this transaction — which is the difference between an actionable offer and a linked leg that shares its sub-status. | [optional] [default to undefined]|
|**expiresAt** | **string** | When the offer expires, where it has a deadline. | [optional] [default to undefined]|
|**approvalTransactionId** | **string** | The response transaction, once one has been dispatched for this offer. | [optional] [default to undefined]|
|**originalTransactionId** | **string** | The transaction this one relates to — the offer a response answered. | [optional] [default to undefined]|
|**verdict** | **string** | The outcome, set once the transaction reaches a terminal status. | [optional] [default to undefined]|


## Enum: CantonOfferResponseDetailsVerdictEnum


* `Accepted` (value: `'ACCEPTED'`)

* `Rejected` (value: `'REJECTED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

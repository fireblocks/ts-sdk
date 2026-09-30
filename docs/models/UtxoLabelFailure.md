# UtxoLabelFailure

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**identifier** | [**UtxoIdentifier**](UtxoIdentifier.md) | The identifier exactly as it was sent in the request. | [default to undefined]|
|**reason** | **string** | Why the identifier could not be labelled: - &#x60;NOT_FOUND&#x60; — no UTXO for it in this vault and asset. Retrying can work once it is indexed. - &#x60;NOT_LABELLABLE&#x60; — the UTXO exists but can no longer be labelled (spent, or removed; for a transaction ID, every output). Retrying will not help. | [default to undefined]|
|**utxoStatus** | **string** | The UTXO status behind the reason, when one explains it. With &#x60;NOT_FOUND&#x60;, &#x60;REMOVED&#x60; means the UTXO was removed within the last hour and may still reappear; if it does not, the same request returns &#x60;NOT_LABELLABLE&#x60; after about an hour. | [optional] [default to undefined]|


## Enum: UtxoLabelFailureReasonEnum


* `NotFound` (value: `'NOT_FOUND'`)

* `NotLabellable` (value: `'NOT_LABELLABLE'`)

* `UnusableIdentifier` (value: `'UNUSABLE_IDENTIFIER'`)



## Enum: UtxoLabelFailureUtxoStatusEnum


* `Spent` (value: `'SPENT'`)

* `Removed` (value: `'REMOVED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# RegisterTempoOmnibusResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**status** | **string** | The status of the Tempo omnibus wallet. &#x60;READY&#x60; is returned with 200; &#x60;PROCESSING&#x60; and &#x60;PENDING_ACTIVATION&#x60; are returned with 202. A failed activation is returned as an error. | [default to undefined]|
|**txId** | **string** | The ID of the wallet activation transaction. Absent when no activation transaction was submitted. | [optional] [default to undefined]|


## Enum: RegisterTempoOmnibusResponseStatusEnum


* `Processing` (value: `'PROCESSING'`)

* `PendingActivation` (value: `'PENDING_ACTIVATION'`)

* `Ready` (value: `'READY'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

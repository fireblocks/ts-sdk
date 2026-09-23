# InternalTransferResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**success** | **boolean** | Indicates whether the transfer was successful | [default to undefined]|
|**id** | **string** | The transaction ID of the internal transfer | [optional] [default to undefined]|
|**status** | **string** | The transfer status returned by the transaction manager. Only present when the transfer was processed via the transaction manager flow. | [optional] [default to undefined]|
|**systemMessages** | [**Array&lt;SystemMessageInfo&gt;**](SystemMessageInfo.md) | System messages returned by the transaction manager about the health of the transfer being performed. Only present when the transfer was processed via the transaction manager flow. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

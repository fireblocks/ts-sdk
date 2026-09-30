# UtxoLabelsErrorResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**message** | **string** | Summary of the rejection. When &#x60;failures&#x60; is present, it names the identifiers that blocked the request. | [default to undefined]|
|**failures** | [**Array&lt;UtxoLabelFailure&gt;**](UtxoLabelFailure.md) | Every identifier that blocked the request, each with its own reason. Identifiers not listed were valid; resend them without the failed ones. Absent when the request itself was invalid (e.g. a malformed label). | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

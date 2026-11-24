# ListOmnibusAddressesResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**data** | [**Array&lt;OmnibusAddress&gt;**](OmnibusAddress.md) | A page of deposit addresses, ordered by index, highest first | [default to undefined]|
|**total** | **number** | The total number of addresses matching the request (respecting &#x60;fromIndex&#x60; and &#x60;search&#x60;, ignoring pagination). Returned only on the first page. | [optional] [default to undefined]|
|**next** | **string** | The cursor for the next page. Absent on the last page. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

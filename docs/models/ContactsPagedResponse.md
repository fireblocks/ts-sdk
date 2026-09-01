# ContactsPagedResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**data** | [**Array&lt;Contact&gt;**](Contact.md) | The page of contacts | [default to undefined]|
|**next** | **string** | Cursor to the next page; absent when the current page is the last. Opaque, and bound to the sort that minted it — replay it unchanged and keep sortBy/order steady across pages. | [optional] [default to undefined]|
|**total** | **number** | The number of contacts matching the filters, ignoring pagination. Present only when the request passed &#x60;includeTotal&#x3D;true&#x60;; the key is absent otherwise. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

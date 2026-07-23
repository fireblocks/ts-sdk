# ListBlockchainsResponse2

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**data** | [**Array&lt;Blockchain&gt;**](Blockchain.md) | Blockchains for the current page. | [default to undefined]|
|**total** | **number** | Total number of items across all pages, matching the current filter. | [default to undefined]|
|**next** | **string** | Cursor for the next page; absent when the current page is the last. Opaque base64 blob bundling the target pageCursor and current query params (pageSize, search, status, statusExclude, blockchainEnv, sortBy, order). | [optional] [default to undefined]|
|**prev** | **string** | Cursor for the previous page; absent when the current page is the first. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

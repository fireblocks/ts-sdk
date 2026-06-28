# ReportJobLinks

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**downloadUrl** | **string** | URL to download the report file. A new URL is generated on each request to &#x60;GET /v1/reports/{reportId}&#x60; while &#x60;status&#x60; is &#x60;COMPLETED&#x60;. Re-poll to obtain a fresh URL after the previous one expires (approximately 1 hour). | [default to undefined]|
|**downloadUrlExpiresAt** | **number** | Epoch milliseconds (UTC) when the download URL expires | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

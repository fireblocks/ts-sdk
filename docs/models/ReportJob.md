# ReportJob

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Unique identifier of the report job | [default to undefined]|
|**status** | [**ReportStatus**](ReportStatus.md) |  | [default to undefined]|
|**reportType** | [**ReportType**](ReportType.md) |  | [default to undefined]|
|**outputFormat** | [**ReportOutputFormat**](ReportOutputFormat.md) |  | [default to undefined]|
|**compress** | **boolean** | Whether the output file is gzip-compressed | [default to undefined]|
|**requestedByUserId** | **string** | ID of the user who requested the report | [default to undefined]|
|**createdAt** | **number** | Epoch milliseconds (UTC) when the job was created | [default to undefined]|
|**completedAt** | **number** | Epoch milliseconds (UTC) when the report completed. Only present when &#x60;status&#x60; is &#x60;COMPLETED&#x60;. | [optional] [default to undefined]|
|**failedAt** | **number** | Epoch milliseconds (UTC) when the report failed. Only present when &#x60;status&#x60; is &#x60;FAILED&#x60;. | [optional] [default to undefined]|
|**rowCount** | **number** | Number of rows in the report file. Only present when &#x60;status&#x60; is &#x60;COMPLETED&#x60;. | [optional] [default to undefined]|
|**fileSizeBytes** | **number** | Size of the report file in bytes (includes compression when &#x60;compress&#x60; is &#x60;true&#x60;). Only present when &#x60;status&#x60; is &#x60;COMPLETED&#x60;. | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

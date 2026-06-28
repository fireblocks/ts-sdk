# ReportsBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**createReport**](#createReport) | **POST** /reports | Create a report
[**getReport**](#getReport) | **GET** /reports/{reportId} | Get report status
[**listReports**](#listReports) | **GET** /reports | List reports


# **createReport**
> CreateReportResponse createReport(createReportRequest)

Creates a new asynchronous report job and returns a receipt containing the report ID. Poll `GET /v1/reports/{reportId}` to check status. When `status` is `COMPLETED`, the poll response includes a fresh pre-signed download URL in `links.downloadUrl`.  **Note:** These endpoints are currently in beta and might be subject to changes.  Endpoint Permission: Viewer and above. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ReportsBetaApiCreateReportRequest, CreateReportResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ReportsBetaApiCreateReportRequest = {
  // CreateReportRequest
  createReportRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.reportsBeta.createReport(body).then((res: FireblocksResponse<CreateReportResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createReportRequest** | **[CreateReportRequest](../models/CreateReportRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CreateReportResponse](../models/CreateReportResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Report job accepted and queued for processing |  * X-Request-ID -  <br>  |
**409** | A report with the same type and filters is already being processed |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getReport**
> ReportJobResponse getReport()

Returns the current status of a report job. Check the `status` field to determine the outcome.  When `status` is `COMPLETED`, the response includes a fresh pre-signed download URL in `links.downloadUrl` (TTL ~1 hour). Re-poll this endpoint to obtain a new URL after expiry.  When `status` is `FAILED`, the `failedAt` timestamp indicates when the failure occurred.  **Note:** These endpoints are currently in beta and might be subject to changes.  Endpoint Permission: Viewer and above. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ReportsBetaApiGetReportRequest, ReportJobResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ReportsBetaApiGetReportRequest = {
  // string | The unique identifier of the report job
  reportId: 0190b3c2-7e4a-7c31-9f2a-1b6d8e5a0c11,
};

fireblocks.reportsBeta.getReport(body).then((res: FireblocksResponse<ReportJobResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reportId** | [**string**] | The unique identifier of the report job | defaults to undefined


### Return type

**[ReportJobResponse](../models/ReportJobResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Report job details |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listReports**
> ReportListResponse listReports()

Returns a paginated list of report jobs scoped to the calling tenant.  **Note:** Download URLs are not included in list responses. Call `GET /v1/reports/{reportId}` to obtain a fresh signed download URL for a specific completed report.  **Note:** These endpoints are currently in beta and might be subject to changes.  Endpoint Permission: Viewer and above. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ReportsBetaApiListReportsRequest, ReportListResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ReportsBetaApiListReportsRequest = {
  // string | Opaque cursor returned from a previous list call (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of items per page (optional)
  pageSize: 56,
  // 'createdAt' | 'completedAt' | Field to sort by (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | Sort direction (optional)
  order: order_example,
  // Array<ReportStatus> | Filter by lifecycle status. Repeat the parameter to filter on multiple statuses (e.g., ?status=QUEUED&status=PROCESSING). (optional)
  status: param_value,
  // Array<ReportType> | Filter by report type. Repeat the parameter to filter on multiple types. (optional)
  reportType: param_value,
};

fireblocks.reportsBeta.listReports(body).then((res: FireblocksResponse<ReportListResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Opaque cursor returned from a previous list call | (optional) defaults to undefined
 **pageSize** | [**number**] | Maximum number of items per page | (optional) defaults to 20
 **sortBy** | [**&#39;createdAt&#39; | &#39;completedAt&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;completedAt&#39;>** | Field to sort by | (optional) defaults to 'createdAt'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort direction | (optional) defaults to 'DESC'
 **status** | **Array&lt;ReportStatus&gt;** | Filter by lifecycle status. Repeat the parameter to filter on multiple statuses (e.g., ?status&#x3D;QUEUED&amp;status&#x3D;PROCESSING). | (optional) defaults to undefined
 **reportType** | **Array&lt;ReportType&gt;** | Filter by report type. Repeat the parameter to filter on multiple types. | (optional) defaults to undefined


### Return type

**[ReportListResponse](../models/ReportListResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated list of report jobs |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



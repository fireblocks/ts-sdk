# AuditLogsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuditLogs**](#getAuditLogs) | **GET** /management/audit_logs | Get audit logs


# **getAuditLogs**
> GetAuditLogsResponse getAuditLogs()

Get all audits

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, AuditLogsApiGetAuditLogsRequest, GetAuditLogsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: AuditLogsApiGetAuditLogsRequest = {
  // 'DAY' | 'WEEK' | The last time period to fetch audit logs (optional)
  timePeriod: timePeriod_example,
  // string | The next id to start fetch audit logs from (optional)
  cursor: cursor_example,
};

fireblocks.auditLogs.getAuditLogs(body).then((res: FireblocksResponse<GetAuditLogsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timePeriod** | [**&#39;DAY&#39; | &#39;WEEK&#39;**]**Array<&#39;DAY&#39; &#124; &#39;WEEK&#39;>** | The last time period to fetch audit logs | (optional) defaults to undefined
 **cursor** | [**string**] | The next id to start fetch audit logs from | (optional) defaults to undefined


### Return type

**[GetAuditLogsResponse](../models/GetAuditLogsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Audit logs from requested time period |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



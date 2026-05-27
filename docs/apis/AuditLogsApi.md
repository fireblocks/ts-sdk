# AuditLogsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAuditLogs**](#getAuditLogs) | **GET** /management/audit_logs | Get audit logs


# **getAuditLogs**
> GetAuditLogsResponse getAuditLogs()

Retrieve audit log events for the workspace with optional filtering, date range, sorting, and cursor-based pagination.  Filters within the same field are combined as OR (e.g. category=Administration&category=Security returns events in either category). Filters across different fields are combined as AND.  **Deprecated parameters:** `timePeriod` and `cursor` remain functional for backward compatibility but new integrations should use `startTime`/`endTime` and `pageCursor` instead.  Endpoint Permission: Admin, Non-Signing Admin, Auditor, Security Admin, Security Auditor.

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
  // number | Start of date range as epoch time in milliseconds. Takes precedence over timePeriod when provided. Must be no more than 1 year before the current time. (optional)
  startTime: 56,
  // number | End of date range as epoch time in milliseconds. Must be after startTime. Defaults to now when omitted. (optional)
  endTime: 56,
  // 'DAY' | 'WEEK' | Deprecated. Use startTime/endTime instead. Ignored when startTime is provided. Defaults to DAY when neither timePeriod nor startTime is supplied. (optional)
  timePeriod: timePeriod_example,
  // Array<string> | Filter by event category. Repeat the parameter for multiple values (OR logic within field). (optional)
  category: param_value,
  // Array<string> | Filter by event subject. Repeat the parameter for multiple values. (optional)
  subject: param_value,
  // Array<string> | Filter by event type. Repeat the parameter for multiple values. (optional)
  event: param_value,
  // Array<string> | Filter by user name. Repeat the parameter for multiple values. (optional)
  user: param_value,
  // Array<string> | Filter by user ID. Repeat the parameter for multiple values. (optional)
  userId: param_value,
  // 'ASC' | 'DESC' | Sort direction. Defaults to DESC. (optional)
  order: order_example,
  // number | Number of results per page. Maximum 500. Defaults to 200. (optional)
  pageSize: 56,
  // string | Cursor returned from the previous response to fetch the next page. (optional)
  pageCursor: pageCursor_example,
  // string | Deprecated. Use pageCursor instead. (optional)
  cursor: cursor_example,
};

fireblocks.auditLogs.getAuditLogs(body).then((res: FireblocksResponse<GetAuditLogsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startTime** | [**number**] | Start of date range as epoch time in milliseconds. Takes precedence over timePeriod when provided. Must be no more than 1 year before the current time. | (optional) defaults to undefined
 **endTime** | [**number**] | End of date range as epoch time in milliseconds. Must be after startTime. Defaults to now when omitted. | (optional) defaults to undefined
 **timePeriod** | [**&#39;DAY&#39; | &#39;WEEK&#39;**]**Array<&#39;DAY&#39; &#124; &#39;WEEK&#39;>** | Deprecated. Use startTime/endTime instead. Ignored when startTime is provided. Defaults to DAY when neither timePeriod nor startTime is supplied. | (optional) defaults to undefined
 **category** | **Array&lt;string&gt;** | Filter by event category. Repeat the parameter for multiple values (OR logic within field). | (optional) defaults to undefined
 **subject** | **Array&lt;string&gt;** | Filter by event subject. Repeat the parameter for multiple values. | (optional) defaults to undefined
 **event** | **Array&lt;string&gt;** | Filter by event type. Repeat the parameter for multiple values. | (optional) defaults to undefined
 **user** | **Array&lt;string&gt;** | Filter by user name. Repeat the parameter for multiple values. | (optional) defaults to undefined
 **userId** | **Array&lt;string&gt;** | Filter by user ID. Repeat the parameter for multiple values. | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort direction. Defaults to DESC. | (optional) defaults to 'DESC'
 **pageSize** | [**number**] | Number of results per page. Maximum 500. Defaults to 200. | (optional) defaults to 200
 **pageCursor** | [**string**] | Cursor returned from the previous response to fetch the next page. | (optional) defaults to undefined
 **cursor** | [**string**] | Deprecated. Use pageCursor instead. | (optional) defaults to undefined


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
**200** | Audit log events matching the requested filters and date range |  * X-Request-ID -  <br>  |
**400** | Error Response |  * X-Request-ID -  <br>  |
**403** | Error Response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



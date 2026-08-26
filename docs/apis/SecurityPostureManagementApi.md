# SecurityPostureManagementApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSecurityFindingById**](#getSecurityFindingById) | **GET** /security/fspm/findings/{id} | Get a FSPM security finding by ID
[**getSecurityFindings**](#getSecurityFindings) | **GET** /security/fspm/findings | Get FSPM security findings
[**updateSecurityFindingById**](#updateSecurityFindingById) | **PATCH** /security/fspm/findings/{id} | Update a FSPM security finding by ID


# **getSecurityFindingById**
> SecurityFindingDetailed getSecurityFindingById()

Returns a single FSPM security finding for the workspace, redacted to the public field set. Endpoint Roles: Security Admin, Security Auditor. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SecurityPostureManagementApiGetSecurityFindingByIdRequest, SecurityFindingDetailed } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SecurityPostureManagementApiGetSecurityFindingByIdRequest = {
  // string | Unique identifier of the finding
  id: d7ca6101-a65e-4a9c-b6c1-b8bd697e0cd2,
};

fireblocks.securityPostureManagement.getSecurityFindingById(body).then((res: FireblocksResponse<SecurityFindingDetailed>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the finding | defaults to undefined


### Return type

**[SecurityFindingDetailed](../models/SecurityFindingDetailed.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A single FSPM finding |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSecurityFindings**
> GetFindingsExternalResponse getSecurityFindings()

Returns a paginated list of FSPM security findings for the workspace. Endpoint Roles: Security Admin, Security Auditor. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SecurityPostureManagementApiGetSecurityFindingsRequest, GetFindingsExternalResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SecurityPostureManagementApiGetSecurityFindingsRequest = {
  // string | Cursor indicating the page position. Omit to fetch the first page. (optional)
  pageCursor: pageCursor_example,
  // number | Number of results per page (optional)
  pageSize: 10,
  // 'INFO' | 'LOW' | 'MEDIUM' | 'HIGH' | Filter by severity level (optional)
  severity: HIGH,
  // 'USER_MANAGEMENT' | 'APPROVAL_GROUP_MANAGEMENT' | 'POLICY_ENGINE_UTILIZATION' | 'WORKSPACE_CONFIGURATION' | 'DEFI_ACCESS' | 'FLEET_MANAGEMENT' | Filter by finding category (optional)
  category: USER_MANAGEMENT,
  // 'OPEN' | 'ACCEPTED' | 'RESOLVED' | Filter by finding status (optional)
  status: OPEN,
};

fireblocks.securityPostureManagement.getSecurityFindings(body).then((res: FireblocksResponse<GetFindingsExternalResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Cursor indicating the page position. Omit to fetch the first page. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results per page | (optional) defaults to 10
 **severity** | [**&#39;INFO&#39; | &#39;LOW&#39; | &#39;MEDIUM&#39; | &#39;HIGH&#39;**]**Array<&#39;INFO&#39; &#124; &#39;LOW&#39; &#124; &#39;MEDIUM&#39; &#124; &#39;HIGH&#39;>** | Filter by severity level | (optional) defaults to undefined
 **category** | [**&#39;USER_MANAGEMENT&#39; | &#39;APPROVAL_GROUP_MANAGEMENT&#39; | &#39;POLICY_ENGINE_UTILIZATION&#39; | &#39;WORKSPACE_CONFIGURATION&#39; | &#39;DEFI_ACCESS&#39; | &#39;FLEET_MANAGEMENT&#39;**]**Array<&#39;USER_MANAGEMENT&#39; &#124; &#39;APPROVAL_GROUP_MANAGEMENT&#39; &#124; &#39;POLICY_ENGINE_UTILIZATION&#39; &#124; &#39;WORKSPACE_CONFIGURATION&#39; &#124; &#39;DEFI_ACCESS&#39; &#124; &#39;FLEET_MANAGEMENT&#39;>** | Filter by finding category | (optional) defaults to undefined
 **status** | [**&#39;OPEN&#39; | &#39;ACCEPTED&#39; | &#39;RESOLVED&#39;**]**Array<&#39;OPEN&#39; &#124; &#39;ACCEPTED&#39; &#124; &#39;RESOLVED&#39;>** | Filter by finding status | (optional) defaults to undefined


### Return type

**[GetFindingsExternalResponse](../models/GetFindingsExternalResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of FSPM findings |  * X-Request-ID -  <br>  |
**400** | Bad request — invalid or malformed query parameters. |  * X-Request-ID -  <br>  |
**401** | Unauthorized — missing or invalid authentication token. |  * X-Request-ID -  <br>  |
**403** | Forbidden — insufficient permissions or feature is disabled. |  * X-Request-ID -  <br>  |
**429** | Too many requests — rate limit exceeded, slow down and retry later. |  * X-Request-ID -  <br>  |
**5XX** | Internal error. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateSecurityFindingById**
> SecurityFindingDetailed updateSecurityFindingById(updateFindingExternalRequest, )

Accepts or reopens a finding for the workspace. When accepting a finding (`status: \"ACCEPTED\"`), `statusUpdatedReason` is required. Endpoint Roles: Security Admin. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SecurityPostureManagementApiUpdateSecurityFindingByIdRequest, SecurityFindingDetailed } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SecurityPostureManagementApiUpdateSecurityFindingByIdRequest = {
  // UpdateFindingExternalRequest
  updateFindingExternalRequest: param_value,
  // string | Unique identifier of the finding
  id: d7ca6101-a65e-4a9c-b6c1-b8bd697e0cd2,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.securityPostureManagement.updateSecurityFindingById(body).then((res: FireblocksResponse<SecurityFindingDetailed>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateFindingExternalRequest** | **[UpdateFindingExternalRequest](../models/UpdateFindingExternalRequest.md)**|  |
 **id** | [**string**] | Unique identifier of the finding | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SecurityFindingDetailed](../models/SecurityFindingDetailed.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The updated FSPM finding |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



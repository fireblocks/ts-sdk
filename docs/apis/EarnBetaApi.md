# EarnBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveTermsOfService**](#approveTermsOfService) | **POST** /earn/providers/{providerId}/approve_terms_of_service | Approve earn provider terms of service
[**createEarnAction**](#createEarnAction) | **POST** /earn/actions | Create and execute a lending action (deposit or withdraw)
[**getEarnAction**](#getEarnAction) | **GET** /earn/actions/{id} | Get a single earn lending action
[**getEarnActions**](#getEarnActions) | **GET** /earn/actions | List earn lending actions
[**getEarnOpportunities**](#getEarnOpportunities) | **GET** /earn/opportunities | Get list of earn opportunities
[**getEarnPositions**](#getEarnPositions) | **GET** /earn/positions | Get list of earn positions
[**getEarnProviders**](#getEarnProviders) | **GET** /earn/providers | Get list of earn providers


# **approveTermsOfService**
> approveTermsOfService()

Approves the lending provider\'s terms of service for this workspace. When `isTermsApprovalRequired` is true on the provider (see list providers), call this once before creating or executing earn actions with that provider. After success, `GET /earn/providers` reflects `isTermsOfServiceApproved`.  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EarnBetaApiApproveTermsOfServiceRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EarnBetaApiApproveTermsOfServiceRequest = {
  // 'MORPHO' | 'AAVE' | Stable protocol identifier for the earn provider (`MORPHO` or `AAVE`).
  providerId: providerId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.earnBeta.approveTermsOfService(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | [**&#39;MORPHO&#39; | &#39;AAVE&#39;**]**Array<&#39;MORPHO&#39; &#124; &#39;AAVE&#39;>** | Stable protocol identifier for the earn provider (&#x60;MORPHO&#x60; or &#x60;AAVE&#x60;). | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Terms of service accepted. |  * X-Request-ID -  <br>  |
**400** | Bad request: missing/invalid fields, unsupported amount, or malformed payload. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createEarnAction**
> CreateEarnActionResponse createEarnAction(createEarnActionRequest)

Creates and runs a sequence of on-chain steps for either a deposit into or a withdrawal from an earn vault/market. Specify the operation with `action` in the request body (`DEPOSIT` or `WITHDRAW`).  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EarnBetaApiCreateEarnActionRequest, CreateEarnActionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EarnBetaApiCreateEarnActionRequest = {
  // CreateEarnActionRequest
  createEarnActionRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.earnBeta.createEarnAction(body).then((res: FireblocksResponse<CreateEarnActionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEarnActionRequest** | **[CreateEarnActionRequest](../models/CreateEarnActionRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CreateEarnActionResponse](../models/CreateEarnActionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**400** | Bad request: missing/invalid fields, unsupported amount, or malformed payload. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., opportunity, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEarnAction**
> GetActionResponse getEarnAction()

Returns one lending action by its action sequence id (tenant-scoped).  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EarnBetaApiGetEarnActionRequest, GetActionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EarnBetaApiGetEarnActionRequest = {
  // string | Action sequence id (UUID).
  id: id_example,
};

fireblocks.earnBeta.getEarnAction(body).then((res: FireblocksResponse<GetActionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Action sequence id (UUID). | defaults to undefined


### Return type

**[GetActionResponse](../models/GetActionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**404** | Not found: action does not exist or is not visible for this tenant. |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEarnActions**
> GetActionsResponse getEarnActions()

Returns a paginated list of lending actions (deposits and withdrawals) for the authenticated tenant.  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EarnBetaApiGetEarnActionsRequest, GetActionsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EarnBetaApiGetEarnActionsRequest = {
  // string | Cursor for the next or previous page of results. (optional)
  pageCursor: pageCursor_example,
  // number | Number of items per page (default 100, max 100). (optional)
  pageSize: 56,
  // 'createdAt' | 'updatedAt' | Field to sort results by. (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | Sort order (ASC or DESC). (optional)
  order: ASC,
};

fireblocks.earnBeta.getEarnActions(body).then((res: FireblocksResponse<GetActionsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Cursor for the next or previous page of results. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page (default 100, max 100). | (optional) defaults to 100
 **sortBy** | [**&#39;createdAt&#39; | &#39;updatedAt&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;updatedAt&#39;>** | Field to sort results by. | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order (ASC or DESC). | (optional) defaults to 'DESC'


### Return type

**[GetActionsResponse](../models/GetActionsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist. |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEarnOpportunities**
> GetOpportunitiesResponse getEarnOpportunities()

Get list of earn opportunities (vaults).  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EarnBetaApiGetEarnOpportunitiesRequest, GetOpportunitiesResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EarnBetaApiGetEarnOpportunitiesRequest = {
  // string | Cursor for the next or previous page of results. (optional)
  pageCursor: pageCursor_example,
  // number | Number of items per page. (optional)
  pageSize: 56,
  // string | Field to sort results by. (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | Sort order (ASC or DESC). (optional)
  order: ASC,
};

fireblocks.earnBeta.getEarnOpportunities(body).then((res: FireblocksResponse<GetOpportunitiesResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Cursor for the next or previous page of results. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page. | (optional) defaults to 100
 **sortBy** | [**string**] | Field to sort results by. | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order (ASC or DESC). | (optional) defaults to 'DESC'


### Return type

**[GetOpportunitiesResponse](../models/GetOpportunitiesResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist. |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEarnPositions**
> GetPositionsResponse getEarnPositions()

Get list of earn positions for accounts tracked for this workspace.  Optional query parameters filter by chain, provider, and pagination.  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EarnBetaApiGetEarnPositionsRequest, GetPositionsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EarnBetaApiGetEarnPositionsRequest = {
  // number (optional)
  chainId: 56,
  // 'MORPHO' | 'AAVE' (optional)
  providerId: providerId_example,
  // string | Cursor for the next or previous page of results. (optional)
  pageCursor: pageCursor_example,
  // number | Number of items per page. (optional)
  pageSize: 56,
  // string | Field to sort results by. (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | Sort order (ASC or DESC). (optional)
  order: ASC,
};

fireblocks.earnBeta.getEarnPositions(body).then((res: FireblocksResponse<GetPositionsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainId** | [**number**] |  | (optional) defaults to undefined
 **providerId** | [**&#39;MORPHO&#39; | &#39;AAVE&#39;**]**Array<&#39;MORPHO&#39; &#124; &#39;AAVE&#39;>** |  | (optional) defaults to undefined
 **pageCursor** | [**string**] | Cursor for the next or previous page of results. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page. | (optional) defaults to 100
 **sortBy** | [**string**] | Field to sort results by. | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order (ASC or DESC). | (optional) defaults to 'DESC'


### Return type

**[GetPositionsResponse](../models/GetPositionsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist. |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEarnProviders**
> GetProvidersResponse getEarnProviders()

Get list of earn providers.  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EarnBetaApiGetEarnProvidersRequest, GetProvidersResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EarnBetaApiGetEarnProvidersRequest = {
  // string | Cursor for the next or previous page of results. (optional)
  pageCursor: pageCursor_example,
  // number | Number of items per page. (optional)
  pageSize: 56,
  // string | Field to sort results by. (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | Sort order (ASC or DESC). (optional)
  order: ASC,
};

fireblocks.earnBeta.getEarnProviders(body).then((res: FireblocksResponse<GetProvidersResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Cursor for the next or previous page of results. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page. | (optional) defaults to 100
 **sortBy** | [**string**] | Field to sort results by. | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order (ASC or DESC). | (optional) defaults to 'DESC'


### Return type

**[GetProvidersResponse](../models/GetProvidersResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist. |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



# TagsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelApprovalRequest**](#cancelApprovalRequest) | **POST** /tags/approval_requests/{id}/cancel | Cancel an approval request by id
[**createTag**](#createTag) | **POST** /tags | Create a new tag
[**deleteTag**](#deleteTag) | **DELETE** /tags/{tagId} | Delete a tag
[**getApprovalRequest**](#getApprovalRequest) | **GET** /tags/approval_requests/{id} | Get an approval request by id
[**getTag**](#getTag) | **GET** /tags/{tagId} | Get a tag
[**getTags**](#getTags) | **GET** /tags | Get list of tags
[**updateTag**](#updateTag) | **PATCH** /tags/{tagId} | Update a tag


# **cancelApprovalRequest**
> cancelApprovalRequest()

Cancel an approval request by id. Can only cancel requests in PENDING status. Returns 202 Accepted when the cancellation is processed.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TagsApiCancelApprovalRequestRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TagsApiCancelApprovalRequestRequest = {
  // string
  id: 12345,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tags.cancelApprovalRequest(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
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
**202** | Approval request cancellation processed |  * X-Request-ID -  <br>  |
**401** | Unauthorized |  * X-Request-ID -  <br>  |
**404** | Approval request not found |  * X-Request-ID -  <br>  |
**409** | Invalid approval request state - cannot cancel request that is not in PENDING status |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createTag**
> Tag createTag(createTagRequest)

Create a new tag. Endpoint Permissions: For protected tags: ADMIN,NON_SIGNING_ADMIN,OWNER. For non protected tags: ADMIN,NON_SIGNING_ADMIN,OWNER,SIGNER,EDITOR,APPROVER.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TagsApiCreateTagRequest, Tag } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TagsApiCreateTagRequest = {
  // CreateTagRequest
  createTagRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tags.createTag(body).then((res: FireblocksResponse<Tag>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTagRequest** | **[CreateTagRequest](../models/CreateTagRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[Tag](../models/Tag.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Tag created successfully |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteTag**
> deleteTag()

Delete the specified tag. Endpoint Permission: For protected tags: Owner, Admin, Non-Signing Admin. For non protected tags: Owner, Admin, Non-Signing Admin, Signer, Editor, Approver.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TagsApiDeleteTagRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TagsApiDeleteTagRequest = {
  // string | The ID of the tag to retrieve
  tagId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
};

fireblocks.tags.deleteTag(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**string**] | The ID of the tag to retrieve | defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Tag was deleted successfully |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getApprovalRequest**
> ApprovalRequest getApprovalRequest()

Get an approval request by id

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TagsApiGetApprovalRequestRequest, ApprovalRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TagsApiGetApprovalRequestRequest = {
  // string
  id: 12345,
};

fireblocks.tags.getApprovalRequest(body).then((res: FireblocksResponse<ApprovalRequest>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**[ApprovalRequest](../models/ApprovalRequest.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Approval request fetched successfully |  * X-Request-ID -  <br>  |
**401** | Unauthorized |  * X-Request-ID -  <br>  |
**404** | Approval request not found |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTag**
> Tag getTag()

Retrieve an existing tag by ID.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TagsApiGetTagRequest, Tag } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TagsApiGetTagRequest = {
  // string | The ID of the tag to retrieve
  tagId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
};

fireblocks.tags.getTag(body).then((res: FireblocksResponse<Tag>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | [**string**] | The ID of the tag to retrieve | defaults to undefined


### Return type

**[Tag](../models/Tag.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A tag object |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTags**
> TagsPagedResponse getTags()

Retrieve a paged list of all tags according to filters.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TagsApiGetTagsRequest, TagsPagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TagsApiGetTagsRequest = {
  // string | Page cursor to get the next page. (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Maximum number of items in the page (optional)
  pageSize: 8.14,
  // string | Label prefix to filter by. (optional)
  label: VIP,
  // Array<string> | List of tag IDs to filter by. (optional)
  tagIds: param_value,
  // boolean | Whether to include pending approval requests info. (optional)
  includePendingApprovalsInfo: true,
  // boolean (optional)
  isProtected: true,
};

fireblocks.tags.getTags(body).then((res: FireblocksResponse<TagsPagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Page cursor to get the next page. | (optional) defaults to undefined
 **pageSize** | [**number**] | Maximum number of items in the page | (optional) defaults to 100
 **label** | [**string**] | Label prefix to filter by. | (optional) defaults to undefined
 **tagIds** | **Array&lt;string&gt;** | List of tag IDs to filter by. | (optional) defaults to undefined
 **includePendingApprovalsInfo** | [**boolean**] | Whether to include pending approval requests info. | (optional) defaults to false
 **isProtected** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**[TagsPagedResponse](../models/TagsPagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tags fetched successfully |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateTag**
> Tag updateTag(updateTagRequest, )

Update an existing specified tag. Endpoint Permission: For protected tags: Owner, Admin, Non-Signing Admin. For non protected tags: Owner, Admin, Non-Signing Admin, Signer, Editor, Approver.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TagsApiUpdateTagRequest, Tag } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TagsApiUpdateTagRequest = {
  // UpdateTagRequest
  updateTagRequest: param_value,
  // string | The ID of the tag to update
  tagId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tags.updateTag(body).then((res: FireblocksResponse<Tag>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTagRequest** | **[UpdateTagRequest](../models/UpdateTagRequest.md)**|  |
 **tagId** | [**string**] | The ID of the tag to update | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[Tag](../models/Tag.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A tag object |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



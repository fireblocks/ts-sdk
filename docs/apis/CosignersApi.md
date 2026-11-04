# CosignersApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCosigner**](#addCosigner) | **POST** /cosigners | Add cosigner
[**getCosigner**](#getCosigner) | **GET** /cosigners/{cosignerId} | Get cosigner
[**getCosignerApiUser**](#getCosignerApiUser) | **GET** /cosigners/{cosignerId}/api_users/{apiUserId} | Get API user
[**getCosignerApiUserRequestStatus**](#getCosignerApiUserRequestStatus) | **GET** /cosigners/{cosignerId}/api_users/{apiUserId}/{requestId} | Get API user request status
[**getCosignerApiUsers**](#getCosignerApiUsers) | **GET** /cosigners/{cosignerId}/api_users | Get all API users
[**getCosigners**](#getCosigners) | **GET** /cosigners | Get all cosigners
[**pairCosignerApiUser**](#pairCosignerApiUser) | **PUT** /cosigners/{cosignerId}/api_users/{apiUserId} | Pair API user
[**renameCosigner**](#renameCosigner) | **PATCH** /cosigners/{cosignerId} | Rename cosigner
[**unpairCosignerApiUser**](#unpairCosignerApiUser) | **DELETE** /cosigners/{cosignerId}/api_users/{apiUserId} | Unpair API user
[**updateCosignerApiUserCallbackHandler**](#updateCosignerApiUserCallbackHandler) | **PATCH** /cosigners/{cosignerId}/api_users/{apiUserId} | Update API user callback handler


# **addCosigner**
> AddCosignerResponse addCosigner(addCosignerRequest)

Add a new cosigner. The cosigner will be pending pairing until the API user is manually paired (see `pairCosignerApiUser`). Endpoint Permission: Admin and Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersApiAddCosignerRequest, AddCosignerResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersApiAddCosignerRequest = {
  // AddCosignerRequest
  addCosignerRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.cosigners.addCosigner(body).then((res: FireblocksResponse<AddCosignerResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addCosignerRequest** | **[AddCosignerRequest](../models/AddCosignerRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[AddCosignerResponse](../models/AddCosignerResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Pending cosigner added |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCosigner**
> Cosigner getCosigner()

Get a cosigner by ID. Endpoint Permission: Admin and Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersApiGetCosignerRequest, Cosigner } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersApiGetCosignerRequest = {
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.cosigners.getCosigner(body).then((res: FireblocksResponse<Cosigner>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cosignerId** | [**string**] | The unique identifier of the cosigner | defaults to undefined


### Return type

**[Cosigner](../models/Cosigner.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A cosigner object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCosignerApiUser**
> CosignerApiUser getCosignerApiUser()

Get an API user by ID. Endpoint Permission: Admin and Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersApiGetCosignerApiUserRequest, CosignerApiUser } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersApiGetCosignerApiUserRequest = {
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string | The unique identifier of the API user
  apiUserId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.cosigners.getCosignerApiUser(body).then((res: FireblocksResponse<CosignerApiUser>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cosignerId** | [**string**] | The unique identifier of the cosigner | defaults to undefined
 **apiUserId** | [**string**] | The unique identifier of the API user | defaults to undefined


### Return type

**[CosignerApiUser](../models/CosignerApiUser.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A CosignerApiUser object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCosignerApiUserRequestStatus**
> Status getCosignerApiUserRequestStatus()

Get the status of an asynchronous request Endpoint Permission: Admin and Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersApiGetCosignerApiUserRequestStatusRequest, Status } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersApiGetCosignerApiUserRequestStatusRequest = {
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string | The unique identifier of the API user
  apiUserId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string
  requestId: requestId_example,
};

fireblocks.cosigners.getCosignerApiUserRequestStatus(body).then((res: FireblocksResponse<Status>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cosignerId** | [**string**] | The unique identifier of the cosigner | defaults to undefined
 **apiUserId** | [**string**] | The unique identifier of the API user | defaults to undefined
 **requestId** | [**string**] |  | defaults to undefined


### Return type

**[Status](../models/Status.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The status of the request |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCosignerApiUsers**
> ApiUsersPaginatedResponse getCosignerApiUsers()

Get all cosigner paired API users (paginated). Endpoint Permission: Admin and Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersApiGetCosignerApiUsersRequest, ApiUsersPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersApiGetCosignerApiUsersRequest = {
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: ASC,
  // string | Cursor of the required page (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of items in the page (optional)
  pageSize: 10,
};

fireblocks.cosigners.getCosignerApiUsers(body).then((res: FireblocksResponse<ApiUsersPaginatedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cosignerId** | [**string**] | The unique identifier of the cosigner | defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'
 **pageCursor** | [**string**] | Cursor of the required page | (optional) defaults to undefined
 **pageSize** | [**number**] | Maximum number of items in the page | (optional) defaults to 10


### Return type

**[ApiUsersPaginatedResponse](../models/ApiUsersPaginatedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated response containing CosignerApiUser objects |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCosigners**
> CosignersPaginatedResponse getCosigners()

Get all workspace cosigners (paginated). Endpoint Permission: Admin and Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersApiGetCosignersRequest, CosignersPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersApiGetCosignersRequest = {
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: ASC,
  // string | Cursor of the required page (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of items in the page (optional)
  pageSize: 10,
};

fireblocks.cosigners.getCosigners(body).then((res: FireblocksResponse<CosignersPaginatedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'
 **pageCursor** | [**string**] | Cursor of the required page | (optional) defaults to undefined
 **pageSize** | [**number**] | Maximum number of items in the page | (optional) defaults to 10


### Return type

**[CosignersPaginatedResponse](../models/CosignersPaginatedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated response containing Cosigner objects |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **pairCosignerApiUser**
> PairApiUserResponse pairCosignerApiUser(pairApiUserRequest, )

Pair an API user to a cosigner Endpoint Permission: Admin and Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersApiPairCosignerApiUserRequest, PairApiUserResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersApiPairCosignerApiUserRequest = {
  // PairApiUserRequest
  pairApiUserRequest: param_value,
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string | The unique identifier of the API user
  apiUserId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.cosigners.pairCosignerApiUser(body).then((res: FireblocksResponse<PairApiUserResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pairApiUserRequest** | **[PairApiUserRequest](../models/PairApiUserRequest.md)**|  |
 **cosignerId** | [**string**] | The unique identifier of the cosigner | defaults to undefined
 **apiUserId** | [**string**] | The unique identifier of the API user | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[PairApiUserResponse](../models/PairApiUserResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The API user object to be paired |  * X-Request-ID -  <br>  * Location -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **renameCosigner**
> Cosigner renameCosigner(renameCosigner, )

Rename a cosigner by ID. Endpoint Permission: Admin and Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersApiRenameCosignerRequest, Cosigner } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersApiRenameCosignerRequest = {
  // RenameCosigner
  renameCosigner: param_value,
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.cosigners.renameCosigner(body).then((res: FireblocksResponse<Cosigner>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **renameCosigner** | **[RenameCosigner](../models/RenameCosigner.md)**|  |
 **cosignerId** | [**string**] | The unique identifier of the cosigner | defaults to undefined


### Return type

**[Cosigner](../models/Cosigner.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A cosigner object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **unpairCosignerApiUser**
> CosignerApiUser unpairCosignerApiUser()

Unpair an API user from a cosigner Endpoint Permission: Admin and Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersApiUnpairCosignerApiUserRequest, CosignerApiUser } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersApiUnpairCosignerApiUserRequest = {
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string | The unique identifier of the API user
  apiUserId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.cosigners.unpairCosignerApiUser(body).then((res: FireblocksResponse<CosignerApiUser>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cosignerId** | [**string**] | The unique identifier of the cosigner | defaults to undefined
 **apiUserId** | [**string**] | The unique identifier of the API user | defaults to undefined


### Return type

**[CosignerApiUser](../models/CosignerApiUser.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The API user object to be unpaired |  * X-Request-ID -  <br>  * Location -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateCosignerApiUserCallbackHandler**
> UpdateCallbackHandlerResponse updateCosignerApiUserCallbackHandler(updateCallbackHandlerRequest, )

Update the callback handler of an API user Endpoint Permission: Admin and Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersApiUpdateCosignerApiUserCallbackHandlerRequest, UpdateCallbackHandlerResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersApiUpdateCosignerApiUserCallbackHandlerRequest = {
  // UpdateCallbackHandlerRequest
  updateCallbackHandlerRequest: param_value,
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string | The unique identifier of the API user
  apiUserId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.cosigners.updateCosignerApiUserCallbackHandler(body).then((res: FireblocksResponse<UpdateCallbackHandlerResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCallbackHandlerRequest** | **[UpdateCallbackHandlerRequest](../models/UpdateCallbackHandlerRequest.md)**|  |
 **cosignerId** | [**string**] | The unique identifier of the cosigner | defaults to undefined
 **apiUserId** | [**string**] | The unique identifier of the API user | defaults to undefined


### Return type

**[UpdateCallbackHandlerResponse](../models/UpdateCallbackHandlerResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The API user object with the new callback handler |  * X-Request-ID -  <br>  * Location -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



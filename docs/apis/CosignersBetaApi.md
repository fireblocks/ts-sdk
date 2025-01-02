# CosignersBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**addCosigner**](#addCosigner) | **POST** /cosigners | Add cosigner
[**getApiKey**](#getApiKey) | **GET** /cosigners/{cosignerId}/api_keys/{apiKeyId} | Get API key
[**getApiKeys**](#getApiKeys) | **GET** /cosigners/{cosignerId}/api_keys | Get all API keys
[**getCosigner**](#getCosigner) | **GET** /cosigners/{cosignerId} | Get cosigner
[**getCosigners**](#getCosigners) | **GET** /cosigners | Get all cosigners
[**getRequestStatus**](#getRequestStatus) | **GET** /cosigners/{cosignerId}/api_keys/{apiKeyId}/{requestId} | Get request status
[**pairApiKey**](#pairApiKey) | **PUT** /cosigners/{cosignerId}/api_keys/{apiKeyId} | Pair API key
[**renameCosigner**](#renameCosigner) | **PATCH** /cosigners/{cosignerId} | Rename cosigner
[**unpairApiKey**](#unpairApiKey) | **DELETE** /cosigners/{cosignerId}/api_keys/{apiKeyId} | Unpair API key
[**updateCallbackHandler**](#updateCallbackHandler) | **PATCH** /cosigners/{cosignerId}/api_keys/{apiKeyId} | Update API key callback handler


# **addCosigner**
> AddCosignerResponse addCosigner(addCosignerRequest)

Add a new cosigner. The cosigner will be pending pairing until the API key is manually paired

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersBetaApiAddCosignerRequest, AddCosignerResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersBetaApiAddCosignerRequest = {
  // AddCosignerRequest
  addCosignerRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.cosignersBeta.addCosigner(body).then((res: FireblocksResponse<AddCosignerResponse>) => {
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

# **getApiKey**
> ApiKey getApiKey()

Get an API key by ID **Note:** These endpoints are currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersBetaApiGetApiKeyRequest, ApiKey } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersBetaApiGetApiKeyRequest = {
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string | The unique identifier of the API key
  apiKeyId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.cosignersBeta.getApiKey(body).then((res: FireblocksResponse<ApiKey>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cosignerId** | [**string**] | The unique identifier of the cosigner | defaults to undefined
 **apiKeyId** | [**string**] | The unique identifier of the API key | defaults to undefined


### Return type

**[ApiKey](../models/ApiKey.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An ApiKey object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getApiKeys**
> ApiKeysPaginatedResponse getApiKeys()

Get all cosigner paired API keys (paginated)

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersBetaApiGetApiKeysRequest, ApiKeysPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersBetaApiGetApiKeysRequest = {
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: ASC,
  // string | Cursor of the required page (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of items in the page (optional)
  pageSize: 10,
};

fireblocks.cosignersBeta.getApiKeys(body).then((res: FireblocksResponse<ApiKeysPaginatedResponse>) => {
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

**[ApiKeysPaginatedResponse](../models/ApiKeysPaginatedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated response containing ApiKey objects |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCosigner**
> Cosigner getCosigner()

Get a cosigner by ID **Note:** These endpoints are currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersBetaApiGetCosignerRequest, Cosigner } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersBetaApiGetCosignerRequest = {
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.cosignersBeta.getCosigner(body).then((res: FireblocksResponse<Cosigner>) => {
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

# **getCosigners**
> CosignersPaginatedResponse getCosigners()

Get all workspace cosigners (paginated) **Note:** These endpoints are currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersBetaApiGetCosignersRequest, CosignersPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersBetaApiGetCosignersRequest = {
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: ASC,
  // string | Cursor of the required page (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of items in the page (optional)
  pageSize: 10,
};

fireblocks.cosignersBeta.getCosigners(body).then((res: FireblocksResponse<CosignersPaginatedResponse>) => {
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

# **getRequestStatus**
> Status getRequestStatus()

Get the status of an asynchronous request

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersBetaApiGetRequestStatusRequest, Status } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersBetaApiGetRequestStatusRequest = {
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string | The unique identifier of the API key
  apiKeyId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string
  requestId: requestId_example,
};

fireblocks.cosignersBeta.getRequestStatus(body).then((res: FireblocksResponse<Status>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cosignerId** | [**string**] | The unique identifier of the cosigner | defaults to undefined
 **apiKeyId** | [**string**] | The unique identifier of the API key | defaults to undefined
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

# **pairApiKey**
> PairApiKeyResponse pairApiKey(pairApiKeyRequest, )

Pair an API key to a cosigner

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersBetaApiPairApiKeyRequest, PairApiKeyResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersBetaApiPairApiKeyRequest = {
  // PairApiKeyRequest
  pairApiKeyRequest: param_value,
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string | The unique identifier of the API key
  apiKeyId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.cosignersBeta.pairApiKey(body).then((res: FireblocksResponse<PairApiKeyResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pairApiKeyRequest** | **[PairApiKeyRequest](../models/PairApiKeyRequest.md)**|  |
 **cosignerId** | [**string**] | The unique identifier of the cosigner | defaults to undefined
 **apiKeyId** | [**string**] | The unique identifier of the API key | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[PairApiKeyResponse](../models/PairApiKeyResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The API key object to be paired |  * X-Request-ID -  <br>  * Location -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **renameCosigner**
> Cosigner renameCosigner(renameCosigner, )

Rename a cosigner by ID **Note:** These endpoints are currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersBetaApiRenameCosignerRequest, Cosigner } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersBetaApiRenameCosignerRequest = {
  // RenameCosigner
  renameCosigner: param_value,
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.cosignersBeta.renameCosigner(body).then((res: FireblocksResponse<Cosigner>) => {
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

# **unpairApiKey**
> ApiKey unpairApiKey()

Unpair an API key from a cosigner

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersBetaApiUnpairApiKeyRequest, ApiKey } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersBetaApiUnpairApiKeyRequest = {
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string | The unique identifier of the API key
  apiKeyId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.cosignersBeta.unpairApiKey(body).then((res: FireblocksResponse<ApiKey>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cosignerId** | [**string**] | The unique identifier of the cosigner | defaults to undefined
 **apiKeyId** | [**string**] | The unique identifier of the API key | defaults to undefined


### Return type

**[ApiKey](../models/ApiKey.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The API key object to be unpaired |  * X-Request-ID -  <br>  * Location -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateCallbackHandler**
> UpdateCallbackHandlerResponse updateCallbackHandler(updateCallbackHandlerRequest, )

Update the callback handler of an API key

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CosignersBetaApiUpdateCallbackHandlerRequest, UpdateCallbackHandlerResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CosignersBetaApiUpdateCallbackHandlerRequest = {
  // UpdateCallbackHandlerRequest
  updateCallbackHandlerRequest: param_value,
  // string | The unique identifier of the cosigner
  cosignerId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // string | The unique identifier of the API key
  apiKeyId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.cosignersBeta.updateCallbackHandler(body).then((res: FireblocksResponse<UpdateCallbackHandlerResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCallbackHandlerRequest** | **[UpdateCallbackHandlerRequest](../models/UpdateCallbackHandlerRequest.md)**|  |
 **cosignerId** | [**string**] | The unique identifier of the cosigner | defaults to undefined
 **apiKeyId** | [**string**] | The unique identifier of the API key | defaults to undefined


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
**202** | The API key object with the new callback handler |  * X-Request-ID -  <br>  * Location -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



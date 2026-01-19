# CosignersBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiKey**](#getApiKey) | **GET** /cosigners/{cosignerId}/api_keys/{apiKeyId} | Get API key
[**getApiKeys**](#getApiKeys) | **GET** /cosigners/{cosignerId}/api_keys | Get all API keys
[**getCosigner**](#getCosigner) | **GET** /cosigners/{cosignerId} | Get cosigner
[**getCosigners**](#getCosigners) | **GET** /cosigners | Get all cosigners
[**renameCosigner**](#renameCosigner) | **PATCH** /cosigners/{cosignerId} | Rename cosigner


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

Get all cosigner paired API keys (paginated) **Note:** These endpoints are currently in beta and might be subject to changes. 

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



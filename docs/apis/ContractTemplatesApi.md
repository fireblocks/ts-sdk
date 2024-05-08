# ContractTemplatesApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteContractTemplateById**](#deleteContractTemplateById) | **DELETE** /tokenization/templates/{contractTemplateId} | Delete a contract template by id
[**deployContract**](#deployContract) | **POST** /tokenization/templates/{contractTemplateId}/deploy | Deploy contract
[**getConstructorByContractTemplateId**](#getConstructorByContractTemplateId) | **GET** /tokenization/templates/{contractTemplateId}/constructor | Return contract template\&#39;s constructor
[**getContractTemplateById**](#getContractTemplateById) | **GET** /tokenization/templates/{contractTemplateId} | Return contract template by id
[**getContractTemplates**](#getContractTemplates) | **GET** /tokenization/templates | List all contract templates
[**getFunctionAbiByContractTemplateId**](#getFunctionAbiByContractTemplateId) | **GET** /tokenization/templates/{contractTemplateId}/function | Return contract template\&#39;s function
[**uploadContractTemplate**](#uploadContractTemplate) | **POST** /tokenization/templates | Upload contract template


# **deleteContractTemplateById**
> deleteContractTemplateById()

Delete a contract by id. allowed only for private contract templates. Notice: it is irreversible!

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ContractTemplatesApiDeleteContractTemplateByIdRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ContractTemplatesApiDeleteContractTemplateByIdRequest = {
  // string | The Contract Template identifier
  contractTemplateId: b70701f4-d7b1-4795-a8ee-b09cdb5b850d,
};

fireblocks.contractTemplates.deleteContractTemplateById(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractTemplateId** | [**string**] | The Contract Template identifier | defaults to undefined


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
**204** | Contract was deleted successfully |  -  |
**404** | Could not find contract. |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deployContract**
> ContractDeployResponse deployContract(contractDeployRequest, )

Deploy a new contract by contract template id. If you wish to deploy a token (ERC20, ERC721 etc), and create asset please use POST /tokenization

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ContractTemplatesApiDeployContractRequest, ContractDeployResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ContractTemplatesApiDeployContractRequest = {
  // ContractDeployRequest
  contractDeployRequest: param_value,
  // string | The Contract Template identifier
  contractTemplateId: b70701f4-d7b1-4795-a8ee-b09cdb5b850d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.contractTemplates.deployContract(body).then((res: FireblocksResponse<ContractDeployResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractDeployRequest** | **[ContractDeployRequest](../models/ContractDeployRequest.md)**|  |
 **contractTemplateId** | [**string**] | The Contract Template identifier | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ContractDeployResponse](../models/ContractDeployResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Contract was deployed successfully |  -  |
**404** | Could not find contract. |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getConstructorByContractTemplateId**
> AbiFunction getConstructorByContractTemplateId()

Return contract template\'s constructor ABI

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ContractTemplatesApiGetConstructorByContractTemplateIdRequest, AbiFunction } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ContractTemplatesApiGetConstructorByContractTemplateIdRequest = {
  // string | The Contract Template identifier
  contractTemplateId: b70701f4-d7b1-4795-a8ee-b09cdb5b850d,
  // boolean | true if you want to get the abi with its docs (optional)
  withDocs: true,
};

fireblocks.contractTemplates.getConstructorByContractTemplateId(body).then((res: FireblocksResponse<AbiFunction>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractTemplateId** | [**string**] | The Contract Template identifier | defaults to undefined
 **withDocs** | [**boolean**] | true if you want to get the abi with its docs | (optional) defaults to false


### Return type

**[AbiFunction](../models/AbiFunction.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contract template\&#39;s constructor ABI was returned successfully |  -  |
**404** | Could not find contract. |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getContractTemplateById**
> ContractTemplateDto getContractTemplateById()

Return detailed information about the contract template

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ContractTemplatesApiGetContractTemplateByIdRequest, ContractTemplateDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ContractTemplatesApiGetContractTemplateByIdRequest = {
  // string | The Contract Template identifier
  contractTemplateId: b70701f4-d7b1-4795-a8ee-b09cdb5b850d,
};

fireblocks.contractTemplates.getContractTemplateById(body).then((res: FireblocksResponse<ContractTemplateDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractTemplateId** | [**string**] | The Contract Template identifier | defaults to undefined


### Return type

**[ContractTemplateDto](../models/ContractTemplateDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contract template was returned successfully |  -  |
**404** | Could not find contract. |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getContractTemplates**
> TemplatesPaginatedResponse getContractTemplates()

Return minimal representation of all the contract templates available for the workspace

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ContractTemplatesApiGetContractTemplatesRequest, TemplatesPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ContractTemplatesApiGetContractTemplatesRequest = {
  // number | Items per page (max 100) (optional)
  limit: 8.14,
  // number | Paging offset (optional)
  offset: 8.14,
  // string | Page cursor to get the next page (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page, requesting more then max will return max items (optional)
  pageSize: 10,
  // 'FUNGIBLE_TOKEN' | 'NON_FUNGIBLE_TOKEN' | 'TOKEN_UTILITY' | The type of the contract templates you wish to retrieve. Can accept one type, more or none (optional)
  type: FUNGIBLE_TOKEN,
  // 'ON_DEPLOYMENT' | 'POST_DEPLOYMENT' (optional)
  initializationPhase: initializationPhase_example,
};

fireblocks.contractTemplates.getContractTemplates(body).then((res: FireblocksResponse<TemplatesPaginatedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | Items per page (max 100) | (optional) defaults to 100
 **offset** | [**number**] | Paging offset | (optional) defaults to 0
 **pageCursor** | [**string**] | Page cursor to get the next page | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page, requesting more then max will return max items | (optional) defaults to undefined
 **type** | [**&#39;FUNGIBLE_TOKEN&#39; | &#39;NON_FUNGIBLE_TOKEN&#39; | &#39;TOKEN_UTILITY&#39;**]**Array<&#39;FUNGIBLE_TOKEN&#39; &#124; &#39;NON_FUNGIBLE_TOKEN&#39; &#124; &#39;TOKEN_UTILITY&#39;>** | The type of the contract templates you wish to retrieve. Can accept one type, more or none | (optional) defaults to undefined
 **initializationPhase** | [**&#39;ON_DEPLOYMENT&#39; | &#39;POST_DEPLOYMENT&#39;**]**Array<&#39;ON_DEPLOYMENT&#39; &#124; &#39;POST_DEPLOYMENT&#39;>** |  | (optional) defaults to undefined


### Return type

**[TemplatesPaginatedResponse](../models/TemplatesPaginatedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of contract templates was returned successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getFunctionAbiByContractTemplateId**
> AbiFunction getFunctionAbiByContractTemplateId()

Return contract template`s function ABI by signature

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ContractTemplatesApiGetFunctionAbiByContractTemplateIdRequest, AbiFunction } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ContractTemplatesApiGetFunctionAbiByContractTemplateIdRequest = {
  // string | The Contract Template identifier
  contractTemplateId: b70701f4-d7b1-4795-a8ee-b09cdb5b850d,
  // string
  functionSignature: functionSignature_example,
};

fireblocks.contractTemplates.getFunctionAbiByContractTemplateId(body).then((res: FireblocksResponse<AbiFunction>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractTemplateId** | [**string**] | The Contract Template identifier | defaults to undefined
 **functionSignature** | [**string**] |  | defaults to undefined


### Return type

**[AbiFunction](../models/AbiFunction.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contract template&#x60;s function ABI was returned successfully |  -  |
**404** | Could not find contract. |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **uploadContractTemplate**
> ContractTemplateDto uploadContractTemplate(contractUploadRequest)

Upload a new contract template. This contract template will be available for the workspace

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ContractTemplatesApiUploadContractTemplateRequest, ContractTemplateDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ContractTemplatesApiUploadContractTemplateRequest = {
  // ContractUploadRequest
  contractUploadRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.contractTemplates.uploadContractTemplate(body).then((res: FireblocksResponse<ContractTemplateDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractUploadRequest** | **[ContractUploadRequest](../models/ContractUploadRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ContractTemplateDto](../models/ContractTemplateDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Contract was uploaded successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



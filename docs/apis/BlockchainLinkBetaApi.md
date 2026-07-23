# BlockchainLinkBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateBlockchainLinkChain**](#activateBlockchainLinkChain) | **POST** /blockchain_link/blockchains/{blockchainId}/activate | Activate a blockchain (triggers activation workflow)
[**createBlockchainLinkChain**](#createBlockchainLinkChain) | **POST** /blockchain_link/blockchains | Create a new blockchain
[**deleteBlockchainLinkChain**](#deleteBlockchainLinkChain) | **DELETE** /blockchain_link/blockchains/{blockchainId} | Delete a blockchain
[**getBlockchainLinkBillingInfo**](#getBlockchainLinkBillingInfo) | **GET** /blockchain_link/blockchains/billing_info | Get tenant billing info
[**getBlockchainLinkChain**](#getBlockchainLinkChain) | **GET** /blockchain_link/blockchains/{blockchainId} | Get a blockchain by ID
[**getBlockchainLinkTestWalletAddress**](#getBlockchainLinkTestWalletAddress) | **GET** /blockchain_link/blockchains/test_wallet_address | Get the test wallet address
[**listBlockchainLinkChains**](#listBlockchainLinkChains) | **GET** /blockchain_link/blockchains | List blockchains with pagination and filtering
[**triggerBlockchainLinkValidation**](#triggerBlockchainLinkValidation) | **POST** /blockchain_link/blockchains/{blockchainId}/validate | Trigger validation workflow
[**updateBlockchainLinkChain**](#updateBlockchainLinkChain) | **PUT** /blockchain_link/blockchains/{blockchainId} | Update a blockchain


# **activateBlockchainLinkChain**
> ActivateBlockchainResponse activateBlockchainLinkChain()

Starts the asynchronous activation workflow for the blockchain identified by its ID, transitioning it towards the ACTIVATED state.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainLinkBetaApiActivateBlockchainLinkChainRequest, ActivateBlockchainResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainLinkBetaApiActivateBlockchainLinkChainRequest = {
  // string | Required blockchain ID to activate
  blockchainId: blockchainId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.blockchainLinkBeta.activateBlockchainLinkChain(body).then((res: FireblocksResponse<ActivateBlockchainResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchainId** | [**string**] | Required blockchain ID to activate | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ActivateBlockchainResponse](../models/ActivateBlockchainResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createBlockchainLinkChain**
> CreateBlockchainResponse createBlockchainLinkChain(createBlockchainRequest)

Registers a new tenant-managed blockchain from the supplied declared properties. The blockchain starts in the CREATED state and must be activated separately before it can be used.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainLinkBetaApiCreateBlockchainLinkChainRequest, CreateBlockchainResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainLinkBetaApiCreateBlockchainLinkChainRequest = {
  // CreateBlockchainRequest
  createBlockchainRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.blockchainLinkBeta.createBlockchainLinkChain(body).then((res: FireblocksResponse<CreateBlockchainResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createBlockchainRequest** | **[CreateBlockchainRequest](../models/CreateBlockchainRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CreateBlockchainResponse](../models/CreateBlockchainResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteBlockchainLinkChain**
> deleteBlockchainLinkChain()

Permanently removes a blockchain identified by its ID. The blockchain must not be in an active lifecycle state.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainLinkBetaApiDeleteBlockchainLinkChainRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainLinkBetaApiDeleteBlockchainLinkChainRequest = {
  // string | tenant_id is extracted from JWT token context
  blockchainId: blockchainId_example,
};

fireblocks.blockchainLinkBeta.deleteBlockchainLinkChain(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchainId** | [**string**] | tenant_id is extracted from JWT token context | defaults to undefined


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
**204** | No Content |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getBlockchainLinkBillingInfo**
> GetBillingInfoResponse getBlockchainLinkBillingInfo()

Returns the tenant\'s blockchain activation limit and current usage. tenant_id is derived from the JWT token context.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, GetBillingInfoResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.blockchainLinkBeta.getBlockchainLinkBillingInfo(body).then((res: FireblocksResponse<GetBillingInfoResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[GetBillingInfoResponse](../models/GetBillingInfoResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getBlockchainLinkChain**
> GetBlockchainByIdResponse getBlockchainLinkChain()

Returns a single blockchain owned by the tenant, identified by its ID.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainLinkBetaApiGetBlockchainLinkChainRequest, GetBlockchainByIdResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainLinkBetaApiGetBlockchainLinkChainRequest = {
  // string | ID of the blockchain to retrieve (supplied as a path parameter).
  blockchainId: f47ac10b-58cc-4372-a567-0e02b2c3d479,
};

fireblocks.blockchainLinkBeta.getBlockchainLinkChain(body).then((res: FireblocksResponse<GetBlockchainByIdResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchainId** | [**string**] | ID of the blockchain to retrieve (supplied as a path parameter). | defaults to undefined


### Return type

**[GetBlockchainByIdResponse](../models/GetBlockchainByIdResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getBlockchainLinkTestWalletAddress**
> GetTestWalletAddressResponse getBlockchainLinkTestWalletAddress()

Returns the Ethereum address derived from the configured external wallet private key, used by the UI for test transfers. tenant_id is derived from the JWT token context.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, GetTestWalletAddressResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.blockchainLinkBeta.getBlockchainLinkTestWalletAddress(body).then((res: FireblocksResponse<GetTestWalletAddressResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[GetTestWalletAddressResponse](../models/GetTestWalletAddressResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listBlockchainLinkChains**
> ListBlockchainsResponse2 listBlockchainLinkChains()

Returns the tenant\'s blockchains, paginated and filterable by state, network environment, and free-text search, with configurable sorting.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainLinkBetaApiListBlockchainLinkChainsRequest, ListBlockchainsResponse2 } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainLinkBetaApiListBlockchainLinkChainsRequest = {
  // string | tenant_id is extracted from JWT token context. Opaque cursor for the requested page. Currently encodes the 1-based page number as a decimal string (\"1\", \"2\", ...); treat as opaque on the client. Absent = first page. (optional)
  pageCursor: 1,
  // number | Maximum number of items per page. Default 20, clamped to [1, 1000]. (optional)
  pageSize: 20,
  // string | Free-text search across chain and symbol name. (optional)
  search: eth,
  // Array<BlockchainStateFilter> | Include filter (repeated query params). (optional)
  status: ["BLOCKCHAIN_STATE_ACTIVATED"],
  // BlockchainEnvironment | Filter by network. (optional)
  blockchainEnv: param_value,
  // BlockchainSortField | Sort field. Default: createdAt. (optional)
  sortBy: param_value,
  // 'ASC' | 'DESC' | Sort order. Default: DESC. (optional)
  order: DESC,
  // Array<BlockchainStateFilter> | Exclude filter (repeated query params). (optional)
  statusExclude: ["BLOCKCHAIN_STATE_DEACTIVATED"],
};

fireblocks.blockchainLinkBeta.listBlockchainLinkChains(body).then((res: FireblocksResponse<ListBlockchainsResponse2>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | tenant_id is extracted from JWT token context. Opaque cursor for the requested page. Currently encodes the 1-based page number as a decimal string (\&quot;1\&quot;, \&quot;2\&quot;, ...); treat as opaque on the client. Absent &#x3D; first page. | (optional) defaults to undefined
 **pageSize** | [**number**] | Maximum number of items per page. Default 20, clamped to [1, 1000]. | (optional) defaults to 20
 **search** | [**string**] | Free-text search across chain and symbol name. | (optional) defaults to undefined
 **status** | **Array&lt;BlockchainStateFilter&gt;** | Include filter (repeated query params). | (optional) defaults to undefined
 **blockchainEnv** | **BlockchainEnvironment** | Filter by network. | (optional) defaults to undefined
 **sortBy** | **BlockchainSortField** | Sort field. Default: createdAt. | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order. Default: DESC. | (optional) defaults to 'DESC'
 **statusExclude** | **Array&lt;BlockchainStateFilter&gt;** | Exclude filter (repeated query params). | (optional) defaults to undefined


### Return type

**[ListBlockchainsResponse2](../models/ListBlockchainsResponse2.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **triggerBlockchainLinkValidation**
> TriggerValidationFlowResponse triggerBlockchainLinkValidation()

Starts the asynchronous validation workflow for a blockchain and its associated validation session.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainLinkBetaApiTriggerBlockchainLinkValidationRequest, TriggerValidationFlowResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainLinkBetaApiTriggerBlockchainLinkValidationRequest = {
  // string | ID of the blockchain to validate.
  blockchainId: f47ac10b-58cc-4372-a567-0e02b2c3d479,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.blockchainLinkBeta.triggerBlockchainLinkValidation(body).then((res: FireblocksResponse<TriggerValidationFlowResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchainId** | [**string**] | ID of the blockchain to validate. | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TriggerValidationFlowResponse](../models/TriggerValidationFlowResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Accepted |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateBlockchainLinkChain**
> UpdateBlockchainResponse updateBlockchainLinkChain(blockchainDeclaredProperties, )

Updates the declared properties of an existing blockchain identified by its ID. Only the fields supplied in the request are modified.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainLinkBetaApiUpdateBlockchainLinkChainRequest, UpdateBlockchainResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainLinkBetaApiUpdateBlockchainLinkChainRequest = {
  // BlockchainDeclaredProperties
  blockchainDeclaredProperties: param_value,
  // string | ID of the blockchain to update (supplied as a path parameter).
  blockchainId: f47ac10b-58cc-4372-a567-0e02b2c3d479,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.blockchainLinkBeta.updateBlockchainLinkChain(body).then((res: FireblocksResponse<UpdateBlockchainResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchainDeclaredProperties** | **[BlockchainDeclaredProperties](../models/BlockchainDeclaredProperties.md)**|  |
 **blockchainId** | [**string**] | ID of the blockchain to update (supplied as a path parameter). | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[UpdateBlockchainResponse](../models/UpdateBlockchainResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



# TokenizationApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**burnCollectionToken**](#burnCollectionToken) | **POST** /tokenization/collections/{id}/tokens/burn | Burn tokens
[**createNewCollection**](#createNewCollection) | **POST** /tokenization/collections | Create a new collection
[**fetchCollectionTokenDetails**](#fetchCollectionTokenDetails) | **GET** /tokenization/collections/{id}/tokens/{tokenId} | Get collection token details
[**getCollectionById**](#getCollectionById) | **GET** /tokenization/collections/{id} | Get a collection by id
[**getDeployableAddress**](#getDeployableAddress) | **POST** /tokenization/multichain/deterministic_address | Get deterministic address for contract deployment
[**getLinkedCollections**](#getLinkedCollections) | **GET** /tokenization/collections | Get collections
[**getLinkedToken**](#getLinkedToken) | **GET** /tokenization/tokens/{id} | Return a linked token
[**getLinkedTokens**](#getLinkedTokens) | **GET** /tokenization/tokens | List all linked tokens
[**issueNewToken**](#issueNewToken) | **POST** /tokenization/tokens | Issue a new token
[**issueTokenMultiChain**](#issueTokenMultiChain) | **POST** /tokenization/multichain/tokens | Issue a token on one or more blockchains
[**link**](#link) | **POST** /tokenization/tokens/link | Link a contract
[**mintCollectionToken**](#mintCollectionToken) | **POST** /tokenization/collections/{id}/tokens/mint | Mint tokens
[**reIssueTokenMultiChain**](#reIssueTokenMultiChain) | **POST** /tokenization/multichain/reissue/token/{tokenLinkId} | Reissue a multichain token
[**unlink**](#unlink) | **DELETE** /tokenization/tokens/{id} | Unlink a token
[**unlinkCollection**](#unlinkCollection) | **DELETE** /tokenization/collections/{id} | Delete a collection link


# **burnCollectionToken**
> CollectionBurnResponseDto burnCollectionToken(collectionBurnRequestDto, )

Burn tokens in a collection

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiBurnCollectionTokenRequest, CollectionBurnResponseDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiBurnCollectionTokenRequest = {
  // CollectionBurnRequestDto
  collectionBurnRequestDto: param_value,
  // string | The collection link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tokenization.burnCollectionToken(body).then((res: FireblocksResponse<CollectionBurnResponseDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionBurnRequestDto** | **[CollectionBurnRequestDto](../models/CollectionBurnRequestDto.md)**|  |
 **id** | [**string**] | The collection link id | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CollectionBurnResponseDto](../models/CollectionBurnResponseDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Tokens burned successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createNewCollection**
> CollectionLinkDto createNewCollection(collectionDeployRequestDto)

Create a new collection and link it as a token

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiCreateNewCollectionRequest, CollectionLinkDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiCreateNewCollectionRequest = {
  // CollectionDeployRequestDto
  collectionDeployRequestDto: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tokenization.createNewCollection(body).then((res: FireblocksResponse<CollectionLinkDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionDeployRequestDto** | **[CollectionDeployRequestDto](../models/CollectionDeployRequestDto.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CollectionLinkDto](../models/CollectionLinkDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Collection was created successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **fetchCollectionTokenDetails**
> CollectionLinkDto fetchCollectionTokenDetails()

Get collection token details by id

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiFetchCollectionTokenDetailsRequest, CollectionLinkDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiFetchCollectionTokenDetailsRequest = {
  // string | The collection link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
  // string | The tokenId as it appears on the blockchain
  tokenId: 1,
};

fireblocks.tokenization.fetchCollectionTokenDetails(body).then((res: FireblocksResponse<CollectionLinkDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The collection link id | defaults to undefined
 **tokenId** | [**string**] | The tokenId as it appears on the blockchain | defaults to undefined


### Return type

**[CollectionLinkDto](../models/CollectionLinkDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection token details were fetched successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCollectionById**
> CollectionLinkDto getCollectionById()

Get a collection by id

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetCollectionByIdRequest, CollectionLinkDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetCollectionByIdRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
};

fireblocks.tokenization.getCollectionById(body).then((res: FireblocksResponse<CollectionLinkDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined


### Return type

**[CollectionLinkDto](../models/CollectionLinkDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection fetched successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDeployableAddress**
> DeployableAddressResponse getDeployableAddress(getDeployableAddressRequest)

Get a deterministic address for contract deployment. The address is derived from the contract\'s bytecode and  provided salt. This endpoint is used to get the address of a contract that will be deployed in the future.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetDeployableAddressRequest, DeployableAddressResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetDeployableAddressRequest = {
  // GetDeployableAddressRequest
  getDeployableAddressRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tokenization.getDeployableAddress(body).then((res: FireblocksResponse<DeployableAddressResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **getDeployableAddressRequest** | **[GetDeployableAddressRequest](../models/GetDeployableAddressRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[DeployableAddressResponse](../models/DeployableAddressResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deterministic address for contract deployment |  -  |
**400** | Invalid parameters or template has no bytecode |  -  |
**409** | Address is already taken |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getLinkedCollections**
> GetLinkedCollectionsPaginatedResponse getLinkedCollections()

Get collections (paginated)

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetLinkedCollectionsRequest, GetLinkedCollectionsPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetLinkedCollectionsRequest = {
  // string | Page cursor to get the next page, for example - \"MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==\" (optional)
  pageCursor: pageCursor_example,
  // number | Number of items per page (max 100), requesting more then 100 will return 100 items (optional)
  pageSize: 10,
  // any | A comma separated list of statuses to filter. Default is \"COMPLETED\" (optional)
  status: COMPLETED,
};

fireblocks.tokenization.getLinkedCollections(body).then((res: FireblocksResponse<GetLinkedCollectionsPaginatedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Page cursor to get the next page, for example - \&quot;MjAyMy0xMi0xMyAyMDozNjowOC4zMDI&#x3D;:MTEwMA&#x3D;&#x3D;\&quot; | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page (max 100), requesting more then 100 will return 100 items | (optional) defaults to 100
 **status** | **any** | A comma separated list of statuses to filter. Default is \&quot;COMPLETED\&quot; | (optional) defaults to undefined


### Return type

**[GetLinkedCollectionsPaginatedResponse](../models/GetLinkedCollectionsPaginatedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection fetched successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getLinkedToken**
> TokenLinkDto getLinkedToken()

Return a linked token, with its status and metadata.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetLinkedTokenRequest, TokenLinkDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetLinkedTokenRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
};

fireblocks.tokenization.getLinkedToken(body).then((res: FireblocksResponse<TokenLinkDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined


### Return type

**[TokenLinkDto](../models/TokenLinkDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token fetched successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getLinkedTokens**
> TokensPaginatedResponse getLinkedTokens()

Return all linked tokens (paginated)

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetLinkedTokensRequest, TokensPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetLinkedTokensRequest = {
  // string | Page cursor to get the next page (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page, requesting more then max will return max items (optional)
  pageSize: 10,
  // any | A comma separated list of statuses to filter. Default is \"COMPLETED\" (optional)
  status: COMPLETED,
};

fireblocks.tokenization.getLinkedTokens(body).then((res: FireblocksResponse<TokensPaginatedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Page cursor to get the next page | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page, requesting more then max will return max items | (optional) defaults to undefined
 **status** | **any** | A comma separated list of statuses to filter. Default is \&quot;COMPLETED\&quot; | (optional) defaults to undefined


### Return type

**[TokensPaginatedResponse](../models/TokensPaginatedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **issueNewToken**
> TokenLinkDto issueNewToken(createTokenRequestDto)

Facilitates the creation of a new token, supporting both EVM-based and Stellar/Ripple platforms. For EVM, it deploys the corresponding contract template to the blockchain and links the token to the workspace. For Stellar/Ripple, it links a newly created token directly to the workspace without deploying a contract. Returns the token link with status \"PENDING\" until the token is deployed or \"SUCCESS\" if no deployment is needed.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiIssueNewTokenRequest, TokenLinkDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiIssueNewTokenRequest = {
  // CreateTokenRequestDto
  createTokenRequestDto: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tokenization.issueNewToken(body).then((res: FireblocksResponse<TokenLinkDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTokenRequestDto** | **[CreateTokenRequestDto](../models/CreateTokenRequestDto.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TokenLinkDto](../models/TokenLinkDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Token was created successfully |  -  |
**409** | Asset already exists |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **issueTokenMultiChain**
> IssueTokenMultichainResponse issueTokenMultiChain(createMultichainTokenRequest)

Facilitates the creation of a new token on one or more blockchains.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiIssueTokenMultiChainRequest, IssueTokenMultichainResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiIssueTokenMultiChainRequest = {
  // CreateMultichainTokenRequest
  createMultichainTokenRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tokenization.issueTokenMultiChain(body).then((res: FireblocksResponse<IssueTokenMultichainResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMultichainTokenRequest** | **[CreateMultichainTokenRequest](../models/CreateMultichainTokenRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[IssueTokenMultichainResponse](../models/IssueTokenMultichainResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Tokens were created successfully |  -  |
**400** | Invalid input. |  -  |
**409** | Address is already taken. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **link**
> TokenLinkDto link(tokenLinkRequestDto)

Link an a contract

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiLinkRequest, TokenLinkDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiLinkRequest = {
  // TokenLinkRequestDto
  tokenLinkRequestDto: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tokenization.link(body).then((res: FireblocksResponse<TokenLinkDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tokenLinkRequestDto** | **[TokenLinkRequestDto](../models/TokenLinkRequestDto.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TokenLinkDto](../models/TokenLinkDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Token linked successfully |  -  |
**201** |  |  -  |
**404** | Could not find the underlying contract to link to |  -  |
**409** | Token link for {refId} already exists |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **mintCollectionToken**
> CollectionMintResponseDto mintCollectionToken(collectionMintRequestDto, )

Mint tokens and upload metadata

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiMintCollectionTokenRequest, CollectionMintResponseDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiMintCollectionTokenRequest = {
  // CollectionMintRequestDto
  collectionMintRequestDto: param_value,
  // string | The collection link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tokenization.mintCollectionToken(body).then((res: FireblocksResponse<CollectionMintResponseDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionMintRequestDto** | **[CollectionMintRequestDto](../models/CollectionMintRequestDto.md)**|  |
 **id** | [**string**] | The collection link id | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CollectionMintResponseDto](../models/CollectionMintResponseDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Tokens minted successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **reIssueTokenMultiChain**
> IssueTokenMultichainResponse reIssueTokenMultiChain(reissueMultichainTokenRequest, )

Reissue a multichain token. This endpoint allows you to reissue a token on one or more blockchains. The token must be initially issued using the issueTokenMultiChain endpoint.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiReIssueTokenMultiChainRequest, IssueTokenMultichainResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiReIssueTokenMultiChainRequest = {
  // ReissueMultichainTokenRequest
  reissueMultichainTokenRequest: param_value,
  // string | The ID of the token link
  tokenLinkId: tokenLinkId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tokenization.reIssueTokenMultiChain(body).then((res: FireblocksResponse<IssueTokenMultichainResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reissueMultichainTokenRequest** | **[ReissueMultichainTokenRequest](../models/ReissueMultichainTokenRequest.md)**|  |
 **tokenLinkId** | [**string**] | The ID of the token link | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[IssueTokenMultichainResponse](../models/IssueTokenMultichainResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully reissued multichain token |  -  |
**400** | Invalid input |  -  |
**404** | Deployed contract not found |  -  |
**409** | Address is already taken |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **unlink**
> unlink()

Unlink a token. The token will be unlinked from the workspace. The token will not be deleted on chain nor the refId, only the link to the workspace will be removed.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiUnlinkRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiUnlinkRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
};

fireblocks.tokenization.unlink(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined


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
**200** | Token unlinked successfully |  -  |
**204** |  |  -  |
**404** | Link did not exist |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **unlinkCollection**
> unlinkCollection()

Delete a collection link

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiUnlinkCollectionRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiUnlinkCollectionRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
};

fireblocks.tokenization.unlinkCollection(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined


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
**204** | Collection unlinked successfully |  -  |
**404** | Link for collection does not exist |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



# TokenizationApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**burnCollectionToken**](#burnCollectionToken) | **POST** /tokenization/collections/{id}/tokens/burn | Burn tokens
[**createNewCollection**](#createNewCollection) | **POST** /tokenization/collections | Create a new collection
[**deactivateAndUnlinkAdapters**](#deactivateAndUnlinkAdapters) | **DELETE** /tokenization/multichain/bridge/layerzero | Remove LayerZero adapters
[**deployAndLinkAdapters**](#deployAndLinkAdapters) | **POST** /tokenization/multichain/bridge/layerzero | Deploy LayerZero adapters
[**fetchCollectionTokenDetails**](#fetchCollectionTokenDetails) | **GET** /tokenization/collections/{id}/tokens/{tokenId} | Get collection token details
[**getCollectionById**](#getCollectionById) | **GET** /tokenization/collections/{id} | Get a collection by id
[**getDeployableAddress**](#getDeployableAddress) | **POST** /tokenization/multichain/deterministic_address | Get deterministic address for contract deployment
[**getLayerZeroDvnConfig**](#getLayerZeroDvnConfig) | **GET** /tokenization/multichain/bridge/layerzero/config/{adapterTokenLinkId}/dvns | Get LayerZero DVN configuration
[**getLayerZeroPeers**](#getLayerZeroPeers) | **GET** /tokenization/multichain/bridge/layerzero/config/{adapterTokenLinkId}/peers | Get LayerZero peers
[**getLinkedCollections**](#getLinkedCollections) | **GET** /tokenization/collections | Get collections
[**getLinkedToken**](#getLinkedToken) | **GET** /tokenization/tokens/{id} | Return a linked token
[**getLinkedTokens**](#getLinkedTokens) | **GET** /tokenization/tokens | List all linked tokens
[**getLinkedTokensCount**](#getLinkedTokensCount) | **GET** /tokenization/tokens/count | Get the total count of linked tokens
[**getTokenAccessRegistryAddresses**](#getTokenAccessRegistryAddresses) | **GET** /tokenization/access_registries/{id}/addresses | Get current state of addresses in an access registry
[**getTokenAccessRegistrySummary**](#getTokenAccessRegistrySummary) | **GET** /tokenization/access_registries/{id}/summary | Get summary of an access registry
[**getTokenBalanceForAccount**](#getTokenBalanceForAccount) | **GET** /tokenization/tokens/{id}/balances/{accountAddress} | Get the latest balance for a specific account
[**getTokenBalanceHistory**](#getTokenBalanceHistory) | **GET** /tokenization/tokens/{id}/balances/{accountAddress}/history | Get balance history for a specific account
[**getTokenBalances**](#getTokenBalances) | **GET** /tokenization/tokens/{id}/balances | Get latest balances for all holders of a token
[**getTokenContractSummary**](#getTokenContractSummary) | **GET** /tokenization/tokens/{id}/summary | Get onchain summary for a token
[**getTokenRbac**](#getTokenRbac) | **GET** /tokenization/tokens/{id}/rbac | Get active RBAC roles for a token
[**getTokenTotalSupply**](#getTokenTotalSupply) | **GET** /tokenization/tokens/{id}/total_supply | Get historical total supply for a token
[**getTokenTransactions**](#getTokenTransactions) | **GET** /tokenization/tokens/{id}/transactions | Get onchain transactions for a token
[**getTokenTransfers**](#getTokenTransfers) | **GET** /tokenization/tokens/{id}/transfers | Get onchain transfers for a token
[**issueNewToken**](#issueNewToken) | **POST** /tokenization/tokens | Issue a new token
[**issueTokenMultiChain**](#issueTokenMultiChain) | **POST** /tokenization/multichain/tokens | Issue a token on one or more blockchains
[**link**](#link) | **POST** /tokenization/tokens/link | Link a contract
[**mintCollectionToken**](#mintCollectionToken) | **POST** /tokenization/collections/{id}/tokens/mint | Mint tokens
[**reIssueTokenMultiChain**](#reIssueTokenMultiChain) | **POST** /tokenization/multichain/reissue/token/{tokenLinkId} | Reissue a multichain token
[**removeLayerZeroPeers**](#removeLayerZeroPeers) | **DELETE** /tokenization/multichain/bridge/layerzero/config/peers | Remove LayerZero peers
[**setLayerZeroDvnConfig**](#setLayerZeroDvnConfig) | **POST** /tokenization/multichain/bridge/layerzero/config/dvns | Set LayerZero DVN configuration
[**setLayerZeroPeers**](#setLayerZeroPeers) | **POST** /tokenization/multichain/bridge/layerzero/config/peers | Set LayerZero peers
[**unlink**](#unlink) | **DELETE** /tokenization/tokens/{id} | Unlink a token
[**unlinkCollection**](#unlinkCollection) | **DELETE** /tokenization/collections/{id} | Delete a collection link
[**validateLayerZeroChannelConfig**](#validateLayerZeroChannelConfig) | **GET** /tokenization/multichain/bridge/layerzero/validate | Validate LayerZero channel configuration


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

Create a new collection and link it as a token. Endpoint Permission: Owner, Admin, Non-Signing Admin, Signer, and Editor.

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

# **deactivateAndUnlinkAdapters**
> RemoveLayerZeroAdaptersResponse deactivateAndUnlinkAdapters(removeLayerZeroAdaptersRequest)

Remove LayerZero adapters by deactivating and unlinking them. This endpoint revokes roles and deactivates the specified adapter contracts.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiDeactivateAndUnlinkAdaptersRequest, RemoveLayerZeroAdaptersResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiDeactivateAndUnlinkAdaptersRequest = {
  // RemoveLayerZeroAdaptersRequest
  removeLayerZeroAdaptersRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tokenization.deactivateAndUnlinkAdapters(body).then((res: FireblocksResponse<RemoveLayerZeroAdaptersResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeLayerZeroAdaptersRequest** | **[RemoveLayerZeroAdaptersRequest](../models/RemoveLayerZeroAdaptersRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[RemoveLayerZeroAdaptersResponse](../models/RemoveLayerZeroAdaptersResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | LayerZero adapters removal process completed |  -  |
**400** | Bad request, invalid input data or parameters |  -  |
**404** | Token link not found |  -  |
**409** | Token link processing error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deployAndLinkAdapters**
> DeployLayerZeroAdaptersResponse deployAndLinkAdapters(deployLayerZeroAdaptersRequest)

Deploy LayerZero adapters for multichain token bridging functionality. This endpoint creates adapter contracts that enable cross-chain token transfers.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiDeployAndLinkAdaptersRequest, DeployLayerZeroAdaptersResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiDeployAndLinkAdaptersRequest = {
  // DeployLayerZeroAdaptersRequest
  deployLayerZeroAdaptersRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tokenization.deployAndLinkAdapters(body).then((res: FireblocksResponse<DeployLayerZeroAdaptersResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deployLayerZeroAdaptersRequest** | **[DeployLayerZeroAdaptersRequest](../models/DeployLayerZeroAdaptersRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[DeployLayerZeroAdaptersResponse](../models/DeployLayerZeroAdaptersResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | LayerZero adapters deployed successfully |  -  |
**400** | Bad request, invalid input data or parameters |  -  |
**404** | Token link not found |  -  |
**409** | Token link preparation error |  -  |
**422** | Token link is not fungible |  -  |
**500** | Internal server error |  -  |

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

# **getLayerZeroDvnConfig**
> GetLayerZeroDvnConfigResponse getLayerZeroDvnConfig()

Retrieve the DVN (Data Verification Network) configuration for a specific adapter. Returns DVN configurations for channels between the source adapter and its peers.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetLayerZeroDvnConfigRequest, GetLayerZeroDvnConfigResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetLayerZeroDvnConfigRequest = {
  // string | The token link id of the adapter token link
  adapterTokenLinkId: b70701f4-d7b1-4795-a8ee-b09cdb5b850d,
  // string | Optional peer adapter token link ID to filter results (optional)
  peerAdapterTokenLinkId: 6add4f2a-b206-4114-8f94-2882618ffbb4,
};

fireblocks.tokenization.getLayerZeroDvnConfig(body).then((res: FireblocksResponse<GetLayerZeroDvnConfigResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adapterTokenLinkId** | [**string**] | The token link id of the adapter token link | defaults to undefined
 **peerAdapterTokenLinkId** | [**string**] | Optional peer adapter token link ID to filter results | (optional) defaults to undefined


### Return type

**[GetLayerZeroDvnConfigResponse](../models/GetLayerZeroDvnConfigResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | LayerZero DVN configuration retrieved successfully |  -  |
**400** | Bad request, invalid input data or parameters |  -  |
**404** | Token link not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getLayerZeroPeers**
> GetLayerZeroPeersResponse getLayerZeroPeers()

Retrieve the LayerZero peers configured for a specific adapter. Returns information about peer relationships for cross-chain communication.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetLayerZeroPeersRequest, GetLayerZeroPeersResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetLayerZeroPeersRequest = {
  // string | The token link id of the adapter token link
  adapterTokenLinkId: b70701f4-d7b1-4795-a8ee-b09cdb5b850d,
};

fireblocks.tokenization.getLayerZeroPeers(body).then((res: FireblocksResponse<GetLayerZeroPeersResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adapterTokenLinkId** | [**string**] | The token link id of the adapter token link | defaults to undefined


### Return type

**[GetLayerZeroPeersResponse](../models/GetLayerZeroPeersResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | LayerZero peers retrieved successfully |  -  |
**400** | Bad request, invalid input data or parameters |  -  |
**404** | Token link not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getLinkedCollections**
> GetLinkedCollectionsPaginatedResponse getLinkedCollections()

Get collections (paginated). Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.

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

# **getLinkedTokensCount**
> LinkedTokensCount getLinkedTokensCount()

Get the total count of linked tokens

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, LinkedTokensCount } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.tokenization.getLinkedTokensCount(body).then((res: FireblocksResponse<LinkedTokensCount>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[LinkedTokensCount](../models/LinkedTokensCount.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Count fetched successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTokenAccessRegistryAddresses**
> AccessRegistryCurrentStateResponse getTokenAccessRegistryAddresses()

Returns the currently active addresses in the access registry (added but not removed).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetTokenAccessRegistryAddressesRequest, AccessRegistryCurrentStateResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetTokenAccessRegistryAddressesRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
  // string | Page cursor to get the next page (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page (max 100), requesting more than 100 will return 100 items (optional)
  pageSize: 10,
  // 'dateAdded' | 'address' | Sorting field (enum). (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: order_example,
};

fireblocks.tokenization.getTokenAccessRegistryAddresses(body).then((res: FireblocksResponse<AccessRegistryCurrentStateResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined
 **pageCursor** | [**string**] | Page cursor to get the next page | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page (max 100), requesting more than 100 will return 100 items | (optional) defaults to undefined
 **sortBy** | [**&#39;dateAdded&#39; | &#39;address&#39;**]**Array<&#39;dateAdded&#39; &#124; &#39;address&#39;>** | Sorting field (enum). | (optional) defaults to 'dateAdded'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'


### Return type

**[AccessRegistryCurrentStateResponse](../models/AccessRegistryCurrentStateResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Access registry addresses retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTokenAccessRegistrySummary**
> AccessRegistrySummaryResponse getTokenAccessRegistrySummary()

Returns a summary of the current state of the access registry.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetTokenAccessRegistrySummaryRequest, AccessRegistrySummaryResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetTokenAccessRegistrySummaryRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
};

fireblocks.tokenization.getTokenAccessRegistrySummary(body).then((res: FireblocksResponse<AccessRegistrySummaryResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined


### Return type

**[AccessRegistrySummaryResponse](../models/AccessRegistrySummaryResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Access registry summary retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTokenBalanceForAccount**
> AddressBalanceItemDto getTokenBalanceForAccount()

Returns the latest token balance for the specified account address.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetTokenBalanceForAccountRequest, AddressBalanceItemDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetTokenBalanceForAccountRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
  // string | The account address to get balance history for
  accountAddress: 0x1234567890abcdef1234567890abcdef12345678,
};

fireblocks.tokenization.getTokenBalanceForAccount(body).then((res: FireblocksResponse<AddressBalanceItemDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined
 **accountAddress** | [**string**] | The account address to get balance history for | defaults to undefined


### Return type

**[AddressBalanceItemDto](../models/AddressBalanceItemDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the balance for the account |  -  |
**404** | Token not found |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTokenBalanceHistory**
> BalanceHistoryPagedResponse getTokenBalanceHistory()

Returns paginated balance history for the specified account address with optional time-range filtering.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetTokenBalanceHistoryRequest, BalanceHistoryPagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetTokenBalanceHistoryRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
  // string | The account address to get balance history for
  accountAddress: 0x1234567890abcdef1234567890abcdef12345678,
  // string | Start date of the time range in ISO 8601 format (optional)
  startDate: 2025-01-16T15:45:00Z,
  // string | End date of the time range in ISO 8601 format (optional)
  endDate: 2025-01-16T15:45:00Z,
  // 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | Time interval for grouping data (optional)
  interval: DAY,
  // string | Page cursor to get the next page (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page (max 100), requesting more than 100 will return 100 items (optional)
  pageSize: 10,
  // 'blockTimestamp' | Sorting field (enum). Sorting only supported by \'blockTimestamp\' (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: order_example,
};

fireblocks.tokenization.getTokenBalanceHistory(body).then((res: FireblocksResponse<BalanceHistoryPagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined
 **accountAddress** | [**string**] | The account address to get balance history for | defaults to undefined
 **startDate** | [**string**] | Start date of the time range in ISO 8601 format | (optional) defaults to undefined
 **endDate** | [**string**] | End date of the time range in ISO 8601 format | (optional) defaults to undefined
 **interval** | [**&#39;HOUR&#39; | &#39;DAY&#39; | &#39;WEEK&#39; | &#39;MONTH&#39;**]**Array<&#39;HOUR&#39; &#124; &#39;DAY&#39; &#124; &#39;WEEK&#39; &#124; &#39;MONTH&#39;>** | Time interval for grouping data | (optional) defaults to 'DAY'
 **pageCursor** | [**string**] | Page cursor to get the next page | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page (max 100), requesting more than 100 will return 100 items | (optional) defaults to undefined
 **sortBy** | [**&#39;blockTimestamp&#39;**]**Array<&#39;blockTimestamp&#39;>** | Sorting field (enum). Sorting only supported by \&#39;blockTimestamp\&#39; | (optional) defaults to 'blockTimestamp'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'


### Return type

**[BalanceHistoryPagedResponse](../models/BalanceHistoryPagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the balance history |  -  |
**404** | Token not found |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTokenBalances**
> AddressBalancePagedResponse getTokenBalances()

Returns the latest balance for each unique address holding this token.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetTokenBalancesRequest, AddressBalancePagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetTokenBalancesRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
  // string | Page cursor to get the next page (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page (max 100), requesting more than 100 will return 100 items (optional)
  pageSize: 10,
  // 'accountAddress' | 'blockTimestamp' | Sorting field for balances (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: order_example,
};

fireblocks.tokenization.getTokenBalances(body).then((res: FireblocksResponse<AddressBalancePagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined
 **pageCursor** | [**string**] | Page cursor to get the next page | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page (max 100), requesting more than 100 will return 100 items | (optional) defaults to undefined
 **sortBy** | [**&#39;accountAddress&#39; | &#39;blockTimestamp&#39;**]**Array<&#39;accountAddress&#39; &#124; &#39;blockTimestamp&#39;>** | Sorting field for balances | (optional) defaults to 'blockTimestamp'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'


### Return type

**[AddressBalancePagedResponse](../models/AddressBalancePagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the latest balances for the token |  -  |
**404** | Token not found |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTokenContractSummary**
> TokenContractSummaryResponse getTokenContractSummary()

Returns the total number of unique holders and the total supply for the token contract.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetTokenContractSummaryRequest, TokenContractSummaryResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetTokenContractSummaryRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
};

fireblocks.tokenization.getTokenContractSummary(body).then((res: FireblocksResponse<TokenContractSummaryResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined


### Return type

**[TokenContractSummaryResponse](../models/TokenContractSummaryResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the summary for the token contract |  -  |
**404** | Token not found |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTokenRbac**
> ActiveRolesResponse getTokenRbac()

Returns a list of currently active roles for the token contract.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetTokenRbacRequest, ActiveRolesResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetTokenRbacRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
};

fireblocks.tokenization.getTokenRbac(body).then((res: FireblocksResponse<ActiveRolesResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined


### Return type

**[ActiveRolesResponse](../models/ActiveRolesResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of active roles |  -  |
**404** | Token not found |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTokenTotalSupply**
> TotalSupplyPagedResponse getTokenTotalSupply()

Returns paginated total supply history for the token contract with optional time-range filtering and binning.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetTokenTotalSupplyRequest, TotalSupplyPagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetTokenTotalSupplyRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
  // string | Start date of the time range in ISO 8601 format (optional)
  startDate: 2025-01-16T15:45:00Z,
  // string | End date of the time range in ISO 8601 format (optional)
  endDate: 2025-01-16T15:45:00Z,
  // 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | Time interval for grouping data (optional)
  interval: DAY,
  // string | Page cursor to get the next page (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page (max 100), requesting more than 100 will return 100 items (optional)
  pageSize: 10,
  // 'blockTimestamp' | Sorting field (enum). Sorting only supported by \'blockTimestamp\' (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: order_example,
};

fireblocks.tokenization.getTokenTotalSupply(body).then((res: FireblocksResponse<TotalSupplyPagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined
 **startDate** | [**string**] | Start date of the time range in ISO 8601 format | (optional) defaults to undefined
 **endDate** | [**string**] | End date of the time range in ISO 8601 format | (optional) defaults to undefined
 **interval** | [**&#39;HOUR&#39; | &#39;DAY&#39; | &#39;WEEK&#39; | &#39;MONTH&#39;**]**Array<&#39;HOUR&#39; &#124; &#39;DAY&#39; &#124; &#39;WEEK&#39; &#124; &#39;MONTH&#39;>** | Time interval for grouping data | (optional) defaults to 'DAY'
 **pageCursor** | [**string**] | Page cursor to get the next page | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page (max 100), requesting more than 100 will return 100 items | (optional) defaults to undefined
 **sortBy** | [**&#39;blockTimestamp&#39;**]**Array<&#39;blockTimestamp&#39;>** | Sorting field (enum). Sorting only supported by \&#39;blockTimestamp\&#39; | (optional) defaults to 'blockTimestamp'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'


### Return type

**[TotalSupplyPagedResponse](../models/TotalSupplyPagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the token total supply history |  -  |
**404** | Token not found |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTokenTransactions**
> OnchainTransactionsPagedResponse getTokenTransactions()

Returns a paginated list of onchain transactions for the token contract, optionally filtered by date range.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetTokenTransactionsRequest, OnchainTransactionsPagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetTokenTransactionsRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
  // string | Start date of the time range in ISO 8601 format (optional)
  startDate: 2025-01-16T15:45:00Z,
  // string | End date of the time range in ISO 8601 format (optional)
  endDate: 2025-01-16T15:45:00Z,
  // string | Page cursor to get the next page (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page (max 100), requesting more than 100 will return 100 items (optional)
  pageSize: 10,
  // 'blockTimestamp' | 'blockNumber' | 'transactionHash' | Sorting field (enum). (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: order_example,
};

fireblocks.tokenization.getTokenTransactions(body).then((res: FireblocksResponse<OnchainTransactionsPagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined
 **startDate** | [**string**] | Start date of the time range in ISO 8601 format | (optional) defaults to undefined
 **endDate** | [**string**] | End date of the time range in ISO 8601 format | (optional) defaults to undefined
 **pageCursor** | [**string**] | Page cursor to get the next page | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page (max 100), requesting more than 100 will return 100 items | (optional) defaults to undefined
 **sortBy** | [**&#39;blockTimestamp&#39; | &#39;blockNumber&#39; | &#39;transactionHash&#39;**]**Array<&#39;blockTimestamp&#39; &#124; &#39;blockNumber&#39; &#124; &#39;transactionHash&#39;>** | Sorting field (enum). | (optional) defaults to 'blockTimestamp'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'


### Return type

**[OnchainTransactionsPagedResponse](../models/OnchainTransactionsPagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Onchain transactions fetched successfully |  -  |
**404** | Token not found |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTokenTransfers**
> OnchainTransfersPagedResponse getTokenTransfers()

Returns a paginated list of ERC20 transfer events for the token contract, optionally filtered by date range.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiGetTokenTransfersRequest, OnchainTransfersPagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiGetTokenTransfersRequest = {
  // string | The token link id
  id: fbfbfbfb-fbfb-fbfb-fbfb-fbfbfbfbfbfb,
  // string | Start date of the time range in ISO 8601 format (optional)
  startDate: 2025-01-16T15:45:00Z,
  // string | End date of the time range in ISO 8601 format (optional)
  endDate: 2025-01-16T15:45:00Z,
  // string | Page cursor to get the next page (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page (max 100), requesting more than 100 will return 100 items (optional)
  pageSize: 10,
  // 'blockTimeStamp' | Sorting field for transfers (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: order_example,
  // string | Filter transfers by sender address (optional)
  sender: 0xabcdef1234567890abcdef1234567890abcdef12,
  // string | Filter transfers by receiver address (optional)
  receiver: 0x1234567890abcdef1234567890abcdef12345678,
};

fireblocks.tokenization.getTokenTransfers(body).then((res: FireblocksResponse<OnchainTransfersPagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The token link id | defaults to undefined
 **startDate** | [**string**] | Start date of the time range in ISO 8601 format | (optional) defaults to undefined
 **endDate** | [**string**] | End date of the time range in ISO 8601 format | (optional) defaults to undefined
 **pageCursor** | [**string**] | Page cursor to get the next page | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page (max 100), requesting more than 100 will return 100 items | (optional) defaults to undefined
 **sortBy** | [**&#39;blockTimeStamp&#39;**]**Array<&#39;blockTimeStamp&#39;>** | Sorting field for transfers | (optional) defaults to 'blockTimeStamp'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'
 **sender** | [**string**] | Filter transfers by sender address | (optional) defaults to undefined
 **receiver** | [**string**] | Filter transfers by receiver address | (optional) defaults to undefined


### Return type

**[OnchainTransfersPagedResponse](../models/OnchainTransfersPagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Onchain transfers fetched successfully |  -  |
**404** | Token not found |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **issueNewToken**
> TokenLinkDto issueNewToken(createTokenRequestDto)

Facilitates the creation of a new token, supporting both EVM-based and Stellar/Ripple platforms. For EVM, it deploys the corresponding contract template to the blockchain and links the token to the workspace. For Stellar/Ripple, it links a newly created token directly to the workspace without deploying a contract. Returns the token link with status \"PENDING\" until the token is deployed or \"SUCCESS\" if no deployment is needed. Endpoint Permission: Owner, Admin, Non-Signing Admin, Signer, and Editor.

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

# **removeLayerZeroPeers**
> RemoveLayerZeroPeersResponse removeLayerZeroPeers(removeLayerZeroPeersRequest)

Remove LayerZero peers to disconnect adapter contracts. This endpoint removes peer relationships between LayerZero adapters.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiRemoveLayerZeroPeersRequest, RemoveLayerZeroPeersResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiRemoveLayerZeroPeersRequest = {
  // RemoveLayerZeroPeersRequest
  removeLayerZeroPeersRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tokenization.removeLayerZeroPeers(body).then((res: FireblocksResponse<RemoveLayerZeroPeersResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **removeLayerZeroPeersRequest** | **[RemoveLayerZeroPeersRequest](../models/RemoveLayerZeroPeersRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[RemoveLayerZeroPeersResponse](../models/RemoveLayerZeroPeersResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | LayerZero peers removal process completed |  -  |
**400** | Bad request, invalid input data or parameters |  -  |
**404** | Token link not found |  -  |
**409** | Token link processing error |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setLayerZeroDvnConfig**
> SetLayerZeroDvnConfigResponse setLayerZeroDvnConfig(setLayerZeroDvnConfigRequest)

Configure DVN settings for LayerZero adapters. This endpoint sets up the DVN configuration for message verification between source and destination adapters.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiSetLayerZeroDvnConfigRequest, SetLayerZeroDvnConfigResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiSetLayerZeroDvnConfigRequest = {
  // SetLayerZeroDvnConfigRequest
  setLayerZeroDvnConfigRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tokenization.setLayerZeroDvnConfig(body).then((res: FireblocksResponse<SetLayerZeroDvnConfigResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setLayerZeroDvnConfigRequest** | **[SetLayerZeroDvnConfigRequest](../models/SetLayerZeroDvnConfigRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SetLayerZeroDvnConfigResponse](../models/SetLayerZeroDvnConfigResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | LayerZero DVN configuration set successfully |  -  |
**400** | Bad request, invalid input data or parameters |  -  |
**404** | Token link not found |  -  |
**409** | Token link preparation error |  -  |
**422** | Bridging protocol blockchain metadata not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setLayerZeroPeers**
> SetLayerZeroPeersResponse setLayerZeroPeers(setLayerZeroPeersRequest)

Set LayerZero peers to establish connections between adapter contracts. This endpoint creates peer relationships that enable cross-chain communication. It sets the destination adapter as a peer of the source adapter. If `bidirectional` is true, it also sets the source adapter as a peer of the destination adapter(s).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiSetLayerZeroPeersRequest, SetLayerZeroPeersResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiSetLayerZeroPeersRequest = {
  // SetLayerZeroPeersRequest
  setLayerZeroPeersRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tokenization.setLayerZeroPeers(body).then((res: FireblocksResponse<SetLayerZeroPeersResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setLayerZeroPeersRequest** | **[SetLayerZeroPeersRequest](../models/SetLayerZeroPeersRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SetLayerZeroPeersResponse](../models/SetLayerZeroPeersResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | LayerZero peers set successfully |  -  |
**400** | Bad request, invalid input data or parameters |  -  |
**404** | Token link not found |  -  |
**409** | Token link preparation error |  -  |
**422** | Token link is not fungible |  -  |
**500** | Internal server error |  -  |

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

# **validateLayerZeroChannelConfig**
> ValidateLayerZeroChannelResponse validateLayerZeroChannelConfig()

Validate the LayerZero channel configuration between adapters. This endpoint checks if the channel configuration is correct and returns any validation errors.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TokenizationApiValidateLayerZeroChannelConfigRequest, ValidateLayerZeroChannelResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TokenizationApiValidateLayerZeroChannelConfigRequest = {
  // string | The token link ID of the adapter
  adapterTokenLinkId: b70701f4-d7b1-4795-a8ee-b09cdb5b850d,
  // string | Peer adapter token link ID to validate against
  peerAdapterTokenLinkId: 6add4f2a-b206-4114-8f94-2882618ffbb4,
};

fireblocks.tokenization.validateLayerZeroChannelConfig(body).then((res: FireblocksResponse<ValidateLayerZeroChannelResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **adapterTokenLinkId** | [**string**] | The token link ID of the adapter | defaults to undefined
 **peerAdapterTokenLinkId** | [**string**] | Peer adapter token link ID to validate against | defaults to undefined


### Return type

**[ValidateLayerZeroChannelResponse](../models/ValidateLayerZeroChannelResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | LayerZero channel configuration validation completed |  -  |
**400** | Bad request, invalid input data or parameters |  -  |
**404** | Token link not found |  -  |
**422** | Bridging protocol blockchain metadata not found |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



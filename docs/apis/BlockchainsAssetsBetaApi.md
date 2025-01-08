# BlockchainsAssetsBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAssetById**](#getAssetById) | **GET** /assets/{id} | Get an asset
[**getBlockchainById**](#getBlockchainById) | **GET** /blockchains/{id} | Get an blockchain
[**listAssets**](#listAssets) | **GET** /assets | List assets
[**listBlockchains**](#listBlockchains) | **GET** /blockchains | List blockchains


# **getAssetById**
> AssetResponseBeta getAssetById()

Returns an asset by ID or legacyID.</br>  **Note**: - This endpoint is now in Beta, disabled for general availability at this time. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainsAssetsBetaApiGetAssetByIdRequest, AssetResponseBeta } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainsAssetsBetaApiGetAssetByIdRequest = {
  // string | The ID or legacyId of the asset
  id: ETH,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.blockchainsAssetsBeta.getAssetById(body).then((res: FireblocksResponse<AssetResponseBeta>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The ID or legacyId of the asset | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[AssetResponseBeta](../models/AssetResponseBeta.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Asset with requested identification |  * X-Request-ID -  <br>  |
**404** | - Asset with specified ID or legacy ID is not found. Error code 1504  |  -  |
**500** | Error occurred while getting an asset |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getBlockchainById**
> BlockchainResponse getBlockchainById()

Returns an blockchain by ID or legacyID.</br>  **Note**: - This endpoint is now in Beta, disabled for general availability at this time. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainsAssetsBetaApiGetBlockchainByIdRequest, BlockchainResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainsAssetsBetaApiGetBlockchainByIdRequest = {
  // string | The ID or legacyId of the blockchain
  id: ETH,
};

fireblocks.blockchainsAssetsBeta.getBlockchainById(body).then((res: FireblocksResponse<BlockchainResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The ID or legacyId of the blockchain | defaults to undefined


### Return type

**[BlockchainResponse](../models/BlockchainResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Blockchain with requested identification |  * X-Request-ID -  <br>  |
**404** | - Blockchain with specified ID or legacy ID is not found. Error code 1505  |  -  |
**500** | Error occurred while getting an blockchain |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listAssets**
> ListAssetsResponse listAssets()

Returns all asset type supported by Fireblocks.</br>  **Note**: - This endpoint is now in Beta, disabled for general availability at this time. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainsAssetsBetaApiListAssetsRequest, ListAssetsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainsAssetsBetaApiListAssetsRequest = {
  // string | Blockchain id of the assets (optional)
  blockchainId: 0f672204-a28b-464a-b318-a387abd3d3c7,
  // AssetClassBeta | Assets class (optional)
  assetClass: param_value,
  // string | Assets onchain symbol (optional)
  symbol: ETH,
  // 'Global' | 'Local' | Scope of the assets (optional)
  scope: Global,
  // boolean | Are assets deprecated (optional)
  deprecated: false,
  // string | Next page cursor to fetch (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Items per page (optional)
  pageSize: 500,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.blockchainsAssetsBeta.listAssets(body).then((res: FireblocksResponse<ListAssetsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchainId** | [**string**] | Blockchain id of the assets | (optional) defaults to undefined
 **assetClass** | **AssetClassBeta** | Assets class | (optional) defaults to undefined
 **symbol** | [**string**] | Assets onchain symbol | (optional) defaults to undefined
 **scope** | [**&#39;Global&#39; | &#39;Local&#39;**]**Array<&#39;Global&#39; &#124; &#39;Local&#39;>** | Scope of the assets | (optional) defaults to undefined
 **deprecated** | [**boolean**] | Are assets deprecated | (optional) defaults to undefined
 **pageCursor** | [**string**] | Next page cursor to fetch | (optional) defaults to undefined
 **pageSize** | [**number**] | Items per page | (optional) defaults to 500
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ListAssetsResponse](../models/ListAssetsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of assets |  -  |
**500** | Error occurred while listing assets |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listBlockchains**
> ListBlockchainsResponse listBlockchains()

Returns all blockchains supported by Fireblocks.</br>  **Note**: - This endpoint is now in Beta, disabled for general availability at this time. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainsAssetsBetaApiListBlockchainsRequest, ListBlockchainsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainsAssetsBetaApiListBlockchainsRequest = {
  // string | Blockchain protocol (optional)
  protocol: SOL,
  // boolean | Is blockchain deprecated (optional)
  deprecated: false,
  // boolean | Is test blockchain (optional)
  test: false,
  // string | Page cursor to fetch (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Items per page (max 500) (optional)
  pageSize: 500,
};

fireblocks.blockchainsAssetsBeta.listBlockchains(body).then((res: FireblocksResponse<ListBlockchainsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **protocol** | [**string**] | Blockchain protocol | (optional) defaults to undefined
 **deprecated** | [**boolean**] | Is blockchain deprecated | (optional) defaults to undefined
 **test** | [**boolean**] | Is test blockchain | (optional) defaults to undefined
 **pageCursor** | [**string**] | Page cursor to fetch | (optional) defaults to undefined
 **pageSize** | [**number**] | Items per page (max 500) | (optional) defaults to 500


### Return type

**[ListBlockchainsResponse](../models/ListBlockchainsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of supported blockchains |  -  |
**500** | Error occurred while listing blockchains |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



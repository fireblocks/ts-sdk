# BlockchainsAssetsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAsset**](#getAsset) | **GET** /assets/{id} | Get an asset
[**getBlockchain**](#getBlockchain) | **GET** /blockchains/{id} | Get an blockchain
[**getSupportedAssets**](#getSupportedAssets) | **GET** /supported_assets | List all asset types supported by Fireblocks - legacy endpoint
[**listAssets**](#listAssets) | **GET** /assets | List assets
[**listBlockchains**](#listBlockchains) | **GET** /blockchains | List blockchains
[**registerNewAsset**](#registerNewAsset) | **POST** /assets | Register an asset
[**setAssetPrice**](#setAssetPrice) | **POST** /assets/prices/{id} | Set asset price
[**updateAssetUserMetadata**](#updateAssetUserMetadata) | **PATCH** /assets/{id} | Update the user’s metadata for an asset


# **getAsset**
> Asset getAsset()

Returns an asset by ID or legacyID.</br>  **Note**:    - We will continue displaying and supporting the legacy ID (API ID). Since not all Fireblocks services fully support the new Assets UUID, please use only the legacy ID until further notice. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainsAssetsApiGetAssetRequest, Asset } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainsAssetsApiGetAssetRequest = {
  // string | The ID or legacyId of the asset
  id: ETH,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.blockchainsAssets.getAsset(body).then((res: FireblocksResponse<Asset>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The ID or legacyId of the asset | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[Asset](../models/Asset.md)**

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

# **getBlockchain**
> BlockchainResponse getBlockchain()

Returns an blockchain by ID or legacyID. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainsAssetsApiGetBlockchainRequest, BlockchainResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainsAssetsApiGetBlockchainRequest = {
  // string | The ID or legacyId of the blockchain
  id: ETH,
};

fireblocks.blockchainsAssets.getBlockchain(body).then((res: FireblocksResponse<BlockchainResponse>) => {
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

# **getSupportedAssets**
> GetSupportedAssetsResponse getSupportedAssets()

Legacy Endpoint – Retrieves all assets supported by Fireblocks in your workspace without extended information.</br> **Note**:    - This endpoint will remain available for the foreseeable future and is not deprecated.</br>   - The `listAssets` endpoint provides more detailed asset information and improved performance.</br>   - We recommend transitioning to the `listAssets` endpoint for better results. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, GetSupportedAssetsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.blockchainsAssets.getSupportedAssets(body).then((res: FireblocksResponse<GetSupportedAssetsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[GetSupportedAssetsResponse](../models/GetSupportedAssetsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Transaction object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listAssets**
> ListAssetsResponse listAssets()

Retrieves all assets supported by Fireblocks in your workspace, providing extended information and enhanced performance compared to the legacy `supported_assets` endpoint.</br> **Note**:    - We will continue displaying and supporting the legacy ID (API ID). Since not all Fireblocks services fully support the new Assets UUID, please use only the legacy ID until further notice.</br> 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainsAssetsApiListAssetsRequest, ListAssetsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainsAssetsApiListAssetsRequest = {
  // string | Blockchain id of the assets (optional)
  blockchainId: 0f672204-a28b-464a-b318-a387abd3d3c7,
  // AssetClass | Assets class (optional)
  assetClass: param_value,
  // string | Assets onchain symbol (optional)
  symbol: ETH,
  // AssetScope | Scope of the assets (optional)
  scope: param_value,
  // boolean | Are assets deprecated (optional)
  deprecated: false,
  // Array<string> | A list of asset IDs (max 100) (optional)
  ids: ["3ed32525-70df-45c8-bae3-e69ab56dc095","3a3b5f06-61e7-44f0-9962-4425b55795ff","SHANI5_B75VRLGX_MUPA"],
  // string | Next page cursor to fetch (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Items per page (optional)
  pageSize: 500,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.blockchainsAssets.listAssets(body).then((res: FireblocksResponse<ListAssetsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchainId** | [**string**] | Blockchain id of the assets | (optional) defaults to undefined
 **assetClass** | **AssetClass** | Assets class | (optional) defaults to undefined
 **symbol** | [**string**] | Assets onchain symbol | (optional) defaults to undefined
 **scope** | **AssetScope** | Scope of the assets | (optional) defaults to undefined
 **deprecated** | [**boolean**] | Are assets deprecated | (optional) defaults to undefined
 **ids** | **Array&lt;string&gt;** | A list of asset IDs (max 100) | (optional) defaults to undefined
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

Returns all blockchains supported by Fireblocks. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainsAssetsApiListBlockchainsRequest, ListBlockchainsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainsAssetsApiListBlockchainsRequest = {
  // string | Blockchain protocol (optional)
  protocol: SOL,
  // boolean | Is blockchain deprecated (optional)
  deprecated: false,
  // boolean | Is test blockchain (optional)
  test: false,
  // Array<string> | A list of blockchain IDs (max 100) (optional)
  ids: ["3ed32525-70df-45c8-bae3-e69ab56dc095","3a3b5f06-61e7-44f0-9962-4425b55795ff","MANTRA"],
  // string | Page cursor to fetch (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Items per page (max 500) (optional)
  pageSize: 500,
};

fireblocks.blockchainsAssets.listBlockchains(body).then((res: FireblocksResponse<ListBlockchainsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **protocol** | [**string**] | Blockchain protocol | (optional) defaults to undefined
 **deprecated** | [**boolean**] | Is blockchain deprecated | (optional) defaults to undefined
 **test** | [**boolean**] | Is test blockchain | (optional) defaults to undefined
 **ids** | **Array&lt;string&gt;** | A list of blockchain IDs (max 100) | (optional) defaults to undefined
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

# **registerNewAsset**
> AssetResponse registerNewAsset()

Register a new asset to a workspace and return the newly created asset\'s details. Currently supported chains are: - EVM based chains - Stellar - Algorand - TRON - NEAR - Solana 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainsAssetsApiRegisterNewAssetRequest, AssetResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainsAssetsApiRegisterNewAssetRequest = {
  // RegisterNewAssetRequest (optional)
  registerNewAssetRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.blockchainsAssets.registerNewAsset(body).then((res: FireblocksResponse<AssetResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerNewAssetRequest** | **[RegisterNewAssetRequest](../models/RegisterNewAssetRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[AssetResponse](../models/AssetResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A new asset has been created successfully |  -  |
**400** | - Listing an asset on the requested blockchain is not supported. Error code: 1000  - The asset address is invalid. Error code: 1003  - Self serve listing an asset on the requested blockchain is currently not supported, please contact support. Error code: 1004  - Blockchain is deprecated. Error code: 1006  - The asset\&#39;s standard is not supported. Error code: 1007  - Unable to get expected metadata: decimals | name | symbol. Error code: 1010  |  -  |
**403** | - The asset creation quota reached. Error code: 1005  - Tenant is not allowed to create testnet assets. Error code: 1008  - Tenant is not allowed to create mainnet assets. Error code: 1009  |  -  |
**404** | - Invalid address, could not get asset information. Error code 1003  |  -  |
**409** | - The asset is already supported globally. Error code: 1001  - The asset has already been added to this workspace. Error code: 1002  |  -  |
**500** | Failed to create asset |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setAssetPrice**
> AssetPriceResponse setAssetPrice()

Set asset price for the given asset id. Returns the asset price response. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainsAssetsApiSetAssetPriceRequest, AssetPriceResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainsAssetsApiSetAssetPriceRequest = {
  // string | The ID of the asset
  id: ETH,
  // SetAssetPriceRequest (optional)
  setAssetPriceRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.blockchainsAssets.setAssetPrice(body).then((res: FireblocksResponse<AssetPriceResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setAssetPriceRequest** | **[SetAssetPriceRequest](../models/SetAssetPriceRequest.md)**|  |
 **id** | [**string**] | The ID of the asset | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[AssetPriceResponse](../models/AssetPriceResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Asset price has been set successfully. |  -  |
**403** | - Tenant is not allowed to set rate. Error code: 1002.  |  -  |
**404** | - Currency not found. Error code 1001  |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateAssetUserMetadata**
> Asset updateAssetUserMetadata()

Update the user’s metadata for an asset.  Endpoint Permission: Owner, Admin, Non-Signing Admin, NCW Admin, Signer, Editor.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, BlockchainsAssetsApiUpdateAssetUserMetadataRequest, Asset } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: BlockchainsAssetsApiUpdateAssetUserMetadataRequest = {
  // string | The ID or legacyId of the asset
  id: ETH,
  // UpdateAssetUserMetadataRequest (optional)
  updateAssetUserMetadataRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.blockchainsAssets.updateAssetUserMetadata(body).then((res: FireblocksResponse<Asset>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateAssetUserMetadataRequest** | **[UpdateAssetUserMetadataRequest](../models/UpdateAssetUserMetadataRequest.md)**|  |
 **id** | [**string**] | The ID or legacyId of the asset | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[Asset](../models/Asset.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated asset user metadata |  * X-Request-ID -  <br>  |
**404** | - Asset with specified ID or legacy ID is not found. Error code 1504  |  -  |
**500** | Error occurred while updating asset user metadata |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



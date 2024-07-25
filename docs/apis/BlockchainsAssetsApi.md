# BlockchainsAssetsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSupportedAssets**](#getSupportedAssets) | **GET** /supported_assets | List all asset types supported by Fireblocks
[**registerNewAsset**](#registerNewAsset) | **POST** /assets | Register an asset
[**setAssetPrice**](#setAssetPrice) | **POST** /assets/prices/{id} | Set asset price


# **getSupportedAssets**
> GetSupportedAssetsResponse getSupportedAssets()

Returns all asset types supported by Fireblocks.

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
**400** | - Listing an asset on the requested blockchain is not supported. Error code: 1000  - The asset address is invalid. Error code: 1003  - Self serve listing an asset on the requested blockchain is currently not supported, please contact support. Error code: 1004  - Blockchain is deprecated. Error code: 1006  - The asset\&#39;s standard is not supported. Error code: 1007  |  -  |
**403** | - The asset creation quota reached. Error code: 1005  - Tenant is not allowed to create testnet assets. Error code: 1008  - Tenant is not allowed to create mainnet assets. Error code: 1009  |  -  |
**404** | - Invalid address, could not get asset information. Error code 1003  |  -  |
**409** | - The asset is already supported globally. Error code: 1001  - The asset has already been added to this workspace. Error code: 1002  |  -  |
**500** | Failed to create asset |  -  |

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



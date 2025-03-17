# InternalWalletsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**createInternalWallet**](#createInternalWallet) | **POST** /internal_wallets | Create an internal wallet
[**createInternalWalletAsset**](#createInternalWalletAsset) | **POST** /internal_wallets/{walletId}/{assetId} | Add an asset to an internal wallet
[**deleteInternalWallet**](#deleteInternalWallet) | **DELETE** /internal_wallets/{walletId} | Delete an internal wallet
[**deleteInternalWalletAsset**](#deleteInternalWalletAsset) | **DELETE** /internal_wallets/{walletId}/{assetId} | Delete a whitelisted address
[**getInternalWallet**](#getInternalWallet) | **GET** /internal_wallets/{walletId} | Get an asset from an internal wallet
[**getInternalWalletAsset**](#getInternalWalletAsset) | **GET** /internal_wallets/{walletId}/{assetId} | Get an asset from an internal wallet
[**getInternalWalletAssetsPaginated**](#getInternalWalletAssetsPaginated) | **GET** /internal_wallets/{walletId}/assets | List assets in an internal wallet (Paginated)
[**getInternalWallets**](#getInternalWallets) | **GET** /internal_wallets | List internal wallets
[**setCustomerRefIdForInternalWallet**](#setCustomerRefIdForInternalWallet) | **POST** /internal_wallets/{walletId}/set_customer_ref_id | Set an AML/KYT customer reference ID for an internal wallet


# **createInternalWallet**
> UnmanagedWallet createInternalWallet()

Creates a new internal wallet with the requested name.  Learn more about Whitelisted Internal Addresses [here](https://developers.fireblocks.com/docs/whitelist-addresses#internal-wallets)  Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, InternalWalletsApiCreateInternalWalletRequest, UnmanagedWallet } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: InternalWalletsApiCreateInternalWalletRequest = {
  // CreateWalletRequest (optional)
  createWalletRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.internalWallets.createInternalWallet(body).then((res: FireblocksResponse<UnmanagedWallet>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWalletRequest** | **[CreateWalletRequest](../models/CreateWalletRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[UnmanagedWallet](../models/UnmanagedWallet.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A new wallet object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createInternalWalletAsset**
> WalletAsset createInternalWalletAsset()

Adds an asset to an existing internal wallet.  Internal Wallets are whitelisted wallets that belong to you outside of Fireblocks.    - You can see the balance of the Internal Wallet via Fireblocks   - You cannot initiate transactions from Internal Wallets through Fireblocks    Learn more about Whitelisted Internal Addresses [here](https://developers.fireblocks.com/docs/whitelist-addresses#internal-wallets)  Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, InternalWalletsApiCreateInternalWalletAssetRequest, WalletAsset } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: InternalWalletsApiCreateInternalWalletAssetRequest = {
  // string | The ID of the wallet
  walletId: walletId_example,
  // string | The ID of the asset to add
  assetId: assetId_example,
  // CreateInternalWalletAssetRequest (optional)
  createInternalWalletAssetRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.internalWallets.createInternalWalletAsset(body).then((res: FireblocksResponse<WalletAsset>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInternalWalletAssetRequest** | **[CreateInternalWalletAssetRequest](../models/CreateInternalWalletAssetRequest.md)**|  |
 **walletId** | [**string**] | The ID of the wallet | defaults to undefined
 **assetId** | [**string**] | The ID of the asset to add | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[WalletAsset](../models/WalletAsset.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Wallet Asset object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteInternalWallet**
> deleteInternalWallet()

Deletes an internal wallet by ID. Internal Wallets are whitelisted wallets that belong to you outside of Fireblocks.    - You can see the balance of the Internal Wallet via Fireblocks   - You cannot initiate transactions from Internal Wallets through Fireblocks  Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, InternalWalletsApiDeleteInternalWalletRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: InternalWalletsApiDeleteInternalWalletRequest = {
  // string | The ID of the wallet to delete
  walletId: walletId_example,
};

fireblocks.internalWallets.deleteInternalWallet(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | The ID of the wallet to delete | defaults to undefined


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
**201** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteInternalWalletAsset**
> deleteInternalWalletAsset()

Deletes a whitelisted address (for an asset) from an internal wallet.  Internal Wallets are whitelisted wallets that belong to you outside of Fireblocks.    - You can see the balance of the Internal Wallet via Fireblocks   - You cannot initiate transactions from Internal Wallets through Fireblocks  Learn more about Whitelisted Internal Addresses [here](https://developers.fireblocks.com/docs/whitelist-addresses#internal-wallets)  Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, InternalWalletsApiDeleteInternalWalletAssetRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: InternalWalletsApiDeleteInternalWalletAssetRequest = {
  // string | The ID of the wallet
  walletId: walletId_example,
  // string | The ID of the asset to delete
  assetId: assetId_example,
};

fireblocks.internalWallets.deleteInternalWalletAsset(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | The ID of the wallet | defaults to undefined
 **assetId** | [**string**] | The ID of the asset to delete | defaults to undefined


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
**201** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getInternalWallet**
> UnmanagedWallet getInternalWallet()

Returns information for an asset in an internal wallet.  This endpoint will be deprecated after 6 months. </br>As part of the depreciation process this endpoint will no longer return balances, only addresses. </br>Until it is deprecated, this endpoint will behave the same way.  Internal Wallets are whitelisted wallets that belong to you outside of Fireblocks.    - You can see the balance of the Internal Wallet via Fireblocks   - You cannot initiate transactions from Internal Wallets through Fireblocks  Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, InternalWalletsApiGetInternalWalletRequest, UnmanagedWallet } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: InternalWalletsApiGetInternalWalletRequest = {
  // string | The ID of the wallet to return
  walletId: walletId_example,
};

fireblocks.internalWallets.getInternalWallet(body).then((res: FireblocksResponse<UnmanagedWallet>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | The ID of the wallet to return | defaults to undefined


### Return type

**[UnmanagedWallet](../models/UnmanagedWallet.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Wallet object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getInternalWalletAsset**
> WalletAsset getInternalWalletAsset()

Returns information for an asset in an internal wallet.  Internal Wallets are whitelisted wallets that belong to you outside of Fireblocks.    - You can see the balance of the Internal Wallet via Fireblocks   - You cannot initiate transactions from Internal Wallets through Fireblocks  Learn more about Whitelisted Internal Addresses [here](https://developers.fireblocks.com/docs/whitelist-addresses#internal-wallets)  Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, InternalWalletsApiGetInternalWalletAssetRequest, WalletAsset } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: InternalWalletsApiGetInternalWalletAssetRequest = {
  // string | The ID of the wallet
  walletId: walletId_example,
  // string | The ID of the asset to return
  assetId: assetId_example,
};

fireblocks.internalWallets.getInternalWalletAsset(body).then((res: FireblocksResponse<WalletAsset>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | The ID of the wallet | defaults to undefined
 **assetId** | [**string**] | The ID of the asset to return | defaults to undefined


### Return type

**[WalletAsset](../models/WalletAsset.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Wallet Asset object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getInternalWalletAssetsPaginated**
> PaginatedAssetsResponse getInternalWalletAssetsPaginated()

Returns a paginated response of assets in an internal wallet.  This is a new paginated endpoint that gets all the assets from the wallet container with balances. </br>This endpoint returns a limited amount of results with a quick response time.  Internal Wallets are whitelisted wallets that belong to you outside of Fireblocks.    - You can see the balance of the Internal Wallet via Fireblocks   - You cannot initiate transactions from Internal Wallets through Fireblocks  Learn more about Whitelisted Internal Addresses [here](https://developers.fireblocks.com/docs/whitelist-addresses#internal-wallets)  Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, InternalWalletsApiGetInternalWalletAssetsPaginatedRequest, PaginatedAssetsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: InternalWalletsApiGetInternalWalletAssetsPaginatedRequest = {
  // string | The ID of the internal wallet to return assets for
  walletId: walletId_example,
  // number (optional)
  pageSize: 10,
  // string (optional)
  pageCursor: pageCursor_example,
};

fireblocks.internalWallets.getInternalWalletAssetsPaginated(body).then((res: FireblocksResponse<PaginatedAssetsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | The ID of the internal wallet to return assets for | defaults to undefined
 **pageSize** | [**number**] |  | (optional) defaults to 50
 **pageCursor** | [**string**] |  | (optional) defaults to undefined


### Return type

**[PaginatedAssetsResponse](../models/PaginatedAssetsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated response of assets for the internal wallet |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getInternalWallets**
> GetInternalWalletsResponse getInternalWallets()

Gets a list of internal wallets.   **Note**: - BTC-based assets belonging to whitelisted addresses cannot be   retrieved between 00:00 UTC and 00:01 UTC daily due to third-party   provider, Blockchain, being unavailable for this 60 second period.   </br>Please wait until the next minute to retrieve BTC-based assets. - The list of assets returned will NOT include the balances anymore.  Internal Wallets are whitelisted wallets that belong to you outside of Fireblocks.    - You can see the balance of the Internal Wallet via Fireblocks   - You cannot initiate transactions from Internal Wallets through Fireblocks  Learn more about Whitelisted Internal Addresses [here](https://developers.fireblocks.com/docs/whitelist-addresses#internal-wallets)  Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, GetInternalWalletsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.internalWallets.getInternalWallets(body).then((res: FireblocksResponse<GetInternalWalletsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[GetInternalWalletsResponse](../models/GetInternalWalletsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of internal wallets |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setCustomerRefIdForInternalWallet**
> setCustomerRefIdForInternalWallet(setCustomerRefIdRequest, )

Sets an AML/KYT customer reference ID for the specific internal wallet.  Internal Wallets are whitelisted wallets that belong to you outside of Fireblocks.    - You can see the balance of the Internal Wallet via Fireblocks   - You cannot initiate transactions from Internal Wallets through Fireblocks  Learn more about Whitelisted Internal Addresses [here](https://developers.fireblocks.com/docs/whitelist-addresses#internal-wallets)  Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, InternalWalletsApiSetCustomerRefIdForInternalWalletRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: InternalWalletsApiSetCustomerRefIdForInternalWalletRequest = {
  // SetCustomerRefIdRequest
  setCustomerRefIdRequest: param_value,
  // string | The wallet ID
  walletId: walletId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.internalWallets.setCustomerRefIdForInternalWallet(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setCustomerRefIdRequest** | **[SetCustomerRefIdRequest](../models/SetCustomerRefIdRequest.md)**|  |
 **walletId** | [**string**] | The wallet ID | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



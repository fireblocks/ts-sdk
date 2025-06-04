# EmbeddedWalletsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**addEmbeddedWalletAsset**](#addEmbeddedWalletAsset) | **POST** /ncw/wallets/{walletId}/accounts/{accountId}/assets/{assetId} | Add asset to account
[**createEmbeddedWallet**](#createEmbeddedWallet) | **POST** /ncw/wallets | Create a new wallet
[**createEmbeddedWalletAccount**](#createEmbeddedWalletAccount) | **POST** /ncw/wallets/{walletId}/accounts | Create a new account
[**getEmbeddedWallet**](#getEmbeddedWallet) | **GET** /ncw/wallets/{walletId} | Get a wallet
[**getEmbeddedWalletAccount**](#getEmbeddedWalletAccount) | **GET** /ncw/wallets/{walletId}/accounts/{accountId} | Get a account
[**getEmbeddedWalletAddresses**](#getEmbeddedWalletAddresses) | **GET** /ncw/wallets/{walletId}/accounts/{accountId}/assets/{assetId}/addresses | Retrieve asset addresses
[**getEmbeddedWalletAsset**](#getEmbeddedWalletAsset) | **GET** /ncw/wallets/{walletId}/accounts/{accountId}/assets/{assetId} | Retrieve asset
[**getEmbeddedWalletAssetBalance**](#getEmbeddedWalletAssetBalance) | **GET** /ncw/wallets/{walletId}/accounts/{accountId}/assets/{assetId}/balance | Retrieve asset balance
[**getEmbeddedWalletDevice**](#getEmbeddedWalletDevice) | **GET** /ncw/wallets/{walletId}/devices/{deviceId} | Get Embedded Wallet Device
[**getEmbeddedWalletDeviceSetupState**](#getEmbeddedWalletDeviceSetupState) | **GET** /ncw/wallets/{walletId}/devices/{deviceId}/setup_status | Get device key setup state
[**getEmbeddedWalletLatestBackup**](#getEmbeddedWalletLatestBackup) | **GET** /ncw/wallets/{walletId}/backup/latest | Get wallet Latest Backup details
[**getEmbeddedWalletPublicKeyInfoForAddress**](#getEmbeddedWalletPublicKeyInfoForAddress) | **GET** /ncw/wallets/{walletId}/accounts/{accountId}/assets/{assetId}/{change}/{addressIndex}/public_key_info | Get the public key of an asset
[**getEmbeddedWalletSupportedAssets**](#getEmbeddedWalletSupportedAssets) | **GET** /ncw/wallets/supported_assets | Retrieve supported assets
[**getEmbeddedWallets**](#getEmbeddedWallets) | **GET** /ncw/wallets | List wallets
[**getPublicKeyInfoNcw**](#getPublicKeyInfoNcw) | **GET** /ncw/wallets/{walletId}/public_key_info | Get the public key for a derivation path
[**refreshEmbeddedWalletAssetBalance**](#refreshEmbeddedWalletAssetBalance) | **PUT** /ncw/wallets/{walletId}/accounts/{accountId}/assets/{assetId}/balance | Refresh asset balance


# **addEmbeddedWalletAsset**
> EmbeddedWalletAddressDetails addEmbeddedWalletAsset()

Get the addresses of a specific asset, under a specific account, under a specific Non Custodial Wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiAddEmbeddedWalletAssetRequest, EmbeddedWalletAddressDetails } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiAddEmbeddedWalletAssetRequest = {
  // string | Wallet Id
  walletId: 550e8400-e29b-41d4-a716-446655440000,
  // string | The ID of the account
  accountId: 0,
  // string | The ID of the asset
  assetId: BTC,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.embeddedWallets.addEmbeddedWalletAsset(body).then((res: FireblocksResponse<EmbeddedWalletAddressDetails>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet Id | defaults to undefined
 **accountId** | [**string**] | The ID of the account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[EmbeddedWalletAddressDetails](../models/EmbeddedWalletAddressDetails.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createEmbeddedWallet**
> EmbeddedWallet createEmbeddedWallet()

Create new Non Custodial Wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiCreateEmbeddedWalletRequest, EmbeddedWallet } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiCreateEmbeddedWalletRequest = {
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.embeddedWallets.createEmbeddedWallet(body).then((res: FireblocksResponse<EmbeddedWallet>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[EmbeddedWallet](../models/EmbeddedWallet.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Wallet created successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createEmbeddedWalletAccount**
> EmbeddedWalletAccount createEmbeddedWalletAccount()

Create a new account under a specific Non Custodial Wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiCreateEmbeddedWalletAccountRequest, EmbeddedWalletAccount } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiCreateEmbeddedWalletAccountRequest = {
  // string | Wallet Id
  walletId: 550e8400-e29b-41d4-a716-446655440000,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.embeddedWallets.createEmbeddedWalletAccount(body).then((res: FireblocksResponse<EmbeddedWalletAccount>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet Id | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[EmbeddedWalletAccount](../models/EmbeddedWalletAccount.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Account Created |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEmbeddedWallet**
> EmbeddedWallet getEmbeddedWallet()

Get a wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetEmbeddedWalletRequest, EmbeddedWallet } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetEmbeddedWalletRequest = {
  // string | Wallet Id
  walletId: 550e8400-e29b-41d4-a716-446655440000,
};

fireblocks.embeddedWallets.getEmbeddedWallet(body).then((res: FireblocksResponse<EmbeddedWallet>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet Id | defaults to undefined


### Return type

**[EmbeddedWallet](../models/EmbeddedWallet.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEmbeddedWalletAccount**
> EmbeddedWalletAccount getEmbeddedWalletAccount()

Get a specific account under a specific Non Custodial Wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetEmbeddedWalletAccountRequest, EmbeddedWalletAccount } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetEmbeddedWalletAccountRequest = {
  // string | WalletId
  walletId: 550e8400-e29b-41d4-a716-446655440000,
  // string | The ID of the account
  accountId: 0,
};

fireblocks.embeddedWallets.getEmbeddedWalletAccount(body).then((res: FireblocksResponse<EmbeddedWalletAccount>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | WalletId | defaults to undefined
 **accountId** | [**string**] | The ID of the account | defaults to undefined


### Return type

**[EmbeddedWalletAccount](../models/EmbeddedWalletAccount.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEmbeddedWalletAddresses**
> EmbeddedWalletPaginatedAddressesResponse getEmbeddedWalletAddresses()

Get the addresses of a specific asset, under a specific account, under a specific Non Custodial Wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetEmbeddedWalletAddressesRequest, EmbeddedWalletPaginatedAddressesResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetEmbeddedWalletAddressesRequest = {
  // string | Wallet Id
  walletId: 550e8400-e29b-41d4-a716-446655440000,
  // string | The ID of the account
  accountId: 0,
  // string | The ID of the asset
  assetId: BTC,
  // string | Cursor to the next page (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Items per page (optional)
  pageSize: 10,
  // 'address' | 'createdAt' | Sort by address (optional)
  sort: address,
  // 'DESC' | 'ASC' | Is the order ascending or descending (optional)
  order: ASC,
  // boolean | Enabled (optional)
  enabled: true,
};

fireblocks.embeddedWallets.getEmbeddedWalletAddresses(body).then((res: FireblocksResponse<EmbeddedWalletPaginatedAddressesResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet Id | defaults to undefined
 **accountId** | [**string**] | The ID of the account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **pageCursor** | [**string**] | Cursor to the next page | (optional) defaults to undefined
 **pageSize** | [**number**] | Items per page | (optional) defaults to undefined
 **sort** | [**&#39;address&#39; | &#39;createdAt&#39;**]**Array<&#39;address&#39; &#124; &#39;createdAt&#39;>** | Sort by address | (optional) defaults to 'createdAt'
 **order** | [**&#39;DESC&#39; | &#39;ASC&#39;**]**Array<&#39;DESC&#39; &#124; &#39;ASC&#39;>** | Is the order ascending or descending | (optional) defaults to 'ASC'
 **enabled** | [**boolean**] | Enabled | (optional) defaults to undefined


### Return type

**[EmbeddedWalletPaginatedAddressesResponse](../models/EmbeddedWalletPaginatedAddressesResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEmbeddedWalletAsset**
> EmbeddedWalletAssetResponse getEmbeddedWalletAsset()

Get asset under a specific account, under a specific Non Custodial Wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetEmbeddedWalletAssetRequest, EmbeddedWalletAssetResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetEmbeddedWalletAssetRequest = {
  // string | Wallet Id
  walletId: 550e8400-e29b-41d4-a716-446655440000,
  // string | The ID of the account
  accountId: 0,
  // string | The ID of the asset
  assetId: BTC,
};

fireblocks.embeddedWallets.getEmbeddedWalletAsset(body).then((res: FireblocksResponse<EmbeddedWalletAssetResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet Id | defaults to undefined
 **accountId** | [**string**] | The ID of the account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined


### Return type

**[EmbeddedWalletAssetResponse](../models/EmbeddedWalletAssetResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEmbeddedWalletAssetBalance**
> EmbeddedWalletAssetBalance getEmbeddedWalletAssetBalance()

Get balance for specific asset, under a specific account

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetEmbeddedWalletAssetBalanceRequest, EmbeddedWalletAssetBalance } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetEmbeddedWalletAssetBalanceRequest = {
  // string | Wallet Id
  walletId: 550e8400-e29b-41d4-a716-446655440000,
  // string | The ID of the account
  accountId: 0,
  // string | The ID of the asset
  assetId: BTC,
};

fireblocks.embeddedWallets.getEmbeddedWalletAssetBalance(body).then((res: FireblocksResponse<EmbeddedWalletAssetBalance>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet Id | defaults to undefined
 **accountId** | [**string**] | The ID of the account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined


### Return type

**[EmbeddedWalletAssetBalance](../models/EmbeddedWalletAssetBalance.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEmbeddedWalletDevice**
> EmbeddedWalletDevice getEmbeddedWalletDevice()

Get specific device for a specific s Wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetEmbeddedWalletDeviceRequest, EmbeddedWalletDevice } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetEmbeddedWalletDeviceRequest = {
  // string | Wallet Id
  walletId: 550e8400-e29b-41d4-a716-446655440000,
  // string | Device Id
  deviceId: 9ee1bff0-6dba-4f0c-9b75-03fe90e66fa3,
};

fireblocks.embeddedWallets.getEmbeddedWalletDevice(body).then((res: FireblocksResponse<EmbeddedWalletDevice>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet Id | defaults to undefined
 **deviceId** | [**string**] | Device Id | defaults to undefined


### Return type

**[EmbeddedWalletDevice](../models/EmbeddedWalletDevice.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEmbeddedWalletDeviceSetupState**
> EmbeddedWalletDeviceKeySetupResponse getEmbeddedWalletDeviceSetupState()

Get the state of the specific device setup key under a specific Non Custodial Wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetEmbeddedWalletDeviceSetupStateRequest, EmbeddedWalletDeviceKeySetupResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetEmbeddedWalletDeviceSetupStateRequest = {
  // string | Wallet Id
  walletId: 550e8400-e29b-41d4-a716-446655440000,
  // string | Device Id
  deviceId: 9ee1bff0-6dba-4f0c-9b75-03fe90e66fa3,
};

fireblocks.embeddedWallets.getEmbeddedWalletDeviceSetupState(body).then((res: FireblocksResponse<EmbeddedWalletDeviceKeySetupResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet Id | defaults to undefined
 **deviceId** | [**string**] | Device Id | defaults to undefined


### Return type

**[EmbeddedWalletDeviceKeySetupResponse](../models/EmbeddedWalletDeviceKeySetupResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEmbeddedWalletLatestBackup**
> EmbeddedWalletLatestBackupResponse getEmbeddedWalletLatestBackup()

Get wallet Latest Backup details, including the deviceId, and backup time

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetEmbeddedWalletLatestBackupRequest, EmbeddedWalletLatestBackupResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetEmbeddedWalletLatestBackupRequest = {
  // string | Wallet Id
  walletId: 550e8400-e29b-41d4-a716-446655440000,
};

fireblocks.embeddedWallets.getEmbeddedWalletLatestBackup(body).then((res: FireblocksResponse<EmbeddedWalletLatestBackupResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet Id | defaults to undefined


### Return type

**[EmbeddedWalletLatestBackupResponse](../models/EmbeddedWalletLatestBackupResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEmbeddedWalletPublicKeyInfoForAddress**
> PublicKeyInformation getEmbeddedWalletPublicKeyInfoForAddress()

Gets the public key of an asset associated with a specific account within a Non-Custodial Wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetEmbeddedWalletPublicKeyInfoForAddressRequest, PublicKeyInformation } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetEmbeddedWalletPublicKeyInfoForAddressRequest = {
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations.
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | The ID of the Non-Custodial wallet
  walletId: 550e8400-e29b-41d4-a716-446655440000,
  // string | The ID of the account
  accountId: 0,
  // string | The ID of the asset
  assetId: BTC,
  // number | BIP44 derivation path - change value
  change: 0,
  // number | BIP44 derivation path - index value
  addressIndex: 0,
  // boolean | Compressed/Uncompressed public key format (optional)
  compressed: true,
};

fireblocks.embeddedWallets.getEmbeddedWalletPublicKeyInfoForAddress(body).then((res: FireblocksResponse<PublicKeyInformation>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | defaults to undefined
 **walletId** | [**string**] | The ID of the Non-Custodial wallet | defaults to undefined
 **accountId** | [**string**] | The ID of the account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **change** | [**number**] | BIP44 derivation path - change value | defaults to undefined
 **addressIndex** | [**number**] | BIP44 derivation path - index value | defaults to undefined
 **compressed** | [**boolean**] | Compressed/Uncompressed public key format | (optional) defaults to undefined


### Return type

**[PublicKeyInformation](../models/PublicKeyInformation.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Public Key Information |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEmbeddedWalletSupportedAssets**
> EmbeddedWalletPaginatedAssetsResponse getEmbeddedWalletSupportedAssets()

Get all the available supported assets for the Non-Custodial Wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetEmbeddedWalletSupportedAssetsRequest, EmbeddedWalletPaginatedAssetsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetEmbeddedWalletSupportedAssetsRequest = {
  // string | Next page cursor to fetch (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Items per page (optional)
  pageSize: 500,
  // boolean | Only base assets (optional)
  onlyBaseAssets: true,
};

fireblocks.embeddedWallets.getEmbeddedWalletSupportedAssets(body).then((res: FireblocksResponse<EmbeddedWalletPaginatedAssetsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Next page cursor to fetch | (optional) defaults to undefined
 **pageSize** | [**number**] | Items per page | (optional) defaults to 200
 **onlyBaseAssets** | [**boolean**] | Only base assets | (optional) defaults to undefined


### Return type

**[EmbeddedWalletPaginatedAssetsResponse](../models/EmbeddedWalletPaginatedAssetsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getEmbeddedWallets**
> EmbeddedWalletPaginatedWalletsResponse getEmbeddedWallets()

Get all Non Custodial Wallets

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetEmbeddedWalletsRequest, EmbeddedWalletPaginatedWalletsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetEmbeddedWalletsRequest = {
  // string | Next page cursor to fetch (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Items per page (optional)
  pageSize: 500,
  // 'createdAt' | Field(s) to use for sorting (optional)
  sort: createdAt,
  // 'ASC' | 'DESC' | Is the order ascending or descending (optional)
  order: ASC,
  // boolean | Enabled Wallets (optional)
  enabled: true,
};

fireblocks.embeddedWallets.getEmbeddedWallets(body).then((res: FireblocksResponse<EmbeddedWalletPaginatedWalletsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Next page cursor to fetch | (optional) defaults to undefined
 **pageSize** | [**number**] | Items per page | (optional) defaults to 200
 **sort** | [**&#39;createdAt&#39;**]**Array<&#39;createdAt&#39;>** | Field(s) to use for sorting | (optional) defaults to 'createdAt'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Is the order ascending or descending | (optional) defaults to 'ASC'
 **enabled** | [**boolean**] | Enabled Wallets | (optional) defaults to undefined


### Return type

**[EmbeddedWalletPaginatedWalletsResponse](../models/EmbeddedWalletPaginatedWalletsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getPublicKeyInfoNcw**
> PublicKeyInformation getPublicKeyInfoNcw()

Gets the public key information based on derivation path and signing algorithm within a Non-Custodial Wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetPublicKeyInfoNcwRequest, PublicKeyInformation } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetPublicKeyInfoNcwRequest = {
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations.
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | The ID of the Non-Custodial wallet
  walletId: 550e8400-e29b-41d4-a716-446655440000,
  // string | An array of integers (passed as JSON stringified array) representing the full BIP44 derivation path of the requested public key.  The first element must always be 44. 
  derivationPath: [44,0,0,0,0],
  // 'MPC_ECDSA_SECP256K1' | 'MPC_ECDSA_SECP256R1' | 'MPC_EDDSA_ED25519' | Elliptic Curve
  algorithm: MPC_EDDSA_ED25519,
  // boolean | Compressed/Uncompressed public key format (optional)
  compressed: true,
};

fireblocks.embeddedWallets.getPublicKeyInfoNcw(body).then((res: FireblocksResponse<PublicKeyInformation>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | defaults to undefined
 **walletId** | [**string**] | The ID of the Non-Custodial wallet | defaults to undefined
 **derivationPath** | [**string**] | An array of integers (passed as JSON stringified array) representing the full BIP44 derivation path of the requested public key.  The first element must always be 44.  | defaults to undefined
 **algorithm** | [**&#39;MPC_ECDSA_SECP256K1&#39; | &#39;MPC_ECDSA_SECP256R1&#39; | &#39;MPC_EDDSA_ED25519&#39;**]**Array<&#39;MPC_ECDSA_SECP256K1&#39; &#124; &#39;MPC_ECDSA_SECP256R1&#39; &#124; &#39;MPC_EDDSA_ED25519&#39;>** | Elliptic Curve | defaults to undefined
 **compressed** | [**boolean**] | Compressed/Uncompressed public key format | (optional) defaults to undefined


### Return type

**[PublicKeyInformation](../models/PublicKeyInformation.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Public key information |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **refreshEmbeddedWalletAssetBalance**
> EmbeddedWalletAssetBalance refreshEmbeddedWalletAssetBalance()

Refresh the balance of an asset in a specific account

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiRefreshEmbeddedWalletAssetBalanceRequest, EmbeddedWalletAssetBalance } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiRefreshEmbeddedWalletAssetBalanceRequest = {
  // string | Wallet Id
  walletId: 550e8400-e29b-41d4-a716-446655440000,
  // string | The ID of the account
  accountId: 0,
  // string | The ID of the asset
  assetId: BTC,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.embeddedWallets.refreshEmbeddedWalletAssetBalance(body).then((res: FireblocksResponse<EmbeddedWalletAssetBalance>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | Wallet Id | defaults to undefined
 **accountId** | [**string**] | The ID of the account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[EmbeddedWalletAssetBalance](../models/EmbeddedWalletAssetBalance.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



# ConnectedAccountsBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**addConnectedAccount**](#addConnectedAccount) | **POST** /connected_accounts | Add a connected account
[**disconnectConnectedAccount**](#disconnectConnectedAccount) | **DELETE** /connected_accounts/{accountId} | Disconnect connected account
[**getConnectedAccount**](#getConnectedAccount) | **GET** /connected_accounts/{accountId} | Get connected account
[**getConnectedAccountAllowlist**](#getConnectedAccountAllowlist) | **GET** /connected_accounts/{accountId}/allowlist | Get allowlist for connected account
[**getConnectedAccountAllowlistEntry**](#getConnectedAccountAllowlistEntry) | **GET** /connected_accounts/{accountId}/allowlist/{allowlistId} | Get a single allowlist entry for a connected account
[**getConnectedAccountBalances**](#getConnectedAccountBalances) | **GET** /connected_accounts/{accountId}/balances | Get balances for an account
[**getConnectedAccountRates**](#getConnectedAccountRates) | **GET** /connected_accounts/{accountId}/rates | Get exchange rates for an account
[**getConnectedAccountTradingPairs**](#getConnectedAccountTradingPairs) | **GET** /connected_accounts/{accountId}/manifest/capabilities/trading/pairs | Get supported trading pairs for an account
[**getConnectedAccounts**](#getConnectedAccounts) | **GET** /connected_accounts | Get connected accounts
[**renameConnectedAccount**](#renameConnectedAccount) | **POST** /connected_accounts/{accountId}/rename | Rename Connected Account
[**syncConnectedAccountAllowlist**](#syncConnectedAccountAllowlist) | **POST** /connected_accounts/{accountId}/allowlist/sync | Sync allowlist for connected account


# **addConnectedAccount**
> AddConnectedAccountResponse addConnectedAccount(addConnectedAccountRequest)

Creates a new connected account for the authenticated tenant.  The `creds` field must be a Base64-encoded RSA-encrypted credential blob. Use `GET /exchange_accounts/credentials_public_key` to retrieve the public key for encryption.  The `providerType` is derived server-side from the `providerId` — callers do not supply it.  Endpoint Permission: Editor, Admin, Non-Signing Admin.  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ConnectedAccountsBetaApiAddConnectedAccountRequest, AddConnectedAccountResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ConnectedAccountsBetaApiAddConnectedAccountRequest = {
  // AddConnectedAccountRequest
  addConnectedAccountRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.connectedAccountsBeta.addConnectedAccount(body).then((res: FireblocksResponse<AddConnectedAccountResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addConnectedAccountRequest** | **[AddConnectedAccountRequest](../models/AddConnectedAccountRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[AddConnectedAccountResponse](../models/AddConnectedAccountResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Account created (or pending approval). |  * X-Request-ID -  <br>  |
**400** | Bad request — invalid field or provider constraints violated. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token, or insufficient role (Editor or higher required). |  * X-Request-ID -  <br>  |
**403** | Feature not enabled for this tenant. |  * X-Request-ID -  <br>  |
**404** | mainAccountId not found. |  * X-Request-ID -  <br>  |
**422** | Invalid credentials. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **disconnectConnectedAccount**
> disconnectConnectedAccount()

Disconnect a connected account by ID.  **Note**: - This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ConnectedAccountsBetaApiDisconnectConnectedAccountRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ConnectedAccountsBetaApiDisconnectConnectedAccountRequest = {
  // string | The ID of the account to disconnect.
  accountId: accountId_example,
};

fireblocks.connectedAccountsBeta.disconnectConnectedAccount(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | The ID of the account to disconnect. | defaults to undefined


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
**204** | Account disconnected successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getConnectedAccount**
> ConnectedSingleAccountResponse getConnectedAccount()

Retrieve detailed information about a specific connected account by ID.  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ConnectedAccountsBetaApiGetConnectedAccountRequest, ConnectedSingleAccountResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ConnectedAccountsBetaApiGetConnectedAccountRequest = {
  // string | The ID of the account to fetch.
  accountId: accountId_example,
};

fireblocks.connectedAccountsBeta.getConnectedAccount(body).then((res: FireblocksResponse<ConnectedSingleAccountResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | The ID of the account to fetch. | defaults to undefined


### Return type

**[ConnectedSingleAccountResponse](../models/ConnectedSingleAccountResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Account response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getConnectedAccountAllowlist**
> AllowlistResponse getConnectedAccountAllowlist()

Retrieves the address allowlist for a specified connected account.  **Note:** This endpoint is currently in beta and might be subject to changes. Currently supports CoinbaseExchange/Binance accounts only. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ConnectedAccountsBetaApiGetConnectedAccountAllowlistRequest, AllowlistResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ConnectedAccountsBetaApiGetConnectedAccountAllowlistRequest = {
  // string | The connected account identifier
  accountId: accountId_example,
  // AllowlistEntryStatus | Filter by allowlist entry status (optional)
  status: param_value,
  // string | Filter by Fireblocks asset ID.  See [List assets](https://developers.fireblocks.com/reference/listassets) for the canonical list of Fireblocks asset IDs.  (optional)
  assetId: assetId_example,
  // string | Filter by Fireblocks network ID.  See [List blockchains](https://developers.fireblocks.com/reference/listblockchains) for the canonical list of Fireblocks blockchain identifiers.  (optional)
  networkId: networkId_example,
  // string | Filter by specific address (optional)
  address: address_example,
  // string | Pagination cursor for next page (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of entries to return (optional)
  pageSize: 56,
  // 'addedAt' | 'lastSyncedAt' | Field to sort results by. (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | Sort order (ASC or DESC). (optional)
  order: ASC,
};

fireblocks.connectedAccountsBeta.getConnectedAccountAllowlist(body).then((res: FireblocksResponse<AllowlistResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | The connected account identifier | defaults to undefined
 **status** | **AllowlistEntryStatus** | Filter by allowlist entry status | (optional) defaults to undefined
 **assetId** | [**string**] | Filter by Fireblocks asset ID.  See [List assets](https://developers.fireblocks.com/reference/listassets) for the canonical list of Fireblocks asset IDs.  | (optional) defaults to undefined
 **networkId** | [**string**] | Filter by Fireblocks network ID.  See [List blockchains](https://developers.fireblocks.com/reference/listblockchains) for the canonical list of Fireblocks blockchain identifiers.  | (optional) defaults to undefined
 **address** | [**string**] | Filter by specific address | (optional) defaults to undefined
 **pageCursor** | [**string**] | Pagination cursor for next page | (optional) defaults to undefined
 **pageSize** | [**number**] | Maximum number of entries to return | (optional) defaults to undefined
 **sortBy** | [**&#39;addedAt&#39; | &#39;lastSyncedAt&#39;**]**Array<&#39;addedAt&#39; &#124; &#39;lastSyncedAt&#39;>** | Field to sort results by. | (optional) defaults to 'addedAt'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order (ASC or DESC). | (optional) defaults to 'DESC'


### Return type

**[AllowlistResponse](../models/AllowlistResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Allowlist entries response |  * X-Request-ID -  <br>  |
**404** | Connected account not found |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getConnectedAccountAllowlistEntry**
> AllowlistEntryResponse getConnectedAccountAllowlistEntry()

Retrieves a single allowlist entry by its Fireblocks identifier for a specified connected account.  **Note:** This endpoint is currently in beta and might be subject to changes. Currently supports CoinbaseExchange/Binance accounts only. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ConnectedAccountsBetaApiGetConnectedAccountAllowlistEntryRequest, AllowlistEntryResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ConnectedAccountsBetaApiGetConnectedAccountAllowlistEntryRequest = {
  // string | The connected account identifier
  accountId: accountId_example,
  // string | The Fireblocks allowlist entry identifier
  allowlistId: allowlistId_example,
};

fireblocks.connectedAccountsBeta.getConnectedAccountAllowlistEntry(body).then((res: FireblocksResponse<AllowlistEntryResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | The connected account identifier | defaults to undefined
 **allowlistId** | [**string**] | The Fireblocks allowlist entry identifier | defaults to undefined


### Return type

**[AllowlistEntryResponse](../models/AllowlistEntryResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Allowlist entry response |  * X-Request-ID -  <br>  |
**404** | Connected account or allowlist entry not found |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getConnectedAccountBalances**
> ConnectedAccountBalancesResponse getConnectedAccountBalances()

Retrieve current asset balances for a specific connected account as a flat list (one row per `assetId`, `balanceType`).  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ConnectedAccountsBetaApiGetConnectedAccountBalancesRequest, ConnectedAccountBalancesResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ConnectedAccountsBetaApiGetConnectedAccountBalancesRequest = {
  // string | The ID of the account to fetch balances for.
  accountId: accountId_example,
  // number | Page size for pagination. (optional)
  pageSize: 56,
  // string | Page cursor for pagination. (optional)
  pageCursor: pageCursor_example,
};

fireblocks.connectedAccountsBeta.getConnectedAccountBalances(body).then((res: FireblocksResponse<ConnectedAccountBalancesResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | The ID of the account to fetch balances for. | defaults to undefined
 **pageSize** | [**number**] | Page size for pagination. | (optional) defaults to undefined
 **pageCursor** | [**string**] | Page cursor for pagination. | (optional) defaults to undefined


### Return type

**[ConnectedAccountBalancesResponse](../models/ConnectedAccountBalancesResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Account balances response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getConnectedAccountRates**
> ConnectedAccountRateResponse getConnectedAccountRates()

Retrieve current exchange rates for converting between specific assets in a connected account.  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ConnectedAccountsBetaApiGetConnectedAccountRatesRequest, ConnectedAccountRateResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ConnectedAccountsBetaApiGetConnectedAccountRatesRequest = {
  // string | The ID of the account to fetch rates for.
  accountId: accountId_example,
  // string | The ID of the asset to fetch rates for.
  baseAssetId: baseAssetId_example,
  // string | The ID of the asset to get the rates nominally.
  quoteAssetId: quoteAssetId_example,
};

fireblocks.connectedAccountsBeta.getConnectedAccountRates(body).then((res: FireblocksResponse<ConnectedAccountRateResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | The ID of the account to fetch rates for. | defaults to undefined
 **baseAssetId** | [**string**] | The ID of the asset to fetch rates for. | defaults to undefined
 **quoteAssetId** | [**string**] | The ID of the asset to get the rates nominally. | defaults to undefined


### Return type

**[ConnectedAccountRateResponse](../models/ConnectedAccountRateResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rates response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getConnectedAccountTradingPairs**
> ConnectedAccountTradingPairsResponse getConnectedAccountTradingPairs()

Retrieve all asset trading pairs supported by a specific connected account, including the pair type (`quote`, `market`, `onOffRamp`).  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ConnectedAccountsBetaApiGetConnectedAccountTradingPairsRequest, ConnectedAccountTradingPairsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ConnectedAccountsBetaApiGetConnectedAccountTradingPairsRequest = {
  // string | The ID of the account to fetch supported pairs for.
  accountId: accountId_example,
  // number | Page size for pagination. (optional)
  pageSize: 56,
  // string | Page cursor for pagination. (optional)
  pageCursor: pageCursor_example,
};

fireblocks.connectedAccountsBeta.getConnectedAccountTradingPairs(body).then((res: FireblocksResponse<ConnectedAccountTradingPairsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | The ID of the account to fetch supported pairs for. | defaults to undefined
 **pageSize** | [**number**] | Page size for pagination. | (optional) defaults to 100
 **pageCursor** | [**string**] | Page cursor for pagination. | (optional) defaults to undefined


### Return type

**[ConnectedAccountTradingPairsResponse](../models/ConnectedAccountTradingPairsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Supported pairs response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getConnectedAccounts**
> ConnectedAccountsResponse getConnectedAccounts()

Returns all connected accounts.  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ConnectedAccountsBetaApiGetConnectedAccountsRequest, ConnectedAccountsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ConnectedAccountsBetaApiGetConnectedAccountsRequest = {
  // boolean | Whether to include only main accounts in the response. (optional)
  mainAccounts: true,
  // number | Page size for pagination. (optional)
  pageSize: 56,
  // string | Page cursor for pagination. (optional)
  pageCursor: pageCursor_example,
};

fireblocks.connectedAccountsBeta.getConnectedAccounts(body).then((res: FireblocksResponse<ConnectedAccountsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mainAccounts** | [**boolean**] | Whether to include only main accounts in the response. | (optional) defaults to false
 **pageSize** | [**number**] | Page size for pagination. | (optional) defaults to undefined
 **pageCursor** | [**string**] | Page cursor for pagination. | (optional) defaults to undefined


### Return type

**[ConnectedAccountsResponse](../models/ConnectedAccountsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get accounts response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **renameConnectedAccount**
> RenameConnectedAccountResponse renameConnectedAccount(renameConnectedAccountRequest, )

Rename a connected account by account ID.  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ConnectedAccountsBetaApiRenameConnectedAccountRequest, RenameConnectedAccountResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ConnectedAccountsBetaApiRenameConnectedAccountRequest = {
  // RenameConnectedAccountRequest
  renameConnectedAccountRequest: param_value,
  // string | The unique identifier of the connected account
  accountId: accountId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.connectedAccountsBeta.renameConnectedAccount(body).then((res: FireblocksResponse<RenameConnectedAccountResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **renameConnectedAccountRequest** | **[RenameConnectedAccountRequest](../models/RenameConnectedAccountRequest.md)**|  |
 **accountId** | [**string**] | The unique identifier of the connected account | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[RenameConnectedAccountResponse](../models/RenameConnectedAccountResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully renamed connected account. |  * X-Request-ID -  <br>  |
**400** | Bad request. Missing tenantId, accountId, or accountName. |  -  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  -  |
**403** | Failed to rename connected account. |  -  |
**404** | Connected account not found |  -  |
**409** | Conflict. Account name is already in use by another account. |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **syncConnectedAccountAllowlist**
> syncConnectedAccountAllowlist()

Triggers an on-demand sync from the exchange, bypassing the cache and fetching live data immediately.  **Rate limit:** 1 request per minute per connected account.  **Note:** This endpoint is currently in beta and might be subject to changes. Currently supports CoinbaseExchange/Binance accounts only. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ConnectedAccountsBetaApiSyncConnectedAccountAllowlistRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ConnectedAccountsBetaApiSyncConnectedAccountAllowlistRequest = {
  // string | The connected account identifier
  accountId: accountId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.connectedAccountsBeta.syncConnectedAccountAllowlist(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | The connected account identifier | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


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
**202** | Sync request accepted and processing |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



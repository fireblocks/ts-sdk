# ConnectedAccountsBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getConnectedAccount**](#getConnectedAccount) | **GET** /connected_accounts/{accountId} | Get connected account
[**getConnectedAccountBalances**](#getConnectedAccountBalances) | **GET** /connected_accounts/{accountId}/balances | Get balances for an account
[**getConnectedAccountRates**](#getConnectedAccountRates) | **GET** /connected_accounts/{accountId}/rates | Get exchange rates for an account
[**getConnectedAccountTradingPairs**](#getConnectedAccountTradingPairs) | **GET** /connected_accounts/{accountId}/manifest/capabilities/trading/pairs | Get supported trading pairs for an account
[**getConnectedAccounts**](#getConnectedAccounts) | **GET** /connected_accounts | Get connected accounts


# **getConnectedAccount**
> ConnectedSingleAccountResponse getConnectedAccount()

Retrieve detailed information about a specific connected account by ID. </br> **Note**: - This endpoint is currently in beta and might be subject to changes. 

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

# **getConnectedAccountBalances**
> ConnectedAccountBalancesResponse getConnectedAccountBalances()

Retrieve current asset balances for a specific connected account as a flat list (one row per assetId, balanceType)  </br>  **Note**:  - This endpoint is currently in beta and might be subject to changes. 

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

Retrieve current exchange rates for converting between specific assets in a connected account.

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

Retrieve all asset trading pairs supported by a specific connected account, including the pair type (quote, market, onOffRamp).

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

Returns all connected accounts </br> **Note**: - This endpoint is currently in beta and might be subject to changes. 

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



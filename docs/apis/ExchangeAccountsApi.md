# ExchangeAccountsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertAssets**](#convertAssets) | **POST** /exchange_accounts/{exchangeAccountId}/convert | Convert exchange account funds from the source asset to the destination asset.
[**getExchangeAccount**](#getExchangeAccount) | **GET** /exchange_accounts/{exchangeAccountId} | Find a specific exchange account
[**getExchangeAccountAsset**](#getExchangeAccountAsset) | **GET** /exchange_accounts/{exchangeAccountId}/{assetId} | Find an asset for an exchange account
[**getExchangeAccounts**](#getExchangeAccounts) | **GET** /exchange_accounts | List exchange accounts
[**getPagedExchangeAccounts**](#getPagedExchangeAccounts) | **GET** /exchange_accounts/paged | Pagination list exchange accounts
[**internalTransfer**](#internalTransfer) | **POST** /exchange_accounts/{exchangeAccountId}/internal_transfer | Internal transfer for exchange accounts


# **convertAssets**
> convertAssets()

Convert exchange account funds from the source asset to the destination asset. Coinbase (USD to USDC, USDC to USD) and Bitso (MXN to USD) are supported conversions.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ExchangeAccountsApiConvertAssetsRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8").replace(/\\n/gm, "\n");

const fireblocks = new Fireblocks();

let body: ExchangeAccountsApiConvertAssetsRequest = {
  // string | The ID of the exchange account. Please make sure the exchange supports conversions. To find the ID of your exchange account, use GET/exchange_accounts.
  exchangeAccountId: exchangeAccountId_example,
  // ConvertAssetsRequest (optional)
  convertAssetsRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.exchangeAccounts.convertAssets(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **convertAssetsRequest** | **[ConvertAssetsRequest](../models/ConvertAssetsRequest.md)**|  |
 **exchangeAccountId** | [**string**] | The ID of the exchange account. Please make sure the exchange supports conversions. To find the ID of your exchange account, use GET/exchange_accounts. | defaults to undefined
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
**200** | Conversion successful |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getExchangeAccount**
> ExchangeAccount getExchangeAccount()

Returns an exchange account by ID.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ExchangeAccountsApiGetExchangeAccountRequest, ExchangeAccount } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8").replace(/\\n/gm, "\n");

const fireblocks = new Fireblocks();

let body: ExchangeAccountsApiGetExchangeAccountRequest = {
  // string | The ID of the exchange account to return
  exchangeAccountId: exchangeAccountId_example,
};

fireblocks.exchangeAccounts.getExchangeAccount(body).then((res: FireblocksResponse<ExchangeAccount>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeAccountId** | [**string**] | The ID of the exchange account to return | defaults to undefined


### Return type

**[ExchangeAccount](../models/ExchangeAccount.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An ExchangeAccount object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getExchangeAccountAsset**
> ExchangeAsset getExchangeAccountAsset()

Returns an asset for an exchange account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ExchangeAccountsApiGetExchangeAccountAssetRequest, ExchangeAsset } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8").replace(/\\n/gm, "\n");

const fireblocks = new Fireblocks();

let body: ExchangeAccountsApiGetExchangeAccountAssetRequest = {
  // string | The ID of the exchange account to return
  exchangeAccountId: exchangeAccountId_example,
  // string | The ID of the asset to return
  assetId: assetId_example,
};

fireblocks.exchangeAccounts.getExchangeAccountAsset(body).then((res: FireblocksResponse<ExchangeAsset>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeAccountId** | [**string**] | The ID of the exchange account to return | defaults to undefined
 **assetId** | [**string**] | The ID of the asset to return | defaults to undefined


### Return type

**[ExchangeAsset](../models/ExchangeAsset.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An ExchangeAccountAsset object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getExchangeAccounts**
> Array<ExchangeAccount> getExchangeAccounts()

Deprecated (use new \'paged\' endpoint) - Returns all exchange accounts.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8").replace(/\\n/gm, "\n");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.exchangeAccounts.getExchangeAccounts(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[Array<ExchangeAccount>](../models/Array<ExchangeAccount>.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An ExchangeAccount object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getPagedExchangeAccounts**
> Array<ExchangeAccountsPaged> getPagedExchangeAccounts()

Returns a page include exchange accounts.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ExchangeAccountsApiGetPagedExchangeAccountsRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8").replace(/\\n/gm, "\n");

const fireblocks = new Fireblocks();

let body: ExchangeAccountsApiGetPagedExchangeAccountsRequest = {
  // number | number of exchanges per page
  limit: 8.14,
  // string (optional)
  before: before_example,
  // string (optional)
  after: after_example,
};

fireblocks.exchangeAccounts.getPagedExchangeAccounts(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | [**number**] | number of exchanges per page | defaults to 3
 **before** | [**string**] |  | (optional) defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined


### Return type

**[Array<ExchangeAccountsPaged>](../models/Array<ExchangeAccountsPaged>.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An ExchangeAccount object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **internalTransfer**
> internalTransfer()

Transfers funds between trading accounts under the same exchange account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ExchangeAccountsApiInternalTransferRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8").replace(/\\n/gm, "\n");

const fireblocks = new Fireblocks();

let body: ExchangeAccountsApiInternalTransferRequest = {
  // string | The ID of the exchange account to return
  exchangeAccountId: exchangeAccountId_example,
  // CreateInternalTransferRequest (optional)
  createInternalTransferRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.exchangeAccounts.internalTransfer(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createInternalTransferRequest** | **[CreateInternalTransferRequest](../models/CreateInternalTransferRequest.md)**|  |
 **exchangeAccountId** | [**string**] | The ID of the exchange account to return | defaults to undefined
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
**201** | Transfer succeeded |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



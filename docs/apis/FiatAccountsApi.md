# FiatAccountsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**depositFundsFromLinkedDDA**](#depositFundsFromLinkedDDA) | **POST** /fiat_accounts/{accountId}/deposit_from_linked_dda | Deposit funds from DDA
[**getFiatAccount**](#getFiatAccount) | **GET** /fiat_accounts/{accountId} | Find a specific fiat account
[**getFiatAccounts**](#getFiatAccounts) | **GET** /fiat_accounts | List fiat accounts
[**redeemFundsToLinkedDda**](#redeemFundsToLinkedDda) | **POST** /fiat_accounts/{accountId}/redeem_to_linked_dda | Redeem funds to DDA


# **depositFundsFromLinkedDDA**
> depositFundsFromLinkedDDA()

Deposits funds from the linked DDA.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, FiatAccountsApiDepositFundsFromLinkedDDARequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: FiatAccountsApiDepositFundsFromLinkedDDARequest = {
  // string | The ID of the fiat account to use
  accountId: accountId_example,
  // RedeemFundsToLinkedDdaRequest (optional)
  redeemFundsToLinkedDdaRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.fiatAccounts.depositFundsFromLinkedDDA(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redeemFundsToLinkedDdaRequest** | **[RedeemFundsToLinkedDdaRequest](../models/RedeemFundsToLinkedDdaRequest.md)**|  |
 **accountId** | [**string**] | The ID of the fiat account to use | defaults to undefined
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

# **getFiatAccount**
> FiatAccount getFiatAccount()

Returns a fiat account by ID.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, FiatAccountsApiGetFiatAccountRequest, FiatAccount } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: FiatAccountsApiGetFiatAccountRequest = {
  // string | The ID of the fiat account to return
  accountId: accountId_example,
};

fireblocks.fiatAccounts.getFiatAccount(body).then((res: FireblocksResponse<FiatAccount>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountId** | [**string**] | The ID of the fiat account to return | defaults to undefined


### Return type

**[FiatAccount](../models/FiatAccount.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A fiat account object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getFiatAccounts**
> Array<FiatAccount> getFiatAccounts()

Returns all fiat accounts.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.fiatAccounts.getFiatAccounts(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[Array<FiatAccount>](../models/Array<FiatAccount>.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A fiat account object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **redeemFundsToLinkedDda**
> redeemFundsToLinkedDda()

Redeems funds to the linked DDA.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, FiatAccountsApiRedeemFundsToLinkedDdaRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: FiatAccountsApiRedeemFundsToLinkedDdaRequest = {
  // string | The ID of the fiat account to use
  accountId: accountId_example,
  // RedeemFundsToLinkedDdaRequest (optional)
  redeemFundsToLinkedDdaRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.fiatAccounts.redeemFundsToLinkedDda(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redeemFundsToLinkedDdaRequest** | **[RedeemFundsToLinkedDdaRequest](../models/RedeemFundsToLinkedDdaRequest.md)**|  |
 **accountId** | [**string**] | The ID of the fiat account to use | defaults to undefined
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



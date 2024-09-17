# TransactionsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTransaction**](#cancelTransaction) | **POST** /transactions/{txId}/cancel | Cancel a transaction
[**createTransaction**](#createTransaction) | **POST** /transactions | Create a new transaction
[**dropTransaction**](#dropTransaction) | **POST** /transactions/{txId}/drop | Drop ETH transaction by ID
[**estimateNetworkFee**](#estimateNetworkFee) | **GET** /estimate_network_fee | Estimate the required fee for an asset
[**estimateTransactionFee**](#estimateTransactionFee) | **POST** /transactions/estimate_fee | Estimate transaction fee
[**freezeTransaction**](#freezeTransaction) | **POST** /transactions/{txId}/freeze | Freeze a transaction
[**getTransaction**](#getTransaction) | **GET** /transactions/{txId} | Find a specific transaction by Fireblocks transaction ID
[**getTransactionByExternalId**](#getTransactionByExternalId) | **GET** /transactions/external_tx_id/{externalTxId} | Find a specific transaction by external transaction ID
[**getTransactions**](#getTransactions) | **GET** /transactions | List transaction history
[**rescanTransactionsBeta**](#rescanTransactionsBeta) | **POST** /transactions/rescan | rescan array of transactions
[**setConfirmationThresholdByTransactionHash**](#setConfirmationThresholdByTransactionHash) | **POST** /txHash/{txHash}/set_confirmation_threshold | Set confirmation threshold by transaction hash
[**setTransactionConfirmationThreshold**](#setTransactionConfirmationThreshold) | **POST** /transactions/{txId}/set_confirmation_threshold | Set confirmation threshold by transaction ID
[**unfreezeTransaction**](#unfreezeTransaction) | **POST** /transactions/{txId}/unfreeze | Unfreeze a transaction
[**validateAddress**](#validateAddress) | **GET** /transactions/validate_address/{assetId}/{address} | Validate destination address


# **cancelTransaction**
> CancelTransactionResponse cancelTransaction()

Cancels a transaction by ID.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiCancelTransactionRequest, CancelTransactionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiCancelTransactionRequest = {
  // string | The ID of the transaction to cancel
  txId: txId_example,
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. (optional)
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.transactions.cancelTransaction(body).then((res: FireblocksResponse<CancelTransactionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txId** | [**string**] | The ID of the transaction to cancel | defaults to undefined
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CancelTransactionResponse](../models/CancelTransactionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Transaction object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createTransaction**
> CreateTransactionResponse createTransaction()

Creates a new transaction.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiCreateTransactionRequest, CreateTransactionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiCreateTransactionRequest = {
  // TransactionRequest (optional)
  transactionRequest: param_value,
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. (optional)
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.transactions.createTransaction(body).then((res: FireblocksResponse<CreateTransactionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequest** | **[TransactionRequest](../models/TransactionRequest.md)**|  |
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CreateTransactionResponse](../models/CreateTransactionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A transaction object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **dropTransaction**
> DropTransactionResponse dropTransaction()

Drops a stuck ETH transaction and creates a replacement transaction.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiDropTransactionRequest, DropTransactionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiDropTransactionRequest = {
  // string | The ID of the transaction
  txId: txId_example,
  // DropTransactionRequest (optional)
  dropTransactionRequest: param_value,
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. (optional)
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.transactions.dropTransaction(body).then((res: FireblocksResponse<DropTransactionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dropTransactionRequest** | **[DropTransactionRequest](../models/DropTransactionRequest.md)**|  |
 **txId** | [**string**] | The ID of the transaction | defaults to undefined
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[DropTransactionResponse](../models/DropTransactionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Operation completed successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **estimateNetworkFee**
> EstimatedNetworkFeeResponse estimateNetworkFee()

Gets the estimated required fee for an asset. For UTXO based assets, the response will contain the suggested fee per byte, for ETH/ETC based assets, the suggested gas price, and for XRP/XLM, the transaction fee.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiEstimateNetworkFeeRequest, EstimatedNetworkFeeResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiEstimateNetworkFeeRequest = {
  // string | The asset for which to estimate the fee
  assetId: assetId_example,
};

fireblocks.transactions.estimateNetworkFee(body).then((res: FireblocksResponse<EstimatedNetworkFeeResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] | The asset for which to estimate the fee | defaults to undefined


### Return type

**[EstimatedNetworkFeeResponse](../models/EstimatedNetworkFeeResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Estimated fees response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **estimateTransactionFee**
> EstimatedTransactionFeeResponse estimateTransactionFee()

Estimates the transaction fee for a transaction request. * Note: Supports all Fireblocks assets except ZCash (ZEC).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiEstimateTransactionFeeRequest, EstimatedTransactionFeeResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiEstimateTransactionFeeRequest = {
  // TransactionRequest (optional)
  transactionRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.transactions.estimateTransactionFee(body).then((res: FireblocksResponse<EstimatedTransactionFeeResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionRequest** | **[TransactionRequest](../models/TransactionRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[EstimatedTransactionFeeResponse](../models/EstimatedTransactionFeeResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Estimated fees response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **freezeTransaction**
> FreezeTransactionResponse freezeTransaction()

Freezes a transaction by ID.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiFreezeTransactionRequest, FreezeTransactionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiFreezeTransactionRequest = {
  // string | The ID of the transaction to freeze
  txId: txId_example,
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. (optional)
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.transactions.freezeTransaction(body).then((res: FireblocksResponse<FreezeTransactionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txId** | [**string**] | The ID of the transaction to freeze | defaults to undefined
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[FreezeTransactionResponse](../models/FreezeTransactionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | freeze response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTransaction**
> TransactionResponse getTransaction()

Returns a transaction by ID.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiGetTransactionRequest, TransactionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiGetTransactionRequest = {
  // string | The ID of the transaction to return
  txId: 00000000-0000-0000-0000-000000000000,
};

fireblocks.transactions.getTransaction(body).then((res: FireblocksResponse<TransactionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txId** | [**string**] | The ID of the transaction to return | defaults to undefined


### Return type

**[TransactionResponse](../models/TransactionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Transaction object |  * X-Request-ID -  <br>  |
**400** | Error Response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTransactionByExternalId**
> TransactionResponse getTransactionByExternalId()

Returns transaction by external transaction ID.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiGetTransactionByExternalIdRequest, TransactionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiGetTransactionByExternalIdRequest = {
  // string | The external ID of the transaction to return
  externalTxId: 00000000-0000-0000-0000-000000000000,
};

fireblocks.transactions.getTransactionByExternalId(body).then((res: FireblocksResponse<TransactionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **externalTxId** | [**string**] | The external ID of the transaction to return | defaults to undefined


### Return type

**[TransactionResponse](../models/TransactionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Transaction object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTransactions**
> GetTransactionsResponse getTransactions()

Lists the transaction history for your workspace.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiGetTransactionsRequest, GetTransactionsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiGetTransactionsRequest = {
  // string | Unix timestamp in milliseconds. Returns only transactions created before the specified date (optional)
  before: before_example,
  // string | Unix timestamp in milliseconds. Returns only transactions created after the specified date (optional)
  after: after_example,
  // string | You can filter by one of the statuses. (optional)
  status: status_example,
  // 'createdAt' | 'lastUpdated' | The field to order the results by  **Note**: Ordering by a field that is not createdAt may result with transactions that receive updates as you request the next or previous pages of results, resulting with missing those transactions. (optional)
  orderBy: orderBy_example,
  // 'ASC' | 'DESC' | The direction to order the results by (optional)
  sort: sort_example,
  // number | Limits the number of results. If not provided, a limit of 200 will be used. The maximum allowed limit is 500 (optional)
  limit: 56,
  // 'VAULT_ACCOUNT' | 'EXCHANGE_ACCOUNT' | 'INTERNAL_WALLET' | 'EXTERNAL_WALLET' | 'CONTRACT' | 'FIAT_ACCOUNT' | 'NETWORK_CONNECTION' | 'COMPOUND' | 'UNKNOWN' | 'GAS_STATION' | 'END_USER_WALLET' | The source type of the transaction (optional)
  sourceType: sourceType_example,
  // string | The source ID of the transaction (optional)
  sourceId: sourceId_example,
  // 'VAULT_ACCOUNT' | 'EXCHANGE_ACCOUNT' | 'INTERNAL_WALLET' | 'EXTERNAL_WALLET' | 'CONTRACT' | 'FIAT_ACCOUNT' | 'NETWORK_CONNECTION' | 'COMPOUND' | 'ONE_TIME_ADDRESS' | 'END_USER_WALLET' | The destination type of the transaction (optional)
  destType: destType_example,
  // string | The destination ID of the transaction (optional)
  destId: destId_example,
  // string | A list of assets to filter by, seperated by commas (optional)
  assets: assets_example,
  // string | Returns only results with a specified txHash (optional)
  txHash: txHash_example,
  // string | Returns only results where the source is a specific end user wallet (optional)
  sourceWalletId: sourceWalletId_example,
  // string | Returns only results where the destination is a specific end user wallet (optional)
  destWalletId: destWalletId_example,
};

fireblocks.transactions.getTransactions(body).then((res: FireblocksResponse<GetTransactionsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **before** | [**string**] | Unix timestamp in milliseconds. Returns only transactions created before the specified date | (optional) defaults to undefined
 **after** | [**string**] | Unix timestamp in milliseconds. Returns only transactions created after the specified date | (optional) defaults to undefined
 **status** | [**string**] | You can filter by one of the statuses. | (optional) defaults to undefined
 **orderBy** | [**&#39;createdAt&#39; | &#39;lastUpdated&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;lastUpdated&#39;>** | The field to order the results by  **Note**: Ordering by a field that is not createdAt may result with transactions that receive updates as you request the next or previous pages of results, resulting with missing those transactions. | (optional) defaults to undefined
 **sort** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | The direction to order the results by | (optional) defaults to undefined
 **limit** | [**number**] | Limits the number of results. If not provided, a limit of 200 will be used. The maximum allowed limit is 500 | (optional) defaults to 200
 **sourceType** | [**&#39;VAULT_ACCOUNT&#39; | &#39;EXCHANGE_ACCOUNT&#39; | &#39;INTERNAL_WALLET&#39; | &#39;EXTERNAL_WALLET&#39; | &#39;CONTRACT&#39; | &#39;FIAT_ACCOUNT&#39; | &#39;NETWORK_CONNECTION&#39; | &#39;COMPOUND&#39; | &#39;UNKNOWN&#39; | &#39;GAS_STATION&#39; | &#39;END_USER_WALLET&#39;**]**Array<&#39;VAULT_ACCOUNT&#39; &#124; &#39;EXCHANGE_ACCOUNT&#39; &#124; &#39;INTERNAL_WALLET&#39; &#124; &#39;EXTERNAL_WALLET&#39; &#124; &#39;CONTRACT&#39; &#124; &#39;FIAT_ACCOUNT&#39; &#124; &#39;NETWORK_CONNECTION&#39; &#124; &#39;COMPOUND&#39; &#124; &#39;UNKNOWN&#39; &#124; &#39;GAS_STATION&#39; &#124; &#39;END_USER_WALLET&#39;>** | The source type of the transaction | (optional) defaults to undefined
 **sourceId** | [**string**] | The source ID of the transaction | (optional) defaults to undefined
 **destType** | [**&#39;VAULT_ACCOUNT&#39; | &#39;EXCHANGE_ACCOUNT&#39; | &#39;INTERNAL_WALLET&#39; | &#39;EXTERNAL_WALLET&#39; | &#39;CONTRACT&#39; | &#39;FIAT_ACCOUNT&#39; | &#39;NETWORK_CONNECTION&#39; | &#39;COMPOUND&#39; | &#39;ONE_TIME_ADDRESS&#39; | &#39;END_USER_WALLET&#39;**]**Array<&#39;VAULT_ACCOUNT&#39; &#124; &#39;EXCHANGE_ACCOUNT&#39; &#124; &#39;INTERNAL_WALLET&#39; &#124; &#39;EXTERNAL_WALLET&#39; &#124; &#39;CONTRACT&#39; &#124; &#39;FIAT_ACCOUNT&#39; &#124; &#39;NETWORK_CONNECTION&#39; &#124; &#39;COMPOUND&#39; &#124; &#39;ONE_TIME_ADDRESS&#39; &#124; &#39;END_USER_WALLET&#39;>** | The destination type of the transaction | (optional) defaults to undefined
 **destId** | [**string**] | The destination ID of the transaction | (optional) defaults to undefined
 **assets** | [**string**] | A list of assets to filter by, seperated by commas | (optional) defaults to undefined
 **txHash** | [**string**] | Returns only results with a specified txHash | (optional) defaults to undefined
 **sourceWalletId** | [**string**] | Returns only results where the source is a specific end user wallet | (optional) defaults to undefined
 **destWalletId** | [**string**] | Returns only results where the destination is a specific end user wallet | (optional) defaults to undefined


### Return type

**[GetTransactionsResponse](../models/GetTransactionsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of transactions |  * X-Request-ID -  <br>  * next-page -  <br>  * prev-page -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **rescanTransactionsBeta**
> ValidatedTransactionsForRescanResponse rescanTransactionsBeta(rescanTransactionRequest)

rescan transaction by running an async job. </br> **Note**: - These endpoints are currently in beta and might be subject to changes. - We limit the amount of the transaction to 16 per request. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiRescanTransactionsBetaRequest, ValidatedTransactionsForRescanResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiRescanTransactionsBetaRequest = {
  // RescanTransactionRequest
  rescanTransactionRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.transactions.rescanTransactionsBeta(body).then((res: FireblocksResponse<ValidatedTransactionsForRescanResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rescanTransactionRequest** | **[RescanTransactionRequest](../models/RescanTransactionRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ValidatedTransactionsForRescanResponse](../models/ValidatedTransactionsForRescanResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A array of validated transactions that were sent to rescan |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setConfirmationThresholdByTransactionHash**
> SetConfirmationsThresholdResponse setConfirmationThresholdByTransactionHash()

Overrides the required number of confirmations for transaction completion by transaction hash.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiSetConfirmationThresholdByTransactionHashRequest, SetConfirmationsThresholdResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiSetConfirmationThresholdByTransactionHashRequest = {
  // string | The TxHash
  txHash: txHash_example,
  // SetConfirmationsThresholdRequest (optional)
  setConfirmationsThresholdRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.transactions.setConfirmationThresholdByTransactionHash(body).then((res: FireblocksResponse<SetConfirmationsThresholdResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setConfirmationsThresholdRequest** | **[SetConfirmationsThresholdRequest](../models/SetConfirmationsThresholdRequest.md)**|  |
 **txHash** | [**string**] | The TxHash | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SetConfirmationsThresholdResponse](../models/SetConfirmationsThresholdResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of transactions affected by the change |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setTransactionConfirmationThreshold**
> SetConfirmationsThresholdResponse setTransactionConfirmationThreshold()

Overrides the required number of confirmations for transaction completion by transaction ID.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiSetTransactionConfirmationThresholdRequest, SetConfirmationsThresholdResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiSetTransactionConfirmationThresholdRequest = {
  // string | The ID of the transaction
  txId: txId_example,
  // SetConfirmationsThresholdRequest (optional)
  setConfirmationsThresholdRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.transactions.setTransactionConfirmationThreshold(body).then((res: FireblocksResponse<SetConfirmationsThresholdResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setConfirmationsThresholdRequest** | **[SetConfirmationsThresholdRequest](../models/SetConfirmationsThresholdRequest.md)**|  |
 **txId** | [**string**] | The ID of the transaction | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SetConfirmationsThresholdResponse](../models/SetConfirmationsThresholdResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Set successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **unfreezeTransaction**
> UnfreezeTransactionResponse unfreezeTransaction()

Unfreezes a transaction by ID and makes the transaction available again.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiUnfreezeTransactionRequest, UnfreezeTransactionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiUnfreezeTransactionRequest = {
  // string | The ID of the transaction to unfreeze
  txId: txId_example,
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. (optional)
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.transactions.unfreezeTransaction(body).then((res: FireblocksResponse<UnfreezeTransactionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txId** | [**string**] | The ID of the transaction to unfreeze | defaults to undefined
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[UnfreezeTransactionResponse](../models/UnfreezeTransactionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Unfreeze response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **validateAddress**
> ValidateAddressResponse validateAddress()

Checks if an address is valid (for XRP, DOT, XLM, and EOS).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TransactionsApiValidateAddressRequest, ValidateAddressResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TransactionsApiValidateAddressRequest = {
  // string | The asset of the address
  assetId: assetId_example,
  // string | The address to validate
  address: address_example,
};

fireblocks.transactions.validateAddress(body).then((res: FireblocksResponse<ValidateAddressResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] | The asset of the address | defaults to undefined
 **address** | [**string**] | The address to validate | defaults to undefined


### Return type

**[ValidateAddressResponse](../models/ValidateAddressResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An Transaction object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



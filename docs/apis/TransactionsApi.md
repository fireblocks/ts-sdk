# TransactionsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTransaction**](#cancelTransaction) | **POST** /transactions/{txId}/cancel | Cancel a transaction
[**createTransaction**](#createTransaction) | **POST** /transactions | Create a new transaction
[**dropTransaction**](#dropTransaction) | **POST** /transactions/{txId}/drop | Drop ETH (EVM) transaction by ID
[**estimateNetworkFee**](#estimateNetworkFee) | **GET** /estimate_network_fee | Estimate the required fee for an asset
[**estimateTransactionFee**](#estimateTransactionFee) | **POST** /transactions/estimate_fee | Estimate transaction fee
[**freezeTransaction**](#freezeTransaction) | **POST** /transactions/{txId}/freeze | Freeze a transaction
[**getTransaction**](#getTransaction) | **GET** /transactions/{txId} | Get a specific transaction by Fireblocks transaction ID
[**getTransactionByExternalId**](#getTransactionByExternalId) | **GET** /transactions/external_tx_id/{externalTxId} | Get a specific transaction by external transaction ID
[**getTransactions**](#getTransactions) | **GET** /transactions | Get transaction history
[**setConfirmationThresholdByTransactionHash**](#setConfirmationThresholdByTransactionHash) | **POST** /txHash/{txHash}/set_confirmation_threshold | Set confirmation threshold by transaction hash
[**setTransactionConfirmationThreshold**](#setTransactionConfirmationThreshold) | **POST** /transactions/{txId}/set_confirmation_threshold | Set confirmation threshold by Fireblocks Transaction ID
[**unfreezeTransaction**](#unfreezeTransaction) | **POST** /transactions/{txId}/unfreeze | Unfreeze a transaction
[**validateAddress**](#validateAddress) | **GET** /transactions/validate_address/{assetId}/{address} | Validate destination address


# **cancelTransaction**
> CancelTransactionResponse cancelTransaction()

Cancels a transaction by Fireblocks Transaction ID.  Can be used only for transactions that did not get to the BROADCASTING state. </br>Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

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

Creates a new transaction. This endpoint can be used for regular Transfers, Contract Calls, Raw & Typed message signing. - For Transfers, the required parameters are: `assetId`, `source`, `destination` and `amount`. - For Contract Calls, the required parameters are: `operation.CONTRACT_CALL`, `assetId` (Base Asset), `source`,

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

Drops a stuck ETH (EVM) transaction and creates a replacement transaction with 0 amount. </br>Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

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

Gets the estimated required fee for an asset. Fireblocks fetches, calculates and caches the result every 30 seconds. Customers should query this API while taking the caching interval into consideration. Notes: - The `networkFee` parameter is the `gasPrice` with a given delta added, multiplied by the gasLimit plus the delta. - The estimation provided depends on the asset type.     - For UTXO-based assets, the response contains the `feePerByte` parameter     - For ETH-based and all EVM based assets, the response will contain `gasPrice` parameter. This is calculated by adding the `baseFee` to the `actualPriority` based on the latest 12 blocks. The response for ETH-based  contains the `baseFee`, `gasPrice`, and `priorityFee` parameters.     - For ADA-based assets, the response will contain the parameter `networkFee` and `feePerByte` parameters.     - For XRP and XLM, the response will contain the transaction fee.     - For other assets, the response will contain the `networkFee` parameter.  Learn more about Fireblocks Fee Management in the following [guide](https://developers.fireblocks.com/reference/estimate-transaction-fee). </br>Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

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

Estimates the transaction fee for a specific transaction request. This endpoint simulates a transaction which means that the system will expect to have the requested asset and balance in the specified wallet.   **Note**: Supports all Fireblocks assets except ZCash (ZEC). Learn more about Fireblocks Fee Management in the following [guide](https://developers.fireblocks.com/reference/estimate-transaction-fee). </br>Endpoint Permission: Admin, Signer, Approver, Editor.

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

Freezes a transaction by ID.  Usually used for AML integrations when the incoming funds should be quarantined. For account based assets - the entire amount of the transaction is frozen  For UTXO based assets - all UTXOs of the specified transaction are frozen </br>Endpoint Permission: Admin, Non-Signing Admin.

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

Get a specific transaction data by Fireblocks Transaction ID </br>Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.

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

Returns transaction by external transaction ID. </br>Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.

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

Get the transaction history for your workspace.  **Endpoint Permissions:** Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer. 

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
  // string | Cursor returned in next-page header that can be used to fetch the next page of results (optional)
  next: next_example,
  // string | Cursor returned in prev-page header that can be used to fetch the previous page of results (optional)
  prev: prev_example,
  // string | Unix timestamp in milliseconds. Returns only transactions created before the specified date. Provides an explicit end time. If not provided, default value will be applied, and may change over time.  The current default value is the past 90 days.  (optional)
  before: before_example,
  // string | Unix timestamp in milliseconds. Returns only transactions created after the specified date. Provides an explicit start time. If not provided, default value will be applied, and may change over time.  The current default value is the past 90 days.  (optional)
  after: after_example,
  // string | You can filter by one of the statuses. (optional)
  status: status_example,
  // 'createdAt' | 'lastUpdated' | The field to order the results by.  **Note:** Ordering by a field that is not `createdAt` may result in transactions that receive updates as you request the next or previous pages of results, resulting in missing those transactions.  (optional)
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
 **next** | [**string**] | Cursor returned in next-page header that can be used to fetch the next page of results | (optional) defaults to undefined
 **prev** | [**string**] | Cursor returned in prev-page header that can be used to fetch the previous page of results | (optional) defaults to undefined
 **before** | [**string**] | Unix timestamp in milliseconds. Returns only transactions created before the specified date. Provides an explicit end time. If not provided, default value will be applied, and may change over time.  The current default value is the past 90 days.  | (optional) defaults to undefined
 **after** | [**string**] | Unix timestamp in milliseconds. Returns only transactions created after the specified date. Provides an explicit start time. If not provided, default value will be applied, and may change over time.  The current default value is the past 90 days.  | (optional) defaults to undefined
 **status** | [**string**] | You can filter by one of the statuses. | (optional) defaults to undefined
 **orderBy** | [**&#39;createdAt&#39; | &#39;lastUpdated&#39;**]**Array<&#39;createdAt&#39; &#124; &#39;lastUpdated&#39;>** | The field to order the results by.  **Note:** Ordering by a field that is not &#x60;createdAt&#x60; may result in transactions that receive updates as you request the next or previous pages of results, resulting in missing those transactions.  | (optional) defaults to undefined
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

# **setConfirmationThresholdByTransactionHash**
> SetConfirmationsThresholdResponse setConfirmationThresholdByTransactionHash()

Overrides the required number of confirmations for transaction completion by transaction hash. </br>Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

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

Overrides the required number of confirmations for transaction completion Fireblocks Transaction ID. </br>Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

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

Unfreezes a transaction by Fireblocks Transaction ID and makes the transaction available again. </br>Endpoint Permission: Admin, Non-Signing Admin.

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

Checks if an address is valid and active (for XRP, DOT, XLM, and EOS). </br>Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

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



# OnchainDataApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccessRegistryCurrentState**](#getAccessRegistryCurrentState) | **GET** /onchain_data/base_asset_id/{baseAssetId}/access_registry_address/{accessRegistryAddress}/list | Get the current state of addresses in an access registry
[**getAccessRegistrySummary**](#getAccessRegistrySummary) | **GET** /onchain_data/base_asset_id/{baseAssetId}/access_registry_address/{accessRegistryAddress}/summary | Summary of access registry state
[**getActiveRolesForContract**](#getActiveRolesForContract) | **GET** /onchain_data/base_asset_id/{baseAssetId}/contract_address/{contractAddress}/roles | List of active roles for a given contract address and base asset ID
[**getContractBalanceHistory**](#getContractBalanceHistory) | **GET** /onchain_data/base_asset_id/{baseAssetId}/contract_address/{contractAddress}/account_address/{accountAddress}/balance_history | Get historical balance data for a specific account in a contract
[**getContractBalancesSummary**](#getContractBalancesSummary) | **GET** /onchain_data/base_asset_id/{baseAssetId}/contract_address/{contractAddress}/summary | Get summary for the token contract
[**getContractTotalSupply**](#getContractTotalSupply) | **GET** /onchain_data/base_asset_id/{baseAssetId}/contract_address/{contractAddress}/total_supply | Get historical total supply data for a contract
[**getLatestBalancesForContract**](#getLatestBalancesForContract) | **GET** /onchain_data/base_asset_id/{baseAssetId}/contract_address/{contractAddress}/balances | Get latest balances for all addresses holding tokens from a contract
[**getOnchainTransactions**](#getOnchainTransactions) | **GET** /onchain_data/base_asset_id/{baseAssetId}/contract_address/{contractAddress}/transactions | Fetch onchain transactions for a contract


# **getAccessRegistryCurrentState**
> AccessRegistryCurrentStateResponse getAccessRegistryCurrentState()

Returns the current state of addresses in the specified access registry. Only addresses that are currently active (added but not removed) are included.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, OnchainDataApiGetAccessRegistryCurrentStateRequest, AccessRegistryCurrentStateResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: OnchainDataApiGetAccessRegistryCurrentStateRequest = {
  // string | The blockchain base assetId
  baseAssetId: ETH_TEST3,
  // string | The access registry address
  accessRegistryAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
  // string | Page cursor to get the next page\" (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page (max 100), requesting more then 100 will return 100 items (optional)
  pageSize: 10,
  // 'dateAdded' | 'address' | Sorting field (enum). (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: order_example,
};

fireblocks.onchainData.getAccessRegistryCurrentState(body).then((res: FireblocksResponse<AccessRegistryCurrentStateResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseAssetId** | [**string**] | The blockchain base assetId | defaults to undefined
 **accessRegistryAddress** | [**string**] | The access registry address | defaults to undefined
 **pageCursor** | [**string**] | Page cursor to get the next page\&quot; | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page (max 100), requesting more then 100 will return 100 items | (optional) defaults to undefined
 **sortBy** | [**&#39;dateAdded&#39; | &#39;address&#39;**]**Array<&#39;dateAdded&#39; &#124; &#39;address&#39;>** | Sorting field (enum). | (optional) defaults to 'dateAdded'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'


### Return type

**[AccessRegistryCurrentStateResponse](../models/AccessRegistryCurrentStateResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Access registry current state retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAccessRegistrySummary**
> AccessRegistrySummaryResponse getAccessRegistrySummary()

Returns a summary of the current state of the access registry for the specified baseAssetId and accessRegistryAddress.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, OnchainDataApiGetAccessRegistrySummaryRequest, AccessRegistrySummaryResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: OnchainDataApiGetAccessRegistrySummaryRequest = {
  // string | The blockchain base assetId
  baseAssetId: ETH_TEST3,
  // string | The access registry address
  accessRegistryAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
};

fireblocks.onchainData.getAccessRegistrySummary(body).then((res: FireblocksResponse<AccessRegistrySummaryResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseAssetId** | [**string**] | The blockchain base assetId | defaults to undefined
 **accessRegistryAddress** | [**string**] | The access registry address | defaults to undefined


### Return type

**[AccessRegistrySummaryResponse](../models/AccessRegistrySummaryResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the summary of the access registry state |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getActiveRolesForContract**
> ActiveRolesResponse getActiveRolesForContract()

Returns a list of currently active roles for the specified baseAssetId and contractAddress.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, OnchainDataApiGetActiveRolesForContractRequest, ActiveRolesResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: OnchainDataApiGetActiveRolesForContractRequest = {
  // string | The blockchain base assetId
  baseAssetId: ETH_TEST3,
  // string | The contract address
  contractAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
};

fireblocks.onchainData.getActiveRolesForContract(body).then((res: FireblocksResponse<ActiveRolesResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseAssetId** | [**string**] | The blockchain base assetId | defaults to undefined
 **contractAddress** | [**string**] | The contract address | defaults to undefined


### Return type

**[ActiveRolesResponse](../models/ActiveRolesResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of active roles |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getContractBalanceHistory**
> BalanceHistoryPagedResponse getContractBalanceHistory()

Returns the paginated balance history of the specified account in a contract with optional date range and interval filtering.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, OnchainDataApiGetContractBalanceHistoryRequest, BalanceHistoryPagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: OnchainDataApiGetContractBalanceHistoryRequest = {
  // string | The blockchain base assetId
  baseAssetId: ETH_TEST3,
  // string | The contract address
  contractAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
  // string | The account address to get balance history for
  accountAddress: 0x1234567890abcdef1234567890abcdef12345678,
  // string | Start date of the time range in ISO 8601 format (optional)
  startDate: 2025-01-16T15:45:00Z,
  // string | End date of the time range in ISO 8601 format (optional)
  endDate: 2025-01-16T15:45:00Z,
  // 'hour' | 'day' | 'week' | 'month' | Time interval for grouping data (optional)
  interval: day,
  // string | Page cursor to get the next page\" (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page (max 100), requesting more then 100 will return 100 items (optional)
  pageSize: 10,
  // 'blockTimestamp' | Sorting field (enum). Sorting only supported by \'blockTimestamp\' (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: order_example,
};

fireblocks.onchainData.getContractBalanceHistory(body).then((res: FireblocksResponse<BalanceHistoryPagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseAssetId** | [**string**] | The blockchain base assetId | defaults to undefined
 **contractAddress** | [**string**] | The contract address | defaults to undefined
 **accountAddress** | [**string**] | The account address to get balance history for | defaults to undefined
 **startDate** | [**string**] | Start date of the time range in ISO 8601 format | (optional) defaults to undefined
 **endDate** | [**string**] | End date of the time range in ISO 8601 format | (optional) defaults to undefined
 **interval** | [**&#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39;**]**Array<&#39;hour&#39; &#124; &#39;day&#39; &#124; &#39;week&#39; &#124; &#39;month&#39;>** | Time interval for grouping data | (optional) defaults to 'day'
 **pageCursor** | [**string**] | Page cursor to get the next page\&quot; | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page (max 100), requesting more then 100 will return 100 items | (optional) defaults to undefined
 **sortBy** | [**&#39;blockTimestamp&#39;**]**Array<&#39;blockTimestamp&#39;>** | Sorting field (enum). Sorting only supported by \&#39;blockTimestamp\&#39; | (optional) defaults to 'blockTimestamp'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'


### Return type

**[BalanceHistoryPagedResponse](../models/BalanceHistoryPagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the contract balance history |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getContractBalancesSummary**
> TokenContractSummaryResponse getContractBalancesSummary()

Returns the total number of unique addresses holding balances and the total supply for the specified contract.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, OnchainDataApiGetContractBalancesSummaryRequest, TokenContractSummaryResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: OnchainDataApiGetContractBalancesSummaryRequest = {
  // string | The blockchain base assetId
  baseAssetId: ETH_TEST3,
  // string | The contract address
  contractAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
};

fireblocks.onchainData.getContractBalancesSummary(body).then((res: FireblocksResponse<TokenContractSummaryResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseAssetId** | [**string**] | The blockchain base assetId | defaults to undefined
 **contractAddress** | [**string**] | The contract address | defaults to undefined


### Return type

**[TokenContractSummaryResponse](../models/TokenContractSummaryResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the summary for the token contract |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getContractTotalSupply**
> TotalSupplyPagedResponse getContractTotalSupply()

Returns the paginated total supply history of the specified contract with optional date range and interval filtering.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, OnchainDataApiGetContractTotalSupplyRequest, TotalSupplyPagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: OnchainDataApiGetContractTotalSupplyRequest = {
  // string | The blockchain base assetId
  baseAssetId: ETH_TEST3,
  // string | The contract address
  contractAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
  // string | Start date of the time range in ISO 8601 format (optional)
  startDate: 2025-01-16T15:45:00Z,
  // string | End date of the time range in ISO 8601 format (optional)
  endDate: 2025-01-16T15:45:00Z,
  // 'hour' | 'day' | 'week' | 'month' | Time interval for grouping data (optional)
  interval: day,
  // string | Page cursor to get the next page\" (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page (max 100), requesting more then 100 will return 100 items (optional)
  pageSize: 10,
  // 'blockTimestamp' | Sorting field (enum). Sorting only supported by \'blockTimestamp\' (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: order_example,
};

fireblocks.onchainData.getContractTotalSupply(body).then((res: FireblocksResponse<TotalSupplyPagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseAssetId** | [**string**] | The blockchain base assetId | defaults to undefined
 **contractAddress** | [**string**] | The contract address | defaults to undefined
 **startDate** | [**string**] | Start date of the time range in ISO 8601 format | (optional) defaults to undefined
 **endDate** | [**string**] | End date of the time range in ISO 8601 format | (optional) defaults to undefined
 **interval** | [**&#39;hour&#39; | &#39;day&#39; | &#39;week&#39; | &#39;month&#39;**]**Array<&#39;hour&#39; &#124; &#39;day&#39; &#124; &#39;week&#39; &#124; &#39;month&#39;>** | Time interval for grouping data | (optional) defaults to 'day'
 **pageCursor** | [**string**] | Page cursor to get the next page\&quot; | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page (max 100), requesting more then 100 will return 100 items | (optional) defaults to undefined
 **sortBy** | [**&#39;blockTimestamp&#39;**]**Array<&#39;blockTimestamp&#39;>** | Sorting field (enum). Sorting only supported by \&#39;blockTimestamp\&#39; | (optional) defaults to 'blockTimestamp'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'


### Return type

**[TotalSupplyPagedResponse](../models/TotalSupplyPagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the contract total supply history |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getLatestBalancesForContract**
> AddressBalancePagedResponse getLatestBalancesForContract()

Returns the latest balance for each unique address with support for numeric balance sorting. The `prev` cursor is reserved for future support.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, OnchainDataApiGetLatestBalancesForContractRequest, AddressBalancePagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: OnchainDataApiGetLatestBalancesForContractRequest = {
  // string | The blockchain base assetId
  baseAssetId: ETH_TEST3,
  // string | The contract address
  contractAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
  // string | Optional filter to get balance for a specific account address (optional)
  accountAddress: 0x1234567890abcdef1234567890abcdef12345678,
  // string | Page cursor to get the next page\" (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page (max 100), requesting more then 100 will return 100 items (optional)
  pageSize: 10,
  // 'accountAddress' | 'blockTimestamp' | Sorting field for balances (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: order_example,
};

fireblocks.onchainData.getLatestBalancesForContract(body).then((res: FireblocksResponse<AddressBalancePagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseAssetId** | [**string**] | The blockchain base assetId | defaults to undefined
 **contractAddress** | [**string**] | The contract address | defaults to undefined
 **accountAddress** | [**string**] | Optional filter to get balance for a specific account address | (optional) defaults to undefined
 **pageCursor** | [**string**] | Page cursor to get the next page\&quot; | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page (max 100), requesting more then 100 will return 100 items | (optional) defaults to undefined
 **sortBy** | [**&#39;accountAddress&#39; | &#39;blockTimestamp&#39;**]**Array<&#39;accountAddress&#39; &#124; &#39;blockTimestamp&#39;>** | Sorting field for balances | (optional) defaults to 'blockTimestamp'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'


### Return type

**[AddressBalancePagedResponse](../models/AddressBalancePagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the latest balances for the contract |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getOnchainTransactions**
> OnchainTransactionsPagedResponse getOnchainTransactions()

Returns a paginated list of onchain transactions for the specified contract address and base asset ID, optionally filtered by date range.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, OnchainDataApiGetOnchainTransactionsRequest, OnchainTransactionsPagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: OnchainDataApiGetOnchainTransactionsRequest = {
  // string | The blockchain base assetId
  baseAssetId: ETH_TEST3,
  // string | The contract address
  contractAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
  // string | Start date of the time range in ISO 8601 format (optional)
  startDate: 2025-01-16T15:45:00Z,
  // string | End date of the time range in ISO 8601 format (optional)
  endDate: 2025-01-16T15:45:00Z,
  // string | Page cursor to get the next page\" (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page (max 100), requesting more then 100 will return 100 items (optional)
  pageSize: 10,
  // 'blockTimestamp' | 'blockNumber' | 'transactionHash' | Sorting field (enum). (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: order_example,
};

fireblocks.onchainData.getOnchainTransactions(body).then((res: FireblocksResponse<OnchainTransactionsPagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseAssetId** | [**string**] | The blockchain base assetId | defaults to undefined
 **contractAddress** | [**string**] | The contract address | defaults to undefined
 **startDate** | [**string**] | Start date of the time range in ISO 8601 format | (optional) defaults to undefined
 **endDate** | [**string**] | End date of the time range in ISO 8601 format | (optional) defaults to undefined
 **pageCursor** | [**string**] | Page cursor to get the next page\&quot; | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page (max 100), requesting more then 100 will return 100 items | (optional) defaults to undefined
 **sortBy** | [**&#39;blockTimestamp&#39; | &#39;blockNumber&#39; | &#39;transactionHash&#39;**]**Array<&#39;blockTimestamp&#39; &#124; &#39;blockNumber&#39; &#124; &#39;transactionHash&#39;>** | Sorting field (enum). | (optional) defaults to 'blockTimestamp'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'


### Return type

**[OnchainTransactionsPagedResponse](../models/OnchainTransactionsPagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Onchain transactions fetched successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



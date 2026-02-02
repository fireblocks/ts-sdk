# StakingApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveTermsOfServiceByProviderId**](#approveTermsOfServiceByProviderId) | **POST** /staking/providers/{providerId}/approveTermsOfService | Approve provider terms of service
[**claimRewards**](#claimRewards) | **POST** /staking/chains/{chainDescriptor}/claim_rewards | Claim accrued rewards
[**getAllDelegations**](#getAllDelegations) | **GET** /staking/positions | List staking positions
[**getChainInfo**](#getChainInfo) | **GET** /staking/chains/{chainDescriptor}/chainInfo | Get chain-level staking parameters
[**getChains**](#getChains) | **GET** /staking/chains | List supported staking chains
[**getDelegationById**](#getDelegationById) | **GET** /staking/positions/{id} | Get position details
[**getProviders**](#getProviders) | **GET** /staking/providers | List staking providers
[**getSummary**](#getSummary) | **GET** /staking/positions/summary | Get positions summary
[**getSummaryByVault**](#getSummaryByVault) | **GET** /staking/positions/summary/vaults | Get positions summary by vault
[**mergeStakeAccounts**](#mergeStakeAccounts) | **POST** /staking/chains/{chainDescriptor}/merge | Merge staking positions
[**split**](#split) | **POST** /staking/chains/{chainDescriptor}/split | Split a staking position
[**stake**](#stake) | **POST** /staking/chains/{chainDescriptor}/stake | Initiate or add to existing stake
[**unstake**](#unstake) | **POST** /staking/chains/{chainDescriptor}/unstake | Initiate unstake
[**withdraw**](#withdraw) | **POST** /staking/chains/{chainDescriptor}/withdraw | Withdraw staked funds


# **approveTermsOfServiceByProviderId**
> approveTermsOfServiceByProviderId()

Approves the provider\'s terms of service. Must be called once before performing any staking operation with this provider.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingApiApproveTermsOfServiceByProviderIdRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingApiApproveTermsOfServiceByProviderIdRequest = {
  // StakingProvider | Unique identifier of the staking provider.
  providerId: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.staking.approveTermsOfServiceByProviderId(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **StakingProvider** | Unique identifier of the staking provider. | defaults to undefined
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
**201** | Terms of service accepted. |  * X-Request-ID -  <br>  |
**400** | Bad request: missing/invalid fields, unsupported amount, or malformed payload. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **claimRewards**
> claimRewards(claimRewardsRequest, )

Claims available staking rewards for the specified chain and vault. Supported chains: Solana and Polygon (Matic). Behavior depends on protocol reward distribution.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingApiClaimRewardsRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingApiClaimRewardsRequest = {
  // ClaimRewardsRequest
  claimRewardsRequest: param_value,
  // 'SOL' | 'SOL_TEST' | 'MATIC' | Protocol identifier for the claim rewards staking operation (e.g., MATIC/SOL).
  chainDescriptor: SOL,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.staking.claimRewards(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **claimRewardsRequest** | **[ClaimRewardsRequest](../models/ClaimRewardsRequest.md)**|  |
 **chainDescriptor** | [**&#39;SOL&#39; | &#39;SOL_TEST&#39; | &#39;MATIC&#39;**]**Array<&#39;SOL&#39; &#124; &#39;SOL_TEST&#39; &#124; &#39;MATIC&#39;>** | Protocol identifier for the claim rewards staking operation (e.g., MATIC/SOL). | defaults to undefined
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
**201** | Claim-rewards request accepted and created. |  * X-Request-ID -  <br>  |
**400** | Bad request: missing/invalid fields, unsupported amount, or malformed payload. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAllDelegations**
> StakingGetAllDelegationsResponse getAllDelegations()

Returns all staking positions with core details: amounts, rewards, status, chain, and vault. </br>Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingApiGetAllDelegationsRequest, StakingGetAllDelegationsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingApiGetAllDelegationsRequest = {
  // ChainDescriptor | Protocol identifier to filter positions (e.g., ATOM_COS/AXL/CELESTIA}). If omitted, positions across all supported chains are returned. (optional)
  chainDescriptor: param_value,
};

fireblocks.staking.getAllDelegations(body).then((res: FireblocksResponse<StakingGetAllDelegationsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainDescriptor** | **ChainDescriptor** | Protocol identifier to filter positions (e.g., ATOM_COS/AXL/CELESTIA}). If omitted, positions across all supported chains are returned. | (optional) defaults to undefined


### Return type

**[StakingGetAllDelegationsResponse](../models/StakingGetAllDelegationsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Positions retrieved successfully. |  * X-Request-ID -  <br>  |
**400** | Bad request: missing/invalid fields, unsupported amount, or malformed payload. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getChainInfo**
> ChainInfoResponse getChainInfo()

Returns chain-specific staking information such as epoch/slot cadence, lockup or unbonding periods, fee/reward mechanics, and other operational constraints.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingApiGetChainInfoRequest, ChainInfoResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingApiGetChainInfoRequest = {
  // ChainDescriptor | Protocol identifier for the chain info staking operation (e.g., ETH/MATIC/SOL).
  chainDescriptor: param_value,
};

fireblocks.staking.getChainInfo(body).then((res: FireblocksResponse<ChainInfoResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainDescriptor** | **ChainDescriptor** | Protocol identifier for the chain info staking operation (e.g., ETH/MATIC/SOL). | defaults to undefined


### Return type

**[ChainInfoResponse](../models/ChainInfoResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Chain-specific staking information returned successfully. |  * X-Request-ID -  <br>  |
**400** | Bad request: missing/invalid fields, unsupported amount, or malformed payload. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getChains**
> StakingGetChainsResponse getChains()

Returns an alphabetical list of blockchains supported for staking by the current workspace context. </br>Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingGetChainsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.staking.getChains(body).then((res: FireblocksResponse<StakingGetChainsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[StakingGetChainsResponse](../models/StakingGetChainsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of supported chains was returned successfully. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDelegationById**
> Delegation getDelegationById()

Returns full details for a single staking position: amounts, rewards, status, chain, and vault.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingApiGetDelegationByIdRequest, Delegation } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingApiGetDelegationByIdRequest = {
  // string | Unique identifier of the staking position.
  id: id_example,
};

fireblocks.staking.getDelegationById(body).then((res: FireblocksResponse<Delegation>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | Unique identifier of the staking position. | defaults to undefined


### Return type

**[Delegation](../models/Delegation.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Position retrieved successfully. |  * X-Request-ID -  <br>  |
**400** | Bad request: missing/invalid fields, unsupported amount, or malformed payload. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getProviders**
> StakingGetProvidersResponse getProviders()

Returns all available staking providers with metadata such as name, ID, and supported chains. </br>Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingGetProvidersResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.staking.getProviders(body).then((res: FireblocksResponse<StakingGetProvidersResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[StakingGetProvidersResponse](../models/StakingGetProvidersResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Supported providers retrieved successfully. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSummary**
> DelegationSummary getSummary()

Returns an aggregated cross-vault summary: active/inactive counts, total staked, and total rewards per chain.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, DelegationSummary } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.staking.getSummary(body).then((res: FireblocksResponse<DelegationSummary>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[DelegationSummary](../models/DelegationSummary.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Summary across all vaults returned successfully. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSummaryByVault**
> StakingGetSummaryByVaultResponse getSummaryByVault()

Returns per-vault aggregates: status breakdown, total staked, and total rewards per chain.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingGetSummaryByVaultResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.staking.getSummaryByVault(body).then((res: FireblocksResponse<StakingGetSummaryByVaultResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[StakingGetSummaryByVaultResponse](../models/StakingGetSummaryByVaultResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Per-vault summary returned successfully. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **mergeStakeAccounts**
> MergeStakeAccountsResponse mergeStakeAccounts(mergeStakeAccountsRequest, )

Merges the source stake account into the destination, consolidating the balance into the destination and closing the source account once complete. Both accounts must be from the same validator provider and of same vault account.. Supported chains: Solana (SOL). </br>Endpoint Permission: Owner, Admin, Non-Signing Admin, Signer, Approver, Editor.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingApiMergeStakeAccountsRequest, MergeStakeAccountsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingApiMergeStakeAccountsRequest = {
  // MergeStakeAccountsRequest
  mergeStakeAccountsRequest: param_value,
  // 'SOL' | 'SOL_TEST' | Protocol identifier for the merge staking operation (e.g., SOL).
  chainDescriptor: SOL,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.staking.mergeStakeAccounts(body).then((res: FireblocksResponse<MergeStakeAccountsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mergeStakeAccountsRequest** | **[MergeStakeAccountsRequest](../models/MergeStakeAccountsRequest.md)**|  |
 **chainDescriptor** | [**&#39;SOL&#39; | &#39;SOL_TEST&#39;**]**Array<&#39;SOL&#39; &#124; &#39;SOL_TEST&#39;>** | Protocol identifier for the merge staking operation (e.g., SOL). | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[MergeStakeAccountsResponse](../models/MergeStakeAccountsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Merge request accepted and created. |  * X-Request-ID -  <br>  |
**400** | Bad request: missing/invalid fields, unsupported amount, or malformed payload. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **split**
> SplitResponse split(splitRequest, )

Splits a staking position by creating a new stake account with the requested amount, while keeping the original account with the remaining balance. Supported chains: Solana (SOL).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingApiSplitRequest, SplitResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingApiSplitRequest = {
  // SplitRequest
  splitRequest: param_value,
  // 'SOL' | 'SOL_TEST' | Protocol identifier for the staking operation (e.g., SOL).
  chainDescriptor: SOL,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.staking.split(body).then((res: FireblocksResponse<SplitResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **splitRequest** | **[SplitRequest](../models/SplitRequest.md)**|  |
 **chainDescriptor** | [**&#39;SOL&#39; | &#39;SOL_TEST&#39;**]**Array<&#39;SOL&#39; &#124; &#39;SOL_TEST&#39;>** | Protocol identifier for the staking operation (e.g., SOL). | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SplitResponse](../models/SplitResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Split request accepted and created. |  * X-Request-ID -  <br>  |
**400** | Bad request: missing/invalid fields, unsupported amount, or malformed payload. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **stake**
> StakeResponse stake(stakeRequest, )

Creates a new staking position and returns its unique ID. For Ethereum compounding validator (EIP-7251): when the \'id\' of an existing compounding validator position is provided, adds to that position; otherwise creates a new position. For Ethereum legacy validator: creates a new position regardless of existing delegations. For Cosmos chains and Ethereum liquid staking (Lido): automatically add to existing positions for the same validator provider and same vault account if one exists, otherwise create a new position. For Solana and Polygon: always create new positions regardless of existing delegations.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingApiStakeRequest, StakeResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingApiStakeRequest = {
  // StakeRequest
  stakeRequest: param_value,
  // ChainDescriptor | Protocol identifier for the stake staking operation (e.g., ATOM_COS/AXL/CELESTIA).
  chainDescriptor: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.staking.stake(body).then((res: FireblocksResponse<StakeResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stakeRequest** | **[StakeRequest](../models/StakeRequest.md)**|  |
 **chainDescriptor** | **ChainDescriptor** | Protocol identifier for the stake staking operation (e.g., ATOM_COS/AXL/CELESTIA). | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[StakeResponse](../models/StakeResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Stake request accepted and created. |  * X-Request-ID -  <br>  |
**400** | Bad request: missing/invalid fields, unsupported amount, or malformed payload. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **unstake**
> unstake(unstakeRequest, )

Submits a chain-specific unstake request.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingApiUnstakeRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingApiUnstakeRequest = {
  // UnstakeRequest
  unstakeRequest: param_value,
  // ChainDescriptor | Protocol identifier for the unstake staking operation (e.g., SOL/SOL_TEST/MATIC).
  chainDescriptor: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.staking.unstake(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unstakeRequest** | **[UnstakeRequest](../models/UnstakeRequest.md)**|  |
 **chainDescriptor** | **ChainDescriptor** | Protocol identifier for the unstake staking operation (e.g., SOL/SOL_TEST/MATIC). | defaults to undefined
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
**201** | Unstake request accepted and created. |  * X-Request-ID -  <br>  |
**400** | Bad request: missing/invalid fields, unsupported amount, or malformed payload. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **withdraw**
> withdraw(withdrawRequest, )

Withdraws funds that have completed the unbonding period. Typically requires the position to be deactivated first (unstake → unbond → withdraw). Amount and timing vary by chain protocol.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingApiWithdrawRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingApiWithdrawRequest = {
  // WithdrawRequest
  withdrawRequest: param_value,
  // ChainDescriptor | Protocol identifier for the withdraw staking operation (e.g., ATOM_COS/ETH/STETH_ETH).
  chainDescriptor: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.staking.withdraw(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **withdrawRequest** | **[WithdrawRequest](../models/WithdrawRequest.md)**|  |
 **chainDescriptor** | **ChainDescriptor** | Protocol identifier for the withdraw staking operation (e.g., ATOM_COS/ETH/STETH_ETH). | defaults to undefined
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
**201** | Withdraw request accepted and created. |  * X-Request-ID -  <br>  |
**400** | Bad request: missing/invalid fields, unsupported amount, or malformed payload. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted provider/validator. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., position, validator, provider, or wallet). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



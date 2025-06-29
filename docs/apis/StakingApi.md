# StakingApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveTermsOfServiceByProviderId**](#approveTermsOfServiceByProviderId) | **POST** /staking/providers/{providerId}/approveTermsOfService | Approve staking terms of service
[**claimRewards**](#claimRewards) | **POST** /staking/chains/{chainDescriptor}/claim_rewards | Execute a Claim Rewards operation
[**getAllDelegations**](#getAllDelegations) | **GET** /staking/positions | List staking positions details
[**getChainInfo**](#getChainInfo) | **GET** /staking/chains/{chainDescriptor}/chainInfo | Get chain-specific staking summary
[**getChains**](#getChains) | **GET** /staking/chains | List staking supported chains
[**getDelegationById**](#getDelegationById) | **GET** /staking/positions/{id} | Get staking position details
[**getProviders**](#getProviders) | **GET** /staking/providers | List staking providers details
[**getSummary**](#getSummary) | **GET** /staking/positions/summary | Get staking summary details
[**getSummaryByVault**](#getSummaryByVault) | **GET** /staking/positions/summary/vaults | Get staking summary details by vault
[**mergeStakeAccounts**](#mergeStakeAccounts) | **POST** /staking/chains/{chainDescriptor}/merge | Merge Solana on stake accounts
[**split**](#split) | **POST** /staking/chains/{chainDescriptor}/split | Execute a Split operation on SOL/SOL_TEST stake account
[**stake**](#stake) | **POST** /staking/chains/{chainDescriptor}/stake | Initiate Stake Operation
[**unstake**](#unstake) | **POST** /staking/chains/{chainDescriptor}/unstake | Execute an Unstake operation
[**withdraw**](#withdraw) | **POST** /staking/chains/{chainDescriptor}/withdraw | Execute a Withdraw operation


# **approveTermsOfServiceByProviderId**
> approveTermsOfServiceByProviderId()

Approve the terms of service of the staking provider. This must be called before performing a staking action for the first time with this provider.

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
  // StakingProvider | The unique identifier of the staking provider
  providerId: kiln,
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
 **providerId** | **StakingProvider** | The unique identifier of the staking provider | defaults to undefined
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
**201** | The terms of service have been successfully approved and is associated with 201 status code. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **claimRewards**
> claimRewards(claimRewardsRequest, )

Perform a chain-specific Claim Rewards.

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
  // 'MATIC' | 'SOL' | 'SOL_TEST' | The protocol identifier (e.g. \"MATIC\"/\"SOL\") to use
  chainDescriptor: MATIC,
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
 **chainDescriptor** | [**&#39;MATIC&#39; | &#39;SOL&#39; | &#39;SOL_TEST&#39;**]**Array<&#39;MATIC&#39; &#124; &#39;SOL&#39; &#124; &#39;SOL_TEST&#39;>** | The protocol identifier (e.g. \&quot;MATIC\&quot;/\&quot;SOL\&quot;) to use | defaults to undefined
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
**201** | Claim Rewards action has been executed successfully on vault and is associated with 201 status code. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAllDelegations**
> StakingGetAllDelegationsResponse getAllDelegations()

Return detailed information on all staking positions, including the staked amount, rewards, status and more.

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
  // ChainDescriptor | Use \"ETH\" / \"SOL\" / \"MATIC\" / \"STETH_ETH\" in order to obtain information related to the specific blockchain network or retrieve information about all chains that have data available by providing no argument. (optional)
  chainDescriptor: SOL,
};

fireblocks.staking.getAllDelegations(body).then((res: FireblocksResponse<StakingGetAllDelegationsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainDescriptor** | **ChainDescriptor** | Use \&quot;ETH\&quot; / \&quot;SOL\&quot; / \&quot;MATIC\&quot; / \&quot;STETH_ETH\&quot; in order to obtain information related to the specific blockchain network or retrieve information about all chains that have data available by providing no argument. | (optional) defaults to undefined


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
**200** | An array of position data was returned successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getChainInfo**
> ChainInfoResponse getChainInfo()

Return chain-specific, staking-related information summary (e.g. epoch details, lockup durations, estimated rewards, etc.)

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
  // ChainDescriptor | The protocol identifier (e.g. \"ETH\"/\"SOL\"/\"MATIC\"/\"STETH_ETH\") to use
  chainDescriptor: SOL,
};

fireblocks.staking.getChainInfo(body).then((res: FireblocksResponse<ChainInfoResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainDescriptor** | **ChainDescriptor** | The protocol identifier (e.g. \&quot;ETH\&quot;/\&quot;SOL\&quot;/\&quot;MATIC\&quot;/\&quot;STETH_ETH\&quot;) to use | defaults to undefined


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
**200** | Chain specific info summary was returned successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getChains**
> StakingGetChainsResponse getChains()

Return an alphabetical list of supported chains.

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
**200** | An array of supported chains was returned successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDelegationById**
> Delegation getDelegationById()

Return detailed information on a staking position, including the staked amount, rewards, status and more.

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
  // string | The unique identifier of the staking position
  id: 1fe3b61f-7e1f-4a19-aff0-4f0a524d44d7,
};

fireblocks.staking.getDelegationById(body).then((res: FireblocksResponse<Delegation>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The unique identifier of the staking position | defaults to undefined


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
**200** | Position data was returned successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getProviders**
> StakingGetProvidersResponse getProviders()

Return information on all the available staking providers.

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
**200** | An array of supported providers was returned successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSummary**
> DelegationSummary getSummary()

Return a summary of all vaults, categorized by their status (active, inactive), the total amounts staked and total rewards per-chain.

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
**200** | A summary for all vaults were returned successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSummaryByVault**
> StakingGetSummaryByVaultResponse getSummaryByVault()

Return a summary for each vault, categorized by their status (active, inactive), the total amounts staked and total rewards per-chain.

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
**200** | A summary for each vault were returned successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **mergeStakeAccounts**
> MergeStakeAccountsResponse mergeStakeAccounts(mergeStakeAccountsRequest, )

Perform a Solana Merge of two active stake accounts into one.  Endpoint Permission: Owner, Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.

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
  // 'SOL' | 'SOL_TEST' | The protocol identifier (e.g. \"SOL\"/\"SOL_TEST\") to use
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
 **chainDescriptor** | [**&#39;SOL&#39; | &#39;SOL_TEST&#39;**]**Array<&#39;SOL&#39; &#124; &#39;SOL_TEST&#39;>** | The protocol identifier (e.g. \&quot;SOL\&quot;/\&quot;SOL_TEST\&quot;) to use | defaults to undefined
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
**201** | Merge action has been executed successfully on vault and is associated with 201 status code. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **split**
> SplitResponse split(splitRequest, )

Perform a Solana Split stake account.

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
  // 'SOL' | 'SOL_TEST' | The protocol identifier (e.g. \"SOL\"/\"SOL_TEST\") to use
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
 **chainDescriptor** | [**&#39;SOL&#39; | &#39;SOL_TEST&#39;**]**Array<&#39;SOL&#39; &#124; &#39;SOL_TEST&#39;>** | The protocol identifier (e.g. \&quot;SOL\&quot;/\&quot;SOL_TEST\&quot;) to use | defaults to undefined
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
**201** | Split action has been executed successfully on vault and is associated with 201 status code. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **stake**
> StakeResponse stake(stakeRequest, )

Perform a chain-specific Stake.

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
  // ChainDescriptor | The protocol identifier (e.g. \"ETH\"/\"SOL\"/\"MATIC\") to use
  chainDescriptor: SOL,
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
 **chainDescriptor** | **ChainDescriptor** | The protocol identifier (e.g. \&quot;ETH\&quot;/\&quot;SOL\&quot;/\&quot;MATIC\&quot;) to use | defaults to undefined
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
**201** | Stake action has been executed successfully on vault and is associated with 201 status code. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **unstake**
> unstake(unstakeRequest, )

Execute an Unstake operation

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
  // ChainDescriptor | The protocol identifier (e.g. \"ETH\"/\"SOL\"/\"MATIC\") to use
  chainDescriptor: SOL,
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
 **chainDescriptor** | **ChainDescriptor** | The protocol identifier (e.g. \&quot;ETH\&quot;/\&quot;SOL\&quot;/\&quot;MATIC\&quot;) to use | defaults to undefined
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
**201** | Unstake action has been executed successfully on vault and is associated with 201 status code. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **withdraw**
> withdraw(withdrawRequest, )

Perform a chain-specific Withdraw.

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
  // ChainDescriptor | The protocol identifier (e.g. \"ETH\"/\"SOL\"/\"MATIC\") to use
  chainDescriptor: SOL,
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
 **chainDescriptor** | **ChainDescriptor** | The protocol identifier (e.g. \&quot;ETH\&quot;/\&quot;SOL\&quot;/\&quot;MATIC\&quot;) to use | defaults to undefined
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
**201** | Withdraw action has been executed successfully on vault and is associated with 201 status code. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



# StakingBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveTermsOfServiceByProviderId**](#approveTermsOfServiceByProviderId) | **POST** /staking/providers/{providerId}/approveTermsOfService | 
[**executeAction**](#executeAction) | **POST** /staking/chains/{chainDescriptor}/{actionId} | 
[**getAllDelegations**](#getAllDelegations) | **GET** /staking/positions | 
[**getChainInfo**](#getChainInfo) | **GET** /staking/chains/{chainDescriptor}/chainInfo | 
[**getChains**](#getChains) | **GET** /staking/chains | 
[**getDelegationById**](#getDelegationById) | **GET** /staking/positions/{id} | 
[**getProviders**](#getProviders) | **GET** /staking/providers | 
[**getSummary**](#getSummary) | **GET** /staking/positions/summary | 
[**getSummaryByVault**](#getSummaryByVault) | **GET** /staking/positions/summary/vaults | 


# **approveTermsOfServiceByProviderId**
> object approveTermsOfServiceByProviderId()

Approve the terms of service of the staking provider. This must be called before performing a staking action for the first time with this provider.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingBetaApiApproveTermsOfServiceByProviderIdRequest, object } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingBetaApiApproveTermsOfServiceByProviderIdRequest = {
  // 'kiln' | 'figment' | The unique identifier of the staking provider
  providerId: providerId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.stakingBeta.approveTermsOfServiceByProviderId(body).then((res: FireblocksResponse<object>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | [**&#39;kiln&#39; | &#39;figment&#39;**]**Array<&#39;kiln&#39; &#124; &#39;figment&#39;>** | The unique identifier of the staking provider | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The terms of service have been successfully approved and is associated with 201 status code. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **executeAction**
> ExecuteActionResponse executeAction(executeActionRequest, )

Perform a chain-specific staking action (e.g. stake, unstake, withdraw).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingBetaApiExecuteActionRequest, ExecuteActionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingBetaApiExecuteActionRequest = {
  // ExecuteActionRequest
  executeActionRequest: {"vaultAccountId":"22","providerId":"kiln","stakeAmount":"32","chainDescriptor":"ETH","txNote":"stake request id CcaHc2L43ZWjwCHART3oZoJvHLAe9hzT2DJNUpBzoTN1 of 32ETH created on 02.04.23","feeLevel":"MEDIUM"},
  // 'ETH' | 'SOL' | 'ETH_TEST3' | 'SOL_TEST' | The protocol identifier (e.g. \"ETH\"/\"SOL\") to use
  chainDescriptor: chainDescriptor_example,
  // 'stake' | 'unstake' | 'withdraw' | The operation that can be executed on a vault/position
  actionId: actionId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.stakingBeta.executeAction(body).then((res: FireblocksResponse<ExecuteActionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **executeActionRequest** | **[ExecuteActionRequest](../models/ExecuteActionRequest.md)**|  |
 **chainDescriptor** | [**&#39;ETH&#39; | &#39;SOL&#39; | &#39;ETH_TEST3&#39; | &#39;SOL_TEST&#39;**]**Array<&#39;ETH&#39; &#124; &#39;SOL&#39; &#124; &#39;ETH_TEST3&#39; &#124; &#39;SOL_TEST&#39;>** | The protocol identifier (e.g. \&quot;ETH\&quot;/\&quot;SOL\&quot;) to use | defaults to undefined
 **actionId** | [**&#39;stake&#39; | &#39;unstake&#39; | &#39;withdraw&#39;**]**Array<&#39;stake&#39; &#124; &#39;unstake&#39; &#124; &#39;withdraw&#39;>** | The operation that can be executed on a vault/position | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ExecuteActionResponse](../models/ExecuteActionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A chain-specific action has been executed successfully on vault/position and is associated with 201 status code. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAllDelegations**
> StakingGetAllDelegationsResponse getAllDelegations()

Return detailed information on all staking positions, including the staked amount, rewards, status and more.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingBetaApiGetAllDelegationsRequest, StakingGetAllDelegationsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingBetaApiGetAllDelegationsRequest = {
  // string | Use \"ETH\" / \"SOL\" in order to obtain information related to the specific blockchain network or retrieve information about all chains that have data available by providing no argument. (optional)
  chainDescriptor: chainDescriptor_example,
};

fireblocks.stakingBeta.getAllDelegations(body).then((res: FireblocksResponse<StakingGetAllDelegationsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainDescriptor** | [**string**] | Use \&quot;ETH\&quot; / \&quot;SOL\&quot; in order to obtain information related to the specific blockchain network or retrieve information about all chains that have data available by providing no argument. | (optional) defaults to undefined


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
**200** | An array of position data was returned successfully |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getChainInfo**
> ChainInfoResponseDto getChainInfo()

Return chain-specific, staking-related information summary (e.g. epoch details, lockup durations, estimated rewards, etc.)

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingBetaApiGetChainInfoRequest, ChainInfoResponseDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingBetaApiGetChainInfoRequest = {
  // 'ETH' | 'SOL' | 'ETH_TEST3' | 'SOL_TEST' | The protocol identifier (e.g. \"ETH\"/\"SOL\") to use
  chainDescriptor: chainDescriptor_example,
};

fireblocks.stakingBeta.getChainInfo(body).then((res: FireblocksResponse<ChainInfoResponseDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **chainDescriptor** | [**&#39;ETH&#39; | &#39;SOL&#39; | &#39;ETH_TEST3&#39; | &#39;SOL_TEST&#39;**]**Array<&#39;ETH&#39; &#124; &#39;SOL&#39; &#124; &#39;ETH_TEST3&#39; &#124; &#39;SOL_TEST&#39;>** | The protocol identifier (e.g. \&quot;ETH\&quot;/\&quot;SOL\&quot;) to use | defaults to undefined


### Return type

**[ChainInfoResponseDto](../models/ChainInfoResponseDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Chain specific info summary was returned successfully |  -  |

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

fireblocks.stakingBeta.getChains(body).then((res: FireblocksResponse<StakingGetChainsResponse>) => {
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
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDelegationById**
> DelegationDto getDelegationById()

Return detailed information on a staking position, including the staked amount, rewards, status and more.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, StakingBetaApiGetDelegationByIdRequest, DelegationDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: StakingBetaApiGetDelegationByIdRequest = {
  // string | The unique identifier of the staking position
  id: id_example,
};

fireblocks.stakingBeta.getDelegationById(body).then((res: FireblocksResponse<DelegationDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The unique identifier of the staking position | defaults to undefined


### Return type

**[DelegationDto](../models/DelegationDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Position data was returned successfully |  -  |

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

fireblocks.stakingBeta.getProviders(body).then((res: FireblocksResponse<StakingGetProvidersResponse>) => {
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
**200** | An array of supported providers was returned successfully |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSummary**
> DelegationSummaryDto getSummary()

Return a summary of all vaults, categorized by their status (active, inactive), the total amounts staked and total rewards per-chain.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, DelegationSummaryDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.stakingBeta.getSummary(body).then((res: FireblocksResponse<DelegationSummaryDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[DelegationSummaryDto](../models/DelegationSummaryDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A summary for all vaults were returned successfully |  -  |

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

fireblocks.stakingBeta.getSummaryByVault(body).then((res: FireblocksResponse<StakingGetSummaryByVaultResponse>) => {
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
**200** | A summary for each vault were returned successfully |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



# NFTsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getNFT**](#getNFT) | **GET** /nfts/tokens/{id} | List token data by ID
[**getNFTs**](#getNFTs) | **GET** /nfts/tokens | List tokens by IDs
[**getOwnershipTokens**](#getOwnershipTokens) | **GET** /nfts/ownership/tokens | List all owned tokens (paginated)
[**listOwnedCollections**](#listOwnedCollections) | **GET** /nfts/ownership/collections | List owned collections (paginated)
[**listOwnedTokens**](#listOwnedTokens) | **GET** /nfts/ownership/assets | List all distinct owned tokens (paginated)
[**refreshNFTMetadata**](#refreshNFTMetadata) | **PUT** /nfts/tokens/{id} | Refresh token metadata
[**updateOwnershipTokens**](#updateOwnershipTokens) | **PUT** /nfts/ownership/tokens | Refresh vault account tokens
[**updateTokenOwnershipStatus**](#updateTokenOwnershipStatus) | **PUT** /nfts/ownership/tokens/{id}/status | Update token ownership status
[**updateTokensOwnershipSpam**](#updateTokensOwnershipSpam) | **PUT** /nfts/ownership/tokens/spam | Update tokens ownership spam property
[**updateTokensOwnershipStatus**](#updateTokensOwnershipStatus) | **PUT** /nfts/ownership/tokens/status | Update tokens ownership status


# **getNFT**
> TokenResponse getNFT()

Returns the requested token data. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, NFTsApiGetNFTRequest, TokenResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: NFTsApiGetNFTRequest = {
  // string | NFT ID
  id: NFT-abcdefabcdefabcdefabcdefabcdefabcdefabcd,
};

fireblocks.nfts.getNFT(body).then((res: FireblocksResponse<TokenResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | NFT ID | defaults to undefined


### Return type

**[TokenResponse](../models/TokenResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getNFTs**
> GetNFTsResponse getNFTs()

Returns the requested tokens data. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, NFTsApiGetNFTsRequest, GetNFTsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: NFTsApiGetNFTsRequest = {
  // string | A comma separated list of NFT IDs. Up to 100 are allowed in a single request.
  ids: ids_example,
  // string | Page cursor to fetch (optional)
  pageCursor: pageCursor_example,
  // number | Items per page (max 100) (optional)
  pageSize: 8.14,
  // Array<'collection.name' | 'name' | 'blockchainDescriptor'> | Sort by param, it can be one param or a list of params separated by comma (optional)
  sort: param_value,
  // 'DESC' | 'ASC' | Order direction, it can be `ASC` for ascending or `DESC` for descending (optional)
  order: order_example,
};

fireblocks.nfts.getNFTs(body).then((res: FireblocksResponse<GetNFTsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ids** | [**string**] | A comma separated list of NFT IDs. Up to 100 are allowed in a single request. | defaults to undefined
 **pageCursor** | [**string**] | Page cursor to fetch | (optional) defaults to undefined
 **pageSize** | [**number**] | Items per page (max 100) | (optional) defaults to undefined
 **sort** | **Array<&#39;collection.name&#39; &#124; &#39;name&#39; &#124; &#39;blockchainDescriptor&#39;>** | Sort by param, it can be one param or a list of params separated by comma | (optional) defaults to undefined
 **order** | [**&#39;DESC&#39; | &#39;ASC&#39;**]**Array<&#39;DESC&#39; &#124; &#39;ASC&#39;>** | Order direction, it can be &#x60;ASC&#x60; for ascending or &#x60;DESC&#x60; for descending | (optional) defaults to 'ASC'


### Return type

**[GetNFTsResponse](../models/GetNFTsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getOwnershipTokens**
> GetOwnershipTokensResponse getOwnershipTokens()

Returns all tokens and their data in your workspace. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, NFTsApiGetOwnershipTokensRequest, GetOwnershipTokensResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: NFTsApiGetOwnershipTokensRequest = {
  // 'ETH' | 'ETH_TEST3' | 'ETH_TEST5' | 'ETH_TEST6' | 'POLYGON' | 'POLYGON_TEST_MUMBAI' | 'AMOY_POLYGON_TEST' | 'XTZ' | 'XTZ_TEST' | 'BASECHAIN_ETH' | 'BASECHAIN_ETH_TEST3' | 'BASECHAIN_ETH_TEST5' | 'ETHERLINK' | 'ETHERLINK_TEST' | 'MANTLE' | 'MANTLE_TEST' | 'GUN_GUNZILLA' | 'GUN_GUNZILLA_TEST' | 'ETH_SONEIUM' | 'SONEIUM_MINATO_TEST' | 'IOTX_IOTEX' | 'KLAY_KAIA' | 'KLAY_KAIA_TEST' | 'APECHAIN' | 'APECHAIN_TEST' | Blockchain descriptor filter (optional)
  blockchainDescriptor: blockchainDescriptor_example,
  // string | A comma separated list of Vault Account IDs. Up to 100 are allowed in a single request.  This field will be ignored when walletType=END_USER_WALLET or ncwId is provided. (optional)
  vaultAccountIds: vaultAccountIds_example,
  // string | Tenant\'s Non-Custodial Wallet ID (optional)
  ncwId: ncwId_example,
  // string | A comma separated list of Non-Custodial account IDs. Up to 100 are allowed in a single request. This field will be ignored when walletType=VAULT_ACCOUNT or ncwId is not provided. (optional)
  ncwAccountIds: ncwAccountIds_example,
  // 'VAULT_ACCOUNT' | 'END_USER_WALLET' | Wallet type, it can be `VAULT_ACCOUNT` or `END_USER_WALLET` (optional)
  walletType: walletType_example,
  // string | A comma separated list of NFT IDs. Up to 100 are allowed in a single request. (optional)
  ids: ids_example,
  // string | A comma separated list of collection IDs. Up to 100 are allowed in a single request. (optional)
  collectionIds: collectionIds_example,
  // string | Page cursor to fetch (optional)
  pageCursor: pageCursor_example,
  // number | Items per page (max 100) (optional)
  pageSize: 8.14,
  // Array<'ownershipLastUpdateTime' | 'name' | 'collection.name' | 'blockchainDescriptor'> | Sort by param, it can be one param or a list of params separated by comma (optional)
  sort: param_value,
  // 'DESC' | 'ASC' | Order direction, it can be `ASC` for ascending or `DESC` for descending (optional)
  order: order_example,
  // 'LISTED' | 'ARCHIVED' | Token ownership status (optional)
  status: status_example,
  // string | Search owned tokens and their collections. Possible criteria for search:  token name and id within the contract/collection, collection name, blockchain descriptor and name. (optional)
  search: search_example,
  // 'true' | 'false' | 'all' | Token ownership spam status. (optional)
  spam: spam_example,
};

fireblocks.nfts.getOwnershipTokens(body).then((res: FireblocksResponse<GetOwnershipTokensResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchainDescriptor** | [**&#39;ETH&#39; | &#39;ETH_TEST3&#39; | &#39;ETH_TEST5&#39; | &#39;ETH_TEST6&#39; | &#39;POLYGON&#39; | &#39;POLYGON_TEST_MUMBAI&#39; | &#39;AMOY_POLYGON_TEST&#39; | &#39;XTZ&#39; | &#39;XTZ_TEST&#39; | &#39;BASECHAIN_ETH&#39; | &#39;BASECHAIN_ETH_TEST3&#39; | &#39;BASECHAIN_ETH_TEST5&#39; | &#39;ETHERLINK&#39; | &#39;ETHERLINK_TEST&#39; | &#39;MANTLE&#39; | &#39;MANTLE_TEST&#39; | &#39;GUN_GUNZILLA&#39; | &#39;GUN_GUNZILLA_TEST&#39; | &#39;ETH_SONEIUM&#39; | &#39;SONEIUM_MINATO_TEST&#39; | &#39;IOTX_IOTEX&#39; | &#39;KLAY_KAIA&#39; | &#39;KLAY_KAIA_TEST&#39; | &#39;APECHAIN&#39; | &#39;APECHAIN_TEST&#39;**]**Array<&#39;ETH&#39; &#124; &#39;ETH_TEST3&#39; &#124; &#39;ETH_TEST5&#39; &#124; &#39;ETH_TEST6&#39; &#124; &#39;POLYGON&#39; &#124; &#39;POLYGON_TEST_MUMBAI&#39; &#124; &#39;AMOY_POLYGON_TEST&#39; &#124; &#39;XTZ&#39; &#124; &#39;XTZ_TEST&#39; &#124; &#39;BASECHAIN_ETH&#39; &#124; &#39;BASECHAIN_ETH_TEST3&#39; &#124; &#39;BASECHAIN_ETH_TEST5&#39; &#124; &#39;ETHERLINK&#39; &#124; &#39;ETHERLINK_TEST&#39; &#124; &#39;MANTLE&#39; &#124; &#39;MANTLE_TEST&#39; &#124; &#39;GUN_GUNZILLA&#39; &#124; &#39;GUN_GUNZILLA_TEST&#39; &#124; &#39;ETH_SONEIUM&#39; &#124; &#39;SONEIUM_MINATO_TEST&#39; &#124; &#39;IOTX_IOTEX&#39; &#124; &#39;KLAY_KAIA&#39; &#124; &#39;KLAY_KAIA_TEST&#39; &#124; &#39;APECHAIN&#39; &#124; &#39;APECHAIN_TEST&#39;>** | Blockchain descriptor filter | (optional) defaults to undefined
 **vaultAccountIds** | [**string**] | A comma separated list of Vault Account IDs. Up to 100 are allowed in a single request.  This field will be ignored when walletType&#x3D;END_USER_WALLET or ncwId is provided. | (optional) defaults to undefined
 **ncwId** | [**string**] | Tenant\&#39;s Non-Custodial Wallet ID | (optional) defaults to undefined
 **ncwAccountIds** | [**string**] | A comma separated list of Non-Custodial account IDs. Up to 100 are allowed in a single request. This field will be ignored when walletType&#x3D;VAULT_ACCOUNT or ncwId is not provided. | (optional) defaults to undefined
 **walletType** | [**&#39;VAULT_ACCOUNT&#39; | &#39;END_USER_WALLET&#39;**]**Array<&#39;VAULT_ACCOUNT&#39; &#124; &#39;END_USER_WALLET&#39;>** | Wallet type, it can be &#x60;VAULT_ACCOUNT&#x60; or &#x60;END_USER_WALLET&#x60; | (optional) defaults to 'VAULT_ACCOUNT'
 **ids** | [**string**] | A comma separated list of NFT IDs. Up to 100 are allowed in a single request. | (optional) defaults to undefined
 **collectionIds** | [**string**] | A comma separated list of collection IDs. Up to 100 are allowed in a single request. | (optional) defaults to undefined
 **pageCursor** | [**string**] | Page cursor to fetch | (optional) defaults to undefined
 **pageSize** | [**number**] | Items per page (max 100) | (optional) defaults to undefined
 **sort** | **Array<&#39;ownershipLastUpdateTime&#39; &#124; &#39;name&#39; &#124; &#39;collection.name&#39; &#124; &#39;blockchainDescriptor&#39;>** | Sort by param, it can be one param or a list of params separated by comma | (optional) defaults to undefined
 **order** | [**&#39;DESC&#39; | &#39;ASC&#39;**]**Array<&#39;DESC&#39; &#124; &#39;ASC&#39;>** | Order direction, it can be &#x60;ASC&#x60; for ascending or &#x60;DESC&#x60; for descending | (optional) defaults to 'ASC'
 **status** | [**&#39;LISTED&#39; | &#39;ARCHIVED&#39;**]**Array<&#39;LISTED&#39; &#124; &#39;ARCHIVED&#39;>** | Token ownership status | (optional) defaults to 'LISTED'
 **search** | [**string**] | Search owned tokens and their collections. Possible criteria for search:  token name and id within the contract/collection, collection name, blockchain descriptor and name. | (optional) defaults to undefined
 **spam** | [**&#39;true&#39; | &#39;false&#39; | &#39;all&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39; &#124; &#39;all&#39;>** | Token ownership spam status. | (optional) defaults to undefined


### Return type

**[GetOwnershipTokensResponse](../models/GetOwnershipTokensResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listOwnedCollections**
> ListOwnedCollectionsResponse listOwnedCollections()

Returns all collections in your workspace 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, NFTsApiListOwnedCollectionsRequest, ListOwnedCollectionsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: NFTsApiListOwnedCollectionsRequest = {
  // string | Tenant\'s Non-Custodial Wallet ID (optional)
  ncwId: ncwId_example,
  // 'VAULT_ACCOUNT' | 'END_USER_WALLET' | Wallet type, it can be `VAULT_ACCOUNT` or `END_USER_WALLET` (optional)
  walletType: walletType_example,
  // string | Search owned collections. Possible criteria for search: collection name, collection contract address. (optional)
  search: search_example,
  // string | Page cursor to fetch (optional)
  pageCursor: pageCursor_example,
  // number | Items per page (max 100) (optional)
  pageSize: 8.14,
  // Array<'name'> | Sort by param, it can be one param or a list of params separated by comma (optional)
  sort: param_value,
  // 'DESC' | 'ASC' | Order direction, it can be `ASC` for ascending or `DESC` for descending (optional)
  order: order_example,
  // 'LISTED' | 'ARCHIVED' | Token ownership status (optional)
  status: status_example,
};

fireblocks.nfts.listOwnedCollections(body).then((res: FireblocksResponse<ListOwnedCollectionsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ncwId** | [**string**] | Tenant\&#39;s Non-Custodial Wallet ID | (optional) defaults to undefined
 **walletType** | [**&#39;VAULT_ACCOUNT&#39; | &#39;END_USER_WALLET&#39;**]**Array<&#39;VAULT_ACCOUNT&#39; &#124; &#39;END_USER_WALLET&#39;>** | Wallet type, it can be &#x60;VAULT_ACCOUNT&#x60; or &#x60;END_USER_WALLET&#x60; | (optional) defaults to 'VAULT_ACCOUNT'
 **search** | [**string**] | Search owned collections. Possible criteria for search: collection name, collection contract address. | (optional) defaults to undefined
 **pageCursor** | [**string**] | Page cursor to fetch | (optional) defaults to undefined
 **pageSize** | [**number**] | Items per page (max 100) | (optional) defaults to undefined
 **sort** | **Array<&#39;name&#39;>** | Sort by param, it can be one param or a list of params separated by comma | (optional) defaults to undefined
 **order** | [**&#39;DESC&#39; | &#39;ASC&#39;**]**Array<&#39;DESC&#39; &#124; &#39;ASC&#39;>** | Order direction, it can be &#x60;ASC&#x60; for ascending or &#x60;DESC&#x60; for descending | (optional) defaults to 'ASC'
 **status** | [**&#39;LISTED&#39; | &#39;ARCHIVED&#39;**]**Array<&#39;LISTED&#39; &#124; &#39;ARCHIVED&#39;>** | Token ownership status | (optional) defaults to 'LISTED'


### Return type

**[ListOwnedCollectionsResponse](../models/ListOwnedCollectionsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listOwnedTokens**
> ListOwnedTokensResponse listOwnedTokens()

Returns all owned distinct tokens (for your tenant) and their data in your workspace. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, NFTsApiListOwnedTokensRequest, ListOwnedTokensResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: NFTsApiListOwnedTokensRequest = {
  // string | Tenant\'s Non-Custodial Wallet ID (optional)
  ncwId: ncwId_example,
  // 'VAULT_ACCOUNT' | 'END_USER_WALLET' | Wallet type, it can be `VAULT_ACCOUNT` or `END_USER_WALLET` (optional)
  walletType: walletType_example,
  // string | Page cursor to fetch (optional)
  pageCursor: pageCursor_example,
  // number | Items per page (max 100) (optional)
  pageSize: 8.14,
  // Array<'name'> | Sort by param, it can be one param or a list of params separated by comma (optional)
  sort: param_value,
  // 'DESC' | 'ASC' | Order direction, it can be `ASC` for ascending or `DESC` for descending (optional)
  order: order_example,
  // 'LISTED' | 'ARCHIVED' | Token ownership status (optional)
  status: status_example,
  // string | Search owned tokens by token name (optional)
  search: search_example,
  // 'true' | 'false' | 'all' | Token ownership spam status. (optional)
  spam: spam_example,
};

fireblocks.nfts.listOwnedTokens(body).then((res: FireblocksResponse<ListOwnedTokensResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ncwId** | [**string**] | Tenant\&#39;s Non-Custodial Wallet ID | (optional) defaults to undefined
 **walletType** | [**&#39;VAULT_ACCOUNT&#39; | &#39;END_USER_WALLET&#39;**]**Array<&#39;VAULT_ACCOUNT&#39; &#124; &#39;END_USER_WALLET&#39;>** | Wallet type, it can be &#x60;VAULT_ACCOUNT&#x60; or &#x60;END_USER_WALLET&#x60; | (optional) defaults to 'VAULT_ACCOUNT'
 **pageCursor** | [**string**] | Page cursor to fetch | (optional) defaults to undefined
 **pageSize** | [**number**] | Items per page (max 100) | (optional) defaults to undefined
 **sort** | **Array<&#39;name&#39;>** | Sort by param, it can be one param or a list of params separated by comma | (optional) defaults to undefined
 **order** | [**&#39;DESC&#39; | &#39;ASC&#39;**]**Array<&#39;DESC&#39; &#124; &#39;ASC&#39;>** | Order direction, it can be &#x60;ASC&#x60; for ascending or &#x60;DESC&#x60; for descending | (optional) defaults to 'ASC'
 **status** | [**&#39;LISTED&#39; | &#39;ARCHIVED&#39;**]**Array<&#39;LISTED&#39; &#124; &#39;ARCHIVED&#39;>** | Token ownership status | (optional) defaults to 'LISTED'
 **search** | [**string**] | Search owned tokens by token name | (optional) defaults to undefined
 **spam** | [**&#39;true&#39; | &#39;false&#39; | &#39;all&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39; &#124; &#39;all&#39;>** | Token ownership spam status. | (optional) defaults to undefined


### Return type

**[ListOwnedTokensResponse](../models/ListOwnedTokensResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **refreshNFTMetadata**
> refreshNFTMetadata()

Updates the latest token metadata. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, NFTsApiRefreshNFTMetadataRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: NFTsApiRefreshNFTMetadataRequest = {
  // string | NFT ID
  id: NFT-abcdefabcdefabcdefabcdefabcdefabcdefabcd,
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. (optional)
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.nfts.refreshNFTMetadata(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | NFT ID | defaults to undefined
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateOwnershipTokens**
> updateOwnershipTokens()

Updates all tokens and balances per blockchain and vault account. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, NFTsApiUpdateOwnershipTokensRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: NFTsApiUpdateOwnershipTokensRequest = {
  // 'ETH' | 'ETH_TEST5' | 'ETH_TEST6' | 'POLYGON' | 'POLYGON_TEST_MUMBAI' | 'AMOY_POLYGON_TEST' | 'BASECHAIN_ETH' | 'BASECHAIN_ETH_TEST5' | 'ETHERLINK' | 'ETHERLINK_TEST' | 'MANTLE' | 'MANTLE_TEST' | 'GUN_GUNZILLA' | 'GUN_GUNZILLA_TEST' | 'ETH_SONEIUM' | 'SONEIUM_MINATO_TEST' | 'IOTX_IOTEX' | 'KLAY_KAIA' | 'KLAY_KAIA_TEST' | 'APECHAIN' | 'APECHAIN_TEST' | Blockchain descriptor filter
  blockchainDescriptor: blockchainDescriptor_example,
  // string | Vault account filter
  vaultAccountId: vaultAccountId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.nfts.updateOwnershipTokens(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **blockchainDescriptor** | [**&#39;ETH&#39; | &#39;ETH_TEST5&#39; | &#39;ETH_TEST6&#39; | &#39;POLYGON&#39; | &#39;POLYGON_TEST_MUMBAI&#39; | &#39;AMOY_POLYGON_TEST&#39; | &#39;BASECHAIN_ETH&#39; | &#39;BASECHAIN_ETH_TEST5&#39; | &#39;ETHERLINK&#39; | &#39;ETHERLINK_TEST&#39; | &#39;MANTLE&#39; | &#39;MANTLE_TEST&#39; | &#39;GUN_GUNZILLA&#39; | &#39;GUN_GUNZILLA_TEST&#39; | &#39;ETH_SONEIUM&#39; | &#39;SONEIUM_MINATO_TEST&#39; | &#39;IOTX_IOTEX&#39; | &#39;KLAY_KAIA&#39; | &#39;KLAY_KAIA_TEST&#39; | &#39;APECHAIN&#39; | &#39;APECHAIN_TEST&#39;**]**Array<&#39;ETH&#39; &#124; &#39;ETH_TEST5&#39; &#124; &#39;ETH_TEST6&#39; &#124; &#39;POLYGON&#39; &#124; &#39;POLYGON_TEST_MUMBAI&#39; &#124; &#39;AMOY_POLYGON_TEST&#39; &#124; &#39;BASECHAIN_ETH&#39; &#124; &#39;BASECHAIN_ETH_TEST5&#39; &#124; &#39;ETHERLINK&#39; &#124; &#39;ETHERLINK_TEST&#39; &#124; &#39;MANTLE&#39; &#124; &#39;MANTLE_TEST&#39; &#124; &#39;GUN_GUNZILLA&#39; &#124; &#39;GUN_GUNZILLA_TEST&#39; &#124; &#39;ETH_SONEIUM&#39; &#124; &#39;SONEIUM_MINATO_TEST&#39; &#124; &#39;IOTX_IOTEX&#39; &#124; &#39;KLAY_KAIA&#39; &#124; &#39;KLAY_KAIA_TEST&#39; &#124; &#39;APECHAIN&#39; &#124; &#39;APECHAIN_TEST&#39;>** | Blockchain descriptor filter | defaults to undefined
 **vaultAccountId** | [**string**] | Vault account filter | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateTokenOwnershipStatus**
> updateTokenOwnershipStatus(updateTokenOwnershipStatusDto, )

Updates token status for a tenant, in all tenant vaults. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, NFTsApiUpdateTokenOwnershipStatusRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: NFTsApiUpdateTokenOwnershipStatusRequest = {
  // UpdateTokenOwnershipStatusDto
  updateTokenOwnershipStatusDto: param_value,
  // string | NFT ID
  id: NFT-abcdefabcdefabcdefabcdefabcdefabcdefabcd,
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. (optional)
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.nfts.updateTokenOwnershipStatus(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTokenOwnershipStatusDto** | **[UpdateTokenOwnershipStatusDto](../models/UpdateTokenOwnershipStatusDto.md)**|  |
 **id** | [**string**] | NFT ID | defaults to undefined
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateTokensOwnershipSpam**
> updateTokensOwnershipSpam(updateTokensOwnershipSpamRequest)

Updates tokens spam property for a tenant\'s token ownerships, in all tenant vaults.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, NFTsApiUpdateTokensOwnershipSpamRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: NFTsApiUpdateTokensOwnershipSpamRequest = {
  // UpdateTokensOwnershipSpamRequest
  updateTokensOwnershipSpamRequest: param_value,
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. (optional)
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.nfts.updateTokensOwnershipSpam(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTokensOwnershipSpamRequest** | **[UpdateTokensOwnershipSpamRequest](../models/UpdateTokensOwnershipSpamRequest.md)**|  |
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All token spam properties have been updated |  * X-Request-ID -  <br>  |
**400** | Invalid data sent |  * X-Request-ID -  <br>  |
**404** | When ownership for token ID is not found |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateTokensOwnershipStatus**
> updateTokensOwnershipStatus(updateTokensOwnershipStatusRequest)

Updates tokens status for a tenant, in all tenant vaults.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, NFTsApiUpdateTokensOwnershipStatusRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: NFTsApiUpdateTokensOwnershipStatusRequest = {
  // UpdateTokensOwnershipStatusRequest
  updateTokensOwnershipStatusRequest: param_value,
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. (optional)
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.nfts.updateTokensOwnershipStatus(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateTokensOwnershipStatusRequest** | **[UpdateTokensOwnershipStatusRequest](../models/UpdateTokensOwnershipStatusRequest.md)**|  |
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All token statuses have been updated |  * X-Request-ID -  <br>  |
**400** | Invalid data sent |  * X-Request-ID -  <br>  |
**404** | When ownership for token ID is not found |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



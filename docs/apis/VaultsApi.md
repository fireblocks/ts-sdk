# VaultsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateAssetForVaultAccount**](#activateAssetForVaultAccount) | **POST** /vault/accounts/{vaultAccountId}/{assetId}/activate | Activate a wallet in a vault account
[**attachTagsToVaultAccounts**](#attachTagsToVaultAccounts) | **POST** /vault/accounts/attached_tags/attach | Attach tags to a vault accounts
[**createLegacyAddress**](#createLegacyAddress) | **POST** /vault/accounts/{vaultAccountId}/{assetId}/addresses/{addressId}/create_legacy | Convert a segwit address to legacy format
[**createMultipleAccounts**](#createMultipleAccounts) | **POST** /vault/accounts/bulk | Bulk creation of new vault accounts
[**createMultipleDepositAddresses**](#createMultipleDepositAddresses) | **POST** /vault/accounts/addresses/bulk | Bulk creation of new deposit addresses
[**createVaultAccount**](#createVaultAccount) | **POST** /vault/accounts | Create a new vault account
[**createVaultAccountAsset**](#createVaultAccountAsset) | **POST** /vault/accounts/{vaultAccountId}/{assetId} | Create a new wallet
[**createVaultAccountAssetAddress**](#createVaultAccountAssetAddress) | **POST** /vault/accounts/{vaultAccountId}/{assetId}/addresses | Create new asset deposit address
[**detachTagsFromVaultAccounts**](#detachTagsFromVaultAccounts) | **POST** /vault/accounts/attached_tags/detach | Detach tags from a vault accounts
[**getAssetWallets**](#getAssetWallets) | **GET** /vault/asset_wallets | List asset wallets (Paginated)
[**getCreateMultipleDepositAddressesJobStatus**](#getCreateMultipleDepositAddressesJobStatus) | **GET** /vault/accounts/addresses/bulk/{jobId} | Get job status of bulk creation of new deposit addresses
[**getCreateMultipleVaultAccountsJobStatus**](#getCreateMultipleVaultAccountsJobStatus) | **GET** /vault/accounts/bulk/{jobId} | Get job status of bulk creation of new vault accounts
[**getMaxSpendableAmount**](#getMaxSpendableAmount) | **GET** /vault/accounts/{vaultAccountId}/{assetId}/max_spendable_amount | Get the maximum spendable amount in a single transaction.
[**getPagedVaultAccounts**](#getPagedVaultAccounts) | **GET** /vault/accounts_paged | List vault accounts (Paginated)
[**getPublicKeyInfo**](#getPublicKeyInfo) | **GET** /vault/public_key_info | Get the public key information
[**getPublicKeyInfoForAddress**](#getPublicKeyInfoForAddress) | **GET** /vault/accounts/{vaultAccountId}/{assetId}/{change}/{addressIndex}/public_key_info | Get the public key for a vault account
[**getUnspentInputs**](#getUnspentInputs) | **GET** /vault/accounts/{vaultAccountId}/{assetId}/unspent_inputs | Get UTXO unspent inputs information
[**getVaultAccount**](#getVaultAccount) | **GET** /vault/accounts/{vaultAccountId} | Find a vault account by ID
[**getVaultAccountAsset**](#getVaultAccountAsset) | **GET** /vault/accounts/{vaultAccountId}/{assetId} | Get the asset balance for a vault account
[**getVaultAccountAssetAddressesPaginated**](#getVaultAccountAssetAddressesPaginated) | **GET** /vault/accounts/{vaultAccountId}/{assetId}/addresses_paginated | List addresses (Paginated)
[**getVaultAssets**](#getVaultAssets) | **GET** /vault/assets | Get asset balance for chosen assets
[**getVaultBalanceByAsset**](#getVaultBalanceByAsset) | **GET** /vault/assets/{assetId} | Get vault balance by asset
[**hideVaultAccount**](#hideVaultAccount) | **POST** /vault/accounts/{vaultAccountId}/hide | Hide a vault account in the console
[**setCustomerRefIdForAddress**](#setCustomerRefIdForAddress) | **POST** /vault/accounts/{vaultAccountId}/{assetId}/addresses/{addressId}/set_customer_ref_id | Assign AML customer reference ID
[**setVaultAccountAutoFuel**](#setVaultAccountAutoFuel) | **POST** /vault/accounts/{vaultAccountId}/set_auto_fuel | Turn autofueling on or off
[**setVaultAccountCustomerRefId**](#setVaultAccountCustomerRefId) | **POST** /vault/accounts/{vaultAccountId}/set_customer_ref_id | Set an AML/KYT customer reference ID for a vault account
[**unhideVaultAccount**](#unhideVaultAccount) | **POST** /vault/accounts/{vaultAccountId}/unhide | Unhide a vault account in the console
[**updateVaultAccount**](#updateVaultAccount) | **PUT** /vault/accounts/{vaultAccountId} | Rename a vault account
[**updateVaultAccountAssetAddress**](#updateVaultAccountAssetAddress) | **PUT** /vault/accounts/{vaultAccountId}/{assetId}/addresses/{addressId} | Update address description
[**updateVaultAccountAssetBalance**](#updateVaultAccountAssetBalance) | **POST** /vault/accounts/{vaultAccountId}/{assetId}/balance | Refresh asset balance data


# **activateAssetForVaultAccount**
> CreateVaultAssetResponse activateAssetForVaultAccount()

Initiates activation for a wallet in a vault account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiActivateAssetForVaultAccountRequest, CreateVaultAssetResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiActivateAssetForVaultAccountRequest = {
  // string | The ID of the vault account to return, or \'default\' for the default vault account
  vaultAccountId: vaultAccountId_example,
  // string | The ID of the asset
  assetId: assetId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.activateAssetForVaultAccount(body).then((res: FireblocksResponse<CreateVaultAssetResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] | The ID of the vault account to return, or \&#39;default\&#39; for the default vault account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CreateVaultAssetResponse](../models/CreateVaultAssetResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **attachTagsToVaultAccounts**
> attachTagsToVaultAccounts(vaultAccountsTagAttachmentsRequest)

Attach one or more tags to the requested vault accounts.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiAttachTagsToVaultAccountsRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiAttachTagsToVaultAccountsRequest = {
  // VaultAccountsTagAttachmentsRequest
  vaultAccountsTagAttachmentsRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.attachTagsToVaultAccounts(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountsTagAttachmentsRequest** | **[VaultAccountsTagAttachmentsRequest](../models/VaultAccountsTagAttachmentsRequest.md)**|  |
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
**204** | Tags were attached successfully |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createLegacyAddress**
> CreateAddressResponse createLegacyAddress()

Converts an existing segwit address to the legacy format.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiCreateLegacyAddressRequest, CreateAddressResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiCreateLegacyAddressRequest = {
  // string | The ID of the vault account
  vaultAccountId: vaultAccountId_example,
  // string | The ID of the asset
  assetId: assetId_example,
  // string | The segwit address to translate
  addressId: addressId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.createLegacyAddress(body).then((res: FireblocksResponse<CreateAddressResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] | The ID of the vault account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **addressId** | [**string**] | The segwit address to translate | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CreateAddressResponse](../models/CreateAddressResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created address |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createMultipleAccounts**
> JobCreated createMultipleAccounts(createMultipleAccountsRequest)

Create multiple vault accounts by running an async job. </br> **Note**: - These endpoints are currently in beta and might be subject to changes. - We limit accounts to 10k per operation and 200k per customer during beta testing. Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiCreateMultipleAccountsRequest, JobCreated } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiCreateMultipleAccountsRequest = {
  // CreateMultipleAccountsRequest
  createMultipleAccountsRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.createMultipleAccounts(body).then((res: FireblocksResponse<JobCreated>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMultipleAccountsRequest** | **[CreateMultipleAccountsRequest](../models/CreateMultipleAccountsRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[JobCreated](../models/JobCreated.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JobCreated object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createMultipleDepositAddresses**
> JobCreated createMultipleDepositAddresses(createMultipleDepositAddressesRequest)

Create multiple deposit address by running an async job. </br> **Note**: - We limit accounts to 10k per operation. Endpoint Permission: Admin, Non-Signing Admin. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiCreateMultipleDepositAddressesRequest, JobCreated } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiCreateMultipleDepositAddressesRequest = {
  // CreateMultipleDepositAddressesRequest
  createMultipleDepositAddressesRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.createMultipleDepositAddresses(body).then((res: FireblocksResponse<JobCreated>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createMultipleDepositAddressesRequest** | **[CreateMultipleDepositAddressesRequest](../models/CreateMultipleDepositAddressesRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[JobCreated](../models/JobCreated.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JobCreated object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createVaultAccount**
> VaultAccount createVaultAccount(createVaultAccountRequest)

Creates a new vault account with the requested name.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiCreateVaultAccountRequest, VaultAccount } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiCreateVaultAccountRequest = {
  // CreateVaultAccountRequest
  createVaultAccountRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.createVaultAccount(body).then((res: FireblocksResponse<VaultAccount>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createVaultAccountRequest** | **[CreateVaultAccountRequest](../models/CreateVaultAccountRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[VaultAccount](../models/VaultAccount.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Vault Account object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createVaultAccountAsset**
> CreateVaultAssetResponse createVaultAccountAsset()

Creates a wallet for a specific asset in a vault account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiCreateVaultAccountAssetRequest, CreateVaultAssetResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiCreateVaultAccountAssetRequest = {
  // string | The ID of the vault account to return, or \'default\' for the default vault account
  vaultAccountId: vaultAccountId_example,
  // string | The ID of the asset
  assetId: assetId_example,
  // CreateAssetsRequest (optional)
  createAssetsRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.createVaultAccountAsset(body).then((res: FireblocksResponse<CreateVaultAssetResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAssetsRequest** | **[CreateAssetsRequest](../models/CreateAssetsRequest.md)**|  |
 **vaultAccountId** | [**string**] | The ID of the vault account to return, or \&#39;default\&#39; for the default vault account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CreateVaultAssetResponse](../models/CreateVaultAssetResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createVaultAccountAssetAddress**
> CreateAddressResponse createVaultAccountAssetAddress()

Creates a new deposit address for an asset of a vault account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiCreateVaultAccountAssetAddressRequest, CreateAddressResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiCreateVaultAccountAssetAddressRequest = {
  // string | The ID of the vault account to return
  vaultAccountId: vaultAccountId_example,
  // string | The ID of the asset
  assetId: assetId_example,
  // CreateAddressRequest (optional)
  createAddressRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.createVaultAccountAssetAddress(body).then((res: FireblocksResponse<CreateAddressResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAddressRequest** | **[CreateAddressRequest](../models/CreateAddressRequest.md)**|  |
 **vaultAccountId** | [**string**] | The ID of the vault account to return | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CreateAddressResponse](../models/CreateAddressResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The created address |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **detachTagsFromVaultAccounts**
> detachTagsFromVaultAccounts(vaultAccountsTagAttachmentsRequest)

Detach one or more tags from the requested vault account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiDetachTagsFromVaultAccountsRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiDetachTagsFromVaultAccountsRequest = {
  // VaultAccountsTagAttachmentsRequest
  vaultAccountsTagAttachmentsRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.detachTagsFromVaultAccounts(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountsTagAttachmentsRequest** | **[VaultAccountsTagAttachmentsRequest](../models/VaultAccountsTagAttachmentsRequest.md)**|  |
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
**204** | Tags were detached successfully |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAssetWallets**
> PaginatedAssetWalletResponse getAssetWallets()

Gets all asset wallets at all of the vault accounts in your workspace. An asset wallet is an asset at a vault account. This method allows fast traversal of all account balances. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiGetAssetWalletsRequest, PaginatedAssetWalletResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiGetAssetWalletsRequest = {
  // number | When specified, only asset wallets with total balance larger than this amount are returned. (optional)
  totalAmountLargerThan: 8.14,
  // string | When specified, only asset wallets cross vault accounts that have this asset ID are returned. (optional)
  assetId: assetId_example,
  // 'ASC' | 'DESC' (optional)
  orderBy: orderBy_example,
  // string | Fetches the next paginated response before this element. This element is a cursor and is returned at the response of the previous page. (optional)
  before: before_example,
  // string | Fetches the next paginated response after this element. This element is a cursor and is returned at the response of the previous page. (optional)
  after: after_example,
  // number | The maximum number of asset wallets in a single response. The default is 200 and the maximum is 1000. (optional)
  limit: 8.14,
};

fireblocks.vaults.getAssetWallets(body).then((res: FireblocksResponse<PaginatedAssetWalletResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **totalAmountLargerThan** | [**number**] | When specified, only asset wallets with total balance larger than this amount are returned. | (optional) defaults to undefined
 **assetId** | [**string**] | When specified, only asset wallets cross vault accounts that have this asset ID are returned. | (optional) defaults to undefined
 **orderBy** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** |  | (optional) defaults to 'DESC'
 **before** | [**string**] | Fetches the next paginated response before this element. This element is a cursor and is returned at the response of the previous page. | (optional) defaults to undefined
 **after** | [**string**] | Fetches the next paginated response after this element. This element is a cursor and is returned at the response of the previous page. | (optional) defaults to undefined
 **limit** | [**number**] | The maximum number of asset wallets in a single response. The default is 200 and the maximum is 1000. | (optional) defaults to 200


### Return type

**[PaginatedAssetWalletResponse](../models/PaginatedAssetWalletResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A PaginatedAssetWalletResponse object |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCreateMultipleDepositAddressesJobStatus**
> CreateMultipleDepositAddressesJobStatus getCreateMultipleDepositAddressesJobStatus()

Returns the status of bulk creation of new deposit addresses job and the result or error Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiGetCreateMultipleDepositAddressesJobStatusRequest, CreateMultipleDepositAddressesJobStatus } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiGetCreateMultipleDepositAddressesJobStatusRequest = {
  // string | The ID of the job to create addresses
  jobId: 019681b4-107d-7243-942d-4c3c30e36fae,
};

fireblocks.vaults.getCreateMultipleDepositAddressesJobStatus(body).then((res: FireblocksResponse<CreateMultipleDepositAddressesJobStatus>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**string**] | The ID of the job to create addresses | defaults to undefined


### Return type

**[CreateMultipleDepositAddressesJobStatus](../models/CreateMultipleDepositAddressesJobStatus.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Job with status |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCreateMultipleVaultAccountsJobStatus**
> CreateMultipleVaultAccountsJobStatus getCreateMultipleVaultAccountsJobStatus()

Returns the status of bulk creation of new vault accounts job and the result or error Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiGetCreateMultipleVaultAccountsJobStatusRequest, CreateMultipleVaultAccountsJobStatus } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiGetCreateMultipleVaultAccountsJobStatusRequest = {
  // string | The ID of the job to create addresses
  jobId: 019681b4-107d-7243-942d-4c3c30e36fae,
};

fireblocks.vaults.getCreateMultipleVaultAccountsJobStatus(body).then((res: FireblocksResponse<CreateMultipleVaultAccountsJobStatus>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**string**] | The ID of the job to create addresses | defaults to undefined


### Return type

**[CreateMultipleVaultAccountsJobStatus](../models/CreateMultipleVaultAccountsJobStatus.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Job with status |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getMaxSpendableAmount**
> GetMaxSpendableAmountResponse getMaxSpendableAmount()

Get the maximum amount of a particular asset that can be spent in a single transaction from a specified vault account (UTXO assets only, with a limitation on number of inputs embedded). Send several transactions if you want to spend more than the maximum spendable amount.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiGetMaxSpendableAmountRequest, GetMaxSpendableAmountResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiGetMaxSpendableAmountRequest = {
  // string | The ID of the vault account, or \'default\' for the default vault account
  vaultAccountId: vaultAccountId_example,
  // string | The ID of the asset
  assetId: assetId_example,
  // boolean | False by default. The maximum number of inputs depends if the transaction will be signed by an automated co-signer server or on a mobile device. (optional)
  manualSignging: true,
};

fireblocks.vaults.getMaxSpendableAmount(body).then((res: FireblocksResponse<GetMaxSpendableAmountResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] | The ID of the vault account, or \&#39;default\&#39; for the default vault account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **manualSignging** | [**boolean**] | False by default. The maximum number of inputs depends if the transaction will be signed by an automated co-signer server or on a mobile device. | (optional) defaults to undefined


### Return type

**[GetMaxSpendableAmountResponse](../models/GetMaxSpendableAmountResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getPagedVaultAccounts**
> VaultAccountsPagedResponse getPagedVaultAccounts()

Gets all vault accounts in your workspace. This endpoint returns a limited amount of results with a quick response time.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiGetPagedVaultAccountsRequest, VaultAccountsPagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiGetPagedVaultAccountsRequest = {
  // string (optional)
  namePrefix: namePrefix_example,
  // string (optional)
  nameSuffix: nameSuffix_example,
  // number | Specifying minAmountThreshold will filter accounts with balances greater than this value, otherwise, it will return all accounts. (optional)
  minAmountThreshold: 8.14,
  // string (optional)
  assetId: assetId_example,
  // 'ASC' | 'DESC' (optional)
  orderBy: orderBy_example,
  // string (optional)
  before: before_example,
  // string (optional)
  after: after_example,
  // number (optional)
  limit: 8.14,
  // Array<string> | List of tag IDs to filter vault accounts. (optional)
  tagIds: param_value,
};

fireblocks.vaults.getPagedVaultAccounts(body).then((res: FireblocksResponse<VaultAccountsPagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namePrefix** | [**string**] |  | (optional) defaults to undefined
 **nameSuffix** | [**string**] |  | (optional) defaults to undefined
 **minAmountThreshold** | [**number**] | Specifying minAmountThreshold will filter accounts with balances greater than this value, otherwise, it will return all accounts. | (optional) defaults to undefined
 **assetId** | [**string**] |  | (optional) defaults to undefined
 **orderBy** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** |  | (optional) defaults to 'DESC'
 **before** | [**string**] |  | (optional) defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to 200
 **tagIds** | **Array&lt;string&gt;** | List of tag IDs to filter vault accounts. | (optional) defaults to undefined


### Return type

**[VaultAccountsPagedResponse](../models/VaultAccountsPagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A VaultAccountsPagedResponse object |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getPublicKeyInfo**
> PublicKeyInformation getPublicKeyInfo()

Gets the public key information based on derivation path and signing algorithm.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiGetPublicKeyInfoRequest, PublicKeyInformation } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiGetPublicKeyInfoRequest = {
  // string
  derivationPath: derivationPath_example,
  // string
  algorithm: algorithm_example,
  // boolean (optional)
  compressed: true,
};

fireblocks.vaults.getPublicKeyInfo(body).then((res: FireblocksResponse<PublicKeyInformation>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **derivationPath** | [**string**] |  | defaults to undefined
 **algorithm** | [**string**] |  | defaults to undefined
 **compressed** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**[PublicKeyInformation](../models/PublicKeyInformation.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Public key information |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getPublicKeyInfoForAddress**
> PublicKeyInformation getPublicKeyInfoForAddress()

Gets the public key information for the vault account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiGetPublicKeyInfoForAddressRequest, PublicKeyInformation } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiGetPublicKeyInfoForAddressRequest = {
  // string
  vaultAccountId: vaultAccountId_example,
  // string
  assetId: assetId_example,
  // number
  change: 8.14,
  // number
  addressIndex: 8.14,
  // boolean (optional)
  compressed: true,
};

fireblocks.vaults.getPublicKeyInfoForAddress(body).then((res: FireblocksResponse<PublicKeyInformation>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] |  | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined
 **change** | [**number**] |  | defaults to undefined
 **addressIndex** | [**number**] |  | defaults to undefined
 **compressed** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**[PublicKeyInformation](../models/PublicKeyInformation.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Public Key Information |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getUnspentInputs**
> GetUnspentInputsResponse getUnspentInputs()

Returns unspent inputs information of an asset in a vault account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiGetUnspentInputsRequest, GetUnspentInputsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiGetUnspentInputsRequest = {
  // string | The ID of the vault account
  vaultAccountId: vaultAccountId_example,
  // string | The ID of the asset
  assetId: assetId_example,
};

fireblocks.vaults.getUnspentInputs(body).then((res: FireblocksResponse<GetUnspentInputsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] | The ID of the vault account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined


### Return type

**[GetUnspentInputsResponse](../models/GetUnspentInputsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Unspent information per input |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getVaultAccount**
> VaultAccount getVaultAccount()

Returns the requested vault account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiGetVaultAccountRequest, VaultAccount } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiGetVaultAccountRequest = {
  // string | The ID of the vault account to return type: string
  vaultAccountId: vaultAccountId_example,
};

fireblocks.vaults.getVaultAccount(body).then((res: FireblocksResponse<VaultAccount>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] | The ID of the vault account to return type: string | defaults to undefined


### Return type

**[VaultAccount](../models/VaultAccount.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A Vault Account object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getVaultAccountAsset**
> VaultAsset getVaultAccountAsset()

Returns a wallet for a specific asset of a vault account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiGetVaultAccountAssetRequest, VaultAsset } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiGetVaultAccountAssetRequest = {
  // string | The ID of the vault account to return
  vaultAccountId: vaultAccountId_example,
  // string | The ID of the asset
  assetId: assetId_example,
};

fireblocks.vaults.getVaultAccountAsset(body).then((res: FireblocksResponse<VaultAsset>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] | The ID of the vault account to return | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined


### Return type

**[VaultAsset](../models/VaultAsset.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A VaultAsset object |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getVaultAccountAssetAddressesPaginated**
> PaginatedAddressResponse getVaultAccountAssetAddressesPaginated()

Returns a paginated response of the addresses for a given vault account and asset.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiGetVaultAccountAssetAddressesPaginatedRequest, PaginatedAddressResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiGetVaultAccountAssetAddressesPaginatedRequest = {
  // string | The ID of the vault account to return
  vaultAccountId: vaultAccountId_example,
  // string | The ID of the asset
  assetId: assetId_example,
  // number (optional)
  limit: 8.14,
  // string (optional)
  before: before_example,
  // string (optional)
  after: after_example,
};

fireblocks.vaults.getVaultAccountAssetAddressesPaginated(body).then((res: FireblocksResponse<PaginatedAddressResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] | The ID of the vault account to return | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **before** | [**string**] |  | (optional) defaults to undefined
 **after** | [**string**] |  | (optional) defaults to undefined


### Return type

**[PaginatedAddressResponse](../models/PaginatedAddressResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of addresses, and pagination info. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getVaultAssets**
> GetVaultAssetsResponse getVaultAssets()

Gets the assets amount summary for all accounts or filtered accounts.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiGetVaultAssetsRequest, GetVaultAssetsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiGetVaultAssetsRequest = {
  // string (optional)
  accountNamePrefix: accountNamePrefix_example,
  // string (optional)
  accountNameSuffix: accountNameSuffix_example,
};

fireblocks.vaults.getVaultAssets(body).then((res: FireblocksResponse<GetVaultAssetsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountNamePrefix** | [**string**] |  | (optional) defaults to undefined
 **accountNameSuffix** | [**string**] |  | (optional) defaults to undefined


### Return type

**[GetVaultAssetsResponse](../models/GetVaultAssetsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Amount by asset |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getVaultBalanceByAsset**
> VaultAsset getVaultBalanceByAsset()

Gets the vault balance summary for an asset.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiGetVaultBalanceByAssetRequest, VaultAsset } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiGetVaultBalanceByAssetRequest = {
  // string
  assetId: assetId_example,
};

fireblocks.vaults.getVaultBalanceByAsset(body).then((res: FireblocksResponse<VaultAsset>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**[VaultAsset](../models/VaultAsset.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Vault amount by asset |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **hideVaultAccount**
> VaultActionStatus hideVaultAccount()

Hides the requested vault account from the web console view.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiHideVaultAccountRequest, VaultActionStatus } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiHideVaultAccountRequest = {
  // string | The vault account to hide
  vaultAccountId: vaultAccountId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.hideVaultAccount(body).then((res: FireblocksResponse<VaultActionStatus>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] | The vault account to hide | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[VaultActionStatus](../models/VaultActionStatus.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setCustomerRefIdForAddress**
> VaultActionStatus setCustomerRefIdForAddress(setCustomerRefIdForAddressRequest, )

Sets an AML/KYT customer reference ID for a specific address.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiSetCustomerRefIdForAddressRequest, VaultActionStatus } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiSetCustomerRefIdForAddressRequest = {
  // SetCustomerRefIdForAddressRequest
  setCustomerRefIdForAddressRequest: param_value,
  // string | The ID of the vault account
  vaultAccountId: vaultAccountId_example,
  // string | The ID of the asset
  assetId: assetId_example,
  // string | The address for which to add a description. For XRP, use <address>:<tag>, for all other assets, use only the address
  addressId: addressId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.setCustomerRefIdForAddress(body).then((res: FireblocksResponse<VaultActionStatus>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setCustomerRefIdForAddressRequest** | **[SetCustomerRefIdForAddressRequest](../models/SetCustomerRefIdForAddressRequest.md)**|  |
 **vaultAccountId** | [**string**] | The ID of the vault account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **addressId** | [**string**] | The address for which to add a description. For XRP, use &lt;address&gt;:&lt;tag&gt;, for all other assets, use only the address | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[VaultActionStatus](../models/VaultActionStatus.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setVaultAccountAutoFuel**
> VaultActionStatus setVaultAccountAutoFuel(setAutoFuelRequest, )

Sets the autofueling property of the vault account to enabled or disabled.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiSetVaultAccountAutoFuelRequest, VaultActionStatus } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiSetVaultAccountAutoFuelRequest = {
  // SetAutoFuelRequest
  setAutoFuelRequest: param_value,
  // string | The vault account ID
  vaultAccountId: vaultAccountId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.setVaultAccountAutoFuel(body).then((res: FireblocksResponse<VaultActionStatus>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setAutoFuelRequest** | **[SetAutoFuelRequest](../models/SetAutoFuelRequest.md)**|  |
 **vaultAccountId** | [**string**] | The vault account ID | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[VaultActionStatus](../models/VaultActionStatus.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setVaultAccountCustomerRefId**
> VaultActionStatus setVaultAccountCustomerRefId(setCustomerRefIdRequest, )

Assigns an AML/KYT customer reference ID for the vault account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiSetVaultAccountCustomerRefIdRequest, VaultActionStatus } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiSetVaultAccountCustomerRefIdRequest = {
  // SetCustomerRefIdRequest
  setCustomerRefIdRequest: param_value,
  // string | The vault account ID
  vaultAccountId: vaultAccountId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.setVaultAccountCustomerRefId(body).then((res: FireblocksResponse<VaultActionStatus>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setCustomerRefIdRequest** | **[SetCustomerRefIdRequest](../models/SetCustomerRefIdRequest.md)**|  |
 **vaultAccountId** | [**string**] | The vault account ID | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[VaultActionStatus](../models/VaultActionStatus.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **unhideVaultAccount**
> VaultActionStatus unhideVaultAccount()

Makes a hidden vault account visible in web console view.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiUnhideVaultAccountRequest, VaultActionStatus } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiUnhideVaultAccountRequest = {
  // string | The vault account to unhide
  vaultAccountId: vaultAccountId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.unhideVaultAccount(body).then((res: FireblocksResponse<VaultActionStatus>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] | The vault account to unhide | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[VaultActionStatus](../models/VaultActionStatus.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateVaultAccount**
> RenameVaultAccountResponse updateVaultAccount(updateVaultAccountRequest, )

Renames the requested vault account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiUpdateVaultAccountRequest, RenameVaultAccountResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiUpdateVaultAccountRequest = {
  // UpdateVaultAccountRequest
  updateVaultAccountRequest: param_value,
  // string | The ID of the vault account to edit
  vaultAccountId: vaultAccountId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.updateVaultAccount(body).then((res: FireblocksResponse<RenameVaultAccountResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateVaultAccountRequest** | **[UpdateVaultAccountRequest](../models/UpdateVaultAccountRequest.md)**|  |
 **vaultAccountId** | [**string**] | The ID of the vault account to edit | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[RenameVaultAccountResponse](../models/RenameVaultAccountResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateVaultAccountAssetAddress**
> VaultActionStatus updateVaultAccountAssetAddress()

Updates the description of an existing address of an asset in a vault account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiUpdateVaultAccountAssetAddressRequest, VaultActionStatus } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiUpdateVaultAccountAssetAddressRequest = {
  // string | The ID of the vault account
  vaultAccountId: vaultAccountId_example,
  // string | The ID of the asset
  assetId: assetId_example,
  // string | The address for which to add a description. For XRP, use <address>:<tag>, for all other assets, use only the address
  addressId: addressId_example,
  // UpdateVaultAccountAssetAddressRequest (optional)
  updateVaultAccountAssetAddressRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.updateVaultAccountAssetAddress(body).then((res: FireblocksResponse<VaultActionStatus>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateVaultAccountAssetAddressRequest** | **[UpdateVaultAccountAssetAddressRequest](../models/UpdateVaultAccountAssetAddressRequest.md)**|  |
 **vaultAccountId** | [**string**] | The ID of the vault account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **addressId** | [**string**] | The address for which to add a description. For XRP, use &lt;address&gt;:&lt;tag&gt;, for all other assets, use only the address | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[VaultActionStatus](../models/VaultActionStatus.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateVaultAccountAssetBalance**
> VaultAsset updateVaultAccountAssetBalance()

Updates the balance of a specific asset in a vault account.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, VaultsApiUpdateVaultAccountAssetBalanceRequest, VaultAsset } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: VaultsApiUpdateVaultAccountAssetBalanceRequest = {
  // string | The ID of the vault account to return
  vaultAccountId: vaultAccountId_example,
  // string | The ID of the asset
  assetId: assetId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.vaults.updateVaultAccountAssetBalance(body).then((res: FireblocksResponse<VaultAsset>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] | The ID of the vault account to return | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[VaultAsset](../models/VaultAsset.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A VaultAsset object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



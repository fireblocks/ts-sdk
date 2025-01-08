# EmbeddedWalletsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPublicKeyInfoForAddressNcw**](#getPublicKeyInfoForAddressNcw) | **GET** /ncw/{walletId}/accounts/{accountId}/{assetId}/{change}/{addressIndex}/public_key_info | Get the public key of an asset
[**getPublicKeyInfoNcw**](#getPublicKeyInfoNcw) | **GET** /ncw/{walletId}/public_key_info | Get the public key for a derivation path


# **getPublicKeyInfoForAddressNcw**
> PublicKeyInformation getPublicKeyInfoForAddressNcw()

Gets the public key of an asset associated with a specific account within a Non-Custodial Wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetPublicKeyInfoForAddressNcwRequest, PublicKeyInformation } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetPublicKeyInfoForAddressNcwRequest = {
  // string | The ID of the Non-Custodial wallet
  walletId: 550e8400-e29b-41d4-a716-446655440000,
  // string | The ID of the account
  accountId: 0,
  // string | The ID of the asset
  assetId: BTC,
  // number | BIP44 derivation path - change value
  change: 0,
  // number | BIP44 derivation path - index value
  addressIndex: 0,
  // boolean | Compressed/Uncompressed public key format (optional)
  compressed: true,
};

fireblocks.embeddedWallets.getPublicKeyInfoForAddressNcw(body).then((res: FireblocksResponse<PublicKeyInformation>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | The ID of the Non-Custodial wallet | defaults to undefined
 **accountId** | [**string**] | The ID of the account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **change** | [**number**] | BIP44 derivation path - change value | defaults to undefined
 **addressIndex** | [**number**] | BIP44 derivation path - index value | defaults to undefined
 **compressed** | [**boolean**] | Compressed/Uncompressed public key format | (optional) defaults to undefined


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

# **getPublicKeyInfoNcw**
> PublicKeyInformation getPublicKeyInfoNcw()

Gets the public key information based on derivation path and signing algorithm within a Non-Custodial Wallet

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, EmbeddedWalletsApiGetPublicKeyInfoNcwRequest, PublicKeyInformation } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: EmbeddedWalletsApiGetPublicKeyInfoNcwRequest = {
  // string | The ID of the Non-Custodial wallet
  walletId: 550e8400-e29b-41d4-a716-446655440000,
  // string | An array of integers (passed as JSON stringified array) representing the full BIP44 derivation path of the requested public key.  The first element must always be 44. 
  derivationPath: [44,0,0,0,0],
  // 'MPC_ECDSA_SECP256K1' | 'MPC_ECDSA_SECP256R1' | 'MPC_EDDSA_ED25519' | Elliptic Curve
  algorithm: algorithm_example,
  // boolean (optional)
  compressed: true,
};

fireblocks.embeddedWallets.getPublicKeyInfoNcw(body).then((res: FireblocksResponse<PublicKeyInformation>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | [**string**] | The ID of the Non-Custodial wallet | defaults to undefined
 **derivationPath** | [**string**] | An array of integers (passed as JSON stringified array) representing the full BIP44 derivation path of the requested public key.  The first element must always be 44.  | defaults to undefined
 **algorithm** | [**&#39;MPC_ECDSA_SECP256K1&#39; | &#39;MPC_ECDSA_SECP256R1&#39; | &#39;MPC_EDDSA_ED25519&#39;**]**Array<&#39;MPC_ECDSA_SECP256K1&#39; &#124; &#39;MPC_ECDSA_SECP256R1&#39; &#124; &#39;MPC_EDDSA_ED25519&#39;>** | Elliptic Curve | defaults to undefined
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



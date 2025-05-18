# KeyLinkBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSigningKey**](#createSigningKey) | **POST** /key_link/signing_keys | Add a new signing key
[**createValidationKey**](#createValidationKey) | **POST** /key_link/validation_keys | Add a new validation key
[**disableValidationKey**](#disableValidationKey) | **PATCH** /key_link/validation_keys/{keyId} | Disables a validation key
[**getSigningKey**](#getSigningKey) | **GET** /key_link/signing_keys/{keyId} | Get a signing key by &#x60;keyId&#x60;
[**getSigningKeysList**](#getSigningKeysList) | **GET** /key_link/signing_keys | Get list of signing keys
[**getValidationKey**](#getValidationKey) | **GET** /key_link/validation_keys/{keyId} | Get a validation key by &#x60;keyId&#x60;
[**getValidationKeysList**](#getValidationKeysList) | **GET** /key_link/validation_keys | Get list of registered validation keys
[**setAgentId**](#setAgentId) | **PATCH** /key_link/signing_keys/{keyId}/agent_user_id | Set agent user id that can sign with the signing key identified by the Fireblocks provided &#x60;keyId&#x60;
[**updateSigningKey**](#updateSigningKey) | **PATCH** /key_link/signing_keys/{keyId} | Modify the signing by Fireblocks provided &#x60;keyId&#x60;


# **createSigningKey**
> SigningKeyDto createSigningKey(createSigningKeyDto)

Adds a new signing key to the workspace. The added key will be linked to the specific Fireblocks agent user ID. The same user will receive the proof of ownership message to be signed, and upon successful proof, the key will become enabled. Please note that this endpoint is available only for Key Link enabled workspaces. **Note:**  This endpoint is currently in beta and might be subject to changes. If you want to participate and learn more about the Fireblocks Key Link, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, KeyLinkBetaApiCreateSigningKeyRequest, SigningKeyDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: KeyLinkBetaApiCreateSigningKeyRequest = {
  // CreateSigningKeyDto
  createSigningKeyDto: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.keyLinkBeta.createSigningKey(body).then((res: FireblocksResponse<SigningKeyDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSigningKeyDto** | **[CreateSigningKeyDto](../models/CreateSigningKeyDto.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SigningKeyDto](../models/SigningKeyDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Newly created signing key |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createValidationKey**
> CreateValidationKeyResponseDto createValidationKey(createValidationKeyDto)

Adds a new validation key used to validate signing keys. The new validation key will undergo an approval process by the workspace quorum. Please note that this endpoint is available only for Key Link enabled workspaces. **Note:**  This endpoint is currently in beta and might be subject to changes. If you want to participate and learn more about the Fireblocks Key Link, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, KeyLinkBetaApiCreateValidationKeyRequest, CreateValidationKeyResponseDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: KeyLinkBetaApiCreateValidationKeyRequest = {
  // CreateValidationKeyDto
  createValidationKeyDto: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.keyLinkBeta.createValidationKey(body).then((res: FireblocksResponse<CreateValidationKeyResponseDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createValidationKeyDto** | **[CreateValidationKeyDto](../models/CreateValidationKeyDto.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CreateValidationKeyResponseDto](../models/CreateValidationKeyResponseDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The validation key that was added and is pending approval. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **disableValidationKey**
> ValidationKeyDto disableValidationKey(modifyValidationKeyDto, )

Allows disabling validation key even if it has not expired yet. It is not allowed to enable the validation key back. Another key has to be used for future validations. Please note that this endpoint is available only for Key Link enabled workspaces. **Note:**  This endpoint is currently in beta and might be subject to changes. If you want to participate and learn more about the Fireblocks Key Link, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, KeyLinkBetaApiDisableValidationKeyRequest, ValidationKeyDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: KeyLinkBetaApiDisableValidationKeyRequest = {
  // ModifyValidationKeyDto
  modifyValidationKeyDto: param_value,
  // string | The unique identifier for the validation key provided by Fireblocks
  keyId: 46a92767-5f93-4a46-9eed-f012196bb4fc,
};

fireblocks.keyLinkBeta.disableValidationKey(body).then((res: FireblocksResponse<ValidationKeyDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modifyValidationKeyDto** | **[ModifyValidationKeyDto](../models/ModifyValidationKeyDto.md)**|  |
 **keyId** | [**string**] | The unique identifier for the validation key provided by Fireblocks | defaults to undefined


### Return type

**[ValidationKeyDto](../models/ValidationKeyDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Modified validation key data |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSigningKey**
> SigningKeyDto getSigningKey()

Returns a signing key if it exists, identified by the specified Fireblocks provided `keyId`. Please note that this endpoint is available only for Key Link enabled workspaces. **Note:**  This endpoint is currently in beta and might be subject to changes. If you want to participate and learn more about the Fireblocks Key Link, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, KeyLinkBetaApiGetSigningKeyRequest, SigningKeyDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: KeyLinkBetaApiGetSigningKeyRequest = {
  // string | The unique identifier for the signing key provided by Fireblocks
  keyId: 46a92767-5f93-4a46-9eed-f012196bb4fc,
};

fireblocks.keyLinkBeta.getSigningKey(body).then((res: FireblocksResponse<SigningKeyDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyId** | [**string**] | The unique identifier for the signing key provided by Fireblocks | defaults to undefined


### Return type

**[SigningKeyDto](../models/SigningKeyDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Requested signing key data |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSigningKeysList**
> GetSigningKeyResponseDto getSigningKeysList()

Returns the list of signing keys in the workspace Please note that this endpoint is available only for Key Link enabled workspaces. **Note:**  This endpoint is currently in beta and might be subject to changes. If you want to participate and learn more about the Fireblocks Key Link, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, KeyLinkBetaApiGetSigningKeysListRequest, GetSigningKeyResponseDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: KeyLinkBetaApiGetSigningKeysListRequest = {
  // string | Cursor to the next page (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Amount of results to return in the next page (optional)
  pageSize: 8.14,
  // 'createdAt' | Field(s) to use for sorting (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | Is the order ascending or descending (optional)
  order: order_example,
  // number | Return keys assigned to a specific vault (optional)
  vaultAccountId: 4,
  // string | Return keys associated with a specific agent user (optional)
  agentUserId: 12fed207-5bdf-4a0c-ab12-fcd2627f75d1,
  // 'ECDSA_SECP256K1' | 'EDDSA_ED25519' | Return only keys with a specific algorithm (optional)
  algorithm: ECDSA_SECP256K1,
  // boolean | Return keys that have been proof of ownership (optional)
  enabled: true,
  // boolean | Return keys that are proof of ownership but not assigned. Available filter can be used only when vaultAccountId and enabled filters are not set (optional)
  available: true,
  // boolean | Return keys that are assigned to a vault account (optional)
  isAssigned: true,
};

fireblocks.keyLinkBeta.getSigningKeysList(body).then((res: FireblocksResponse<GetSigningKeyResponseDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Cursor to the next page | (optional) defaults to undefined
 **pageSize** | [**number**] | Amount of results to return in the next page | (optional) defaults to 10
 **sortBy** | [**&#39;createdAt&#39;**]**Array<&#39;createdAt&#39;>** | Field(s) to use for sorting | (optional) defaults to 'createdAt'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Is the order ascending or descending | (optional) defaults to 'ASC'
 **vaultAccountId** | [**number**] | Return keys assigned to a specific vault | (optional) defaults to undefined
 **agentUserId** | [**string**] | Return keys associated with a specific agent user | (optional) defaults to undefined
 **algorithm** | [**&#39;ECDSA_SECP256K1&#39; | &#39;EDDSA_ED25519&#39;**]**Array<&#39;ECDSA_SECP256K1&#39; &#124; &#39;EDDSA_ED25519&#39;>** | Return only keys with a specific algorithm | (optional) defaults to undefined
 **enabled** | [**boolean**] | Return keys that have been proof of ownership | (optional) defaults to undefined
 **available** | [**boolean**] | Return keys that are proof of ownership but not assigned. Available filter can be used only when vaultAccountId and enabled filters are not set | (optional) defaults to undefined
 **isAssigned** | [**boolean**] | Return keys that are assigned to a vault account | (optional) defaults to undefined


### Return type

**[GetSigningKeyResponseDto](../models/GetSigningKeyResponseDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of signing keys and a data that allows requesting the next page if applicable |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getValidationKey**
> ValidationKeyDto getValidationKey()

Returns a validation key if it exists, identified by the specified `keyId`. Please note that this endpoint is available only for Key Link enabled workspaces. **Note:**  This endpoint is currently in beta and might be subject to changes. If you want to participate and learn more about the Fireblocks Key Link, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, KeyLinkBetaApiGetValidationKeyRequest, ValidationKeyDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: KeyLinkBetaApiGetValidationKeyRequest = {
  // string
  keyId: keyId_example,
};

fireblocks.keyLinkBeta.getValidationKey(body).then((res: FireblocksResponse<ValidationKeyDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keyId** | [**string**] |  | defaults to undefined


### Return type

**[ValidationKeyDto](../models/ValidationKeyDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested validation key data |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getValidationKeysList**
> GetValidationKeyResponseDto getValidationKeysList()

Returns the list of validation keys in the workspace Please note that this endpoint is available only for Key Link enabled workspaces. **Note:**  This endpoint is currently in beta and might be subject to changes. If you want to participate and learn more about the Fireblocks Key Link, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, KeyLinkBetaApiGetValidationKeysListRequest, GetValidationKeyResponseDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: KeyLinkBetaApiGetValidationKeysListRequest = {
  // string | Cursor to the next page (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Amount of results to return in the next page (optional)
  pageSize: 8.14,
  // 'createdAt' | Field(s) to use for sorting (optional)
  sortBy: sortBy_example,
  // 'ASC' | 'DESC' | Is the order ascending or descending (optional)
  order: order_example,
};

fireblocks.keyLinkBeta.getValidationKeysList(body).then((res: FireblocksResponse<GetValidationKeyResponseDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Cursor to the next page | (optional) defaults to undefined
 **pageSize** | [**number**] | Amount of results to return in the next page | (optional) defaults to 10
 **sortBy** | [**&#39;createdAt&#39;**]**Array<&#39;createdAt&#39;>** | Field(s) to use for sorting | (optional) defaults to 'createdAt'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Is the order ascending or descending | (optional) defaults to 'ASC'


### Return type

**[GetValidationKeyResponseDto](../models/GetValidationKeyResponseDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Validation keys list along with data required to request the next page if applicable |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setAgentId**
> setAgentId(modifySigningKeyAgentIdDto, )

Can modify existing signing key id if the key is not enabled. The change done in background and will be visible once applied. If key is already enabled (after proof of ownership) the user cannot be changed. Please note that this endpoint is available only for Key Link enabled workspaces. **Note:**  This endpoint is currently in beta and might be subject to changes. If you want to participate and learn more about the Fireblocks Key Link, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, KeyLinkBetaApiSetAgentIdRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: KeyLinkBetaApiSetAgentIdRequest = {
  // ModifySigningKeyAgentIdDto
  modifySigningKeyAgentIdDto: param_value,
  // string | The unique identifier for the signing key provided by Fireblocks
  keyId: 46a92767-5f93-4a46-9eed-f012196bb4fc,
};

fireblocks.keyLinkBeta.setAgentId(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modifySigningKeyAgentIdDto** | **[ModifySigningKeyAgentIdDto](../models/ModifySigningKeyAgentIdDto.md)**|  |
 **keyId** | [**string**] | The unique identifier for the signing key provided by Fireblocks | defaults to undefined


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
**204** | Agent user id modification process has started in background. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateSigningKey**
> SigningKeyDto updateSigningKey(modifySigningKeyDto, )

Allows assigning the signing key to a vault account, if it hasn\'t been assigned to any other vault accounts yet. Please note that this endpoint is available only for Key Link enabled workspaces. **Note:**  This endpoint is currently in beta and might be subject to changes. If you want to participate and learn more about the Fireblocks Key Link, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, KeyLinkBetaApiUpdateSigningKeyRequest, SigningKeyDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: KeyLinkBetaApiUpdateSigningKeyRequest = {
  // ModifySigningKeyDto
  modifySigningKeyDto: param_value,
  // string | The unique identifier for the signing key provided by Fireblocks
  keyId: 46a92767-5f93-4a46-9eed-f012196bb4fc,
};

fireblocks.keyLinkBeta.updateSigningKey(body).then((res: FireblocksResponse<SigningKeyDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modifySigningKeyDto** | **[ModifySigningKeyDto](../models/ModifySigningKeyDto.md)**|  |
 **keyId** | [**string**] | The unique identifier for the signing key provided by Fireblocks | defaults to undefined


### Return type

**[SigningKeyDto](../models/SigningKeyDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Modified signing key data |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



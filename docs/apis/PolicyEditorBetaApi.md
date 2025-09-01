# PolicyEditorBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivePolicyLegacy**](#getActivePolicyLegacy) | **GET** /tap/active_policy | Get the active policy and its validation
[**getDraftLegacy**](#getDraftLegacy) | **GET** /tap/draft | Get the active draft
[**publishDraftLegacy**](#publishDraftLegacy) | **POST** /tap/draft | Send publish request for a certain draft id
[**publishPolicyRules**](#publishPolicyRules) | **POST** /tap/publish | Send publish request for a set of policy rules
[**updateDraftLegacy**](#updateDraftLegacy) | **PUT** /tap/draft | Update the draft with a new set of rules


# **getActivePolicyLegacy**
> LegacyPolicyAndValidationResponse getActivePolicyLegacy()

Legacy Endpoint – Returns the active policy and its validation. </br> **Note:**  - This endpoint will remain available for the foreseeable future and is not deprecated.</br> - The `getActivePolicy` endpoint under policy/paths provides policy type-specific operations and improved functionality.</br> - These endpoints are currently in beta and might be subject to changes.</br> If you want to participate and learn more about the Fireblocks TAP, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, LegacyPolicyAndValidationResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.policyEditorBeta.getActivePolicyLegacy(body).then((res: FireblocksResponse<LegacyPolicyAndValidationResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[LegacyPolicyAndValidationResponse](../models/LegacyPolicyAndValidationResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A policy object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDraftLegacy**
> LegacyDraftReviewAndValidationResponse getDraftLegacy()

Legacy Endpoint – Returns the active draft and its validation. </br> **Note:**  - This endpoint will remain available for the foreseeable future and is not deprecated.</br> - The `getDraft` endpoint under policy/paths provides policy type-specific operations and improved functionality.</br> - These endpoints are currently in beta and might be subject to changes.</br> If you want to participate and learn more about the Fireblocks TAP, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, LegacyDraftReviewAndValidationResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.policyEditorBeta.getDraftLegacy(body).then((res: FireblocksResponse<LegacyDraftReviewAndValidationResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[LegacyDraftReviewAndValidationResponse](../models/LegacyDraftReviewAndValidationResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A draft validation response object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **publishDraftLegacy**
> LegacyPublishResult publishDraftLegacy(legacyPublishDraftRequest)

Legacy Endpoint – Send publish request of certain draft id and returns the response. </br> **Note:**  - This endpoint will remain available for the foreseeable future and is not deprecated.</br> - The `publishDraft` endpoint under policy/paths provides improved functionality and better performance.</br> - These endpoints are currently in beta and might be subject to changes.</br> If you want to participate and learn more about the Fireblocks TAP, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, PolicyEditorBetaApiPublishDraftLegacyRequest, LegacyPublishResult } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: PolicyEditorBetaApiPublishDraftLegacyRequest = {
  // LegacyPublishDraftRequest
  legacyPublishDraftRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.policyEditorBeta.publishDraftLegacy(body).then((res: FireblocksResponse<LegacyPublishResult>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyPublishDraftRequest** | **[LegacyPublishDraftRequest](../models/LegacyPublishDraftRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[LegacyPublishResult](../models/LegacyPublishResult.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A policy publish result object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **publishPolicyRules**
> LegacyPublishResult publishPolicyRules(legacyPolicyRules)

Send publish request of set of policy rules and returns the response. </br> **Note:** These endpoints are currently in beta and might be subject to changes. If you want to participate and learn more about the Fireblocks TAP, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, PolicyEditorBetaApiPublishPolicyRulesRequest, LegacyPublishResult } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: PolicyEditorBetaApiPublishPolicyRulesRequest = {
  // LegacyPolicyRules
  legacyPolicyRules: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.policyEditorBeta.publishPolicyRules(body).then((res: FireblocksResponse<LegacyPublishResult>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyPolicyRules** | **[LegacyPolicyRules](../models/LegacyPolicyRules.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[LegacyPublishResult](../models/LegacyPublishResult.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A policy publish result object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateDraftLegacy**
> LegacyDraftReviewAndValidationResponse updateDraftLegacy(legacyPolicyRules)

Legacy Endpoint – Update the draft and return its validation. </br> **Note:**  - This endpoint will remain available for the foreseeable future and is not deprecated.</br> - The `updateDraft` endpoint under policy/paths provides policy type-specific operations and improved functionality.</br> - These endpoints are currently in beta and might be subject to changes.</br> If you want to participate and learn more about the Fireblocks TAP, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, PolicyEditorBetaApiUpdateDraftLegacyRequest, LegacyDraftReviewAndValidationResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: PolicyEditorBetaApiUpdateDraftLegacyRequest = {
  // LegacyPolicyRules
  legacyPolicyRules: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.policyEditorBeta.updateDraftLegacy(body).then((res: FireblocksResponse<LegacyDraftReviewAndValidationResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legacyPolicyRules** | **[LegacyPolicyRules](../models/LegacyPolicyRules.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[LegacyDraftReviewAndValidationResponse](../models/LegacyDraftReviewAndValidationResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A draft validation response object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



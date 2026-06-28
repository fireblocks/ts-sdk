# PolicyEditorV2Api

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getActivePolicy**](#getActivePolicy) | **GET** /policy/active_policy | Get the active policy and its validation by policy type
[**getDraft**](#getDraft) | **GET** /policy/draft | Get the active draft by policy type
[**publishDraft**](#publishDraft) | **POST** /policy/draft | Send publish request for a certain draft id
[**updateDraft**](#updateDraft) | **PUT** /policy/draft | Update the draft with a new set of rules by policy types


# **getActivePolicy**
> PolicyAndValidationResponse getActivePolicy()

Returns the active policy and its validation for a specific policy type.  Endpoint Permissions: Owner, Admin, Non-Signing Admin. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, PolicyEditorV2ApiGetActivePolicyRequest, PolicyAndValidationResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: PolicyEditorV2ApiGetActivePolicyRequest = {
  // PolicyType | The policy type(s) to retrieve. Can be a single type or multiple types by repeating the parameter (e.g., ?policyType=TRANSFER&policyType=MINT).
  policyType: param_value,
};

fireblocks.policyEditorV2.getActivePolicy(body).then((res: FireblocksResponse<PolicyAndValidationResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyType** | **PolicyType** | The policy type(s) to retrieve. Can be a single type or multiple types by repeating the parameter (e.g., ?policyType&#x3D;TRANSFER&amp;policyType&#x3D;MINT). | defaults to undefined


### Return type

**[PolicyAndValidationResponse](../models/PolicyAndValidationResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A policy object with validation |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDraft**
> DraftReviewAndValidationResponse getDraft()

Returns the active draft and its validation for a specific policy type.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, PolicyEditorV2ApiGetDraftRequest, DraftReviewAndValidationResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: PolicyEditorV2ApiGetDraftRequest = {
  // PolicyType | The policy type(s) to retrieve. Can be a single type or multiple types by repeating the parameter (e.g., ?policyType=TRANSFER&policyType=MINT).
  policyType: param_value,
};

fireblocks.policyEditorV2.getDraft(body).then((res: FireblocksResponse<DraftReviewAndValidationResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyType** | **PolicyType** | The policy type(s) to retrieve. Can be a single type or multiple types by repeating the parameter (e.g., ?policyType&#x3D;TRANSFER&amp;policyType&#x3D;MINT). | defaults to undefined


### Return type

**[DraftReviewAndValidationResponse](../models/DraftReviewAndValidationResponse.md)**

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

# **publishDraft**
> PublishResult publishDraft(publishDraftRequest)

Send publish request of certain draft id and returns the response.  **⚠️ IMPORTANT SECURITY NOTICE:**  The Fireblocks Policy is a critical security guardrail. Programmatically modifying your policy via the API introduces significant security risks. As an industry best practice, Fireblocks strongly recommends manual editing accompanied by strict human oversight and approval workflows for all policy changes. Programmatic updates should only be implemented by advanced users with comprehensive, multi-layer security controls in place.  If you want to learn more about the Fireblocks Policy Editor, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, PolicyEditorV2ApiPublishDraftRequest, PublishResult } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: PolicyEditorV2ApiPublishDraftRequest = {
  // PublishDraftRequest
  publishDraftRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.policyEditorV2.publishDraft(body).then((res: FireblocksResponse<PublishResult>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **publishDraftRequest** | **[PublishDraftRequest](../models/PublishDraftRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[PublishResult](../models/PublishResult.md)**

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

# **updateDraft**
> DraftReviewAndValidationResponse updateDraft(updateDraftRequest)

Update the draft and return its validation for specific policy types.  **⚠️ IMPORTANT SECURITY NOTICE:**  The Fireblocks Policy is a critical security guardrail. Programmatically modifying your policy via the API introduces significant security risks. As an industry best practice, Fireblocks strongly recommends manual editing accompanied by strict human oversight and approval workflows for all policy changes. Programmatic updates should only be implemented by advanced users with comprehensive, multi-layer security controls in place. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, PolicyEditorV2ApiUpdateDraftRequest, DraftReviewAndValidationResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: PolicyEditorV2ApiUpdateDraftRequest = {
  // UpdateDraftRequest
  updateDraftRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.policyEditorV2.updateDraft(body).then((res: FireblocksResponse<DraftReviewAndValidationResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateDraftRequest** | **[UpdateDraftRequest](../models/UpdateDraftRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[DraftReviewAndValidationResponse](../models/DraftReviewAndValidationResponse.md)**

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



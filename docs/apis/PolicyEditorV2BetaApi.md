# PolicyEditorV2BetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPolicyRuleQuota**](#getPolicyRuleQuota) | **POST** /policy/rules/quota | Calculate the AOT quota for a policy rule


# **getPolicyRuleQuota**
> PolicyRuleQuotaResponse getPolicyRuleQuota(policyRuleQuotaRequest)

Returns the Amount Over Time (AOT) quota calculated for a specific policy rule.  Endpoint Permissions: Owner, Admin, Non-Signing Admin. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, PolicyEditorV2BetaApiGetPolicyRuleQuotaRequest, PolicyRuleQuotaResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: PolicyEditorV2BetaApiGetPolicyRuleQuotaRequest = {
  // PolicyRuleQuotaRequest
  policyRuleQuotaRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.policyEditorV2Beta.getPolicyRuleQuota(body).then((res: FireblocksResponse<PolicyRuleQuotaResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **policyRuleQuotaRequest** | **[PolicyRuleQuotaRequest](../models/PolicyRuleQuotaRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[PolicyRuleQuotaResponse](../models/PolicyRuleQuotaResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The calculated AOT quota for the rule |  * X-Request-ID -  <br>  |
**400** | Invalid request parameters or rule configuration prevents AOT calculation. |  * X-Request-ID -  <br>  |
**403** | Caller lacks permission to access the requested rule. |  * X-Request-ID -  <br>  |
**404** | The requested policy rule was not found. |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**500** | Internal server error while calculating AOT quota. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



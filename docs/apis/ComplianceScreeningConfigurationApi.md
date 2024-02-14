# ComplianceScreeningConfigurationApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**travelRuleApiControllerGetPostScreeningPolicy**](#travelRuleApiControllerGetPostScreeningPolicy) | **GET** /screening/travel_rule/post_screening_policy | Travel Rule - View Post-Screening Policy
[**travelRuleApiControllerGetScreeningConfiguration**](#travelRuleApiControllerGetScreeningConfiguration) | **GET** /screening/travel_rule/policy_configuration | Get Travel Rule Screening Policy Configuration
[**travelRuleApiControllerGetScreeningPolicy**](#travelRuleApiControllerGetScreeningPolicy) | **GET** /screening/travel_rule/screening_policy | Travel Rule - View Screening Policy
[**travelRuleApiControllerUpdateTravelRuleConfig**](#travelRuleApiControllerUpdateTravelRuleConfig) | **PUT** /screening/travel_rule/policy_configuration | Update Travel Rule Configuration


# **travelRuleApiControllerGetPostScreeningPolicy**
> TravelRulePolicyResponse travelRuleApiControllerGetPostScreeningPolicy()

Get the post-screening policy for Travel Rule.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TravelRulePolicyResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8").replace(/\\n/gm, "\n");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.complianceScreeningConfiguration.travelRuleApiControllerGetPostScreeningPolicy(body).then((res: FireblocksResponse<TravelRulePolicyResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[TravelRulePolicyResponse](../models/TravelRulePolicyResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Post-screening policy retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **travelRuleApiControllerGetScreeningConfiguration**
> TravelRuleConfigurationsRequest travelRuleApiControllerGetScreeningConfiguration()

Retrieves the configuration for Travel Rule screening policy.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TravelRuleConfigurationsRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8").replace(/\\n/gm, "\n");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.complianceScreeningConfiguration.travelRuleApiControllerGetScreeningConfiguration(body).then((res: FireblocksResponse<TravelRuleConfigurationsRequest>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[TravelRuleConfigurationsRequest](../models/TravelRuleConfigurationsRequest.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Screening policy configuration retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **travelRuleApiControllerGetScreeningPolicy**
> TravelRuleProviderRulesConfigurationResponse travelRuleApiControllerGetScreeningPolicy()

Get the screening policy for Travel Rule.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TravelRuleProviderRulesConfigurationResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8").replace(/\\n/gm, "\n");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.complianceScreeningConfiguration.travelRuleApiControllerGetScreeningPolicy(body).then((res: FireblocksResponse<TravelRuleProviderRulesConfigurationResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[TravelRuleProviderRulesConfigurationResponse](../models/TravelRuleProviderRulesConfigurationResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Screening policy retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **travelRuleApiControllerUpdateTravelRuleConfig**
> TravelRuleConfigurationsRequest travelRuleApiControllerUpdateTravelRuleConfig()

Updates bypass screening, inbound delay, or outbound delay configurations for Travel Rule.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceScreeningConfigurationApiTravelRuleApiControllerUpdateTravelRuleConfigRequest, TravelRuleConfigurationsRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8").replace(/\\n/gm, "\n");

const fireblocks = new Fireblocks();

let body: ComplianceScreeningConfigurationApiTravelRuleApiControllerUpdateTravelRuleConfigRequest = {
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.complianceScreeningConfiguration.travelRuleApiControllerUpdateTravelRuleConfig(body).then((res: FireblocksResponse<TravelRuleConfigurationsRequest>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TravelRuleConfigurationsRequest](../models/TravelRuleConfigurationsRequest.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Configuration updated successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



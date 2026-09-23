# ComplianceOrchestratorBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getScreeningResult**](#getScreeningResult) | **GET** /compliance/orchestrator/screenings/{screeningId} | Get a Compliance Orchestrator screening\&#39;s result
[**getWorkflow**](#getWorkflow) | **GET** /compliance/orchestrator/workflows/{workflowId} | Get a Compliance Orchestrator workflow
[**triggerScreening**](#triggerScreening) | **POST** /compliance/orchestrator/screenings | Trigger a Compliance Orchestrator screening
[**updateWorkflowStatus**](#updateWorkflowStatus) | **PATCH** /compliance/orchestrator/workflows/{workflowId}/status | Update a Compliance Orchestrator workflow\&#39;s status


# **getScreeningResult**
> GetScreeningResultResponse getScreeningResult()

Returns the result of a screening started by `POST /v1/compliance/orchestrator/screenings`, with a result per workflow step and an audit log. Safe to poll: a screening still in flight reports `PENDING` or `RUNNING`. Only screenings owned by the requesting tenant are returned.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceOrchestratorBetaApiGetScreeningResultRequest, GetScreeningResultResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceOrchestratorBetaApiGetScreeningResultRequest = {
  // string | The screening\'s identifier, returned by `POST /v1/compliance/orchestrator/screenings`.
  screeningId: a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d,
};

fireblocks.complianceOrchestratorBeta.getScreeningResult(body).then((res: FireblocksResponse<GetScreeningResultResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **screeningId** | [**string**] | The screening\&#39;s identifier, returned by &#x60;POST /v1/compliance/orchestrator/screenings&#x60;. | defaults to undefined


### Return type

**[GetScreeningResultResponse](../models/GetScreeningResultResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Screening result |  * X-Request-ID -  <br>  |
**400** | Invalid request arguments. |  * X-Request-ID -  <br>  |
**404** | Screening result not found. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getWorkflow**
> GetWorkflowResponse getWorkflow()

Returns a workflow\'s status and its steps in execution order. Read it to see what a given `workflowId` will screen, and which fields its rules may reference.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceOrchestratorBetaApiGetWorkflowRequest, GetWorkflowResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceOrchestratorBetaApiGetWorkflowRequest = {
  // string | The workflow\'s identifier.
  workflowId: f47ac10b-58cc-4372-a567-0e02b2c3d479,
};

fireblocks.complianceOrchestratorBeta.getWorkflow(body).then((res: FireblocksResponse<GetWorkflowResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workflowId** | [**string**] | The workflow\&#39;s identifier. | defaults to undefined


### Return type

**[GetWorkflowResponse](../models/GetWorkflowResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workflow |  * X-Request-ID -  <br>  |
**400** | Invalid request arguments. |  * X-Request-ID -  <br>  |
**404** | Workflow not found. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **triggerScreening**
> TriggerScreeningResponse triggerScreening(triggerScreeningRequest)

Starts a compliance screening against an active workflow and returns a `screeningId`. The screening runs asynchronously — poll `GET /v1/compliance/orchestrator/screenings/{screeningId}` for the result.  Unlike the screening that applies automatically to submitted transactions under `/v1/screening`, this is called on demand, before anything exists on-chain.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceOrchestratorBetaApiTriggerScreeningRequest, TriggerScreeningResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceOrchestratorBetaApiTriggerScreeningRequest = {
  // TriggerScreeningRequest
  triggerScreeningRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.complianceOrchestratorBeta.triggerScreening(body).then((res: FireblocksResponse<TriggerScreeningResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **triggerScreeningRequest** | **[TriggerScreeningRequest](../models/TriggerScreeningRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TriggerScreeningResponse](../models/TriggerScreeningResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Screening accepted |  * X-Request-ID -  <br>  |
**400** | Invalid or missing required input fields. |  * X-Request-ID -  <br>  |
**404** | Workflow not found. |  * X-Request-ID -  <br>  |
**409** | Workflow is not active. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateWorkflowStatus**
> UpdateWorkflowStatusResponse updateWorkflowStatus(updateWorkflowStatusRequest, )

Moves a workflow between `DRAFT` and `ACTIVE`. A workflow must be `ACTIVE` before `POST /v1/compliance/orchestrator/screenings` will accept a screening against it. Returns the workflow\'s id and new status, not its full configuration.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceOrchestratorBetaApiUpdateWorkflowStatusRequest, UpdateWorkflowStatusResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceOrchestratorBetaApiUpdateWorkflowStatusRequest = {
  // UpdateWorkflowStatusRequest
  updateWorkflowStatusRequest: param_value,
  // string | The workflow\'s identifier.
  workflowId: f47ac10b-58cc-4372-a567-0e02b2c3d479,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.complianceOrchestratorBeta.updateWorkflowStatus(body).then((res: FireblocksResponse<UpdateWorkflowStatusResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateWorkflowStatusRequest** | **[UpdateWorkflowStatusRequest](../models/UpdateWorkflowStatusRequest.md)**|  |
 **workflowId** | [**string**] | The workflow\&#39;s identifier. | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[UpdateWorkflowStatusResponse](../models/UpdateWorkflowStatusResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Workflow status updated |  * X-Request-ID -  <br>  |
**400** | Invalid request arguments. |  * X-Request-ID -  <br>  |
**404** | Workflow not found. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



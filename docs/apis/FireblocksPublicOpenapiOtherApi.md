# FireblocksPublicOpenapiOtherApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelJob**](#cancelJob) | **POST** /batch/{jobId}/cancel | Cancel a running job
[**continueJob**](#continueJob) | **POST** /batch/{jobId}/continue | Continue a paused job
[**getJob**](#getJob) | **GET** /batch/{jobId} | Get job details
[**getJobTasks**](#getJobTasks) | **GET** /batch/{jobId}/tasks | Return a list of tasks for given job
[**getJobs**](#getJobs) | **GET** /batch/jobs | Return a list of jobs belonging to tenant
[**pauseJob**](#pauseJob) | **POST** /batch/{jobId}/pause | Pause a job


# **cancelJob**
> cancelJob()

Stop the given job immediately. If the job is in the ‘Active’ state, the job will be canceled after completing the current task. Vault accounts and Wallets that are already created will not be affected.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, FireblocksPublicOpenapiOtherApiCancelJobRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: FireblocksPublicOpenapiOtherApiCancelJobRequest = {
  // string | The requested job id
  jobId: jobId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.fireblocksPublicOpenapiOther.cancelJob(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**string**] | The requested job id | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | canceled successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **continueJob**
> continueJob()

Continue the given paused job.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, FireblocksPublicOpenapiOtherApiContinueJobRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: FireblocksPublicOpenapiOtherApiContinueJobRequest = {
  // string | The requested job id
  jobId: jobId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.fireblocksPublicOpenapiOther.continueJob(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**string**] | The requested job id | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | continued successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getJob**
> Job getJob()

Get an object describing the given job

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, FireblocksPublicOpenapiOtherApiGetJobRequest, Job } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: FireblocksPublicOpenapiOtherApiGetJobRequest = {
  // string | The requested job id
  jobId: jobId_example,
};

fireblocks.fireblocksPublicOpenapiOther.getJob(body).then((res: FireblocksResponse<Job>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**string**] | The requested job id | defaults to undefined


### Return type

**[Job](../models/Job.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A JSON object that describes the job |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getJobTasks**
> Array<Task> getJobTasks()

Return a list of tasks for given job

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, FireblocksPublicOpenapiOtherApiGetJobTasksRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: FireblocksPublicOpenapiOtherApiGetJobTasksRequest = {
  // string | The requested job id
  jobId: jobId_example,
};

fireblocks.fireblocksPublicOpenapiOther.getJobTasks(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**string**] | The requested job id | defaults to undefined


### Return type

**[Array<Task>](../models/Array<Task>.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of tasks |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getJobs**
> Array<Job> getJobs()

Get an array of objects including all active, paused, canceled, and complete jobs in a workspace.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, FireblocksPublicOpenapiOtherApiGetJobsRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: FireblocksPublicOpenapiOtherApiGetJobsRequest = {
  // number | Start of time range in ms since 1970 (optional)
  fromTime: 56,
  // number | End of time range in ms since 1970 (optional)
  toTime: 56,
};

fireblocks.fireblocksPublicOpenapiOther.getJobs(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromTime** | [**number**] | Start of time range in ms since 1970 | (optional) defaults to undefined
 **toTime** | [**number**] | End of time range in ms since 1970 | (optional) defaults to undefined


### Return type

**[Array<Job>](../models/Array<Job>.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An array of jobs |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **pauseJob**
> pauseJob()

Pause the given job, after the current task is done. A paused job can later be resumed by calling ‘continue’, or canceled.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, FireblocksPublicOpenapiOtherApiPauseJobRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: FireblocksPublicOpenapiOtherApiPauseJobRequest = {
  // string | The requested job id
  jobId: jobId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.fireblocksPublicOpenapiOther.pauseJob(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jobId** | [**string**] | The requested job id | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | paused successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



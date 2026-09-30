# ConsoleUserApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**createConsoleUser**](#createConsoleUser) | **POST** /management/users | Create console user
[**deleteConsoleUser**](#deleteConsoleUser) | **DELETE** /management/users/{id} | Request deletion of a console user
[**getConsoleUsers**](#getConsoleUsers) | **GET** /management/users | Get console users


# **createConsoleUser**
> createConsoleUser()

Create console users in your workspace - Please note that this endpoint is available only for API keys with Admin/Non Signing Admin permissions. Learn more about Fireblocks Users management in the following [guide](https://developers.fireblocks.com/docs/manage-users). Endpoint Permission: Admin, Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ConsoleUserApiCreateConsoleUserRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ConsoleUserApiCreateConsoleUserRequest = {
  // CreateConsoleUser (optional)
  createConsoleUser: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.consoleUser.createConsoleUser(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createConsoleUser** | **[CreateConsoleUser](../models/CreateConsoleUser.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


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
**200** | User creation approval request has been sent |  * X-Request-ID -  <br>  |
**400** | bad request |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Lacking permissions. |  * X-Request-ID -  <br>  |
**5XX** | Internal error. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteConsoleUser**
> ConsoleUser deleteConsoleUser()

Requests deletion of a console user. The request is asynchronous: it goes through the workspace\'s configured \"Delete users\" approval policy (Settings > Quorums), exactly as deleting a user from the console does, and the user is removed only once that approval completes. - Track progress by polling GET /management/users; deletion is complete when the user is disabled. - Please note that this endpoint is available only for API keys with Admin/Non Signing Admin permissions. Endpoint Permission: Admin, Non-Signing Admin. **Note:** This endpoint is currently in beta and might be subject to changes.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ConsoleUserApiDeleteConsoleUserRequest, ConsoleUser } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ConsoleUserApiDeleteConsoleUserRequest = {
  // string | The ID of the console user to delete
  id: id_example,
  // boolean | Acknowledges the impact of removing this user and proceeds anyway. Overrides both USER_REFERENCED_IN_TAP and QUORUM_INTEGRITY, the same way the acknowledgement checkbox does in the console. (optional)
  force: true,
};

fireblocks.consoleUser.deleteConsoleUser(body).then((res: FireblocksResponse<ConsoleUser>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The ID of the console user to delete | defaults to undefined
 **force** | [**boolean**] | Acknowledges the impact of removing this user and proceeds anyway. Overrides both USER_REFERENCED_IN_TAP and QUORUM_INTEGRITY, the same way the acknowledgement checkbox does in the console. | (optional) defaults to false


### Return type

**[ConsoleUser](../models/ConsoleUser.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Deletion request accepted. Returns the console user that will be removed once the workspace\&#39;s configured approval completes. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Lacking permissions, or the target cannot be deleted: the user is the workspace Owner, or the caller is the target. |  * X-Request-ID -  <br>  |
**404** | Console user not found. Also returned for users in other workspaces and for API users, so the endpoint does not reveal whether an ID exists. |  * X-Request-ID -  <br>  |
**409** | PENDING_REQUEST_EXISTS - a deletion request for this user is already awaiting approval; USER_REFERENCED_IN_TAP - the user is referenced by the workspace transaction authorization policy (can be overridden with force&#x3D;true); or USER_PENDING_ONBOARDING - the user has not completed onboarding, so there is nothing to delete yet. Revoke the invitation from the console instead. |  * X-Request-ID -  <br>  |
**422** | QUORUM_INTEGRITY - the user is required to complete the workspace\&#39;s admin approval quorum. Can be overridden with force&#x3D;true, matching the console\&#39;s acknowledgement checkbox. |  * X-Request-ID -  <br>  |
**5XX** | Internal error. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getConsoleUsers**
> GetConsoleUsersResponse getConsoleUsers()

Get console users for your workspace. - Please note that this endpoint is available only for API keys with Admin/Non Signing Admin permissions. Endpoint Permission: Admin, Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, GetConsoleUsersResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.consoleUser.getConsoleUsers(body).then((res: FireblocksResponse<GetConsoleUsersResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[GetConsoleUsersResponse](../models/GetConsoleUsersResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | got console users |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Lacking permissions. |  * X-Request-ID -  <br>  |
**5XX** | Internal error. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



# Web3ConnectionsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**create**](#create) | **POST** /connections/wc | Create a new Web3 connection.
[**get**](#get) | **GET** /connections | List all open Web3 connections.
[**remove**](#remove) | **DELETE** /connections/wc/{id} | Remove an existing Web3 connection.
[**submit**](#submit) | **PUT** /connections/wc/{id} | Respond to a pending Web3 connection request.


# **create**
> CreateConnectionResponse create(createConnectionRequest)

Initiate a new Web3 connection.  * Note: After this succeeds, make a request to `PUT /v1/connections/wc/{id}` (below) to approve or reject the new Web3 connection.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, Web3ConnectionsApiCreateRequest, CreateConnectionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: Web3ConnectionsApiCreateRequest = {
  // CreateConnectionRequest
  createConnectionRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. (optional)
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
};

fireblocks.web3Connections.create(body).then((res: FireblocksResponse<CreateConnectionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createConnectionRequest** | **[CreateConnectionRequest](../models/CreateConnectionRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | (optional) defaults to undefined


### Return type

**[CreateConnectionResponse](../models/CreateConnectionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Web3 connection initiated successfully |  * X-Request-ID -  <br>  |
**400** | Invalid data sent |  * X-Request-ID -  <br>  |
**500** | Something went wrong |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **get**
> GetConnectionsResponse get()

Get open Web3 connections.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, Web3ConnectionsApiGetRequest, GetConnectionsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: Web3ConnectionsApiGetRequest = {
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. (optional)
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // 'ASC' | 'DESC' | List order; ascending or descending. (optional)
  order: order_example,
  // GetFilterParameter | Parsed filter object (optional)
  filter: {"id":"string","userId":"string","vaultAccountId":"number","connectionMethod":"string","feeLevel":"string","appUrl":"string","appName":"string"},
  // 'id' | 'userId' | 'vaultAccountId' | 'createdAt' | 'feeLevel' | 'appUrl' | 'appName' | Property to sort Web3 connections by. (optional)
  sort: sort_example,
  // number | Amount of results to return in the next page. (optional)
  pageSize: 8.14,
  // string | Cursor to the next page (optional)
  next: next_example,
};

fireblocks.web3Connections.get(body).then((res: FireblocksResponse<GetConnectionsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | List order; ascending or descending. | (optional) defaults to 'ASC'
 **filter** | **GetFilterParameter** | Parsed filter object | (optional) defaults to undefined
 **sort** | [**&#39;id&#39; | &#39;userId&#39; | &#39;vaultAccountId&#39; | &#39;createdAt&#39; | &#39;feeLevel&#39; | &#39;appUrl&#39; | &#39;appName&#39;**]**Array<&#39;id&#39; &#124; &#39;userId&#39; &#124; &#39;vaultAccountId&#39; &#124; &#39;createdAt&#39; &#124; &#39;feeLevel&#39; &#124; &#39;appUrl&#39; &#124; &#39;appName&#39;>** | Property to sort Web3 connections by. | (optional) defaults to 'createdAt'
 **pageSize** | [**number**] | Amount of results to return in the next page. | (optional) defaults to 10
 **next** | [**string**] | Cursor to the next page | (optional) defaults to undefined


### Return type

**[GetConnectionsResponse](../models/GetConnectionsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  * X-Request-ID -  <br>  |
**400** | Query parameters were invalid |  * X-Request-ID -  <br>  |
**500** | Something went wrong |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **remove**
> remove()

Remove a Web3 connection

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, Web3ConnectionsApiRemoveRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: Web3ConnectionsApiRemoveRequest = {
  // string | The ID of the existing Web3 connection to remove.
  id: id_example,
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. (optional)
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
};

fireblocks.web3Connections.remove(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The ID of the existing Web3 connection to remove. | defaults to undefined
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection removed successfully |  * X-Request-ID -  <br>  |
**404** | Connection not found |  * X-Request-ID -  <br>  |
**500** | Something went wrong |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **submit**
> submit(respondToConnectionRequest, )

Submit a response to *approve* or *reject* an initiated Web3 connection. * Note: This call is used to complete your `POST /v1/connections/wc/` request.  After this succeeds, your new Web3 connection is created and functioning.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, Web3ConnectionsApiSubmitRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: Web3ConnectionsApiSubmitRequest = {
  // RespondToConnectionRequest
  respondToConnectionRequest: param_value,
  // string | The ID of the initiated Web3 connection to approve.
  id: id_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
  // string | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. (optional)
  xEndUserWalletId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
};

fireblocks.web3Connections.submit(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **respondToConnectionRequest** | **[RespondToConnectionRequest](../models/RespondToConnectionRequest.md)**|  |
 **id** | [**string**] | The ID of the initiated Web3 connection to approve. | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined
 **xEndUserWalletId** | [**string**] | Unique ID of the End-User wallet to the API request. Required for end-user wallet operations. | (optional) defaults to undefined


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
**200** | Connection submitted successfully |  * X-Request-ID -  <br>  |
**400** | Invalid data sent |  * X-Request-ID -  <br>  |
**404** | Connection not found |  * X-Request-ID -  <br>  |
**500** | Something went wrong |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



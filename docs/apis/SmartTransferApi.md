# SmartTransferApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveDvPTicketTerm**](#approveDvPTicketTerm) | **PUT** /smart_transfers/{ticketId}/terms/{termId}/dvp/approve | Define funding source and give approve to contract to transfer asset
[**cancelTicket**](#cancelTicket) | **PUT** /smart-transfers/{ticketId}/cancel | Cancel Ticket
[**createTicket**](#createTicket) | **POST** /smart-transfers | Create Ticket
[**createTicketTerm**](#createTicketTerm) | **POST** /smart-transfers/{ticketId}/terms | Create leg (term)
[**findTicketById**](#findTicketById) | **GET** /smart-transfers/{ticketId} | Search Tickets by ID
[**findTicketTermById**](#findTicketTermById) | **GET** /smart-transfers/{ticketId}/terms/{termId} | Search ticket by leg (term) ID
[**fulfillTicket**](#fulfillTicket) | **PUT** /smart-transfers/{ticketId}/fulfill | Fund ticket manually
[**fundDvpTicket**](#fundDvpTicket) | **PUT** /smart_transfers/{ticketId}/dvp/fund | Fund dvp ticket
[**fundTicketTerm**](#fundTicketTerm) | **PUT** /smart-transfers/{ticketId}/terms/{termId}/fund | Define funding source
[**getSmartTransferStatistic**](#getSmartTransferStatistic) | **GET** /smart_transfers/statistic | Get smart transfers statistic
[**getSmartTransferUserGroups**](#getSmartTransferUserGroups) | **GET** /smart-transfers/settings/user-groups | Get user group
[**manuallyFundTicketTerm**](#manuallyFundTicketTerm) | **PUT** /smart-transfers/{ticketId}/terms/{termId}/manually-fund | Manually add term transaction
[**removeTicketTerm**](#removeTicketTerm) | **DELETE** /smart-transfers/{ticketId}/terms/{termId} | Delete ticket leg (term)
[**searchTickets**](#searchTickets) | **GET** /smart-transfers | Find Ticket
[**setExternalRefId**](#setExternalRefId) | **PUT** /smart-transfers/{ticketId}/external-id | Add external ref. ID
[**setTicketExpiration**](#setTicketExpiration) | **PUT** /smart-transfers/{ticketId}/expires-in | Set expiration
[**setUserGroups**](#setUserGroups) | **POST** /smart-transfers/settings/user-groups | Set user group
[**submitTicket**](#submitTicket) | **PUT** /smart-transfers/{ticketId}/submit | Submit ticket
[**updateTicketTerm**](#updateTicketTerm) | **PUT** /smart-transfers/{ticketId}/terms/{termId} | Update ticket leg (term)


# **approveDvPTicketTerm**
> SmartTransferTicketTermResponse approveDvPTicketTerm(smartTransferApproveTerm, )

Set funding source for ticket term and creating approving transaction for contract to transfer asset

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiApproveDvPTicketTermRequest, SmartTransferTicketTermResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiApproveDvPTicketTermRequest = {
  // SmartTransferApproveTerm
  smartTransferApproveTerm: param_value,
  // string
  ticketId: ticketId_example,
  // string
  termId: termId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.approveDvPTicketTerm(body).then((res: FireblocksResponse<SmartTransferTicketTermResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferApproveTerm** | **[SmartTransferApproveTerm](../models/SmartTransferApproveTerm.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **termId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SmartTransferTicketTermResponse](../models/SmartTransferTicketTermResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Creating approval transaction started |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **cancelTicket**
> SmartTransferTicketResponse cancelTicket()

Cancel Smart Transfer ticket

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiCancelTicketRequest, SmartTransferTicketResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiCancelTicketRequest = {
  // string
  ticketId: ticketId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.cancelTicket(body).then((res: FireblocksResponse<SmartTransferTicketResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SmartTransferTicketResponse](../models/SmartTransferTicketResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Smart Transfer ticket successfully canceled |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createTicket**
> SmartTransferTicketResponse createTicket(smartTransferCreateTicket)

Creates new Smart Transfer ticket

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiCreateTicketRequest, SmartTransferTicketResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiCreateTicketRequest = {
  // SmartTransferCreateTicket
  smartTransferCreateTicket: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.createTicket(body).then((res: FireblocksResponse<SmartTransferTicketResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferCreateTicket** | **[SmartTransferCreateTicket](../models/SmartTransferCreateTicket.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SmartTransferTicketResponse](../models/SmartTransferTicketResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Smart Transfer ticket was created successfully |  -  |
**403** | Unauthorized |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createTicketTerm**
> SmartTransferTicketTermResponse createTicketTerm(smartTransferCreateTicketTerm, )

Creates new smart transfer ticket term (when the ticket status is DRAFT)

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiCreateTicketTermRequest, SmartTransferTicketTermResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiCreateTicketTermRequest = {
  // SmartTransferCreateTicketTerm
  smartTransferCreateTicketTerm: param_value,
  // string
  ticketId: ticketId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.createTicketTerm(body).then((res: FireblocksResponse<SmartTransferTicketTermResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferCreateTicketTerm** | **[SmartTransferCreateTicketTerm](../models/SmartTransferCreateTicketTerm.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SmartTransferTicketTermResponse](../models/SmartTransferTicketTermResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Smart Transfer ticket term was created successfully |  -  |
**403** | Unauthorized |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **findTicketById**
> SmartTransferTicketResponse findTicketById()

Find Smart Transfer ticket by id

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiFindTicketByIdRequest, SmartTransferTicketResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiFindTicketByIdRequest = {
  // string
  ticketId: ticketId_example,
};

fireblocks.smartTransfer.findTicketById(body).then((res: FireblocksResponse<SmartTransferTicketResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | [**string**] |  | defaults to undefined


### Return type

**[SmartTransferTicketResponse](../models/SmartTransferTicketResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Smart Transfer ticket returned successfully |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **findTicketTermById**
> SmartTransferTicketTermResponse findTicketTermById()

Find Smart Transfer ticket term by id

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiFindTicketTermByIdRequest, SmartTransferTicketTermResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiFindTicketTermByIdRequest = {
  // string
  ticketId: ticketId_example,
  // string
  termId: termId_example,
};

fireblocks.smartTransfer.findTicketTermById(body).then((res: FireblocksResponse<SmartTransferTicketTermResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | [**string**] |  | defaults to undefined
 **termId** | [**string**] |  | defaults to undefined


### Return type

**[SmartTransferTicketTermResponse](../models/SmartTransferTicketTermResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Smart Transfer ticket term returned successfully |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **fulfillTicket**
> SmartTransferTicketResponse fulfillTicket()

Manually fulfill ticket, in case when all terms (legs) are funded manually

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiFulfillTicketRequest, SmartTransferTicketResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiFulfillTicketRequest = {
  // string
  ticketId: ticketId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.fulfillTicket(body).then((res: FireblocksResponse<SmartTransferTicketResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SmartTransferTicketResponse](../models/SmartTransferTicketResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully fulfilled on Smart Transfer ticket |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **fundDvpTicket**
> SmartTransferTicketResponse fundDvpTicket(smartTransferFundDvpTicket, )

Create or fulfill dvp ticket order

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiFundDvpTicketRequest, SmartTransferTicketResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiFundDvpTicketRequest = {
  // SmartTransferFundDvpTicket
  smartTransferFundDvpTicket: param_value,
  // string
  ticketId: ticketId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.fundDvpTicket(body).then((res: FireblocksResponse<SmartTransferTicketResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferFundDvpTicket** | **[SmartTransferFundDvpTicket](../models/SmartTransferFundDvpTicket.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SmartTransferTicketResponse](../models/SmartTransferTicketResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully started creating or fulfilling order on dvp Smart Transfer ticket |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **fundTicketTerm**
> SmartTransferTicketTermResponse fundTicketTerm(smartTransferFundTerm, )

Set funding source for ticket term (in case of ASYNC tickets, this will execute transfer immediately)

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiFundTicketTermRequest, SmartTransferTicketTermResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiFundTicketTermRequest = {
  // SmartTransferFundTerm
  smartTransferFundTerm: param_value,
  // string
  ticketId: ticketId_example,
  // string
  termId: termId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.fundTicketTerm(body).then((res: FireblocksResponse<SmartTransferTicketTermResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferFundTerm** | **[SmartTransferFundTerm](../models/SmartTransferFundTerm.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **termId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SmartTransferTicketTermResponse](../models/SmartTransferTicketTermResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Funding source for ticket term successfully done |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSmartTransferStatistic**
> SmartTransferStatistic getSmartTransferStatistic()

Get smart transfer statistic

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferStatistic } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.smartTransfer.getSmartTransferStatistic(body).then((res: FireblocksResponse<SmartTransferStatistic>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[SmartTransferStatistic](../models/SmartTransferStatistic.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Smart Transfer ticket statistic returned successfully |  -  |
**403** | Unauthorized |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSmartTransferUserGroups**
> SmartTransferUserGroupsResponse getSmartTransferUserGroups()

Get Smart Transfer user groups

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferUserGroupsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.smartTransfer.getSmartTransferUserGroups(body).then((res: FireblocksResponse<SmartTransferUserGroupsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[SmartTransferUserGroupsResponse](../models/SmartTransferUserGroupsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User group settings were returned successfully |  -  |
**403** | Unauthorized |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **manuallyFundTicketTerm**
> SmartTransferTicketTermResponse manuallyFundTicketTerm(smartTransferManuallyFundTerm, )

Manually set ticket term transaction

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiManuallyFundTicketTermRequest, SmartTransferTicketTermResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiManuallyFundTicketTermRequest = {
  // SmartTransferManuallyFundTerm
  smartTransferManuallyFundTerm: param_value,
  // string
  ticketId: ticketId_example,
  // string
  termId: termId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.manuallyFundTicketTerm(body).then((res: FireblocksResponse<SmartTransferTicketTermResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferManuallyFundTerm** | **[SmartTransferManuallyFundTerm](../models/SmartTransferManuallyFundTerm.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **termId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SmartTransferTicketTermResponse](../models/SmartTransferTicketTermResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successfully manually set ticket term transaction |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **removeTicketTerm**
> removeTicketTerm()

Delete ticket term when ticket is in DRAFT status

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiRemoveTicketTermRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiRemoveTicketTermRequest = {
  // string
  ticketId: ticketId_example,
  // string
  termId: termId_example,
};

fireblocks.smartTransfer.removeTicketTerm(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | [**string**] |  | defaults to undefined
 **termId** | [**string**] |  | defaults to undefined


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
**204** | Smart Transfer ticket term successfully removed |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **searchTickets**
> SmartTransferTicketFilteredResponse searchTickets()

Finds Smart Transfer tickets that match the submitted criteria

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiSearchTicketsRequest, SmartTransferTicketFilteredResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiSearchTicketsRequest = {
  // string | Search string - counterparty name or asset or ticketId. Optional (optional)
  q: q_example,
  // Array<'DRAFT' | 'PENDING_APPROVAL' | 'OPEN' | 'IN_SETTLEMENT' | 'FULFILLED' | 'EXPIRED' | 'CANCELED'> | Ticket statuses for Smart Transfer tickets. Optional (optional)
  statuses: ["DRAFT","OPEN"],
  // string | NetworkId that is used in the ticket . Optional (optional)
  networkId: networkId_example,
  // boolean | Filter created tickets by created by self or by others. Optional (optional)
  createdByMe: true,
  // string | Lower bound of search range. Optional (optional)
  expiresAfter: 2013-10-20T19:20:30+01:00,
  // string | Upper bound of search range. Optional (optional)
  expiresBefore: 2013-10-20T19:20:30+01:00,
  // 'ASYNC' | 'DVP' | Type of transfer. ASYNC executes transfers as they are funded, DVP executes all terms (legs) as one dvp transfer (optional)
  type: type_example,
  // string | External ref. ID that workspace can use to identify ticket outside of Fireblocks system. (optional)
  externalRefId: externalRefId_example,
  // string | ID of the record after which to fetch $limit records (optional)
  after: after_example,
  // number | Number of records to fetch. By default, it is 100 (optional)
  limit: 8.14,
};

fireblocks.smartTransfer.searchTickets(body).then((res: FireblocksResponse<SmartTransferTicketFilteredResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | [**string**] | Search string - counterparty name or asset or ticketId. Optional | (optional) defaults to undefined
 **statuses** | **Array<&#39;DRAFT&#39; &#124; &#39;PENDING_APPROVAL&#39; &#124; &#39;OPEN&#39; &#124; &#39;IN_SETTLEMENT&#39; &#124; &#39;FULFILLED&#39; &#124; &#39;EXPIRED&#39; &#124; &#39;CANCELED&#39;>** | Ticket statuses for Smart Transfer tickets. Optional | (optional) defaults to undefined
 **networkId** | [**string**] | NetworkId that is used in the ticket . Optional | (optional) defaults to undefined
 **createdByMe** | [**boolean**] | Filter created tickets by created by self or by others. Optional | (optional) defaults to undefined
 **expiresAfter** | [**string**] | Lower bound of search range. Optional | (optional) defaults to undefined
 **expiresBefore** | [**string**] | Upper bound of search range. Optional | (optional) defaults to undefined
 **type** | [**&#39;ASYNC&#39; | &#39;DVP&#39;**]**Array<&#39;ASYNC&#39; &#124; &#39;DVP&#39;>** | Type of transfer. ASYNC executes transfers as they are funded, DVP executes all terms (legs) as one dvp transfer | (optional) defaults to undefined
 **externalRefId** | [**string**] | External ref. ID that workspace can use to identify ticket outside of Fireblocks system. | (optional) defaults to undefined
 **after** | [**string**] | ID of the record after which to fetch $limit records | (optional) defaults to undefined
 **limit** | [**number**] | Number of records to fetch. By default, it is 100 | (optional) defaults to undefined


### Return type

**[SmartTransferTicketFilteredResponse](../models/SmartTransferTicketFilteredResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Smart Transfer tickets were returned successfully |  -  |
**403** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setExternalRefId**
> SmartTransferTicketResponse setExternalRefId(smartTransferSetTicketExternalId, )

Set external id Smart Transfer ticket

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiSetExternalRefIdRequest, SmartTransferTicketResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiSetExternalRefIdRequest = {
  // SmartTransferSetTicketExternalId
  smartTransferSetTicketExternalId: param_value,
  // string
  ticketId: ticketId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.setExternalRefId(body).then((res: FireblocksResponse<SmartTransferTicketResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferSetTicketExternalId** | **[SmartTransferSetTicketExternalId](../models/SmartTransferSetTicketExternalId.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SmartTransferTicketResponse](../models/SmartTransferTicketResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set external id on Smart Transfer ticket |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setTicketExpiration**
> SmartTransferTicketResponse setTicketExpiration(smartTransferSetTicketExpiration, )

Set expiration date on Smart Transfer ticket

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiSetTicketExpirationRequest, SmartTransferTicketResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiSetTicketExpirationRequest = {
  // SmartTransferSetTicketExpiration
  smartTransferSetTicketExpiration: param_value,
  // string
  ticketId: ticketId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.setTicketExpiration(body).then((res: FireblocksResponse<SmartTransferTicketResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferSetTicketExpiration** | **[SmartTransferSetTicketExpiration](../models/SmartTransferSetTicketExpiration.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SmartTransferTicketResponse](../models/SmartTransferTicketResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully set expiration date on Smart Transfer ticket |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setUserGroups**
> SmartTransferUserGroupsResponse setUserGroups(smartTransferSetUserGroups)

Set Smart Transfer user group

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiSetUserGroupsRequest, SmartTransferUserGroupsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiSetUserGroupsRequest = {
  // SmartTransferSetUserGroups
  smartTransferSetUserGroups: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.setUserGroups(body).then((res: FireblocksResponse<SmartTransferUserGroupsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferSetUserGroups** | **[SmartTransferSetUserGroups](../models/SmartTransferSetUserGroups.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SmartTransferUserGroupsResponse](../models/SmartTransferUserGroupsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | User group settings were set successfully |  -  |
**403** | Unauthorized |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **submitTicket**
> SmartTransferTicketResponse submitTicket(smartTransferSubmitTicket, )

Submit Smart Transfer ticket - change status into ready for approval if auto approval is not turned on, or OPEN if auto approval is on

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiSubmitTicketRequest, SmartTransferTicketResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiSubmitTicketRequest = {
  // SmartTransferSubmitTicket
  smartTransferSubmitTicket: param_value,
  // string
  ticketId: ticketId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.submitTicket(body).then((res: FireblocksResponse<SmartTransferTicketResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferSubmitTicket** | **[SmartTransferSubmitTicket](../models/SmartTransferSubmitTicket.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SmartTransferTicketResponse](../models/SmartTransferTicketResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully submitted Smart Transfer ticket |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateTicketTerm**
> SmartTransferTicketTermResponse updateTicketTerm(smartTransferUpdateTicketTerm, )

Update ticket term (when ticket status is DRAFT)

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiUpdateTicketTermRequest, SmartTransferTicketTermResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiUpdateTicketTermRequest = {
  // SmartTransferUpdateTicketTerm
  smartTransferUpdateTicketTerm: param_value,
  // string
  ticketId: ticketId_example,
  // string
  termId: termId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.updateTicketTerm(body).then((res: FireblocksResponse<SmartTransferTicketTermResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferUpdateTicketTerm** | **[SmartTransferUpdateTicketTerm](../models/SmartTransferUpdateTicketTerm.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **termId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SmartTransferTicketTermResponse](../models/SmartTransferTicketTermResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Smart Transfer ticket term updated successfully |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



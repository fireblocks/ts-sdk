# SmartTransferApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelTicket**](#cancelTicket) | **PUT** /smart-transfers/{ticketId}/cancel | Cancel Ticket
[**createTicket**](#createTicket) | **POST** /smart-transfers | Create Ticket
[**createTicketTerm**](#createTicketTerm) | **POST** /smart-transfers/{ticketId}/terms | Create leg (term)
[**findTicketById**](#findTicketById) | **GET** /smart-transfers/{ticketId} | Search Tickets by ID
[**findTicketTermById**](#findTicketTermById) | **GET** /smart-transfers/{ticketId}/terms/{termId} | Search ticket by leg (term) ID
[**fulfillTicket**](#fulfillTicket) | **PUT** /smart-transfers/{ticketId}/fulfill | Fund ticket manually
[**fundTicketTerm**](#fundTicketTerm) | **PUT** /smart-transfers/{ticketId}/terms/{termId}/fund | Define funding source
[**getSmartTransferUserGroups**](#getSmartTransferUserGroups) | **GET** /smart-transfers/settings/user-groups | Get user group
[**manuallyFundTicketTerm**](#manuallyFundTicketTerm) | **PUT** /smart-transfers/{ticketId}/terms/{termId}/manually-fund | Manually add term transaction
[**removeTicketTerm**](#removeTicketTerm) | **DELETE** /smart-transfers/{ticketId}/terms/{termId} | Delete ticket leg (term)
[**searchTickets**](#searchTickets) | **GET** /smart-transfers | Find Ticket
[**setExternalRefId**](#setExternalRefId) | **PUT** /smart-transfers/{ticketId}/external-id | Add external ref. ID
[**setTicketExpiration**](#setTicketExpiration) | **PUT** /smart-transfers/{ticketId}/expires-in | Set expiration
[**setUserGroups**](#setUserGroups) | **POST** /smart-transfers/settings/user-groups | Set user group
[**submitTicket**](#submitTicket) | **PUT** /smart-transfers/{ticketId}/submit | Submit ticket
[**updateTicketTerm**](#updateTicketTerm) | **PUT** /smart-transfers/{ticketId}/terms/{termId} | Update ticket leg (term)


# **cancelTicket**
> FindTicketById200Response cancelTicket()

Cancel Smart Transfer ticket

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiCancelTicketRequest, FindTicketById200Response } from '@fireblocks/ts-sdk';

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

fireblocks.smartTransfer.cancelTicket(body).then((res: FireblocksResponse<FindTicketById200Response>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[FindTicketById200Response](../models/FindTicketById200Response.md)**

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
> CreateTicket201Response createTicket(smartTransferCreateTicketDto)

Creates new Smart Transfer ticket

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiCreateTicketRequest, CreateTicket201Response } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiCreateTicketRequest = {
  // SmartTransferCreateTicketDto
  smartTransferCreateTicketDto: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.createTicket(body).then((res: FireblocksResponse<CreateTicket201Response>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferCreateTicketDto** | **[SmartTransferCreateTicketDto](../models/SmartTransferCreateTicketDto.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CreateTicket201Response](../models/CreateTicket201Response.md)**

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
> CreateTicketTerm201Response createTicketTerm(smartTransferCreateTicketTermDto, )

Creates new smart transfer ticket term (when the ticket status is DRAFT)

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiCreateTicketTermRequest, CreateTicketTerm201Response } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiCreateTicketTermRequest = {
  // SmartTransferCreateTicketTermDto
  smartTransferCreateTicketTermDto: param_value,
  // string
  ticketId: ticketId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.createTicketTerm(body).then((res: FireblocksResponse<CreateTicketTerm201Response>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferCreateTicketTermDto** | **[SmartTransferCreateTicketTermDto](../models/SmartTransferCreateTicketTermDto.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CreateTicketTerm201Response](../models/CreateTicketTerm201Response.md)**

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
> FindTicketById200Response findTicketById()

Find Smart Transfer ticket by id

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiFindTicketByIdRequest, FindTicketById200Response } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiFindTicketByIdRequest = {
  // string
  ticketId: ticketId_example,
};

fireblocks.smartTransfer.findTicketById(body).then((res: FireblocksResponse<FindTicketById200Response>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | [**string**] |  | defaults to undefined


### Return type

**[FindTicketById200Response](../models/FindTicketById200Response.md)**

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
> FindTicketTermById200Response findTicketTermById()

Find Smart Transfer ticket term by id

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiFindTicketTermByIdRequest, FindTicketTermById200Response } from '@fireblocks/ts-sdk';

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

fireblocks.smartTransfer.findTicketTermById(body).then((res: FireblocksResponse<FindTicketTermById200Response>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | [**string**] |  | defaults to undefined
 **termId** | [**string**] |  | defaults to undefined


### Return type

**[FindTicketTermById200Response](../models/FindTicketTermById200Response.md)**

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
> FindTicketById200Response fulfillTicket()

Manually fulfill ticket, in case when all terms (legs) are funded manually

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiFulfillTicketRequest, FindTicketById200Response } from '@fireblocks/ts-sdk';

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

fireblocks.smartTransfer.fulfillTicket(body).then((res: FireblocksResponse<FindTicketById200Response>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ticketId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[FindTicketById200Response](../models/FindTicketById200Response.md)**

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

# **fundTicketTerm**
> fundTicketTerm(smartTransferFundTermDto, )

Set funding source for ticket term (in case of ASYNC tickets, this will execute transfer immediately)

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiFundTicketTermRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiFundTicketTermRequest = {
  // SmartTransferFundTermDto
  smartTransferFundTermDto: param_value,
  // string
  ticketId: ticketId_example,
  // string
  termId: termId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.fundTicketTerm(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferFundTermDto** | **[SmartTransferFundTermDto](../models/SmartTransferFundTermDto.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **termId** | [**string**] |  | defaults to undefined
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
**200** |  |  -  |
**201** | Funding source for ticket term successfully done |  -  |
**403** | Unauthorized |  -  |
**404** | Not found |  -  |
**422** | Bad Request |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getSmartTransferUserGroups**
> GetSmartTransferUserGroups200Response getSmartTransferUserGroups()

Get Smart Transfer user groups

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, GetSmartTransferUserGroups200Response } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.smartTransfer.getSmartTransferUserGroups(body).then((res: FireblocksResponse<GetSmartTransferUserGroups200Response>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[GetSmartTransferUserGroups200Response](../models/GetSmartTransferUserGroups200Response.md)**

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
> manuallyFundTicketTerm(smartTransferManuallyFundTermDto, )

Manually set ticket term transaction

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiManuallyFundTicketTermRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiManuallyFundTicketTermRequest = {
  // SmartTransferManuallyFundTermDto
  smartTransferManuallyFundTermDto: param_value,
  // string
  ticketId: ticketId_example,
  // string
  termId: termId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.manuallyFundTicketTerm(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferManuallyFundTermDto** | **[SmartTransferManuallyFundTermDto](../models/SmartTransferManuallyFundTermDto.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **termId** | [**string**] |  | defaults to undefined
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
**200** |  |  -  |
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
> SearchTickets200Response searchTickets()

Finds Smart Transfer tickets that match the submitted criteria

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiSearchTicketsRequest, SearchTickets200Response } from '@fireblocks/ts-sdk';

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
  // 'ASYNC' | Type of transfer. ASYNC executes transfers as they are funded, ATOMIC executes all terms (legs) as one atomic transfer (optional)
  type: type_example,
  // string | External ref. ID that workspace can use to identify ticket outside of Fireblocks system. (optional)
  externalRefId: externalRefId_example,
  // string | ID of the record after which to fetch $limit records (optional)
  after: after_example,
  // number | Number of records to fetch. By default, it is 100 (optional)
  limit: 8.14,
};

fireblocks.smartTransfer.searchTickets(body).then((res: FireblocksResponse<SearchTickets200Response>) => {
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
 **type** | [**&#39;ASYNC&#39;**]**Array<&#39;ASYNC&#39;>** | Type of transfer. ASYNC executes transfers as they are funded, ATOMIC executes all terms (legs) as one atomic transfer | (optional) defaults to undefined
 **externalRefId** | [**string**] | External ref. ID that workspace can use to identify ticket outside of Fireblocks system. | (optional) defaults to undefined
 **after** | [**string**] | ID of the record after which to fetch $limit records | (optional) defaults to undefined
 **limit** | [**number**] | Number of records to fetch. By default, it is 100 | (optional) defaults to undefined


### Return type

**[SearchTickets200Response](../models/SearchTickets200Response.md)**

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
> FindTicketById200Response setExternalRefId(smartTransferSetTicketExternalIdDto, )

Set external id Smart Transfer ticket

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiSetExternalRefIdRequest, FindTicketById200Response } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiSetExternalRefIdRequest = {
  // SmartTransferSetTicketExternalIdDto
  smartTransferSetTicketExternalIdDto: param_value,
  // string
  ticketId: ticketId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.setExternalRefId(body).then((res: FireblocksResponse<FindTicketById200Response>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferSetTicketExternalIdDto** | **[SmartTransferSetTicketExternalIdDto](../models/SmartTransferSetTicketExternalIdDto.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[FindTicketById200Response](../models/FindTicketById200Response.md)**

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
> FindTicketById200Response setTicketExpiration(smartTransferSetTicketExpirationDto, )

Set expiration date on Smart Transfer ticket

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiSetTicketExpirationRequest, FindTicketById200Response } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiSetTicketExpirationRequest = {
  // SmartTransferSetTicketExpirationDto
  smartTransferSetTicketExpirationDto: param_value,
  // string
  ticketId: ticketId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.setTicketExpiration(body).then((res: FireblocksResponse<FindTicketById200Response>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferSetTicketExpirationDto** | **[SmartTransferSetTicketExpirationDto](../models/SmartTransferSetTicketExpirationDto.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[FindTicketById200Response](../models/FindTicketById200Response.md)**

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
> SetUserGroups201Response setUserGroups(smartTransferSetUserGroupsDto)

Set Smart Transfer user group

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiSetUserGroupsRequest, SetUserGroups201Response } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiSetUserGroupsRequest = {
  // SmartTransferSetUserGroupsDto
  smartTransferSetUserGroupsDto: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.setUserGroups(body).then((res: FireblocksResponse<SetUserGroups201Response>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferSetUserGroupsDto** | **[SmartTransferSetUserGroupsDto](../models/SmartTransferSetUserGroupsDto.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[SetUserGroups201Response](../models/SetUserGroups201Response.md)**

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
> FindTicketById200Response submitTicket(smartTransferSubmitTicketDto, )

Submit Smart Transfer ticket - change status into ready for approval if auto approval is not turned on, or OPEN if auto approval is on

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiSubmitTicketRequest, FindTicketById200Response } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiSubmitTicketRequest = {
  // SmartTransferSubmitTicketDto
  smartTransferSubmitTicketDto: param_value,
  // string
  ticketId: ticketId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.submitTicket(body).then((res: FireblocksResponse<FindTicketById200Response>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferSubmitTicketDto** | **[SmartTransferSubmitTicketDto](../models/SmartTransferSubmitTicketDto.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[FindTicketById200Response](../models/FindTicketById200Response.md)**

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
> FindTicketTermById200Response updateTicketTerm(smartTransferUpdateTicketTermDto, )

Update ticket term (when ticket status is DRAFT)

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, SmartTransferApiUpdateTicketTermRequest, FindTicketTermById200Response } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: SmartTransferApiUpdateTicketTermRequest = {
  // SmartTransferUpdateTicketTermDto
  smartTransferUpdateTicketTermDto: param_value,
  // string
  ticketId: ticketId_example,
  // string
  termId: termId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.smartTransfer.updateTicketTerm(body).then((res: FireblocksResponse<FindTicketTermById200Response>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **smartTransferUpdateTicketTermDto** | **[SmartTransferUpdateTicketTermDto](../models/SmartTransferUpdateTicketTermDto.md)**|  |
 **ticketId** | [**string**] |  | defaults to undefined
 **termId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[FindTicketTermById200Response](../models/FindTicketTermById200Response.md)**

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



# TRLinkApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**assessTRLinkTravelRuleRequirement**](#assessTRLinkTravelRuleRequirement) | **POST** /screening/trlink/customers/integration/{customerIntegrationId}/trm/assess | Assess Travel Rule requirement
[**cancelTRLinkTrm**](#cancelTRLinkTrm) | **POST** /screening/trlink/customers/integration/{customerIntegrationId}/trm/{trmId}/cancel | Cancel Travel Rule Message
[**connectTRLinkIntegration**](#connectTRLinkIntegration) | **PUT** /screening/trlink/customers/integration/{customerIntegrationId} | Connect customer integration
[**createTRLinkCustomer**](#createTRLinkCustomer) | **POST** /screening/trlink/customers | Create customer
[**createTRLinkIntegration**](#createTRLinkIntegration) | **POST** /screening/trlink/customers/integration | Create customer integration
[**createTRLinkTrm**](#createTRLinkTrm) | **POST** /screening/trlink/customers/integration/{customerIntegrationId}/trm | Create Travel Rule Message
[**deleteTRLinkCustomer**](#deleteTRLinkCustomer) | **DELETE** /screening/trlink/customers/{customerId} | Delete customer
[**disconnectTRLinkIntegration**](#disconnectTRLinkIntegration) | **DELETE** /screening/trlink/customers/integration/{customerIntegrationId} | Disconnect customer integration
[**getTRLinkCustomerById**](#getTRLinkCustomerById) | **GET** /screening/trlink/customers/{customerId} | Get customer by ID
[**getTRLinkCustomerIntegrationById**](#getTRLinkCustomerIntegrationById) | **GET** /screening/trlink/customers/{customerId}/integrations/{customerIntegrationId} | Get customer integration by ID
[**getTRLinkCustomerIntegrations**](#getTRLinkCustomerIntegrations) | **GET** /screening/trlink/customers/{customerId}/integrations | Get customer integrations
[**getTRLinkCustomers**](#getTRLinkCustomers) | **GET** /screening/trlink/customers | Get all customers
[**getTRLinkIntegrationPublicKey**](#getTRLinkIntegrationPublicKey) | **GET** /screening/trlink/customers/integration/{customerIntegrationId}/public_key | Get public key for PII encryption
[**getTRLinkPartners**](#getTRLinkPartners) | **GET** /screening/trlink/partners | List available TRLink partners
[**getTRLinkPolicy**](#getTRLinkPolicy) | **GET** /screening/trlink/policy | Get TRLink policy
[**getTRLinkSupportedAsset**](#getTRLinkSupportedAsset) | **GET** /screening/trlink/customers/integration/{customerIntegrationId}/assets/{assetId} | Get supported asset by ID
[**getTRLinkTrmById**](#getTRLinkTrmById) | **GET** /screening/trlink/customers/integration/{customerIntegrationId}/trm/{trmId} | Get TRM by ID
[**getTRLinkVaspById**](#getTRLinkVaspById) | **GET** /screening/trlink/customers/integration/{customerIntegrationId}/vasps/{vaspId} | Get VASP by ID
[**listTRLinkSupportedAssets**](#listTRLinkSupportedAssets) | **GET** /screening/trlink/customers/integration/{customerIntegrationId}/assets | List supported assets
[**listTRLinkVasps**](#listTRLinkVasps) | **GET** /screening/trlink/customers/integration/{customerIntegrationId}/vasps | List VASPs
[**redirectTRLinkTrm**](#redirectTRLinkTrm) | **POST** /screening/trlink/customers/integration/{customerIntegrationId}/trm/{trmId}/redirect | Redirect Travel Rule Message
[**setTRLinkDestinationTravelRuleMessageId**](#setTRLinkDestinationTravelRuleMessageId) | **POST** /screening/trlink/transaction/{txId}/destination/travel_rule_message_id | Set destination travel rule message ID
[**setTRLinkTransactionTravelRuleMessageId**](#setTRLinkTransactionTravelRuleMessageId) | **POST** /screening/trlink/transaction/{txId}/travel_rule_message_id | Set transaction travel rule message ID
[**testTRLinkIntegrationConnection**](#testTRLinkIntegrationConnection) | **POST** /screening/trlink/customers/integration/{customerIntegrationId}/test_connection | Test connection
[**updateTRLinkCustomer**](#updateTRLinkCustomer) | **PUT** /screening/trlink/customers/{customerId} | Update customer


# **assessTRLinkTravelRuleRequirement**
> TRLinkAssessTravelRuleResponse assessTRLinkTravelRuleRequirement(tRLinkAssessTravelRuleRequest, )

Assesses travel rule requirement for a transaction by validating stored credentials and determining whether Travel Rule compliance is required based on amount, jurisdiction, and partner thresholds.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiAssessTRLinkTravelRuleRequirementRequest, TRLinkAssessTravelRuleResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiAssessTRLinkTravelRuleRequirementRequest = {
  // TRLinkAssessTravelRuleRequest
  tRLinkAssessTravelRuleRequest: param_value,
  // string | Customer integration unique identifier
  customerIntegrationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.trLink.assessTRLinkTravelRuleRequirement(body).then((res: FireblocksResponse<TRLinkAssessTravelRuleResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRLinkAssessTravelRuleRequest** | **[TRLinkAssessTravelRuleRequest](../models/TRLinkAssessTravelRuleRequest.md)**|  |
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TRLinkAssessTravelRuleResponse](../models/TRLinkAssessTravelRuleResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Travel rule assessment completed |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **cancelTRLinkTrm**
> TRLinkTrmInfoResponse cancelTRLinkTrm(tRLinkCancelTrmRequest, )

Cancels a travel rule message. The TRM status will be updated to cancelled and the partner will be notified.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiCancelTRLinkTrmRequest, TRLinkTrmInfoResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiCancelTRLinkTrmRequest = {
  // TRLinkCancelTrmRequest
  tRLinkCancelTrmRequest: param_value,
  // string | Customer integration unique identifier
  customerIntegrationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | Travel Rule Message unique identifier
  trmId: trmId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.trLink.cancelTRLinkTrm(body).then((res: FireblocksResponse<TRLinkTrmInfoResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRLinkCancelTrmRequest** | **[TRLinkCancelTrmRequest](../models/TRLinkCancelTrmRequest.md)**|  |
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined
 **trmId** | [**string**] | Travel Rule Message unique identifier | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TRLinkTrmInfoResponse](../models/TRLinkTrmInfoResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Transaction cancellation request accepted |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **connectTRLinkIntegration**
> TRLinkCustomerIntegrationResponse connectTRLinkIntegration(tRLinkConnectIntegrationRequest, )

Connects a customer integration by providing API credentials. Stores encrypted credentials and enables the integration for use.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiConnectTRLinkIntegrationRequest, TRLinkCustomerIntegrationResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiConnectTRLinkIntegrationRequest = {
  // TRLinkConnectIntegrationRequest
  tRLinkConnectIntegrationRequest: param_value,
  // string | Customer integration unique identifier
  customerIntegrationId: 123e4567-e89b-12d3-a456-426614174000,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.trLink.connectTRLinkIntegration(body).then((res: FireblocksResponse<TRLinkCustomerIntegrationResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRLinkConnectIntegrationRequest** | **[TRLinkConnectIntegrationRequest](../models/TRLinkConnectIntegrationRequest.md)**|  |
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TRLinkCustomerIntegrationResponse](../models/TRLinkCustomerIntegrationResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer integration connected successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createTRLinkCustomer**
> TRLinkCustomerResponse createTRLinkCustomer(tRLinkCreateCustomerRequest)

Creates a new customer (legal entity/VASP) for TRLink Travel Rule compliance operations. The customer represents your organization in the Travel Rule network and contains IVMS101-compliant identity information.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiCreateTRLinkCustomerRequest, TRLinkCustomerResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiCreateTRLinkCustomerRequest = {
  // TRLinkCreateCustomerRequest
  tRLinkCreateCustomerRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.trLink.createTRLinkCustomer(body).then((res: FireblocksResponse<TRLinkCustomerResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRLinkCreateCustomerRequest** | **[TRLinkCreateCustomerRequest](../models/TRLinkCreateCustomerRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TRLinkCustomerResponse](../models/TRLinkCustomerResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Customer created successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createTRLinkIntegration**
> TRLinkCustomerIntegrationResponse createTRLinkIntegration(tRLinkCreateIntegrationRequest)

Creates a new TRLink integration for a customer. This establishes a connection placeholder between a customer and a Travel Rule partner. Use the connect endpoint to provide credentials after creation.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiCreateTRLinkIntegrationRequest, TRLinkCustomerIntegrationResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiCreateTRLinkIntegrationRequest = {
  // TRLinkCreateIntegrationRequest
  tRLinkCreateIntegrationRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.trLink.createTRLinkIntegration(body).then((res: FireblocksResponse<TRLinkCustomerIntegrationResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRLinkCreateIntegrationRequest** | **[TRLinkCreateIntegrationRequest](../models/TRLinkCreateIntegrationRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TRLinkCustomerIntegrationResponse](../models/TRLinkCustomerIntegrationResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Customer integration created successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createTRLinkTrm**
> TRLinkTrmInfoResponse createTRLinkTrm(tRLinkCreateTrmRequest, )

Creates a new travel rule message with IVMS101-compliant PII data. Encrypts sensitive originator and beneficiary information before sending to partner.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiCreateTRLinkTrmRequest, TRLinkTrmInfoResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiCreateTRLinkTrmRequest = {
  // TRLinkCreateTrmRequest
  tRLinkCreateTrmRequest: param_value,
  // string | Customer integration unique identifier
  customerIntegrationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.trLink.createTRLinkTrm(body).then((res: FireblocksResponse<TRLinkTrmInfoResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRLinkCreateTrmRequest** | **[TRLinkCreateTrmRequest](../models/TRLinkCreateTrmRequest.md)**|  |
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TRLinkTrmInfoResponse](../models/TRLinkTrmInfoResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | TRM created successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteTRLinkCustomer**
> deleteTRLinkCustomer()

Deletes a customer and all associated integrations. This action cannot be undone.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiDeleteTRLinkCustomerRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiDeleteTRLinkCustomerRequest = {
  // string | Customer unique identifier
  customerId: 550e8400-e29b-41d4-a716-446655440001,
};

fireblocks.trLink.deleteTRLinkCustomer(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] | Customer unique identifier | defaults to undefined


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
**204** | Customer deleted successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **disconnectTRLinkIntegration**
> disconnectTRLinkIntegration()

Disconnects a customer integration by removing stored credentials. The integration record is deleted and cannot be recovered.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiDisconnectTRLinkIntegrationRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiDisconnectTRLinkIntegrationRequest = {
  // string | Customer integration unique identifier
  customerIntegrationId: 123e4567-e89b-12d3-a456-426614174000,
};

fireblocks.trLink.disconnectTRLinkIntegration(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined


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
**204** | Customer integration disconnected successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTRLinkCustomerById**
> TRLinkCustomerResponse getTRLinkCustomerById()

Retrieves detailed information about a specific customer by their unique identifier.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiGetTRLinkCustomerByIdRequest, TRLinkCustomerResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiGetTRLinkCustomerByIdRequest = {
  // string | Customer unique identifier
  customerId: 550e8400-e29b-41d4-a716-446655440001,
};

fireblocks.trLink.getTRLinkCustomerById(body).then((res: FireblocksResponse<TRLinkCustomerResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] | Customer unique identifier | defaults to undefined


### Return type

**[TRLinkCustomerResponse](../models/TRLinkCustomerResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTRLinkCustomerIntegrationById**
> TRLinkCustomerIntegrationResponse getTRLinkCustomerIntegrationById()

Retrieves detailed information about a specific customer integration.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiGetTRLinkCustomerIntegrationByIdRequest, TRLinkCustomerIntegrationResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiGetTRLinkCustomerIntegrationByIdRequest = {
  // string | Customer unique identifier
  customerId: 550e8400-e29b-41d4-a716-446655440001,
  // string | Customer integration unique identifier
  customerIntegrationId: 123e4567-e89b-12d3-a456-426614174000,
};

fireblocks.trLink.getTRLinkCustomerIntegrationById(body).then((res: FireblocksResponse<TRLinkCustomerIntegrationResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] | Customer unique identifier | defaults to undefined
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined


### Return type

**[TRLinkCustomerIntegrationResponse](../models/TRLinkCustomerIntegrationResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer integration retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTRLinkCustomerIntegrations**
> TRLinkCustomerIntegrationsListResponse getTRLinkCustomerIntegrations()

Retrieves all TRLink integrations for a specific customer. Returns a list of partner integrations configured for Travel Rule compliance.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiGetTRLinkCustomerIntegrationsRequest, TRLinkCustomerIntegrationsListResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiGetTRLinkCustomerIntegrationsRequest = {
  // string | Customer unique identifier
  customerId: 550e8400-e29b-41d4-a716-446655440001,
};

fireblocks.trLink.getTRLinkCustomerIntegrations(body).then((res: FireblocksResponse<TRLinkCustomerIntegrationsListResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | [**string**] | Customer unique identifier | defaults to undefined


### Return type

**[TRLinkCustomerIntegrationsListResponse](../models/TRLinkCustomerIntegrationsListResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer integrations retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTRLinkCustomers**
> TRLinkCustomersListResponse getTRLinkCustomers()

Retrieves all customers associated with the authenticated tenant. Returns a list of legal entities configured for Travel Rule compliance.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkCustomersListResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.trLink.getTRLinkCustomers(body).then((res: FireblocksResponse<TRLinkCustomersListResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[TRLinkCustomersListResponse](../models/TRLinkCustomersListResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customers retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTRLinkIntegrationPublicKey**
> TRLinkPublicKeyResponse getTRLinkIntegrationPublicKey()

Retrieves the partner\'s public key in JWK format for encrypting PII data in Travel Rule Messages. Use this key to encrypt sensitive originator and beneficiary information before sending Travel Rule messages.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiGetTRLinkIntegrationPublicKeyRequest, TRLinkPublicKeyResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiGetTRLinkIntegrationPublicKeyRequest = {
  // string | Customer integration unique identifier
  customerIntegrationId: 123e4567-e89b-12d3-a456-426614174000,
};

fireblocks.trLink.getTRLinkIntegrationPublicKey(body).then((res: FireblocksResponse<TRLinkPublicKeyResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined


### Return type

**[TRLinkPublicKeyResponse](../models/TRLinkPublicKeyResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Public key retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTRLinkPartners**
> TRLinkPartnersListResponse getTRLinkPartners()

Retrieves a list of all available Travel Rule Link integration partners. Partners provide Travel Rule compliance services such as VASP discovery, TRM exchange, and PII encryption.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkPartnersListResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.trLink.getTRLinkPartners(body).then((res: FireblocksResponse<TRLinkPartnersListResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[TRLinkPartnersListResponse](../models/TRLinkPartnersListResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of partners retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTRLinkPolicy**
> TRLinkPolicyResponse getTRLinkPolicy()

Retrieves the complete TRLink policy for the authenticated tenant, including pre-screening rules, post-screening rules, and missing TRM rules. Pre-screening rules determine whether transactions should be screened. Post-screening rules determine actions based on screening results. Missing TRM rules handle cases when screening data is unavailable.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkPolicyResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.trLink.getTRLinkPolicy(body).then((res: FireblocksResponse<TRLinkPolicyResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[TRLinkPolicyResponse](../models/TRLinkPolicyResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Policy retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTRLinkSupportedAsset**
> TRLinkGetSupportedAssetResponse getTRLinkSupportedAsset()

Retrieves detailed information about a specific asset by its Fireblocks asset ID. Returns the transformed Fireblocks asset data, raw partner response, and support status.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiGetTRLinkSupportedAssetRequest, TRLinkGetSupportedAssetResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiGetTRLinkSupportedAssetRequest = {
  // string | Customer integration unique identifier
  customerIntegrationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | Fireblocks asset ID
  assetId: assetId_example,
};

fireblocks.trLink.getTRLinkSupportedAsset(body).then((res: FireblocksResponse<TRLinkGetSupportedAssetResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined
 **assetId** | [**string**] | Fireblocks asset ID | defaults to undefined


### Return type

**[TRLinkGetSupportedAssetResponse](../models/TRLinkGetSupportedAssetResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Asset retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTRLinkTrmById**
> TRLinkTrmInfoResponse getTRLinkTrmById()

Retrieves a Travel Rule Message by its unique identifier from the partner provider. Returns full TRM details including status, IVMS101 data, and transaction information.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiGetTRLinkTrmByIdRequest, TRLinkTrmInfoResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiGetTRLinkTrmByIdRequest = {
  // string | Customer integration unique identifier
  customerIntegrationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | Travel Rule Message unique identifier
  trmId: trmId_example,
};

fireblocks.trLink.getTRLinkTrmById(body).then((res: FireblocksResponse<TRLinkTrmInfoResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined
 **trmId** | [**string**] | Travel Rule Message unique identifier | defaults to undefined


### Return type

**[TRLinkTrmInfoResponse](../models/TRLinkTrmInfoResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | TRM retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTRLinkVaspById**
> TRLinkVaspDto getTRLinkVaspById()

Retrieves detailed information about a specific VASP by its unique identifier. Returns VASP details including public key if available.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiGetTRLinkVaspByIdRequest, TRLinkVaspDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiGetTRLinkVaspByIdRequest = {
  // string | Customer integration unique identifier
  customerIntegrationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | VASP unique identifier (DID format)
  vaspId: vaspId_example,
};

fireblocks.trLink.getTRLinkVaspById(body).then((res: FireblocksResponse<TRLinkVaspDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined
 **vaspId** | [**string**] | VASP unique identifier (DID format) | defaults to undefined


### Return type

**[TRLinkVaspDto](../models/TRLinkVaspDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VASP retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listTRLinkSupportedAssets**
> TRLinkAssetsListPagedResponse listTRLinkSupportedAssets()

Retrieves a paginated list of assets supported by the partner integration. Includes a flag indicating whether the partner can handle assets not explicitly listed. Supports cursor-based pagination.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiListTRLinkSupportedAssetsRequest, TRLinkAssetsListPagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiListTRLinkSupportedAssetsRequest = {
  // string | Customer integration unique identifier
  customerIntegrationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // number | Number of results per page (max 100) (optional)
  pageSize: 56,
  // string | Cursor for pagination (from previous response) (optional)
  pageCursor: pageCursor_example,
};

fireblocks.trLink.listTRLinkSupportedAssets(body).then((res: FireblocksResponse<TRLinkAssetsListPagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined
 **pageSize** | [**number**] | Number of results per page (max 100) | (optional) defaults to 100
 **pageCursor** | [**string**] | Cursor for pagination (from previous response) | (optional) defaults to undefined


### Return type

**[TRLinkAssetsListPagedResponse](../models/TRLinkAssetsListPagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Supported assets retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listTRLinkVasps**
> TRLinkAPIPagedResponse listTRLinkVasps()

Retrieves a paginated list of VASPs (Virtual Asset Service Providers) available through the partner integration. Supports cursor-based pagination.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiListTRLinkVaspsRequest, TRLinkAPIPagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiListTRLinkVaspsRequest = {
  // string | Customer integration unique identifier
  customerIntegrationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // number | Number of results per page (max 100) (optional)
  pageSize: 56,
  // string | Cursor for pagination (from previous response) (optional)
  pageCursor: pageCursor_example,
};

fireblocks.trLink.listTRLinkVasps(body).then((res: FireblocksResponse<TRLinkAPIPagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined
 **pageSize** | [**number**] | Number of results per page (max 100) | (optional) defaults to 100
 **pageCursor** | [**string**] | Cursor for pagination (from previous response) | (optional) defaults to undefined


### Return type

**[TRLinkAPIPagedResponse](../models/TRLinkAPIPagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VASPs retrieved successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **redirectTRLinkTrm**
> TRLinkTrmInfoResponse redirectTRLinkTrm(tRLinkRedirectTrmRequest, )

Redirects a Travel Rule Message to a subsidiary VASP. This operation requires the partner to support nested VASPs functionality.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiRedirectTRLinkTrmRequest, TRLinkTrmInfoResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiRedirectTRLinkTrmRequest = {
  // TRLinkRedirectTrmRequest
  tRLinkRedirectTrmRequest: param_value,
  // string | Customer integration unique identifier
  customerIntegrationId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | Travel Rule Message unique identifier
  trmId: trmId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.trLink.redirectTRLinkTrm(body).then((res: FireblocksResponse<TRLinkTrmInfoResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRLinkRedirectTrmRequest** | **[TRLinkRedirectTrmRequest](../models/TRLinkRedirectTrmRequest.md)**|  |
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined
 **trmId** | [**string**] | Travel Rule Message unique identifier | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TRLinkTrmInfoResponse](../models/TRLinkTrmInfoResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Transaction redirect request accepted |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setTRLinkDestinationTravelRuleMessageId**
> TRLinkSetDestinationTravelRuleMessageIdResponse setTRLinkDestinationTravelRuleMessageId(tRLinkSetDestinationTravelRuleMessageIdRequest, )

Associates a Travel Rule Message ID with a specific destination in a multi-destination Fireblocks transaction. Matches destinations by amount and peer path.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiSetTRLinkDestinationTravelRuleMessageIdRequest, TRLinkSetDestinationTravelRuleMessageIdResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiSetTRLinkDestinationTravelRuleMessageIdRequest = {
  // TRLinkSetDestinationTravelRuleMessageIdRequest
  tRLinkSetDestinationTravelRuleMessageIdRequest: param_value,
  // string | Fireblocks transaction unique identifier
  txId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.trLink.setTRLinkDestinationTravelRuleMessageId(body).then((res: FireblocksResponse<TRLinkSetDestinationTravelRuleMessageIdResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRLinkSetDestinationTravelRuleMessageIdRequest** | **[TRLinkSetDestinationTravelRuleMessageIdRequest](../models/TRLinkSetDestinationTravelRuleMessageIdRequest.md)**|  |
 **txId** | [**string**] | Fireblocks transaction unique identifier | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TRLinkSetDestinationTravelRuleMessageIdResponse](../models/TRLinkSetDestinationTravelRuleMessageIdResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Destination travel rule message ID set successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setTRLinkTransactionTravelRuleMessageId**
> TRLinkSetTransactionTravelRuleMessageIdResponse setTRLinkTransactionTravelRuleMessageId(tRLinkSetTransactionTravelRuleMessageIdRequest, )

Associates a Travel Rule Message ID with a Fireblocks transaction. This links the TRM compliance data to the blockchain transaction.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiSetTRLinkTransactionTravelRuleMessageIdRequest, TRLinkSetTransactionTravelRuleMessageIdResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiSetTRLinkTransactionTravelRuleMessageIdRequest = {
  // TRLinkSetTransactionTravelRuleMessageIdRequest
  tRLinkSetTransactionTravelRuleMessageIdRequest: param_value,
  // string | Fireblocks transaction unique identifier
  txId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.trLink.setTRLinkTransactionTravelRuleMessageId(body).then((res: FireblocksResponse<TRLinkSetTransactionTravelRuleMessageIdResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRLinkSetTransactionTravelRuleMessageIdRequest** | **[TRLinkSetTransactionTravelRuleMessageIdRequest](../models/TRLinkSetTransactionTravelRuleMessageIdRequest.md)**|  |
 **txId** | [**string**] | Fireblocks transaction unique identifier | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TRLinkSetTransactionTravelRuleMessageIdResponse](../models/TRLinkSetTransactionTravelRuleMessageIdResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Travel rule message ID set successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **testTRLinkIntegrationConnection**
> TRLinkTestConnectionResponse testTRLinkIntegrationConnection()

Tests the connection to a customer integration by validating stored credentials and attempting communication with the Travel Rule partner. Returns connection status and any error messages.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiTestTRLinkIntegrationConnectionRequest, TRLinkTestConnectionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiTestTRLinkIntegrationConnectionRequest = {
  // string | Customer integration unique identifier
  customerIntegrationId: 123e4567-e89b-12d3-a456-426614174000,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.trLink.testTRLinkIntegrationConnection(body).then((res: FireblocksResponse<TRLinkTestConnectionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerIntegrationId** | [**string**] | Customer integration unique identifier | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TRLinkTestConnectionResponse](../models/TRLinkTestConnectionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connection test completed (success or failure details in response body) |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateTRLinkCustomer**
> TRLinkCustomerResponse updateTRLinkCustomer(tRLinkUpdateCustomerRequest, )

Updates an existing customer\'s information. All fields are optional - only provided fields will be updated.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TRLinkApiUpdateTRLinkCustomerRequest, TRLinkCustomerResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TRLinkApiUpdateTRLinkCustomerRequest = {
  // TRLinkUpdateCustomerRequest
  tRLinkUpdateCustomerRequest: param_value,
  // string | Customer unique identifier
  customerId: 550e8400-e29b-41d4-a716-446655440001,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.trLink.updateTRLinkCustomer(body).then((res: FireblocksResponse<TRLinkCustomerResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tRLinkUpdateCustomerRequest** | **[TRLinkUpdateCustomerRequest](../models/TRLinkUpdateCustomerRequest.md)**|  |
 **customerId** | [**string**] | Customer unique identifier | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TRLinkCustomerResponse](../models/TRLinkCustomerResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Customer updated successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



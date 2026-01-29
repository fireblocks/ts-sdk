# TradingBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrder**](#createOrder) | **POST** /trading/orders | Create an order
[**createQuote**](#createQuote) | **POST** /trading/quotes | Create a quote
[**getOrder**](#getOrder) | **GET** /trading/orders/{orderId} | Get order details
[**getOrders**](#getOrders) | **GET** /trading/orders | Get orders
[**getTradingProviders**](#getTradingProviders) | **GET** /trading/providers | Get providers


# **createOrder**
> OrderDetails createOrder(createOrderRequest)

Create an order to buy or sell an asset. If no source is given, an external source will be use.  Note: These endpoints are currently in beta and might be subject to changes.  If you want to participate and learn more about the Fireblocks Trading, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.  Endpoint Permission: Owner, Admin, Non-Signing Admin, Signer, Editor.  For detailed information about error codes and troubleshooting, please refer to our [API Error Codes documentation](https://developers.fireblocks.com/reference/api-error-codes).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TradingBetaApiCreateOrderRequest, OrderDetails } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TradingBetaApiCreateOrderRequest = {
  // CreateOrderRequest
  createOrderRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tradingBeta.createOrder(body).then((res: FireblocksResponse<OrderDetails>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOrderRequest** | **[CreateOrderRequest](../models/CreateOrderRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[OrderDetails](../models/OrderDetails.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Order creation response |  * X-Request-ID -  <br>  |
**400** | Bad request: invalid input parameters, malformed request body, or validation failure. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**5XX** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createQuote**
> QuotesResponse createQuote(createQuote)

Generate a time-limited quote for asset conversion, providing exchange rate and amount calculations.  Note: These endpoints are currently in beta and might be subject to changes.  If you want to participate and learn more about the Fireblocks Trading, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.  Endpoint Permission: Owner, Admin, Non-Signing Admin, Signer, Editor.  For detailed information about error codes and troubleshooting, please refer to our [API Error Codes documentation](https://developers.fireblocks.com/reference/api-error-codes).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TradingBetaApiCreateQuoteRequest, QuotesResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TradingBetaApiCreateQuoteRequest = {
  // CreateQuote
  createQuote: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tradingBeta.createQuote(body).then((res: FireblocksResponse<QuotesResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createQuote** | **[CreateQuote](../models/CreateQuote.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[QuotesResponse](../models/QuotesResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Quote created |  * X-Request-ID -  <br>  |
**400** | Bad request: invalid input parameters, malformed request body, or validation failure. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**5XX** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getOrder**
> OrderDetails getOrder()

Retrieve detailed information about a specific order by its ID.  Note:These endpoints are currently in beta and might be subject to changes.  If you want to participate and learn more about the Fireblocks Trading, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.  Endpoint Permission: Owner, Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.  For detailed information about error codes and troubleshooting, please refer to our [API Error Codes documentation](https://developers.fireblocks.com/reference/api-error-codes).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TradingBetaApiGetOrderRequest, OrderDetails } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TradingBetaApiGetOrderRequest = {
  // string | The ID of the order to fetch.
  orderId: orderId_example,
};

fireblocks.tradingBeta.getOrder(body).then((res: FireblocksResponse<OrderDetails>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | The ID of the order to fetch. | defaults to undefined


### Return type

**[OrderDetails](../models/OrderDetails.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Order response |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**404** | Not found: requested resource does not exist (e.g., order). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**5XX** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getOrders**
> GetOrdersResponse getOrders()

Retrieve a paginated list of orders with optional filtering by account, provider, status, and time range.  Note:These endpoints are currently in beta and might be subject to changes.  If you want to participate and learn more about the Fireblocks Trading, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.  Endpoint Permission: Owner, Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.  For detailed information about error codes and troubleshooting, please refer to our [API Error Codes documentation](https://developers.fireblocks.com/reference/api-error-codes).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TradingBetaApiGetOrdersRequest, GetOrdersResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TradingBetaApiGetOrdersRequest = {
  // number | pageSize for pagination.
  pageSize: 56,
  // string (optional)
  pageCursor: pageCursor_example,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: order_example,
  // Array<string> | Filter by accountId. (optional)
  accountId: param_value,
  // Array<string> | Filter by providerId. (optional)
  providerId: param_value,
  // Array<OrderStatus> | Filter by order status. (optional)
  statuses: param_value,
  // number (optional)
  startTime: 56,
  // number (optional)
  endTime: 56,
  // 'DIGITAL_ONLY' | 'FIAT' (optional)
  assetConversionType: assetConversionType_example,
};

fireblocks.tradingBeta.getOrders(body).then((res: FireblocksResponse<GetOrdersResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] | pageSize for pagination. | defaults to undefined
 **pageCursor** | [**string**] |  | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'
 **accountId** | **Array&lt;string&gt;** | Filter by accountId. | (optional) defaults to undefined
 **providerId** | **Array&lt;string&gt;** | Filter by providerId. | (optional) defaults to undefined
 **statuses** | **Array&lt;OrderStatus&gt;** | Filter by order status. | (optional) defaults to undefined
 **startTime** | [**number**] |  | (optional) defaults to undefined
 **endTime** | [**number**] |  | (optional) defaults to undefined
 **assetConversionType** | [**&#39;DIGITAL_ONLY&#39; | &#39;FIAT&#39;**]**Array<&#39;DIGITAL_ONLY&#39; &#124; &#39;FIAT&#39;>** |  | (optional) defaults to undefined


### Return type

**[GetOrdersResponse](../models/GetOrdersResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Orders response |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**5XX** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTradingProviders**
> ProvidersListResponse getTradingProviders()

Retrieve a list of all available external providers supporting trading activities through the platform.  **Note:** These endpoints are currently in beta and might be subject to changes. If you want to participate and learn more about the Fireblocks Trading, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.  **Endpoint Permission:** Owner, Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.  For detailed information about error codes and troubleshooting, please refer to our [API Error Codes documentation](https://developers.fireblocks.com/reference/api-error-codes). 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TradingBetaApiGetTradingProvidersRequest, ProvidersListResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TradingBetaApiGetTradingProvidersRequest = {
  // number | Page size for pagination. (optional)
  pageSize: 56,
  // string | Page cursor for pagination. (optional)
  pageCursor: pageCursor_example,
};

fireblocks.tradingBeta.getTradingProviders(body).then((res: FireblocksResponse<ProvidersListResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageSize** | [**number**] | Page size for pagination. | (optional) defaults to 20
 **pageCursor** | [**string**] | Page cursor for pagination. | (optional) defaults to undefined


### Return type

**[ProvidersListResponse](../models/ProvidersListResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Providers response |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**5XX** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



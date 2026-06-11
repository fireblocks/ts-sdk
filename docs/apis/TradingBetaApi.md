# TradingBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrder**](#createOrder) | **POST** /trading/orders | Create an order
[**createQuote**](#createQuote) | **POST** /trading/quotes | Create a quote
[**fetchAllOffers**](#fetchAllOffers) | **POST** /trading/offers | Get all offers
[**fetchRates**](#fetchRates) | **POST** /trading/rates | Get rates
[**getOrder**](#getOrder) | **GET** /trading/orders/{orderId} | Get order details
[**getOrderRequirements**](#getOrderRequirements) | **GET** /trading/orders/{orderId}/requirement | Get order requirement details for an order
[**getOrders**](#getOrders) | **GET** /trading/orders | Get orders
[**getTradingProviderById**](#getTradingProviderById) | **GET** /trading/providers/{providerId} | Get trading provider by ID
[**getTradingProviders**](#getTradingProviders) | **GET** /trading/providers | Get providers
[**submitOrderRequirements**](#submitOrderRequirements) | **POST** /trading/orders/{orderId}/requirement/data | Submit a response to an order requirement
[**uploadOrderRequirementFile**](#uploadOrderRequirementFile) | **POST** /trading/orders/{orderId}/requirement/file | Upload a file for an order requirement


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

# **fetchAllOffers**
> OffersResponse fetchAllOffers(createOffersRequest)

Retrieve all available offers across the workspace for a given asset pair. Always operates in open scope — no provider or account selection required. Returns a mix of indicative rates and committed quotes as applicable per provider.  If no slippageBps is provided, it defaults to 50 bps (0.5%). Slippage and settlement configuration do not affect the returned rate.  Note: These endpoints are currently in beta and might be subject to changes.  If you want to participate and learn more about the Fireblocks Trading, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.  Endpoint Permission: Owner, Admin, Non-Signing Admin, Signer, Editor.  For detailed information about error codes and troubleshooting, please refer to our [API Error Codes documentation](https://developers.fireblocks.com/reference/api-error-codes).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TradingBetaApiFetchAllOffersRequest, OffersResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TradingBetaApiFetchAllOffersRequest = {
  // CreateOffersRequest
  createOffersRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tradingBeta.fetchAllOffers(body).then((res: FireblocksResponse<OffersResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOffersRequest** | **[CreateOffersRequest](../models/CreateOffersRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[OffersResponse](../models/OffersResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Offers response |  * X-Request-ID -  <br>  |
**400** | Bad request: invalid input parameters, malformed request body, or validation failure. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**5XX** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **fetchRates**
> RatesResponse fetchRates(ratesRequest)

Retrieve indicative exchange rate from specified providers for a given asset pair. Rates are non-executable price signals intended for discovery and display purposes.  Note: These endpoints are currently in beta and might be subject to changes.  If you want to participate and learn more about the Fireblocks Trading, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.  Endpoint Permission: Owner, Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.  For detailed information about error codes and troubleshooting, please refer to our [API Error Codes documentation](https://developers.fireblocks.com/reference/api-error-codes).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TradingBetaApiFetchRatesRequest, RatesResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TradingBetaApiFetchRatesRequest = {
  // RatesRequest
  ratesRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tradingBeta.fetchRates(body).then((res: FireblocksResponse<RatesResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ratesRequest** | **[RatesRequest](../models/RatesRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[RatesResponse](../models/RatesResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rate response |  * X-Request-ID -  <br>  |
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

# **getOrderRequirements**
> OrderRequirementDetails getOrderRequirements()

Fetch order requirement details for an order that is in `AWAITING_INFORMATION` status.  The response includes `requirementId` and `dueBy` metadata, a `requiredData` JSON Schema (Draft-7) describing the shape of the `data` object expected on `POST /trading/orders/{orderId}/requirement/data`, and `requiredFiles` descriptors for any files the provider requires (uploaded via `POST /trading/orders/{orderId}/requirement/file`).  Note: These endpoints are currently in beta and might be subject to changes.  If you want to participate and learn more about the Fireblocks Trading, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.  Endpoint Permission: Owner, Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.  For detailed information about error codes and troubleshooting, please refer to our [API Error Codes documentation](https://developers.fireblocks.com/reference/api-error-codes).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TradingBetaApiGetOrderRequirementsRequest, OrderRequirementDetails } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TradingBetaApiGetOrderRequirementsRequest = {
  // string | The ID of the order for which the order requirement is issued.
  orderId: orderId_example,
};

fireblocks.tradingBeta.getOrderRequirements(body).then((res: FireblocksResponse<OrderRequirementDetails>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderId** | [**string**] | The ID of the order for which the order requirement is issued. | defaults to undefined


### Return type

**[OrderRequirementDetails](../models/OrderRequirementDetails.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Order requirement details |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**404** | Not found: the order does not exist. |  * X-Request-ID -  <br>  |
**409** | Conflict: the order exists but does not have an active order requirement (e.g., the order is not in &#x60;AWAITING_INFORMATION&#x60;). |  * X-Request-ID -  <br>  |
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

# **getTradingProviderById**
> TradingProvider getTradingProviderById()

Retrieve a single provider by ID.  **Note:** These endpoints are currently in beta and might be subject to changes. If you want to participate and learn more about the Fireblocks Trading, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.  **Endpoint Permission:** Owner, Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.  For detailed information about error codes and troubleshooting, please refer to our [API Error Codes documentation](https://developers.fireblocks.com/reference/api-error-codes). 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TradingBetaApiGetTradingProviderByIdRequest, TradingProvider } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TradingBetaApiGetTradingProviderByIdRequest = {
  // string | The unique identifier of the provider.
  providerId: providerId_example,
};

fireblocks.tradingBeta.getTradingProviderById(body).then((res: FireblocksResponse<TradingProvider>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | [**string**] | The unique identifier of the provider. | defaults to undefined


### Return type

**[TradingProvider](../models/TradingProvider.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single provider details. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Forbidden - insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**404** | Provider not found. |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded - slow down and retry later. |  * X-Request-ID -  <br>  |
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

# **submitOrderRequirements**
> submitOrderRequirements(submitOrderRequirementRequest, )

Submit the user\'s textual response to an order requirement on an order that is in `AWAITING_INFORMATION` status.  The request body carries `data` — a free-form object conforming to the `requiredData` JSON Schema returned by the GET endpoint. Any required files are uploaded separately via `POST /trading/orders/{orderId}/requirement/file`.  Note: These endpoints are currently in beta and might be subject to changes.  If you want to participate and learn more about the Fireblocks Trading, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.  Endpoint Permission: Owner, Admin, Non-Signing Admin, Signer, Editor.  For detailed information about error codes and troubleshooting, please refer to our [API Error Codes documentation](https://developers.fireblocks.com/reference/api-error-codes).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TradingBetaApiSubmitOrderRequirementsRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TradingBetaApiSubmitOrderRequirementsRequest = {
  // SubmitOrderRequirementRequest
  submitOrderRequirementRequest: param_value,
  // string | The ID of the order to submit the order requirement response for.
  orderId: orderId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tradingBeta.submitOrderRequirements(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submitOrderRequirementRequest** | **[SubmitOrderRequirementRequest](../models/SubmitOrderRequirementRequest.md)**|  |
 **orderId** | [**string**] | The ID of the order to submit the order requirement response for. | defaults to undefined
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
**202** | Order requirement submission accepted for processing. |  * X-Request-ID -  <br>  |
**400** | Bad request: invalid input parameters, malformed request body, or validation failure. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**404** | Not found: the order does not exist. |  * X-Request-ID -  <br>  |
**409** | Conflict: the order exists but does not have an active order requirement (e.g., the order is not in &#x60;AWAITING_INFORMATION&#x60;). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**5XX** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **uploadOrderRequirementFile**
> uploadOrderRequirementFile()

Upload a single file (multipart/form-data) in response to an order requirement on an order that is in `AWAITING_INFORMATION` status. Call this endpoint once per required file.  Send `fileKey` (matching a `fileKey` from `requiredFiles` on the GET response) and the binary `file`. Its type must be one of the supported file formats. Fireblocks encrypts each file and uploads it individually to the underlying provider. The textual response is submitted separately via `POST /trading/orders/{orderId}/requirement/data`.  Note: These endpoints are currently in beta and might be subject to changes.  If you want to participate and learn more about the Fireblocks Trading, please contact your Fireblocks Customer Success Manager or send an email to CSM@fireblocks.com.  Endpoint Permission: Owner, Admin, Non-Signing Admin, Signer, Editor.  For detailed information about error codes and troubleshooting, please refer to our [API Error Codes documentation](https://developers.fireblocks.com/reference/api-error-codes).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TradingBetaApiUploadOrderRequirementFileRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TradingBetaApiUploadOrderRequirementFileRequest = {
  // string | Identifier of the required file this upload satisfies. Must match a `fileKey` from `requiredFiles` on the GET response.
  fileKey: fileKey_example,
  // File | The binary file content. The file\\\'s type must be one of the supported OrderRequirementAllowedFileType values; the file name and type are derived from the uploaded part.
  file: BINARY_DATA_HERE,
  // string | The ID of the order to upload the order requirement file for.
  orderId: orderId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.tradingBeta.uploadOrderRequirementFile(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileKey** | [**string**] | Identifier of the required file this upload satisfies. Must match a &#x60;fileKey&#x60; from &#x60;requiredFiles&#x60; on the GET response. | defaults to undefined
 **file** | [**File**] | The binary file content. The file\\\&#39;s type must be one of the supported OrderRequirementAllowedFileType values; the file name and type are derived from the uploaded part. | defaults to undefined
 **orderId** | [**string**] | The ID of the order to upload the order requirement file for. | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | File accepted for processing. |  * X-Request-ID -  <br>  |
**400** | Bad request: unsupported file type, missing fileKey, malformed request, or validation failure. |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Forbidden: insufficient permissions, disabled feature, or restricted access. |  * X-Request-ID -  <br>  |
**404** | Not found: the order does not exist. |  * X-Request-ID -  <br>  |
**409** | Conflict: the order exists but does not have an active order requirement (e.g., the order is not in &#x60;AWAITING_INFORMATION&#x60;). |  * X-Request-ID -  <br>  |
**429** | Rate limit exceeded: slow down and retry later. |  * X-Request-ID -  <br>  |
**5XX** | Internal error while processing the request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



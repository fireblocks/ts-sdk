# WebhooksV2Api

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhook**](#createWebhook) | **POST** /webhooks | Create a new webhook
[**createWebhookOAuth**](#createWebhookOAuth) | **POST** /webhooks_settings/oauth | Create OAuth credentials
[**deleteWebhook**](#deleteWebhook) | **DELETE** /webhooks/{webhookId} | Delete webhook
[**deleteWebhookOAuth**](#deleteWebhookOAuth) | **DELETE** /webhooks_settings/oauth/{webhookOauthId} | Delete OAuth credentials
[**getMetrics**](#getMetrics) | **GET** /webhooks/{webhookId}/metrics/{metricName} | Get webhook metrics
[**getMtlsCsr**](#getMtlsCsr) | **GET** /webhooks/mtls/csr | Get mTLS CSR
[**getNotification**](#getNotification) | **GET** /webhooks/{webhookId}/notifications/{notificationId} | Get notification by id
[**getNotificationAttempts**](#getNotificationAttempts) | **GET** /webhooks/{webhookId}/notifications/{notificationId}/attempts | Get notification attempts
[**getNotifications**](#getNotifications) | **GET** /webhooks/{webhookId}/notifications | Get all notifications by webhook id
[**getResendByQueryJobStatus**](#getResendByQueryJobStatus) | **GET** /webhooks/{webhookId}/notifications/resend_by_query/jobs/{jobId} | Get resend by query job status
[**getResendJobStatus**](#getResendJobStatus) | **GET** /webhooks/{webhookId}/notifications/resend_failed/jobs/{jobId} | Get resend job status
[**getWebhook**](#getWebhook) | **GET** /webhooks/{webhookId} | Get webhook by id
[**getWebhookOAuth**](#getWebhookOAuth) | **GET** /webhooks_settings/oauth/{webhookOauthId} | Get OAuth credentials by id
[**getWebhookOAuths**](#getWebhookOAuths) | **GET** /webhooks_settings/oauth | Get all OAuth credentials
[**getWebhooks**](#getWebhooks) | **GET** /webhooks | Get all webhooks
[**resendFailedNotifications**](#resendFailedNotifications) | **POST** /webhooks/{webhookId}/notifications/resend_failed | Resend failed notifications
[**resendNotificationById**](#resendNotificationById) | **POST** /webhooks/{webhookId}/notifications/{notificationId}/resend | Resend notification by id
[**resendNotificationsByQuery**](#resendNotificationsByQuery) | **POST** /webhooks/{webhookId}/notifications/resend_by_query | Resend notifications by query
[**resendNotificationsByResourceId**](#resendNotificationsByResourceId) | **POST** /webhooks/{webhookId}/notifications/resend_by_resource | Resend notifications by resource Id
[**updateWebhook**](#updateWebhook) | **PATCH** /webhooks/{webhookId} | Update webhook
[**updateWebhookOAuth**](#updateWebhookOAuth) | **PATCH** /webhooks_settings/oauth/{webhookOauthId} | Update OAuth credentials


# **createWebhook**
> Webhook createWebhook(createWebhookRequest)

Creates a new webhook, which will be triggered on the specified events  **Endpoint Permissions:** Owner, Admin, Non-Signing Admin. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiCreateWebhookRequest, Webhook } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiCreateWebhookRequest = {
  // CreateWebhookRequest
  createWebhookRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.webhooksV2.createWebhook(body).then((res: FireblocksResponse<Webhook>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWebhookRequest** | **[CreateWebhookRequest](../models/CreateWebhookRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[Webhook](../models/Webhook.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | created new webhook successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createWebhookOAuth**
> WebhookOAuthCredentials createWebhookOAuth(createWebhookOAuthRequest)

Creates a reusable OAuth client credential set. Attach it to a webhook by passing the returned id as that webhook\'s `webhookOauthId`. Several webhooks may share one credential set, so rotating its client secret covers all of them at once. The client secret is write-only and is never returned.  **Endpoint Permissions:** Owner, Admin, Non-Signing Admin. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiCreateWebhookOAuthRequest, WebhookOAuthCredentials } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiCreateWebhookOAuthRequest = {
  // CreateWebhookOAuthRequest
  createWebhookOAuthRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.webhooksV2.createWebhookOAuth(body).then((res: FireblocksResponse<WebhookOAuthCredentials>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createWebhookOAuthRequest** | **[CreateWebhookOAuthRequest](../models/CreateWebhookOAuthRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[WebhookOAuthCredentials](../models/WebhookOAuthCredentials.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | created the OAuth credentials successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteWebhook**
> Webhook deleteWebhook()

Delete a webhook by its id  Endpoint Permission: Owner, Admin, Non-Signing Admin. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiDeleteWebhookRequest, Webhook } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiDeleteWebhookRequest = {
  // string | The unique identifier of the webhook
  webhookId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.webhooksV2.deleteWebhook(body).then((res: FireblocksResponse<Webhook>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] | The unique identifier of the webhook | defaults to undefined


### Return type

**[Webhook](../models/Webhook.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deleted webhook object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteWebhookOAuth**
> DeleteWebhookOAuthResponse deleteWebhookOAuth()

Deletes an OAuth credential set. By default the delete is refused while the credentials are still in use: if any webhook references them, nothing is deleted and the request fails with `409 Conflict`, naming the reason and listing the ids of the referencing webhooks. This protects a shared credential set from being removed out from under the webhooks that depend on it, since several webhooks may reference the same one.  Pass `forceDelete=true` to delete anyway. That detaches every referencing webhook — it clears each webhook\'s `webhookOauthId`, it does **not** delete the webhook — then deletes the credential set and returns the deleted resource together with `detachedWebhookIds`. The detached webhooks keep delivering notifications, but without an `Authorization` header, so their endpoints will see unauthenticated deliveries from that point on.  When nothing references the credentials the delete succeeds either way, and `detachedWebhookIds` comes back empty.  **Endpoint Permissions:** Owner, Admin, Non-Signing Admin. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiDeleteWebhookOAuthRequest, DeleteWebhookOAuthResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiDeleteWebhookOAuthRequest = {
  // string | The unique identifier of the OAuth credentials
  webhookOauthId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // boolean | Delete the credentials even while webhooks still reference them, detaching those webhooks instead of refusing. Leave it unset, or `false`, to get a `409 Conflict` whenever anything still references the credentials. (optional)
  forceDelete: true,
};

fireblocks.webhooksV2.deleteWebhookOAuth(body).then((res: FireblocksResponse<DeleteWebhookOAuthResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookOauthId** | [**string**] | The unique identifier of the OAuth credentials | defaults to undefined
 **forceDelete** | [**boolean**] | Delete the credentials even while webhooks still reference them, detaching those webhooks instead of refusing. Leave it unset, or &#x60;false&#x60;, to get a &#x60;409 Conflict&#x60; whenever anything still references the credentials. | (optional) defaults to false


### Return type

**[DeleteWebhookOAuthResponse](../models/DeleteWebhookOAuthResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deleted OAuth credentials, plus the ids of any webhooks that were detached from them |  * X-Request-ID -  <br>  |
**409** | Webhooks still reference these credentials and &#x60;forceDelete&#x60; was not set. Nothing was deleted. The error message names the reason and the ids of the referencing webhooks — detach or delete those webhooks, or retry with &#x60;forceDelete&#x3D;true&#x60;. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getMetrics**
> WebhookMetric getMetrics()

Get webhook metrics by webhook id and metric name 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiGetMetricsRequest, WebhookMetric } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiGetMetricsRequest = {
  // string
  webhookId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // 'LAST_ACTIVE_HOUR_ERROR_RATE' | Name of the metric to retrieve
  metricName: LAST_ACTIVE_HOUR_ERROR_RATE,
};

fireblocks.webhooksV2.getMetrics(body).then((res: FireblocksResponse<WebhookMetric>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] |  | defaults to undefined
 **metricName** | [**&#39;LAST_ACTIVE_HOUR_ERROR_RATE&#39;**]**Array<&#39;LAST_ACTIVE_HOUR_ERROR_RATE&#39;>** | Name of the metric to retrieve | defaults to undefined


### Return type

**[WebhookMetric](../models/WebhookMetric.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Webhook metrics |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getMtlsCsr**
> WebhookMtlsCsrResponse getMtlsCsr()

Returns the Fireblocks Certificate Signing Request (CSR) PEM that customers use to generate their signed client certificate. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhookMtlsCsrResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.webhooksV2.getMtlsCsr(body).then((res: FireblocksResponse<WebhookMtlsCsrResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[WebhookMtlsCsrResponse](../models/WebhookMtlsCsrResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The mTLS CSR PEM |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getNotification**
> NotificationWithData getNotification()

Get notification by id 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiGetNotificationRequest, NotificationWithData } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiGetNotificationRequest = {
  // string | The ID of the webhook to fetch
  webhookId: webhookId_example,
  // string | The ID of the notification to fetch
  notificationId: notificationId_example,
  // boolean | Include the data of the notification (optional)
  includeData: true,
};

fireblocks.webhooksV2.getNotification(body).then((res: FireblocksResponse<NotificationWithData>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] | The ID of the webhook to fetch | defaults to undefined
 **notificationId** | [**string**] | The ID of the notification to fetch | defaults to undefined
 **includeData** | [**boolean**] | Include the data of the notification | (optional) defaults to undefined


### Return type

**[NotificationWithData](../models/NotificationWithData.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getNotificationAttempts**
> NotificationAttemptsPaginatedResponse getNotificationAttempts()

Get notification attempts by notification id 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiGetNotificationAttemptsRequest, NotificationAttemptsPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiGetNotificationAttemptsRequest = {
  // string | The ID of the webhook to fetch
  webhookId: webhookId_example,
  // string | The ID of the notification to fetch
  notificationId: notificationId_example,
  // string | Cursor of the required page (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of items in the page (optional)
  pageSize: 10,
};

fireblocks.webhooksV2.getNotificationAttempts(body).then((res: FireblocksResponse<NotificationAttemptsPaginatedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] | The ID of the webhook to fetch | defaults to undefined
 **notificationId** | [**string**] | The ID of the notification to fetch | defaults to undefined
 **pageCursor** | [**string**] | Cursor of the required page | (optional) defaults to undefined
 **pageSize** | [**number**] | Maximum number of items in the page | (optional) defaults to 10


### Return type

**[NotificationAttemptsPaginatedResponse](../models/NotificationAttemptsPaginatedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getNotifications**
> NotificationPaginatedResponse getNotifications()

Get all notifications by webhook id (paginated) 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiGetNotificationsRequest, NotificationPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiGetNotificationsRequest = {
  // string
  webhookId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: ASC,
  // 'id' | 'createdAt' | 'updatedAt' | 'status' | 'eventType' | 'resourceId' | Sort by field (optional)
  sortBy: id,
  // string | Cursor of the required page (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of items in the page (optional)
  pageSize: 10,
  // number | Start time in milliseconds since epoch to filter by notifications created after this time (default 31 days ago) (optional)
  startTime: 1625097600000,
  // number | End time in milliseconds since epoch to filter by notifications created before this time (default current time) (optional)
  endTime: 1625017600000,
  // Array<NotificationStatus> | List of notification statuses to filter by (optional)
  statuses: param_value,
  // Array<WebhookEvent> | List of webhook event types to filter by (optional)
  events: param_value,
  // string | Resource ID to filter by (optional)
  resourceId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.webhooksV2.getNotifications(body).then((res: FireblocksResponse<NotificationPaginatedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] |  | defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'
 **sortBy** | [**&#39;id&#39; | &#39;createdAt&#39; | &#39;updatedAt&#39; | &#39;status&#39; | &#39;eventType&#39; | &#39;resourceId&#39;**]**Array<&#39;id&#39; &#124; &#39;createdAt&#39; &#124; &#39;updatedAt&#39; &#124; &#39;status&#39; &#124; &#39;eventType&#39; &#124; &#39;resourceId&#39;>** | Sort by field | (optional) defaults to 'updatedAt'
 **pageCursor** | [**string**] | Cursor of the required page | (optional) defaults to undefined
 **pageSize** | [**number**] | Maximum number of items in the page | (optional) defaults to 100
 **startTime** | [**number**] | Start time in milliseconds since epoch to filter by notifications created after this time (default 31 days ago) | (optional) defaults to undefined
 **endTime** | [**number**] | End time in milliseconds since epoch to filter by notifications created before this time (default current time) | (optional) defaults to undefined
 **statuses** | **Array&lt;NotificationStatus&gt;** | List of notification statuses to filter by | (optional) defaults to undefined
 **events** | **Array&lt;WebhookEvent&gt;** | List of webhook event types to filter by | (optional) defaults to undefined
 **resourceId** | [**string**] | Resource ID to filter by | (optional) defaults to undefined


### Return type

**[NotificationPaginatedResponse](../models/NotificationPaginatedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated response containing NotificationExternalDTO objects |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getResendByQueryJobStatus**
> ResendFailedNotificationsJobStatusResponse getResendByQueryJobStatus()

Get the status of a resend by query job 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiGetResendByQueryJobStatusRequest, ResendFailedNotificationsJobStatusResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiGetResendByQueryJobStatusRequest = {
  // string | The ID of the webhook
  webhookId: webhookId_example,
  // string | The ID of the resend job
  jobId: jobId_example,
};

fireblocks.webhooksV2.getResendByQueryJobStatus(body).then((res: FireblocksResponse<ResendFailedNotificationsJobStatusResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] | The ID of the webhook | defaults to undefined
 **jobId** | [**string**] | The ID of the resend job | defaults to undefined


### Return type

**[ResendFailedNotificationsJobStatusResponse](../models/ResendFailedNotificationsJobStatusResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Job status |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getResendJobStatus**
> ResendFailedNotificationsJobStatusResponse getResendJobStatus()

Get the status of a resend job 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiGetResendJobStatusRequest, ResendFailedNotificationsJobStatusResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiGetResendJobStatusRequest = {
  // string | The ID of the webhook
  webhookId: webhookId_example,
  // string | The ID of the resend job
  jobId: jobId_example,
};

fireblocks.webhooksV2.getResendJobStatus(body).then((res: FireblocksResponse<ResendFailedNotificationsJobStatusResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] | The ID of the webhook | defaults to undefined
 **jobId** | [**string**] | The ID of the resend job | defaults to undefined


### Return type

**[ResendFailedNotificationsJobStatusResponse](../models/ResendFailedNotificationsJobStatusResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Job status |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getWebhook**
> Webhook getWebhook()

Retrieve a webhook by its id 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiGetWebhookRequest, Webhook } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiGetWebhookRequest = {
  // string | The unique identifier of the webhook
  webhookId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.webhooksV2.getWebhook(body).then((res: FireblocksResponse<Webhook>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] | The unique identifier of the webhook | defaults to undefined


### Return type

**[Webhook](../models/Webhook.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A webhook object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getWebhookOAuth**
> WebhookOAuthCredentials getWebhookOAuth()

Retrieve an OAuth credential set by its id. The client secret is never returned. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiGetWebhookOAuthRequest, WebhookOAuthCredentials } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiGetWebhookOAuthRequest = {
  // string | The unique identifier of the OAuth credentials
  webhookOauthId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.webhooksV2.getWebhookOAuth(body).then((res: FireblocksResponse<WebhookOAuthCredentials>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookOauthId** | [**string**] | The unique identifier of the OAuth credentials | defaults to undefined


### Return type

**[WebhookOAuthCredentials](../models/WebhookOAuthCredentials.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An OAuth credentials object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getWebhookOAuths**
> WebhookOAuthList getWebhookOAuths()

Lists every OAuth credential set for the workspace. Client secrets are never returned. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhookOAuthList } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.webhooksV2.getWebhookOAuths(body).then((res: FireblocksResponse<WebhookOAuthList>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[WebhookOAuthList](../models/WebhookOAuthList.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The workspace\&#39;s OAuth credentials |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getWebhooks**
> WebhookPaginatedResponse getWebhooks()

Get all webhooks (paginated). 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiGetWebhooksRequest, WebhookPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiGetWebhooksRequest = {
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: ASC,
  // string | Cursor of the required page (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of items in the page (optional)
  pageSize: 10,
};

fireblocks.webhooksV2.getWebhooks(body).then((res: FireblocksResponse<WebhookPaginatedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'
 **pageCursor** | [**string**] | Cursor of the required page | (optional) defaults to undefined
 **pageSize** | [**number**] | Maximum number of items in the page | (optional) defaults to 10


### Return type

**[WebhookPaginatedResponse](../models/WebhookPaginatedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated response containing WebhookDto objects |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **resendFailedNotifications**
> ResendFailedNotificationsResponse resendFailedNotifications(resendFailedNotificationsRequest, )

Resend all failed notifications for a webhook in the last 24 hours  Endpoint Permission: Owner, Admin, Non-Signing Admin, Editor, Signer. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiResendFailedNotificationsRequest, ResendFailedNotificationsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiResendFailedNotificationsRequest = {
  // ResendFailedNotificationsRequest
  resendFailedNotificationsRequest: param_value,
  // string | The ID of the webhook
  webhookId: webhookId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.webhooksV2.resendFailedNotifications(body).then((res: FireblocksResponse<ResendFailedNotificationsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resendFailedNotificationsRequest** | **[ResendFailedNotificationsRequest](../models/ResendFailedNotificationsRequest.md)**|  |
 **webhookId** | [**string**] | The ID of the webhook | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ResendFailedNotificationsResponse](../models/ResendFailedNotificationsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No failed notifications to resend |  * X-Request-ID -  <br>  |
**202** | Resend failed notifications request was accepted and is being processed |  * X-Request-ID -  <br>  * Location -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **resendNotificationById**
> resendNotificationById()

Resend notification by ID  Endpoint Permission: Owner, Admin, Non-Signing Admin, Editor, Signer. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiResendNotificationByIdRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiResendNotificationByIdRequest = {
  // string | The ID of the webhook
  webhookId: webhookId_example,
  // string | The ID of the notification
  notificationId: notificationId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.webhooksV2.resendNotificationById(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] | The ID of the webhook | defaults to undefined
 **notificationId** | [**string**] | The ID of the notification | defaults to undefined
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
**202** | Resend notification request was accepted and is being processed |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **resendNotificationsByQuery**
> ResendByQueryResponse resendNotificationsByQuery(resendByQueryRequest, )

Resend notifications matching the given query filters (statuses, events, time range, resource ID)  Endpoint Permission: Owner, Admin, Non-Signing Admin, Editor, Signer. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiResendNotificationsByQueryRequest, ResendByQueryResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiResendNotificationsByQueryRequest = {
  // ResendByQueryRequest
  resendByQueryRequest: param_value,
  // string | The ID of the webhook
  webhookId: webhookId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.webhooksV2.resendNotificationsByQuery(body).then((res: FireblocksResponse<ResendByQueryResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resendByQueryRequest** | **[ResendByQueryRequest](../models/ResendByQueryRequest.md)**|  |
 **webhookId** | [**string**] | The ID of the webhook | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ResendByQueryResponse](../models/ResendByQueryResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | No matching notifications to resend |  * X-Request-ID -  <br>  |
**202** | Resend notifications request was accepted and is being processed |  * X-Request-ID -  <br>  * Location -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **resendNotificationsByResourceId**
> resendNotificationsByResourceId(resendNotificationsByResourceIdRequest, )

Resend notifications by resource Id  Endpoint Permission: Owner, Admin, Non-Signing Admin, Editor, Signer. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiResendNotificationsByResourceIdRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiResendNotificationsByResourceIdRequest = {
  // ResendNotificationsByResourceIdRequest
  resendNotificationsByResourceIdRequest: param_value,
  // string | The ID of the webhook
  webhookId: webhookId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.webhooksV2.resendNotificationsByResourceId(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resendNotificationsByResourceIdRequest** | **[ResendNotificationsByResourceIdRequest](../models/ResendNotificationsByResourceIdRequest.md)**|  |
 **webhookId** | [**string**] | The ID of the webhook | defaults to undefined
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
**202** | Resend notifications by resource request was accepted and is being processed |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateWebhook**
> Webhook updateWebhook(updateWebhookRequest, )

Update a webhook by its id  Endpoint Permission: Owner, Admin, Non-Signing Admin. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiUpdateWebhookRequest, Webhook } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiUpdateWebhookRequest = {
  // UpdateWebhookRequest
  updateWebhookRequest: param_value,
  // string | The unique identifier of the webhook
  webhookId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.webhooksV2.updateWebhook(body).then((res: FireblocksResponse<Webhook>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateWebhookRequest** | **[UpdateWebhookRequest](../models/UpdateWebhookRequest.md)**|  |
 **webhookId** | [**string**] | The unique identifier of the webhook | defaults to undefined


### Return type

**[Webhook](../models/Webhook.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated webhook object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateWebhookOAuth**
> WebhookOAuthCredentials updateWebhookOAuth(updateWebhookOAuthRequest, )

Updates only the fields present in the request; anything omitted is left as it is. Sending `clientSecret` on its own rotates the secret for every webhook using these credentials.  `customJwtClaims`, `customBodyParams` and `customHeaders` are all merged key by key rather than replaced, the same way a webhook\'s own `customHeaders` behaves: a key sent with a value is added or overwritten, a key sent with a `null` value is deleted, and a key you omit is left alone. Since a `null` inside a map is the delete mechanism, none of the three accepts `null` for the whole field — `customJwtClaims: null`, `customBodyParams: null` or `customHeaders: null` is rejected with a `400` rather than ignored. Clear a map by listing each of its keys with a `null` value. Because `null` is spent on deletion, a claim cannot be set to JSON `null` either, on this endpoint or on create. `mtlsClientSignedCert` is a scalar rather than a map, so `null` there does remove it.  **Endpoint Permissions:** Owner, Admin, Non-Signing Admin. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2ApiUpdateWebhookOAuthRequest, WebhookOAuthCredentials } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2ApiUpdateWebhookOAuthRequest = {
  // UpdateWebhookOAuthRequest
  updateWebhookOAuthRequest: param_value,
  // string | The unique identifier of the OAuth credentials
  webhookOauthId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.webhooksV2.updateWebhookOAuth(body).then((res: FireblocksResponse<WebhookOAuthCredentials>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateWebhookOAuthRequest** | **[UpdateWebhookOAuthRequest](../models/UpdateWebhookOAuthRequest.md)**|  |
 **webhookOauthId** | [**string**] | The unique identifier of the OAuth credentials | defaults to undefined


### Return type

**[WebhookOAuthCredentials](../models/WebhookOAuthCredentials.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated OAuth credentials object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



# WebhooksV2BetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWebhook**](#createWebhook) | **POST** /webhooks | Create new webhook
[**deleteWebhook**](#deleteWebhook) | **DELETE** /webhooks/{webhookId} | Delete webhook
[**getNotification**](#getNotification) | **GET** /webhooks/{webhookId}/notifications/{notificationId} | Get notification by id
[**getNotifications**](#getNotifications) | **GET** /webhooks/{webhookId}/notifications | Get all notifications by webhook id
[**getWebhook**](#getWebhook) | **GET** /webhooks/{webhookId} | Get webhook by id
[**getWebhooks**](#getWebhooks) | **GET** /webhooks | Get all webhooks
[**resendNotificationById**](#resendNotificationById) | **POST** /webhooks/{webhookId}/notifications/{notificationId}/resend | Resend notification by id
[**resendNotificationsByResourceId**](#resendNotificationsByResourceId) | **POST** /webhooks/{webhookId}/notifications/resend_by_resource | Resend notifications by resource Id
[**updateWebhook**](#updateWebhook) | **PATCH** /webhooks/{webhookId} | Update webhook


# **createWebhook**
> Webhook createWebhook(createWebhookRequest)

Creates a new webhook, which will be triggered on the specified events **Note:** These endpoints are currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2BetaApiCreateWebhookRequest, Webhook } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2BetaApiCreateWebhookRequest = {
  // CreateWebhookRequest
  createWebhookRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.webhooksV2Beta.createWebhook(body).then((res: FireblocksResponse<Webhook>) => {
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

# **deleteWebhook**
> Webhook deleteWebhook()

Delete a webhook by its id **Note:** These endpoints are currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2BetaApiDeleteWebhookRequest, Webhook } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2BetaApiDeleteWebhookRequest = {
  // string | The unique identifier of the webhook
  webhookId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.webhooksV2Beta.deleteWebhook(body).then((res: FireblocksResponse<Webhook>) => {
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

# **getNotification**
> NotificationWithData getNotification()

Get notification by id **Note:** These endpoints are currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2BetaApiGetNotificationRequest, NotificationWithData } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2BetaApiGetNotificationRequest = {
  // string | The ID of the webhook to fetch
  webhookId: webhookId_example,
  // string | The ID of the notification to fetch
  notificationId: notificationId_example,
  // boolean | Include the data of the notification (optional)
  includeData: true,
};

fireblocks.webhooksV2Beta.getNotification(body).then((res: FireblocksResponse<NotificationWithData>) => {
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

# **getNotifications**
> NotificationPaginatedResponse getNotifications()

Get all notifications by webhook id (paginated) **Note:** These endpoints are currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2BetaApiGetNotificationsRequest, NotificationPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2BetaApiGetNotificationsRequest = {
  // string
  webhookId: 44fcead0-7053-4831-a53a-df7fb90d440f,
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: ASC,
  // string | Cursor of the required page (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of items in the page (optional)
  pageSize: 10,
  // string | sort by start date (optional)
  createdStartDate: 2024-09-24T09:14:38.356Z,
  // string | sort by end date (optional)
  createdEndDate: 2024-09-24T09:14:38.356Z,
  // Array<NotificationStatus> | Filter by Notification statues (optional)
  statuses: COMPLETED,
  // Array<WebhookEvent> | Filter by Notification eventTypes (optional)
  eventTypes: ["transaction.created","transaction.status.updated"],
  // string | Filter by resourceId (optional)
  resourceId: resourceId_example,
};

fireblocks.webhooksV2Beta.getNotifications(body).then((res: FireblocksResponse<NotificationPaginatedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookId** | [**string**] |  | defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | ASC / DESC ordering (default DESC) | (optional) defaults to 'DESC'
 **pageCursor** | [**string**] | Cursor of the required page | (optional) defaults to undefined
 **pageSize** | [**number**] | Maximum number of items in the page | (optional) defaults to 100
 **createdStartDate** | [**string**] | sort by start date | (optional) defaults to undefined
 **createdEndDate** | [**string**] | sort by end date | (optional) defaults to undefined
 **statuses** | **Array&lt;NotificationStatus&gt;** | Filter by Notification statues | (optional) defaults to undefined
 **eventTypes** | **Array&lt;WebhookEvent&gt;** | Filter by Notification eventTypes | (optional) defaults to undefined
 **resourceId** | [**string**] | Filter by resourceId | (optional) defaults to undefined


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

# **getWebhook**
> Webhook getWebhook()

Retrieve a webhook by its id **Note:** These endpoints are currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2BetaApiGetWebhookRequest, Webhook } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2BetaApiGetWebhookRequest = {
  // string | The unique identifier of the webhook
  webhookId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.webhooksV2Beta.getWebhook(body).then((res: FireblocksResponse<Webhook>) => {
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

# **getWebhooks**
> WebhookPaginatedResponse getWebhooks()

Get all webhooks (paginated) **Note:** These endpoints are currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2BetaApiGetWebhooksRequest, WebhookPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2BetaApiGetWebhooksRequest = {
  // 'ASC' | 'DESC' | ASC / DESC ordering (default DESC) (optional)
  order: ASC,
  // string | Cursor of the required page (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of items in the page (optional)
  pageSize: 10,
};

fireblocks.webhooksV2Beta.getWebhooks(body).then((res: FireblocksResponse<WebhookPaginatedResponse>) => {
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

# **resendNotificationById**
> resendNotificationById()

Resend notification by ID **Note:** These endpoints are currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2BetaApiResendNotificationByIdRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2BetaApiResendNotificationByIdRequest = {
  // string | The ID of the webhook
  webhookId: webhookId_example,
  // string | The ID of the notification
  notificationId: notificationId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.webhooksV2Beta.resendNotificationById(body).then((res: FireblocksResponse<any>) => {
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

# **resendNotificationsByResourceId**
> resendNotificationsByResourceId(resendNotificationsByResourceIdRequest, )

Resend notifications by resource Id **Note:** These endpoints are currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2BetaApiResendNotificationsByResourceIdRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2BetaApiResendNotificationsByResourceIdRequest = {
  // ResendNotificationsByResourceIdRequest
  resendNotificationsByResourceIdRequest: param_value,
  // string | The ID of the webhook
  webhookId: webhookId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.webhooksV2Beta.resendNotificationsByResourceId(body).then((res: FireblocksResponse<any>) => {
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

Update a webhook by its id **Note:** These endpoints are currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WebhooksV2BetaApiUpdateWebhookRequest, Webhook } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WebhooksV2BetaApiUpdateWebhookRequest = {
  // UpdateWebhookRequest
  updateWebhookRequest: param_value,
  // string | The unique identifier of the webhook
  webhookId: 44fcead0-7053-4831-a53a-df7fb90d440f,
};

fireblocks.webhooksV2Beta.updateWebhook(body).then((res: FireblocksResponse<Webhook>) => {
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



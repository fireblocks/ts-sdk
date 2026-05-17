# GenieBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGenieSession**](#createGenieSession) | **POST** /genie/sessions | Create a Genie session
[**sendGenieMessage**](#sendGenieMessage) | **POST** /genie/sessions/{sessionId}/messages | Send a message to a Genie session


# **createGenieSession**
> GenieCreateSessionResponse createGenieSession()

Starts a new conversation with Genie, the Fireblocks AI assistant. Returns a `sessionId` — pass it when sending messages, and reuse it across calls to keep one continuous conversation.  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, GenieBetaApiCreateGenieSessionRequest, GenieCreateSessionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: GenieBetaApiCreateGenieSessionRequest = {
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.genieBeta.createGenieSession(body).then((res: FireblocksResponse<GenieCreateSessionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[GenieCreateSessionResponse](../models/GenieCreateSessionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session created |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **sendGenieMessage**
> GenieChatMessage sendGenieMessage(genieSendMessageRequest, )

Sends a question to Genie and returns a single answer. Reuse the `sessionId` from the original session on follow-up messages to continue the conversation with prior context.  **Note:** This endpoint is currently in beta and might be subject to changes. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, GenieBetaApiSendGenieMessageRequest, GenieChatMessage } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: GenieBetaApiSendGenieMessageRequest = {
  // GenieSendMessageRequest
  genieSendMessageRequest: param_value,
  // string | The Genie session ID returned from `POST /genie/sessions`.
  sessionId: 7c1b2e1c-1c2a-4f3a-9c2d-2e0a8a1f8e1a,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.genieBeta.sendGenieMessage(body).then((res: FireblocksResponse<GenieChatMessage>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **genieSendMessageRequest** | **[GenieSendMessageRequest](../models/GenieSendMessageRequest.md)**|  |
 **sessionId** | [**string**] | The Genie session ID returned from &#x60;POST /genie/sessions&#x60;. | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[GenieChatMessage](../models/GenieChatMessage.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Genie response |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



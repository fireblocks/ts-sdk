# CantonBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCantonCall**](#createCantonCall) | **POST** /operations/canton/calls | Make a Canton call
[**respondToCantonOffer**](#respondToCantonOffer) | **POST** /operations/canton/offers/{offerId}/responses | Answer an offer


# **createCantonCall**
> CallAccepted createCantonCall(cantonCall)

Submits a Canton call from a vault account\'s Canton wallet. `type` selects the call and the shape of `payload`.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CantonBetaApiCreateCantonCallRequest, CallAccepted } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CantonBetaApiCreateCantonCallRequest = {
  // CantonCall
  cantonCall: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.cantonBeta.createCantonCall(body).then((res: FireblocksResponse<CallAccepted>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cantonCall** | **[CantonCall](../models/CantonCall.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CallAccepted](../models/CallAccepted.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The outgoing transaction that carries the call. |  * X-Request-ID -  <br>  |
**400** | Unknown or missing type, a missing required payload field, or an invalid party id, blockchainId, or expiry |  * X-Request-ID -  <br>  |
**404** | No Canton wallet for this vault account and blockchainId, or an unknown end investor for this tenant |  * X-Request-ID -  <br>  |
**409** | The target is not in a state this call can act on, or more than one candidate contract matched the wallet |  * X-Request-ID -  <br>  |
**501** | This call type is not yet available: DTCC_END_INVESTOR_INVITE_CANCEL, DTCC_ALLOW_LIST_ADD, DTCC_ALLOW_LIST_REMOVE |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **respondToCantonOffer**
> OfferResponseAccepted respondToCantonOffer(offerResponse, )

Responds to an incoming Canton offer. Set `responseType` to one of the values in the offer transaction\'s `cantonDetails.offerResponse.availableResponses`.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, CantonBetaApiRespondToCantonOfferRequest, OfferResponseAccepted } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: CantonBetaApiRespondToCantonOfferRequest = {
  // OfferResponse
  offerResponse: param_value,
  // string | The Fireblocks transaction id of the incoming offer being answered.
  offerId: 5a1d8b0f-2c31-4c7e-9d0a-118e7b6c4a21,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.cantonBeta.respondToCantonOffer(body).then((res: FireblocksResponse<OfferResponseAccepted>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offerResponse** | **[OfferResponse](../models/OfferResponse.md)**|  |
 **offerId** | [**string**] | The Fireblocks transaction id of the incoming offer being answered. | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[OfferResponseAccepted](../models/OfferResponseAccepted.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The outgoing transaction that carries the response. Its on-chain outcome arrives by webhook as a status update on this transaction. |  * X-Request-ID -  <br>  |
**400** | Unknown or missing responseType, or a missing required payload field, or the response is not available to this workspace\&#39;s side of the offer (a sender sending accept/reject, a receiver sending withdraw) |  * X-Request-ID -  <br>  |
**404** | Unknown offer id for this tenant |  * X-Request-ID -  <br>  |
**409** | The offer cannot take this response now. An accept or reject: the offer is already answered, expired, or a response is in flight. ALLOCATION_WITHDRAW — which is sent AFTER the accept, on the same offer: the allocation is not ALLOCATED, because the accept has not settled yet, or it was already withdrawn or settled by the venue. The message names the state. |  * X-Request-ID -  <br>  |
**501** | This responseType is not yet available |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



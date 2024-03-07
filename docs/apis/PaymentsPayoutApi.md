# PaymentsPayoutApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPayout**](#createPayout) | **POST** /payments/payout | Create a payout instruction set
[**executePayoutAction**](#executePayoutAction) | **POST** /payments/payout/{payoutId}/actions/execute | Execute a payout instruction set
[**getPayout**](#getPayout) | **GET** /payments/payout/{payoutId} | Get the status of a payout instruction set


# **createPayout**
> PayoutResponse createPayout()

**Note:** The reference content in this section documents the Payments Engine endpoint. The Payments Engine endpoints include APIs available only for customers with Payments Engine enabled on their accounts. </br> </br>These endpoints are currently in beta and might be subject to changes.</br> </br>If you want to learn more about Fireblocks Payments Engine, please contact your Fireblocks Customer Success Manager or email CSM@fireblocks.com. </br> </br> <b u>Create a payout instruction set.</b> </u></br> A payout instruction set is a set of instructions for distributing payments from a single payment account to a list of payee accounts. </br> The instruction set defines: </br> <ul> <li>the payment account and its account type (vault, exchange, or fiat). </li> <li>the account type (vault account, exchange account, whitelisted address, network connection, fiat account, or merchant account), the amount, and the asset of payment for each payee account.</li> </ul> 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, PaymentsPayoutApiCreatePayoutRequest, PayoutResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: PaymentsPayoutApiCreatePayoutRequest = {
  // CreatePayoutRequest (optional)
  createPayoutRequest: {"paymentAccount":{"id":"EX_SUB1","type":"EXCHANGE_ACCOUNT"},"instructionSet":[{"payeeAccount":{"id":"bef85a1c-b605-4b2e-bdb5-2d400f4d0bf3","type":"EXTERNAL_WALLET"},"amount":{"amount":"43","assetId":"USDC"}},{"payeeAccount":{"id":"3adc1f92-e791-44a8-9aee-7f31c2108b78","type":"NETWORK_CONNECTION"},"amount":{"amount":"4423","assetId":"USDC"}}]},
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.paymentsPayout.createPayout(body).then((res: FireblocksResponse<PayoutResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPayoutRequest** | **[CreatePayoutRequest](../models/CreatePayoutRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[PayoutResponse](../models/PayoutResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The payout instruction set creation succeeded and returns the generated instruction set with a unique payout IDThe payout ID will be used for executing the payout and checking the payout status. |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  -  |
**5XX** | Internal error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **executePayoutAction**
> DispatchPayoutResponse executePayoutAction()

**Note:** The reference content in this section documents the Payments Engine endpoint. The Payments Engine endpoints include APIs available only for customers with Payments Engine enabled on their accounts. </br> </br>These endpoints are currently in beta and might be subject to changes.</br> </br>If you want to learn more about Fireblocks Payments Engine, please contact your Fireblocks Customer Success Manager or email CSM@fireblocks.com. </br> </br><b u>Execute a payout instruction set.</b> </u> </br> </br>The instruction set will be verified and executed.</br> <b><u>Source locking</br></b> </u> If you are executing a payout instruction set from a payment account with an already active payout the active payout will complete before the new payout instruction set can be executed. </br> You cannot execute the same payout instruction set more than once. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, PaymentsPayoutApiExecutePayoutActionRequest, DispatchPayoutResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: PaymentsPayoutApiExecutePayoutActionRequest = {
  // string | the payout id received from the creation of the payout instruction set
  payoutId: 1fe3b61f-7e1f-4a19-aff0-4f0a524d44d7,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.paymentsPayout.executePayoutAction(body).then((res: FireblocksResponse<DispatchPayoutResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payoutId** | [**string**] | the payout id received from the creation of the payout instruction set | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[DispatchPayoutResponse](../models/DispatchPayoutResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Executed the payout instruction set |  -  |
**400** | Bad request |  -  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  -  |
**5XX** | Internal error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getPayout**
> PayoutResponse getPayout()

**Note:** The reference content in this section documents the Payments Engine endpoint. The Payments Engine endpoints include APIs available only for customers with Payments Engine enabled on their accounts. </br> </br>These endpoints are currently in beta and might be subject to changes.</br> </br>If you want to learn more about Fireblocks Payments Engine, please contact your Fireblocks Customer Success Manager or email CSM@fireblocks.com. </br> 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, PaymentsPayoutApiGetPayoutRequest, PayoutResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: PaymentsPayoutApiGetPayoutRequest = {
  // string | the payout id received from the creation of the payout instruction set
  payoutId: 1fe3b61f-7e1f-4a19-aff0-4f0a524d44d7,
};

fireblocks.paymentsPayout.getPayout(body).then((res: FireblocksResponse<PayoutResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payoutId** | [**string**] | the payout id received from the creation of the payout instruction set | defaults to undefined


### Return type

**[PayoutResponse](../models/PayoutResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the current status of the payout instruction set, including the status of each payout instruction and the transactions created in the process. |  -  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  -  |
**404** | No payout with the given payout ID exists. |  -  |
**5XX** | Internal error. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



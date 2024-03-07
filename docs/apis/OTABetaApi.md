# OTABetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getOtaStatus**](#getOtaStatus) | **GET** /management/ota | Returns current OTA status
[**setOtaStatus**](#setOtaStatus) | **PUT** /management/ota | Enable or disable transactions to OTA


# **getOtaStatus**
> GetOtaStatus200Response getOtaStatus()

Returns current OTA status

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, GetOtaStatus200Response } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.oTABeta.getOtaStatus(body).then((res: FireblocksResponse<GetOtaStatus200Response>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[GetOtaStatus200Response](../models/GetOtaStatus200Response.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current OTA status |  -  |
**404** | Configuration not found for tenant |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setOtaStatus**
> setOtaStatus(setOtaStatusRequest)

Enable or disable transactions to OTA

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, OTABetaApiSetOtaStatusRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: OTABetaApiSetOtaStatusRequest = {
  // SetOtaStatusRequest
  setOtaStatusRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.oTABeta.setOtaStatus(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setOtaStatusRequest** | **[SetOtaStatusRequest](../models/SetOtaStatusRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Successfully updated OTA status |  -  |
**400** | Bad request |  -  |
**409** | Similar request already pending |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



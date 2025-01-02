# KeysBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getMpcKeysList**](#getMpcKeysList) | **GET** /keys/mpc/list | Get list of mpc keys
[**getMpcKeysListByUser**](#getMpcKeysListByUser) | **GET** /keys/mpc/list/{userId} | Get list of mpc keys by &#x60;userId&#x60;


# **getMpcKeysList**
> GetMpcKeysResponse getMpcKeysList()

Returns a list of MPC signing keys of the workspace. For each key, the list of players associated with it is attached. **Note:**  This endpoint is currently in beta and might be subject to changes.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, GetMpcKeysResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.keysBeta.getMpcKeysList(body).then((res: FireblocksResponse<GetMpcKeysResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[GetMpcKeysResponse](../models/GetMpcKeysResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of mpc keys |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getMpcKeysListByUser**
> GetMpcKeysResponse getMpcKeysListByUser()

Returns a list of MPC signing keys of a specific user. For each key, the list of players associated with it is attached. **Note:** This endpoint is currently in beta and might be subject to changes.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, KeysBetaApiGetMpcKeysListByUserRequest, GetMpcKeysResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: KeysBetaApiGetMpcKeysListByUserRequest = {
  // string | The id for the user
  userId: 46a92767-5f93-4a46-9eed-f012196bb4fc,
};

fireblocks.keysBeta.getMpcKeysListByUser(body).then((res: FireblocksResponse<GetMpcKeysResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | The id for the user | defaults to undefined


### Return type

**[GetMpcKeysResponse](../models/GetMpcKeysResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of mpc keys |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



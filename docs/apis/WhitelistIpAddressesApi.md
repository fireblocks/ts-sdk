# WhitelistIpAddressesApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWhitelistIpAddresses**](#getWhitelistIpAddresses) | **GET** /management/api_users/{userId}/whitelist_ip_addresses | gets ip addresses


# **getWhitelistIpAddresses**
> getWhitelistIpAddresses()

gets ip addresses

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BaseServerPathEnum } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, WhitelistIpAddressesApiGetWhitelistIpAddressesRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BaseServerPathEnum.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: WhitelistIpAddressesApiGetWhitelistIpAddressesRequest = {
  // string | The ID of the user
  userId: userId_example,
};

fireblocks.whitelistIpAddresses.getWhitelistIpAddresses(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] | The ID of the user | defaults to undefined


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
**200** | successfully whitelisted |  * X-Request-ID -  <br>  |
**401** | Unauthorized. Missing / invalid JWT token in Authorization header. |  * X-Request-ID -  <br>  |
**403** | Lacking permissions. |  * X-Request-ID -  <br>  |
**5XX** | Internal error. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



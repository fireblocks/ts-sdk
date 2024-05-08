# DeployedContractsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDeployedContractByAddress**](#getDeployedContractByAddress) | **GET** /tokenization/contracts/{assetId}/{contractAddress} | Return deployed contract data
[**getDeployedContractById**](#getDeployedContractById) | **GET** /tokenization/contracts/{id} | Return deployed contract data by id
[**getDeployedContracts**](#getDeployedContracts) | **GET** /tokenization/contracts | List deployed contracts data


# **getDeployedContractByAddress**
> DeployedContractResponseDto getDeployedContractByAddress()

Return deployed contract data by blockchain native asset id and contract address

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, DeployedContractsApiGetDeployedContractByAddressRequest, DeployedContractResponseDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: DeployedContractsApiGetDeployedContractByAddressRequest = {
  // string | The contract\'s onchain address
  contractAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
  // string
  assetId: assetId_example,
};

fireblocks.deployedContracts.getDeployedContractByAddress(body).then((res: FireblocksResponse<DeployedContractResponseDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | [**string**] | The contract\&#39;s onchain address | defaults to undefined
 **assetId** | [**string**] |  | defaults to undefined


### Return type

**[DeployedContractResponseDto](../models/DeployedContractResponseDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDeployedContractById**
> DeployedContractResponseDto getDeployedContractById()

Return deployed contract data by id

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, DeployedContractsApiGetDeployedContractByIdRequest, DeployedContractResponseDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: DeployedContractsApiGetDeployedContractByIdRequest = {
  // string | The deployed contract data identifier
  id: b70701f4-d7b1-4795-a8ee-b09cdb5b850d,
};

fireblocks.deployedContracts.getDeployedContractById(body).then((res: FireblocksResponse<DeployedContractResponseDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] | The deployed contract data identifier | defaults to undefined


### Return type

**[DeployedContractResponseDto](../models/DeployedContractResponseDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDeployedContracts**
> DeployedContractsPaginatedResponse getDeployedContracts()

Return a filtered lean representation of the deployed contracts data on all blockchains (paginated)

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, DeployedContractsApiGetDeployedContractsRequest, DeployedContractsPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: DeployedContractsApiGetDeployedContractsRequest = {
  // string | Page cursor to get the next page (optional)
  pageCursor: MjAyMy0xMi0xMyAyMDozNjowOC4zMDI=:MTEwMA==,
  // number | Number of items per page, requesting more then max will return max items (optional)
  pageSize: 10,
  // string | The contract\'s onchain address (optional)
  contractAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
  // string (optional)
  assetId: assetId_example,
  // string (optional)
  templateId: templateId_example,
};

fireblocks.deployedContracts.getDeployedContracts(body).then((res: FireblocksResponse<DeployedContractsPaginatedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Page cursor to get the next page | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of items per page, requesting more then max will return max items | (optional) defaults to undefined
 **contractAddress** | [**string**] | The contract\&#39;s onchain address | (optional) defaults to undefined
 **assetId** | [**string**] |  | (optional) defaults to undefined
 **templateId** | [**string**] |  | (optional) defaults to undefined


### Return type

**[DeployedContractsPaginatedResponse](../models/DeployedContractsPaginatedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Deployed contracts fetched successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



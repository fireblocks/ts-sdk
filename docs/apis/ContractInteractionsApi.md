# ContractInteractionsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**decodeContractData**](#decodeContractData) | **POST** /contract_interactions/base_asset_id/{baseAssetId}/contract_address/{contractAddress}/decode | Decode a function call data, error, or event log
[**getDeployedContractAbi**](#getDeployedContractAbi) | **GET** /contract_interactions/base_asset_id/{baseAssetId}/contract_address/{contractAddress}/functions | Return deployed contract\&#39;s ABI
[**getTransactionReceipt**](#getTransactionReceipt) | **GET** /contract_interactions/base_asset_id/{baseAssetId}/tx_hash/{txHash}/receipt | Get transaction receipt
[**readCallFunction**](#readCallFunction) | **POST** /contract_interactions/base_asset_id/{baseAssetId}/contract_address/{contractAddress}/functions/read | Call a read function on a deployed contract
[**writeCallFunction**](#writeCallFunction) | **POST** /contract_interactions/base_asset_id/{baseAssetId}/contract_address/{contractAddress}/functions/write | Call a write function on a deployed contract


# **decodeContractData**
> ContractDataDecodedResponse decodeContractData(contractDataDecodeRequest, )

Decode a function call data, error, or event log from a deployed contract by blockchain native asset id and contract address.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ContractInteractionsApiDecodeContractDataRequest, ContractDataDecodedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ContractInteractionsApiDecodeContractDataRequest = {
  // ContractDataDecodeRequest
  contractDataDecodeRequest: param_value,
  // string | The contract\'s onchain address
  contractAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
  // string | The blockchain native asset identifier
  baseAssetId: ETH,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.contractInteractions.decodeContractData(body).then((res: FireblocksResponse<ContractDataDecodedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractDataDecodeRequest** | **[ContractDataDecodeRequest](../models/ContractDataDecodeRequest.md)**|  |
 **contractAddress** | [**string**] | The contract\&#39;s onchain address | defaults to undefined
 **baseAssetId** | [**string**] | The blockchain native asset identifier | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ContractDataDecodedResponse](../models/ContractDataDecodedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Decoded data retrieved successfully |  -  |
**400** | Bad request, invalid input data or parameters |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getDeployedContractAbi**
> ContractAbiResponseDto getDeployedContractAbi()

Return deployed contract\'s ABI by blockchain native asset id and contract address

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ContractInteractionsApiGetDeployedContractAbiRequest, ContractAbiResponseDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ContractInteractionsApiGetDeployedContractAbiRequest = {
  // string | The contract\'s onchain address
  contractAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
  // string
  baseAssetId: baseAssetId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.contractInteractions.getDeployedContractAbi(body).then((res: FireblocksResponse<ContractAbiResponseDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractAddress** | [**string**] | The contract\&#39;s onchain address | defaults to undefined
 **baseAssetId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ContractAbiResponseDto](../models/ContractAbiResponseDto.md)**

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

# **getTransactionReceipt**
> TransactionReceiptResponse getTransactionReceipt()

Retrieve the transaction receipt by blockchain native asset ID and transaction hash

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ContractInteractionsApiGetTransactionReceiptRequest, TransactionReceiptResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ContractInteractionsApiGetTransactionReceiptRequest = {
  // string | The blockchain base assetId
  baseAssetId: ETH_TEST6,
  // string | The transaction hash
  txHash: 0x3b015ca0518c55d7bff4e3f5aa5d0431705771553ba8a95cf20e34cb597f57f6,
};

fireblocks.contractInteractions.getTransactionReceipt(body).then((res: FireblocksResponse<TransactionReceiptResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **baseAssetId** | [**string**] | The blockchain base assetId | defaults to undefined
 **txHash** | [**string**] | The transaction hash | defaults to undefined


### Return type

**[TransactionReceiptResponse](../models/TransactionReceiptResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieved The Transaction Receipt Successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **readCallFunction**
> ParameterWithValueList readCallFunction(readCallFunctionDto, )

Call a read function on a deployed contract by blockchain native asset id and contract address

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ContractInteractionsApiReadCallFunctionRequest, ParameterWithValueList } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ContractInteractionsApiReadCallFunctionRequest = {
  // ReadCallFunctionDto
  readCallFunctionDto: param_value,
  // string | The contract\'s onchain address
  contractAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
  // string
  baseAssetId: baseAssetId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.contractInteractions.readCallFunction(body).then((res: FireblocksResponse<ParameterWithValueList>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **readCallFunctionDto** | **[ReadCallFunctionDto](../models/ReadCallFunctionDto.md)**|  |
 **contractAddress** | [**string**] | The contract\&#39;s onchain address | defaults to undefined
 **baseAssetId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ParameterWithValueList](../models/ParameterWithValueList.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Read Call Retrieved Successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **writeCallFunction**
> WriteCallFunctionResponseDto writeCallFunction(writeCallFunctionDto, )

Call a write function on a deployed contract by blockchain native asset id and contract address. This creates an onchain transaction, thus it is an async operation. It returns a transaction id that can be polled for status check

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ContractInteractionsApiWriteCallFunctionRequest, WriteCallFunctionResponseDto } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ContractInteractionsApiWriteCallFunctionRequest = {
  // WriteCallFunctionDto
  writeCallFunctionDto: param_value,
  // string | The contract\'s onchain address
  contractAddress: 0xC2c4e1Db41F0bB97996D0eD0542D2170d146FB66,
  // string
  baseAssetId: baseAssetId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.contractInteractions.writeCallFunction(body).then((res: FireblocksResponse<WriteCallFunctionResponseDto>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **writeCallFunctionDto** | **[WriteCallFunctionDto](../models/WriteCallFunctionDto.md)**|  |
 **contractAddress** | [**string**] | The contract\&#39;s onchain address | defaults to undefined
 **baseAssetId** | [**string**] |  | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[WriteCallFunctionResponseDto](../models/WriteCallFunctionResponseDto.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** |  |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



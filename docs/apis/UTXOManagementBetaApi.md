# UTXOManagementBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUtxos**](#getUtxos) | **GET** /utxo_management/{vaultAccountId}/{assetId}/unspent_outputs | List unspent outputs (UTXOs)
[**updateUtxoLabels**](#updateUtxoLabels) | **PATCH** /utxo_management/{vaultAccountId}/{assetId}/labels | Attach or detach labels to/from UTXOs


# **getUtxos**
> ListUtxosResponse getUtxos()

Returns a paginated list of unspent transaction outputs (UTXOs) for a UTXO-based asset in a vault account, with optional filters for labels, statuses, amounts, and more. **Note:** These endpoints are currently in beta and might be subject to changes. Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, UTXOManagementBetaApiGetUtxosRequest, ListUtxosResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: UTXOManagementBetaApiGetUtxosRequest = {
  // string | The ID of the vault account
  vaultAccountId: vaultAccountId_example,
  // string | The ID of the asset
  assetId: assetId_example,
  // string | Cursor for the next page of results (optional)
  pageCursor: MjAyNS0wNy0wOSAxMDo1MzoxMy40NTI=:NA==,
  // number | Number of results per page (max 250, default 50) (optional)
  pageSize: 50,
  // 'AMOUNT' | 'CONFIRMATIONS' | Field to sort by (optional)
  sort: AMOUNT,
  // 'ASC' | 'DESC' | Sort order (optional)
  order: ASC,
  // Array<string> | Only return UTXOs that have ALL of these labels (AND logic). (optional)
  includeAllLabels: ["cold-storage"],
  // Array<string> | Return UTXOs that have ANY of these labels (OR logic). (optional)
  includeAnyLabels: ["vip","high-value"],
  // Array<string> | Exclude UTXOs that have ANY of these labels. (optional)
  excludeAnyLabels: ["deprecated"],
  // Array<string> | Filter by UTXO statuses to include. (optional)
  includeStatuses: ["AVAILABLE","PENDING"],
  // string | Filter by address (optional)
  address: 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa,
  // string | Minimum amount filter (optional)
  minAmount: 0.001,
  // string | Maximum amount filter (optional)
  maxAmount: 1.0,
  // boolean | Include change outputs (optional)
  useChange: true,
  // boolean | Include coinbase outputs (optional)
  useCoinbase: true,
};

fireblocks.utxoManagementBeta.getUtxos(body).then((res: FireblocksResponse<ListUtxosResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] | The ID of the vault account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **pageCursor** | [**string**] | Cursor for the next page of results | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results per page (max 250, default 50) | (optional) defaults to 50
 **sort** | [**&#39;AMOUNT&#39; | &#39;CONFIRMATIONS&#39;**]**Array<&#39;AMOUNT&#39; &#124; &#39;CONFIRMATIONS&#39;>** | Field to sort by | (optional) defaults to undefined
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Sort order | (optional) defaults to undefined
 **includeAllLabels** | **Array&lt;string&gt;** | Only return UTXOs that have ALL of these labels (AND logic). | (optional) defaults to undefined
 **includeAnyLabels** | **Array&lt;string&gt;** | Return UTXOs that have ANY of these labels (OR logic). | (optional) defaults to undefined
 **excludeAnyLabels** | **Array&lt;string&gt;** | Exclude UTXOs that have ANY of these labels. | (optional) defaults to undefined
 **includeStatuses** | **Array&lt;string&gt;** | Filter by UTXO statuses to include. | (optional) defaults to undefined
 **address** | [**string**] | Filter by address | (optional) defaults to undefined
 **minAmount** | [**string**] | Minimum amount filter | (optional) defaults to undefined
 **maxAmount** | [**string**] | Maximum amount filter | (optional) defaults to undefined
 **useChange** | [**boolean**] | Include change outputs | (optional) defaults to undefined
 **useCoinbase** | [**boolean**] | Include coinbase outputs | (optional) defaults to undefined


### Return type

**[ListUtxosResponse](../models/ListUtxosResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of UTXOs |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateUtxoLabels**
> AttachDetachUtxoLabelsResponse updateUtxoLabels(attachDetachUtxoLabelsRequest, )

Attach or detach labels to/from UTXOs in a vault account. Labels can be used for organizing and filtering UTXOs. Labels are applied additively — `labelsToAttach` adds to the existing label set and `labelsToDetach` removes from it. Neither operation replaces the full set. **Note:** These endpoints are currently in beta and might be subject to changes. Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, UTXOManagementBetaApiUpdateUtxoLabelsRequest, AttachDetachUtxoLabelsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: UTXOManagementBetaApiUpdateUtxoLabelsRequest = {
  // AttachDetachUtxoLabelsRequest
  attachDetachUtxoLabelsRequest: param_value,
  // string | The ID of the vault account
  vaultAccountId: vaultAccountId_example,
  // string | The ID of the asset
  assetId: assetId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.utxoManagementBeta.updateUtxoLabels(body).then((res: FireblocksResponse<AttachDetachUtxoLabelsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachDetachUtxoLabelsRequest** | **[AttachDetachUtxoLabelsRequest](../models/AttachDetachUtxoLabelsRequest.md)**|  |
 **vaultAccountId** | [**string**] | The ID of the vault account | defaults to undefined
 **assetId** | [**string**] | The ID of the asset | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[AttachDetachUtxoLabelsResponse](../models/AttachDetachUtxoLabelsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | UTXOs with updated labels |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



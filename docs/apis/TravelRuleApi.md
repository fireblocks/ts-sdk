# TravelRuleApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getVASPByDID**](#getVASPByDID) | **GET** /screening/travel_rule/vasp/{did} | Get VASP details
[**getVASPs**](#getVASPs) | **GET** /screening/travel_rule/vasp | Get All VASPs
[**getVaspForVault**](#getVaspForVault) | **GET** /screening/travel_rule/vault/{vaultAccountId}/vasp | Get assigned VASP to vault
[**setVaspForVault**](#setVaspForVault) | **POST** /screening/travel_rule/vault/{vaultAccountId}/vasp | Assign VASP to vault
[**updateVasp**](#updateVasp) | **PUT** /screening/travel_rule/vasp/update | Add jsonDidKey to VASP details
[**validateFullTravelRuleTransaction**](#validateFullTravelRuleTransaction) | **POST** /screening/travel_rule/transaction/validate/full | Validate Full Travel Rule Transaction


# **getVASPByDID**
> TravelRuleVASP getVASPByDID()

Get VASP Details.  Returns information about a VASP that has the specified DID.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TravelRuleApiGetVASPByDIDRequest, TravelRuleVASP } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TravelRuleApiGetVASPByDIDRequest = {
  // string
  did: did_example,
  // TravelRuleFieldsEnum | A CSV of fields to return. Choose from the following options: (optional)
  fields: param_value,
};

fireblocks.travelRule.getVASPByDID(body).then((res: FireblocksResponse<TravelRuleVASP>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] |  | defaults to undefined
 **fields** | **Array<&#39;did&#39; &#124; &#39;name&#39; &#124; &#39;verificationStatus&#39; &#124; &#39;addressLine1&#39; &#124; &#39;addressLine2&#39; &#124; &#39;city&#39; &#124; &#39;country&#39; &#124; &#39;emailDomains&#39; &#124; &#39;website&#39; &#124; &#39;logo&#39; &#124; &#39;legalStructure&#39; &#124; &#39;legalName&#39; &#124; &#39;yearFounded&#39; &#124; &#39;incorporationCountry&#39; &#124; &#39;isRegulated&#39; &#124; &#39;otherNames&#39; &#124; &#39;identificationType&#39; &#124; &#39;identificationCountry&#39; &#124; &#39;businessNumber&#39; &#124; &#39;regulatoryAuthorities&#39; &#124; &#39;jurisdictions&#39; &#124; &#39;street&#39; &#124; &#39;number&#39; &#124; &#39;unit&#39; &#124; &#39;postCode&#39; &#124; &#39;state&#39; &#124; &#39;certificates&#39; &#124; &#39;description&#39; &#124; &#39;travelRule_OPENVASP&#39; &#124; &#39;travelRule_SYGNA&#39; &#124; &#39;travelRule_TRISA&#39; &#124; &#39;travelRule_TRLIGHT&#39; &#124; &#39;travelRule_EMAIL&#39; &#124; &#39;travelRule_TRP&#39; &#124; &#39;travelRule_SHYFT&#39; &#124; &#39;travelRule_USTRAVELRULEWG&#39; &#124; &#39;createdAt&#39; &#124; &#39;createdBy&#39; &#124; &#39;updatedAt&#39; &#124; &#39;updatedBy&#39; &#124; &#39;lastSentDate&#39; &#124; &#39;lastReceivedDate&#39; &#124; &#39;documents&#39; &#124; &#39;hasAdmin&#39; &#124; &#39;isNotifiable&#39; &#124; &#39;issuers&#39;>** | A CSV of fields to return. Choose from the following options: | (optional) defaults to undefined


### Return type

**[TravelRuleVASP](../models/TravelRuleVASP.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transaction validated successfully |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getVASPs**
> TravelRuleGetAllVASPsResponse getVASPs()

Get All VASPs.  Returns a list of VASPs. VASPs can be searched and sorted.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TravelRuleApiGetVASPsRequest, TravelRuleGetAllVASPsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TravelRuleApiGetVASPsRequest = {
  // 'ASC' | 'DESC' | Field to order by (optional)
  order: ASC,
  // number | Records per page (optional)
  pageSize: 10,
  // TravelRuleFieldsEnum | CSV of fields to return (all, \"blank\" or see list of all field names below) (optional)
  fields: param_value,
  // string | Search query (optional)
  search: Fireblocks,
  // 'TRUSTED' | 'BLOCKED' | 'MANUAL' | 'null' | Filter by the VASP\'s review status. Possible values include: \"TRUSTED\", \"BLOCKED\", \"MANUAL\", or \"NULL\". When provided, only VASPs that match the specified reviewValue will be returned (i.e., VASPs that have already been reviewed to this status). (optional)
  reviewValue: TRUSTED,
  // string | Cursor for pagination. When provided, the response will include the next page of results. (optional)
  pageCursor: 100,
};

fireblocks.travelRule.getVASPs(body).then((res: FireblocksResponse<TravelRuleGetAllVASPsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | Field to order by | (optional) defaults to undefined
 **pageSize** | [**number**] | Records per page | (optional) defaults to 500
 **fields** | **Array<&#39;did&#39; &#124; &#39;name&#39; &#124; &#39;verificationStatus&#39; &#124; &#39;addressLine1&#39; &#124; &#39;addressLine2&#39; &#124; &#39;city&#39; &#124; &#39;country&#39; &#124; &#39;emailDomains&#39; &#124; &#39;website&#39; &#124; &#39;logo&#39; &#124; &#39;legalStructure&#39; &#124; &#39;legalName&#39; &#124; &#39;yearFounded&#39; &#124; &#39;incorporationCountry&#39; &#124; &#39;isRegulated&#39; &#124; &#39;otherNames&#39; &#124; &#39;identificationType&#39; &#124; &#39;identificationCountry&#39; &#124; &#39;businessNumber&#39; &#124; &#39;regulatoryAuthorities&#39; &#124; &#39;jurisdictions&#39; &#124; &#39;street&#39; &#124; &#39;number&#39; &#124; &#39;unit&#39; &#124; &#39;postCode&#39; &#124; &#39;state&#39; &#124; &#39;certificates&#39; &#124; &#39;description&#39; &#124; &#39;travelRule_OPENVASP&#39; &#124; &#39;travelRule_SYGNA&#39; &#124; &#39;travelRule_TRISA&#39; &#124; &#39;travelRule_TRLIGHT&#39; &#124; &#39;travelRule_EMAIL&#39; &#124; &#39;travelRule_TRP&#39; &#124; &#39;travelRule_SHYFT&#39; &#124; &#39;travelRule_USTRAVELRULEWG&#39; &#124; &#39;createdAt&#39; &#124; &#39;createdBy&#39; &#124; &#39;updatedAt&#39; &#124; &#39;updatedBy&#39; &#124; &#39;lastSentDate&#39; &#124; &#39;lastReceivedDate&#39; &#124; &#39;documents&#39; &#124; &#39;hasAdmin&#39; &#124; &#39;isNotifiable&#39; &#124; &#39;issuers&#39;>** | CSV of fields to return (all, \&quot;blank\&quot; or see list of all field names below) | (optional) defaults to undefined
 **search** | [**string**] | Search query | (optional) defaults to undefined
 **reviewValue** | [**&#39;TRUSTED&#39; | &#39;BLOCKED&#39; | &#39;MANUAL&#39; | &#39;null&#39;**]**Array<&#39;TRUSTED&#39; &#124; &#39;BLOCKED&#39; &#124; &#39;MANUAL&#39; &#124; &#39;null&#39;>** | Filter by the VASP\&#39;s review status. Possible values include: \&quot;TRUSTED\&quot;, \&quot;BLOCKED\&quot;, \&quot;MANUAL\&quot;, or \&quot;NULL\&quot;. When provided, only VASPs that match the specified reviewValue will be returned (i.e., VASPs that have already been reviewed to this status). | (optional) defaults to undefined
 **pageCursor** | [**string**] | Cursor for pagination. When provided, the response will include the next page of results. | (optional) defaults to undefined


### Return type

**[TravelRuleGetAllVASPsResponse](../models/TravelRuleGetAllVASPsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get all VASPs |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getVaspForVault**
> TravelRuleVaspForVault getVaspForVault()

Get assigned VASP Did for a specific vault. Returns empty string vaspDid value in response if none assigned.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TravelRuleApiGetVaspForVaultRequest, TravelRuleVaspForVault } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TravelRuleApiGetVaspForVaultRequest = {
  // string | The ID of the vault account
  vaultAccountId: 1,
};

fireblocks.travelRule.getVaspForVault(body).then((res: FireblocksResponse<TravelRuleVaspForVault>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] | The ID of the vault account | defaults to undefined


### Return type

**[TravelRuleVaspForVault](../models/TravelRuleVaspForVault.md)**

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

# **setVaspForVault**
> TravelRuleVaspForVault setVaspForVault(travelRuleVaspForVault, )

Sets the VASP Did for a specific vault. Pass empty string to remove existing one.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TravelRuleApiSetVaspForVaultRequest, TravelRuleVaspForVault } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TravelRuleApiSetVaspForVaultRequest = {
  // TravelRuleVaspForVault
  travelRuleVaspForVault: param_value,
  // string | The ID of the vault account
  vaultAccountId: vaultAccountId_example,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.travelRule.setVaspForVault(body).then((res: FireblocksResponse<TravelRuleVaspForVault>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **travelRuleVaspForVault** | **[TravelRuleVaspForVault](../models/TravelRuleVaspForVault.md)**|  |
 **vaultAccountId** | [**string**] | The ID of the vault account | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TravelRuleVaspForVault](../models/TravelRuleVaspForVault.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | OK |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateVasp**
> TravelRuleUpdateVASPDetails updateVasp(travelRuleUpdateVASPDetails)

Update VASP Details.  Updates a VASP with the provided parameters. Use this endpoint to add your public jsonDIDkey generated by Notabene.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TravelRuleApiUpdateVaspRequest, TravelRuleUpdateVASPDetails } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TravelRuleApiUpdateVaspRequest = {
  // TravelRuleUpdateVASPDetails
  travelRuleUpdateVASPDetails: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.travelRule.updateVasp(body).then((res: FireblocksResponse<TravelRuleUpdateVASPDetails>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **travelRuleUpdateVASPDetails** | **[TravelRuleUpdateVASPDetails](../models/TravelRuleUpdateVASPDetails.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TravelRuleUpdateVASPDetails](../models/TravelRuleUpdateVASPDetails.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | VASP updated successfully |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **validateFullTravelRuleTransaction**
> TravelRuleValidateTransactionResponse validateFullTravelRuleTransaction(travelRuleValidateFullTransactionRequest)

Validate Full Travel Rule transactions.  Checks for all required information on the originator and beneficiary VASPs.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TravelRuleApiValidateFullTravelRuleTransactionRequest, TravelRuleValidateTransactionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TravelRuleApiValidateFullTravelRuleTransactionRequest = {
  // TravelRuleValidateFullTransactionRequest
  travelRuleValidateFullTransactionRequest: param_value,
  // TravelRuleNotationEnum | Specifies the notation of the transaction. Possible values are: - `notabene`: Uses Notabene notation (default behavior). - `fireblocks`: Uses Fireblocks notation, with automatic translation of asset tickers and amounts. - `<none>`: Defaults to `notabene` for backward compatibility. **Note:** The default value for the `notation` parameter will change from `notabene` to `fireblocks` Update your integrations accordingly. (optional)
  notation: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.travelRule.validateFullTravelRuleTransaction(body).then((res: FireblocksResponse<TravelRuleValidateTransactionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **travelRuleValidateFullTransactionRequest** | **[TravelRuleValidateFullTransactionRequest](../models/TravelRuleValidateFullTransactionRequest.md)**|  |
 **notation** | **Array<&#39;fireblocks&#39; &#124; &#39;notabene&#39;>** | Specifies the notation of the transaction. Possible values are: - &#x60;notabene&#x60;: Uses Notabene notation (default behavior). - &#x60;fireblocks&#x60;: Uses Fireblocks notation, with automatic translation of asset tickers and amounts. - &#x60;&lt;none&gt;&#x60;: Defaults to &#x60;notabene&#x60; for backward compatibility. **Note:** The default value for the &#x60;notation&#x60; parameter will change from &#x60;notabene&#x60; to &#x60;fireblocks&#x60; Update your integrations accordingly. | (optional) defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TravelRuleValidateTransactionResponse](../models/TravelRuleValidateTransactionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Transaction validated successfully |  -  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



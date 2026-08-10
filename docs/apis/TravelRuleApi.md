# TravelRuleApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTrustProofOfAddress**](#createTrustProofOfAddress) | **POST** /screening/travel_rule/providers/trust/proof_of_address | Create Trust Network Proof of Address
[**getTrustProofOfAddress**](#getTrustProofOfAddress) | **GET** /screening/travel_rule/providers/trust/proof_of_address/{transactionId} | Retrieve Trust Network Proof of Address Signature
[**getVASPByDID**](#getVASPByDID) | **GET** /screening/travel_rule/vasp/{did} | Get VASP details
[**getVASPs**](#getVASPs) | **GET** /screening/travel_rule/vasp | Get All VASPs
[**getVaspForVault**](#getVaspForVault) | **GET** /screening/travel_rule/vault/{vaultAccountId}/vasp | Get assigned VASP to vault
[**setVaspForVault**](#setVaspForVault) | **POST** /screening/travel_rule/vault/{vaultAccountId}/vasp | Assign VASP to vault
[**updateVasp**](#updateVasp) | **PUT** /screening/travel_rule/vasp/update | Add jsonDidKey to VASP details
[**validateFullTravelRuleTransaction**](#validateFullTravelRuleTransaction) | **POST** /screening/travel_rule/transaction/validate/full | Validate Full Travel Rule Transaction


# **createTrustProofOfAddress**
> TrustProofOfAddressCreateResponse createTrustProofOfAddress(trustProofOfAddressRequest)

Creates a cryptographic proof of address ownership for TRUST network.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TravelRuleApiCreateTrustProofOfAddressRequest, TrustProofOfAddressCreateResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TravelRuleApiCreateTrustProofOfAddressRequest = {
  // TrustProofOfAddressRequest
  trustProofOfAddressRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.travelRule.createTrustProofOfAddress(body).then((res: FireblocksResponse<TrustProofOfAddressCreateResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **trustProofOfAddressRequest** | **[TrustProofOfAddressRequest](../models/TrustProofOfAddressRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[TrustProofOfAddressCreateResponse](../models/TrustProofOfAddressCreateResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Proof of address transaction created successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getTrustProofOfAddress**
> TrustProofOfAddressResponse getTrustProofOfAddress()

Retrieves the TRUST-compatible encoded signature for a proof of address transaction. Send this signature directly to TRUST for verification.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, TravelRuleApiGetTrustProofOfAddressRequest, TrustProofOfAddressResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: TravelRuleApiGetTrustProofOfAddressRequest = {
  // string | Fireblocks transaction ID (UUID format)
  transactionId: 550e8400-e29b-41d4-a716-446655440000,
};

fireblocks.travelRule.getTrustProofOfAddress(body).then((res: FireblocksResponse<TrustProofOfAddressResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | [**string**] | Fireblocks transaction ID (UUID format) | defaults to undefined


### Return type

**[TrustProofOfAddressResponse](../models/TrustProofOfAddressResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Encoded signature retrieved successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getVASPByDID**
> TravelRuleVASP getVASPByDID()

Get VASP Details.  Returns information about a VASP that has the specified DID.  The response may contain fields that are not documented in the schema below. Clients must ignore unrecognised fields rather than failing to deserialize.

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
  // string | The Decentralized Identifier (DID) of the VASP.
  did: did:ethr:0x17fe2dd11a2daa7f6c1fdf22532a4763f963aea6,
  // TravelRuleFieldsEnum | The VASP fields to return.  Optional. If omitted, or supplied with an empty value, the complete VASP record is returned, which is the same as passing `all`.  Most field names return exactly the requested field. A few behave differently: `documents` and `ddq` return a small default set of identifying fields instead of the requested one, and `travelRule_EMAIL` returns an empty object. An unrecognised field name causes an error. (optional)
  fields: param_value,
};

fireblocks.travelRule.getVASPByDID(body).then((res: FireblocksResponse<TravelRuleVASP>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **did** | [**string**] | The Decentralized Identifier (DID) of the VASP. | defaults to undefined
 **fields** | **Array<&#39;all&#39; &#124; &#39;did&#39; &#124; &#39;name&#39; &#124; &#39;verificationStatus&#39; &#124; &#39;addressLine1&#39; &#124; &#39;addressLine2&#39; &#124; &#39;city&#39; &#124; &#39;country&#39; &#124; &#39;emailDomains&#39; &#124; &#39;website&#39; &#124; &#39;logo&#39; &#124; &#39;legalStructure&#39; &#124; &#39;legalName&#39; &#124; &#39;yearFounded&#39; &#124; &#39;incorporationCountry&#39; &#124; &#39;isRegulated&#39; &#124; &#39;otherNames&#39; &#124; &#39;identificationType&#39; &#124; &#39;identificationCountry&#39; &#124; &#39;businessNumber&#39; &#124; &#39;regulatoryAuthorities&#39; &#124; &#39;jurisdictions&#39; &#124; &#39;division&#39; &#124; &#39;street&#39; &#124; &#39;number&#39; &#124; &#39;unit&#39; &#124; &#39;postCode&#39; &#124; &#39;state&#39; &#124; &#39;otherLegalName&#39; &#124; &#39;gleifUpdatedAt&#39; &#124; &#39;leiNumber&#39; &#124; &#39;legalForm&#39; &#124; &#39;entityCategory&#39; &#124; &#39;entityStatus&#39; &#124; &#39;externalEntityConfig&#39; &#124; &#39;hqStreet&#39; &#124; &#39;hqNumber&#39; &#124; &#39;hqPostcode&#39; &#124; &#39;hqRegion&#39; &#124; &#39;hqCity&#39; &#124; &#39;hqCountry&#39; &#124; &#39;certificates&#39; &#124; &#39;description&#39; &#124; &#39;travelRule_OPENVASP&#39; &#124; &#39;travelRule_SYGNA&#39; &#124; &#39;travelRule_TRISA&#39; &#124; &#39;travelRule_TRLIGHT&#39; &#124; &#39;travelRule_EMAIL&#39; &#124; &#39;travelRule_TRP&#39; &#124; &#39;travelRule_SHYFT&#39; &#124; &#39;travelRule_USTRAVELRULEWG&#39; &#124; &#39;createdAt&#39; &#124; &#39;createdBy&#39; &#124; &#39;updatedAt&#39; &#124; &#39;updatedBy&#39; &#124; &#39;lastSentDate&#39; &#124; &#39;lastReceivedDate&#39; &#124; &#39;documents&#39; &#124; &#39;hasAdmin&#39; &#124; &#39;isNotifiable&#39; &#124; &#39;issuers&#39; &#124; &#39;regulatoryStatus&#39; &#124; &#39;supervisoryAuthority&#39; &#124; &#39;registrationLicenseId&#39; &#124; &#39;statusStartDate&#39; &#124; &#39;statusExpirationDate&#39; &#124; &#39;lastChecked&#39; &#124; &#39;additionalInformation&#39; &#124; &#39;subsidiaryOf&#39; &#124; &#39;pii_didkey&#39; &#124; &#39;compliancePhase&#39; &#124; &#39;compliancePhaseData&#39; &#124; &#39;vaspnetId&#39; &#124; &#39;vaspnetUpdatedAt&#39; &#124; &#39;vaspnetImmutableFields&#39; &#124; &#39;node_didkey&#39; &#124; &#39;ddq&#39; &#124; &#39;targetProtocol&#39; &#124; &#39;parentGateway&#39; &#124; &#39;isActiveSender&#39; &#124; &#39;isActiveReceiver&#39; &#124; &#39;subsidiaries&#39;>** | The VASP fields to return.  Optional. If omitted, or supplied with an empty value, the complete VASP record is returned, which is the same as passing &#x60;all&#x60;.  Most field names return exactly the requested field. A few behave differently: &#x60;documents&#x60; and &#x60;ddq&#x60; return a small default set of identifying fields instead of the requested one, and &#x60;travelRule_EMAIL&#x60; returns an empty object. An unrecognised field name causes an error. | (optional) defaults to undefined


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
**200** | VASP details |  -  |
**400** | Invalid request body |  -  |
**500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getVASPs**
> TravelRuleGetAllVASPsResponse getVASPs()

Get All VASPs.  Returns a list of VASPs. VASPs can be searched and sorted.  Each VASP in the response may contain fields that are not documented in the schema below. Clients must ignore unrecognised fields rather than failing to deserialize.

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
  // TravelRuleFieldsEnum | The VASP fields to return.  Optional. If omitted, each VASP is returned with a default subset of six fields: `did`, `name`, `website`, `logo`, `incorporationCountry` and `jurisdictions`. Pass `all` to return the complete record for each VASP.  Most field names return exactly the requested field. A few behave differently: `documents` and `ddq` return a small default set of identifying fields instead of the requested one, and `travelRule_EMAIL` returns an empty object. An unrecognised field name causes an error. (optional)
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
 **fields** | **Array<&#39;all&#39; &#124; &#39;did&#39; &#124; &#39;name&#39; &#124; &#39;verificationStatus&#39; &#124; &#39;addressLine1&#39; &#124; &#39;addressLine2&#39; &#124; &#39;city&#39; &#124; &#39;country&#39; &#124; &#39;emailDomains&#39; &#124; &#39;website&#39; &#124; &#39;logo&#39; &#124; &#39;legalStructure&#39; &#124; &#39;legalName&#39; &#124; &#39;yearFounded&#39; &#124; &#39;incorporationCountry&#39; &#124; &#39;isRegulated&#39; &#124; &#39;otherNames&#39; &#124; &#39;identificationType&#39; &#124; &#39;identificationCountry&#39; &#124; &#39;businessNumber&#39; &#124; &#39;regulatoryAuthorities&#39; &#124; &#39;jurisdictions&#39; &#124; &#39;division&#39; &#124; &#39;street&#39; &#124; &#39;number&#39; &#124; &#39;unit&#39; &#124; &#39;postCode&#39; &#124; &#39;state&#39; &#124; &#39;otherLegalName&#39; &#124; &#39;gleifUpdatedAt&#39; &#124; &#39;leiNumber&#39; &#124; &#39;legalForm&#39; &#124; &#39;entityCategory&#39; &#124; &#39;entityStatus&#39; &#124; &#39;externalEntityConfig&#39; &#124; &#39;hqStreet&#39; &#124; &#39;hqNumber&#39; &#124; &#39;hqPostcode&#39; &#124; &#39;hqRegion&#39; &#124; &#39;hqCity&#39; &#124; &#39;hqCountry&#39; &#124; &#39;certificates&#39; &#124; &#39;description&#39; &#124; &#39;travelRule_OPENVASP&#39; &#124; &#39;travelRule_SYGNA&#39; &#124; &#39;travelRule_TRISA&#39; &#124; &#39;travelRule_TRLIGHT&#39; &#124; &#39;travelRule_EMAIL&#39; &#124; &#39;travelRule_TRP&#39; &#124; &#39;travelRule_SHYFT&#39; &#124; &#39;travelRule_USTRAVELRULEWG&#39; &#124; &#39;createdAt&#39; &#124; &#39;createdBy&#39; &#124; &#39;updatedAt&#39; &#124; &#39;updatedBy&#39; &#124; &#39;lastSentDate&#39; &#124; &#39;lastReceivedDate&#39; &#124; &#39;documents&#39; &#124; &#39;hasAdmin&#39; &#124; &#39;isNotifiable&#39; &#124; &#39;issuers&#39; &#124; &#39;regulatoryStatus&#39; &#124; &#39;supervisoryAuthority&#39; &#124; &#39;registrationLicenseId&#39; &#124; &#39;statusStartDate&#39; &#124; &#39;statusExpirationDate&#39; &#124; &#39;lastChecked&#39; &#124; &#39;additionalInformation&#39; &#124; &#39;subsidiaryOf&#39; &#124; &#39;pii_didkey&#39; &#124; &#39;compliancePhase&#39; &#124; &#39;compliancePhaseData&#39; &#124; &#39;vaspnetId&#39; &#124; &#39;vaspnetUpdatedAt&#39; &#124; &#39;vaspnetImmutableFields&#39; &#124; &#39;node_didkey&#39; &#124; &#39;ddq&#39; &#124; &#39;targetProtocol&#39; &#124; &#39;parentGateway&#39; &#124; &#39;isActiveSender&#39; &#124; &#39;isActiveReceiver&#39; &#124; &#39;subsidiaries&#39;>** | The VASP fields to return.  Optional. If omitted, each VASP is returned with a default subset of six fields: &#x60;did&#x60;, &#x60;name&#x60;, &#x60;website&#x60;, &#x60;logo&#x60;, &#x60;incorporationCountry&#x60; and &#x60;jurisdictions&#x60;. Pass &#x60;all&#x60; to return the complete record for each VASP.  Most field names return exactly the requested field. A few behave differently: &#x60;documents&#x60; and &#x60;ddq&#x60; return a small default set of identifying fields instead of the requested one, and &#x60;travelRule_EMAIL&#x60; returns an empty object. An unrecognised field name causes an error. | (optional) defaults to undefined
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



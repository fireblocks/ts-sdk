# ComplianceApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateByorkConfig**](#activateByorkConfig) | **POST** /screening/byork/config/activate | Activate BYORK Light
[**addAddressRegistryVaultOptOuts**](#addAddressRegistryVaultOptOuts) | **POST** /address_registry/vaults | Add vault accounts to the address registry opt-out list
[**assignVaultsToLegalEntity**](#assignVaultsToLegalEntity) | **POST** /legal_entities/{legalEntityId}/vaults | Assign vault accounts to a legal entity
[**createCounterpartyGroup**](#createCounterpartyGroup) | **POST** /counterparty_groups | Create a counterparty group
[**deactivateByorkConfig**](#deactivateByorkConfig) | **POST** /screening/byork/config/deactivate | Deactivate BYORK Light
[**deleteCounterpartyGroup**](#deleteCounterpartyGroup) | **DELETE** /counterparty_groups/{groupId} | Delete a counterparty group
[**getAddressRegistryTenantParticipationStatus**](#getAddressRegistryTenantParticipationStatus) | **GET** /address_registry/tenant | Get address registry participation status for the authenticated workspace
[**getAddressRegistryVaultOptOut**](#getAddressRegistryVaultOptOut) | **GET** /address_registry/vaults/{vaultAccountId} | Get whether a vault account is opted out of the address registry
[**getAmlPostScreeningPolicy**](#getAmlPostScreeningPolicy) | **GET** /screening/aml/post_screening_policy | AML - View Post-Screening Policy
[**getAmlScreeningPolicy**](#getAmlScreeningPolicy) | **GET** /screening/aml/screening_policy | AML - View Screening Policy
[**getByorkConfig**](#getByorkConfig) | **GET** /screening/byork/config | Get BYORK Light configuration
[**getByorkVerdict**](#getByorkVerdict) | **GET** /screening/byork/verdict | Get BYORK Light verdict
[**getCounterpartyGroup**](#getCounterpartyGroup) | **GET** /counterparty_groups/{groupId} | Get a counterparty group
[**getLegalEntity**](#getLegalEntity) | **GET** /legal_entities/{legalEntityId} | Get a legal entity
[**getLegalEntityForAddress**](#getLegalEntityForAddress) | **GET** /address_registry/legal_entities/{address} | Look up legal entity by blockchain address
[**getPostScreeningPolicy**](#getPostScreeningPolicy) | **GET** /screening/travel_rule/post_screening_policy | Travel Rule - View Post-Screening Policy
[**getScreeningFullDetails**](#getScreeningFullDetails) | **GET** /screening/transaction/{txId} | Provides all the compliance details for the given screened transaction.
[**getScreeningPolicy**](#getScreeningPolicy) | **GET** /screening/travel_rule/screening_policy | Travel Rule - View Screening Policy
[**listAddressRegistryVaultOptOuts**](#listAddressRegistryVaultOptOuts) | **GET** /address_registry/vaults | List vault-level address registry opt-outs (paginated)
[**listCounterpartyGroups**](#listCounterpartyGroups) | **GET** /counterparty_groups | List counterparty groups
[**listLegalEntities**](#listLegalEntities) | **GET** /legal_entities | List legal entities (Paginated)
[**listVaultsForLegalEntity**](#listVaultsForLegalEntity) | **GET** /legal_entities/{legalEntityId}/vaults | List vault accounts for a legal entity (Paginated)
[**optInAddressRegistryTenant**](#optInAddressRegistryTenant) | **POST** /address_registry/tenant | Opt the workspace in to the address registry
[**optOutAddressRegistryTenant**](#optOutAddressRegistryTenant) | **DELETE** /address_registry/tenant | Opt the workspace out of the address registry
[**registerLegalEntity**](#registerLegalEntity) | **POST** /legal_entities | Register a new legal entity
[**removeAddressRegistryVaultOptOut**](#removeAddressRegistryVaultOptOut) | **DELETE** /address_registry/vaults/{vaultAccountId} | Remove a single vault account from the address registry opt-out list
[**removeAllAddressRegistryVaultOptOuts**](#removeAllAddressRegistryVaultOptOuts) | **DELETE** /address_registry/vaults | Remove all vault-level address registry opt-outs for the workspace
[**retryRejectedTransactionBypassScreeningChecks**](#retryRejectedTransactionBypassScreeningChecks) | **POST** /screening/transaction/{txId}/bypass_screening_policy | Calling the \&quot;Bypass Screening Policy\&quot; API endpoint triggers a new transaction, with the API user as the initiator, bypassing the screening policy check
[**setAmlVerdict**](#setAmlVerdict) | **POST** /screening/aml/verdict/manual | Set AML Verdict (BYORK Super Light)
[**setByorkTimeouts**](#setByorkTimeouts) | **PUT** /screening/byork/config/timeouts | Set BYORK Light timeouts
[**setByorkVerdict**](#setByorkVerdict) | **POST** /screening/byork/verdict | Set BYORK Light verdict
[**updateAmlScreeningConfiguration**](#updateAmlScreeningConfiguration) | **PUT** /screening/aml/policy_configuration | Update AML Configuration
[**updateCounterpartyGroup**](#updateCounterpartyGroup) | **PATCH** /counterparty_groups/{groupId} | Update a counterparty group
[**updateLegalEntity**](#updateLegalEntity) | **PUT** /legal_entities/{legalEntityId} | Update legal entity
[**updateScreeningConfiguration**](#updateScreeningConfiguration) | **PUT** /screening/configurations | Tenant - Screening Configuration
[**updateTravelRuleConfig**](#updateTravelRuleConfig) | **PUT** /screening/travel_rule/policy_configuration | Update Travel Rule Configuration


# **activateByorkConfig**
> ByorkConfigResponse activateByorkConfig()

Activates BYORK Light for the authenticated tenant (sets config.active to true). Once activated, BYORK screening applies to matching transactions. Requires BYORK Light to be enabled for the tenant (contact your CSM to enable).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiActivateByorkConfigRequest, ByorkConfigResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiActivateByorkConfigRequest = {
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.activateByorkConfig(body).then((res: FireblocksResponse<ByorkConfigResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ByorkConfigResponse](../models/ByorkConfigResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | BYORK configuration activated. |  * X-Request-ID -  <br>  |
**400** | BYORK Light not enabled for tenant. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **addAddressRegistryVaultOptOuts**
> AddressRegistryAddVaultOptOutsResponse addAddressRegistryVaultOptOuts(addressRegistryAddVaultOptOutsRequest)

Adds one or more vault account ids to the workspace opt-out list for the address registry.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiAddAddressRegistryVaultOptOutsRequest, AddressRegistryAddVaultOptOutsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiAddAddressRegistryVaultOptOutsRequest = {
  // AddressRegistryAddVaultOptOutsRequest
  addressRegistryAddVaultOptOutsRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.addAddressRegistryVaultOptOuts(body).then((res: FireblocksResponse<AddressRegistryAddVaultOptOutsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressRegistryAddVaultOptOutsRequest** | **[AddressRegistryAddVaultOptOutsRequest](../models/AddressRegistryAddVaultOptOutsRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[AddressRegistryAddVaultOptOutsResponse](../models/AddressRegistryAddVaultOptOutsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Opt-outs recorded; response body includes &#x60;acceptedCount&#x60;. |  * X-Request-ID -  <br>  |
**400** | Validation error (e.g. empty list or invalid vault ids) |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **assignVaultsToLegalEntity**
> AssignVaultsToLegalEntityResponse assignVaultsToLegalEntity(assignVaultsToLegalEntityRequest, )

Assigns one or more vault accounts to a specific legal entity registration. Explicitly mapped vault accounts take precedence over the workspace default legal entity. Endpoint Permission: Admin, Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiAssignVaultsToLegalEntityRequest, AssignVaultsToLegalEntityResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiAssignVaultsToLegalEntityRequest = {
  // AssignVaultsToLegalEntityRequest
  assignVaultsToLegalEntityRequest: param_value,
  // string | The unique ID of the legal entity registration
  legalEntityId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.assignVaultsToLegalEntity(body).then((res: FireblocksResponse<AssignVaultsToLegalEntityResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assignVaultsToLegalEntityRequest** | **[AssignVaultsToLegalEntityRequest](../models/AssignVaultsToLegalEntityRequest.md)**|  |
 **legalEntityId** | [**string**] | The unique ID of the legal entity registration | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[AssignVaultsToLegalEntityResponse](../models/AssignVaultsToLegalEntityResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Vault accounts assigned successfully |  * X-Request-ID -  <br>  |
**404** | Legal entity registration not found |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **createCounterpartyGroup**
> CounterpartyGroup createCounterpartyGroup(createCounterpartyGroupRequest)

Creates a new counterparty group.  **Endpoint Permissions:** Admin, Non-Signing Admin. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiCreateCounterpartyGroupRequest, CounterpartyGroup } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiCreateCounterpartyGroupRequest = {
  // CreateCounterpartyGroupRequest
  createCounterpartyGroupRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.createCounterpartyGroup(body).then((res: FireblocksResponse<CounterpartyGroup>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCounterpartyGroupRequest** | **[CreateCounterpartyGroupRequest](../models/CreateCounterpartyGroupRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CounterpartyGroup](../models/CounterpartyGroup.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Counterparty group created successfully |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deactivateByorkConfig**
> ByorkConfigResponse deactivateByorkConfig()

Deactivates BYORK Light for the authenticated tenant (sets config.active to false). Once deactivated, BYORK screening no longer applies until activated again. Requires BYORK Light to be enabled for the tenant (contact your CSM to enable).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiDeactivateByorkConfigRequest, ByorkConfigResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiDeactivateByorkConfigRequest = {
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.deactivateByorkConfig(body).then((res: FireblocksResponse<ByorkConfigResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ByorkConfigResponse](../models/ByorkConfigResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | BYORK configuration deactivated. |  * X-Request-ID -  <br>  |
**400** | BYORK Light not enabled for tenant. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteCounterpartyGroup**
> deleteCounterpartyGroup()

Permanently deletes a counterparty group.  **Endpoint Permissions:** Admin, Non-Signing Admin. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiDeleteCounterpartyGroupRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiDeleteCounterpartyGroupRequest = {
  // string | The unique identifier of the counterparty group
  groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
};

fireblocks.compliance.deleteCounterpartyGroup(body).then((res: FireblocksResponse<any>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | The unique identifier of the counterparty group | defaults to undefined


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
**204** | Counterparty group deleted successfully |  * X-Request-ID -  <br>  |
**404** | Counterparty group not found |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAddressRegistryTenantParticipationStatus**
> AddressRegistryTenantRegistryResponse getAddressRegistryTenantParticipationStatus()

Returns whether the workspace is `OPTED_IN` or `OPTED_OUT` of the address registry.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, AddressRegistryTenantRegistryResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.compliance.getAddressRegistryTenantParticipationStatus(body).then((res: FireblocksResponse<AddressRegistryTenantRegistryResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[AddressRegistryTenantRegistryResponse](../models/AddressRegistryTenantRegistryResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Participation status in the response body |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAddressRegistryVaultOptOut**
> AddressRegistryGetVaultOptOutResponse getAddressRegistryVaultOptOut()

Returns whether this vault account is on the workspace opt-out list (`optedOut` true or false). List, add, and clear-all are available on `/v1/address_registry/vaults`; this path reads or removes one vault.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiGetAddressRegistryVaultOptOutRequest, AddressRegistryGetVaultOptOutResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiGetAddressRegistryVaultOptOutRequest = {
  // number | Vault account id (non-negative integer).
  vaultAccountId: 10001,
};

fireblocks.compliance.getAddressRegistryVaultOptOut(body).then((res: FireblocksResponse<AddressRegistryGetVaultOptOutResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**number**] | Vault account id (non-negative integer). | defaults to undefined


### Return type

**[AddressRegistryGetVaultOptOutResponse](../models/AddressRegistryGetVaultOptOutResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current opt-out flag for the vault |  * X-Request-ID -  <br>  |
**400** | Invalid path parameter (e.g. negative or out-of-range vault account id) |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAmlPostScreeningPolicy**
> ScreeningPolicyResponse getAmlPostScreeningPolicy()

Get the post-screening policy for AML.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ScreeningPolicyResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.compliance.getAmlPostScreeningPolicy(body).then((res: FireblocksResponse<ScreeningPolicyResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[ScreeningPolicyResponse](../models/ScreeningPolicyResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Post-screening policy retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getAmlScreeningPolicy**
> ScreeningProviderRulesConfigurationResponse getAmlScreeningPolicy()

Get the screening policy for AML.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ScreeningProviderRulesConfigurationResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.compliance.getAmlScreeningPolicy(body).then((res: FireblocksResponse<ScreeningProviderRulesConfigurationResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[ScreeningProviderRulesConfigurationResponse](../models/ScreeningProviderRulesConfigurationResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Screening policy retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getByorkConfig**
> ByorkConfigResponse getByorkConfig()

Retrieves BYORK Light configuration for the authenticated tenant (timeouts, active flag, allowed timeout ranges). Returns default config when none exists. Requires BYORK Light to be enabled for the tenant.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ByorkConfigResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.compliance.getByorkConfig(body).then((res: FireblocksResponse<ByorkConfigResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[ByorkConfigResponse](../models/ByorkConfigResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | BYORK configuration (or default). |  * X-Request-ID -  <br>  |
**400** | BYORK Light not enabled for tenant. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getByorkVerdict**
> GetByorkVerdictResponse getByorkVerdict()

Returns the current BYORK verdict and status for a transaction. Status can be PRE_ACCEPTED, PENDING, RECEIVED (verdict is final but processing not yet complete), or COMPLETED. Requires BYORK Light to be enabled for the tenant. Returns 404 if no BYORK verdict is found for the transaction.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiGetByorkVerdictRequest, GetByorkVerdictResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiGetByorkVerdictRequest = {
  // string | Transaction ID
  txId: 550e8400-e29b-41d4-a716-446655440000,
};

fireblocks.compliance.getByorkVerdict(body).then((res: FireblocksResponse<GetByorkVerdictResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txId** | [**string**] | Transaction ID | defaults to undefined


### Return type

**[GetByorkVerdictResponse](../models/GetByorkVerdictResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current verdict and status. |  * X-Request-ID -  <br>  |
**400** | BYORK Light not enabled for tenant or txId missing. |  * X-Request-ID -  <br>  |
**404** | No BYORK verdict found for this transaction. |  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getCounterpartyGroup**
> CounterpartyGroup getCounterpartyGroup()

Returns the details of a specific counterparty group.  **Endpoint Permissions:** Admin, Non-Signing Admin, Viewer. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiGetCounterpartyGroupRequest, CounterpartyGroup } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiGetCounterpartyGroupRequest = {
  // string | The unique identifier of the counterparty group
  groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
};

fireblocks.compliance.getCounterpartyGroup(body).then((res: FireblocksResponse<CounterpartyGroup>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | [**string**] | The unique identifier of the counterparty group | defaults to undefined


### Return type

**[CounterpartyGroup](../models/CounterpartyGroup.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A counterparty group object |  * X-Request-ID -  <br>  |
**404** | Counterparty group not found |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getLegalEntity**
> LegalEntityRegistration getLegalEntity()

Returns details of a specific legal entity registration, including GLEIF data when available. Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiGetLegalEntityRequest, LegalEntityRegistration } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiGetLegalEntityRequest = {
  // string | The unique ID of the legal entity registration
  legalEntityId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
};

fireblocks.compliance.getLegalEntity(body).then((res: FireblocksResponse<LegalEntityRegistration>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legalEntityId** | [**string**] | The unique ID of the legal entity registration | defaults to undefined


### Return type

**[LegalEntityRegistration](../models/LegalEntityRegistration.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Legal entity registration details |  * X-Request-ID -  <br>  |
**404** | Legal entity registration not found |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getLegalEntityForAddress**
> AddressRegistryLegalEntity getLegalEntityForAddress()

Returns legal entity information for the given blockchain address (verification status, LEI, Travel Rule providers, contact email, and related fields — see response schema). URL-encode `{address}` when required.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiGetLegalEntityForAddressRequest, AddressRegistryLegalEntity } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiGetLegalEntityForAddressRequest = {
  // string | Blockchain address to look up
  address: 0x742d35cc6634c0532925a3b844bc9e7595f0beb0,
};

fireblocks.compliance.getLegalEntityForAddress(body).then((res: FireblocksResponse<AddressRegistryLegalEntity>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **address** | [**string**] | Blockchain address to look up | defaults to undefined


### Return type

**[AddressRegistryLegalEntity](../models/AddressRegistryLegalEntity.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Legal entity found |  * X-Request-ID -  <br>  |
**400** | Bad request — either request validation (path &#x60;{address}&#x60; empty or whitespace-only after trim, e.g. encoded spaces only; numeric code 4100), or the authenticated workspace is not opted in to the address registry (numeric code 2140). The &#x60;message&#x60; field describes the failure; use &#x60;code&#x60; to distinguish. |  * X-Request-ID -  <br>  |
**404** | Not found (error code 2142) — unresolved address, no legal entity for a resolved address, or the same not-found outcome in other cases. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getPostScreeningPolicy**
> ScreeningPolicyResponse getPostScreeningPolicy()

Get the post-screening policy for Travel Rule.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ScreeningPolicyResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.compliance.getPostScreeningPolicy(body).then((res: FireblocksResponse<ScreeningPolicyResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[ScreeningPolicyResponse](../models/ScreeningPolicyResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Post-screening policy retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getScreeningFullDetails**
> ComplianceResultFullPayload getScreeningFullDetails()

Provides all the compliance details for the given screened transaction.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiGetScreeningFullDetailsRequest, ComplianceResultFullPayload } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiGetScreeningFullDetailsRequest = {
  // string | Fireblocks transaction ID of the screened transaction
  txId: 550e8400-e29b-41d4-a716-446655440000,
};

fireblocks.compliance.getScreeningFullDetails(body).then((res: FireblocksResponse<ComplianceResultFullPayload>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txId** | [**string**] | Fireblocks transaction ID of the screened transaction | defaults to undefined


### Return type

**[ComplianceResultFullPayload](../models/ComplianceResultFullPayload.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A compliance object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getScreeningPolicy**
> ScreeningProviderRulesConfigurationResponse getScreeningPolicy()

Get the screening policy for Travel Rule.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ScreeningProviderRulesConfigurationResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.compliance.getScreeningPolicy(body).then((res: FireblocksResponse<ScreeningProviderRulesConfigurationResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[ScreeningProviderRulesConfigurationResponse](../models/ScreeningProviderRulesConfigurationResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Screening policy retrieved successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listAddressRegistryVaultOptOuts**
> AddressRegistryListVaultOptOutsResponse listAddressRegistryVaultOptOuts()

Lists vault accounts that are opted out of the address registry for this workspace. Pagination uses `next` and `prev` cursors from the response. If `pageSize` is omitted, **50** items are returned per page; allowed range is **1–100** per request.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiListAddressRegistryVaultOptOutsRequest, AddressRegistryListVaultOptOutsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiListAddressRegistryVaultOptOutsRequest = {
  // string | Opaque cursor from a previous response (`next` or `prev`). Omit for the first page. (optional)
  pageCursor: eyJvZmZzZXQiOjAsInBhZ2VTaXplIjoxMH0,
  // number | Page size. Default **50** if omitted; must be between **1** and **100**. (optional)
  pageSize: 50,
  // AddressRegistryVaultListOrder | Sort direction by vault account id. Omit for ascending; use the enum value for descending. (optional)
  order: param_value,
};

fireblocks.compliance.listAddressRegistryVaultOptOuts(body).then((res: FireblocksResponse<AddressRegistryListVaultOptOutsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Opaque cursor from a previous response (&#x60;next&#x60; or &#x60;prev&#x60;). Omit for the first page. | (optional) defaults to undefined
 **pageSize** | [**number**] | Page size. Default **50** if omitted; must be between **1** and **100**. | (optional) defaults to 50
 **order** | **AddressRegistryVaultListOrder** | Sort direction by vault account id. Omit for ascending; use the enum value for descending. | (optional) defaults to undefined


### Return type

**[AddressRegistryListVaultOptOutsResponse](../models/AddressRegistryListVaultOptOutsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Page of vault opt-out rows |  * X-Request-ID -  <br>  |
**400** | Validation error (e.g. invalid or malformed pageCursor) |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listCounterpartyGroups**
> CounterpartyGroupsPaginatedResponse listCounterpartyGroups()

Returns a paginated list of counterparty groups.  **Endpoint Permissions:** Admin, Non-Signing Admin, Viewer. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiListCounterpartyGroupsRequest, CounterpartyGroupsPaginatedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiListCounterpartyGroupsRequest = {
  // string | Cursor of the required page (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of items in the page (optional)
  pageSize: 56,
};

fireblocks.compliance.listCounterpartyGroups(body).then((res: FireblocksResponse<CounterpartyGroupsPaginatedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Cursor of the required page | (optional) defaults to undefined
 **pageSize** | [**number**] | Maximum number of items in the page | (optional) defaults to 50


### Return type

**[CounterpartyGroupsPaginatedResponse](../models/CounterpartyGroupsPaginatedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of counterparty groups |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listLegalEntities**
> ListLegalEntitiesResponse listLegalEntities()

Returns legal entity registrations for the workspace with cursor-based pagination. If query parameter vaultAccountId is used it returns the legal entity registration associated with a specific vault account. If no explicit mapping exists for the vault, the workspace default legal entity is returned. Returns an empty response if neither a vault mapping nor a default legal entity is configured. Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiListLegalEntitiesRequest, ListLegalEntitiesResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiListLegalEntitiesRequest = {
  // string | The ID of the vault account. When provided, returns the legal entity associated with that vault account and pagination parameters are ignored. (optional)
  vaultAccountId: vaultAccountId_example,
  // string | Cursor string returned in `next` or `prev` of a previous response. Ignored when `vaultAccountId` is provided. (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of registrations to return. Ignored when `vaultAccountId` is provided. (optional)
  pageSize: 56,
};

fireblocks.compliance.listLegalEntities(body).then((res: FireblocksResponse<ListLegalEntitiesResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**string**] | The ID of the vault account. When provided, returns the legal entity associated with that vault account and pagination parameters are ignored. | (optional) defaults to undefined
 **pageCursor** | [**string**] | Cursor string returned in &#x60;next&#x60; or &#x60;prev&#x60; of a previous response. Ignored when &#x60;vaultAccountId&#x60; is provided. | (optional) defaults to undefined
 **pageSize** | [**number**] | Maximum number of registrations to return. Ignored when &#x60;vaultAccountId&#x60; is provided. | (optional) defaults to 50


### Return type

**[ListLegalEntitiesResponse](../models/ListLegalEntitiesResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of legal entity registrations. When &#x60;vaultAccountId&#x60; is provided, &#x60;data&#x60; contains at most one item. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **listVaultsForLegalEntity**
> ListVaultsForRegistrationResponse listVaultsForLegalEntity()

Returns vault account IDs explicitly assigned to a specific legal entity registration, with cursor-based pagination. Endpoint Permission: Admin, Non-Signing Admin, Signer, Approver, Editor, Viewer.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiListVaultsForLegalEntityRequest, ListVaultsForRegistrationResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiListVaultsForLegalEntityRequest = {
  // string | The unique ID of the legal entity registration
  legalEntityId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | Cursor string returned in `next` or `prev` of a previous response (optional)
  pageCursor: pageCursor_example,
  // number | Maximum number of registrations to return (optional)
  pageSize: 56,
};

fireblocks.compliance.listVaultsForLegalEntity(body).then((res: FireblocksResponse<ListVaultsForRegistrationResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legalEntityId** | [**string**] | The unique ID of the legal entity registration | defaults to undefined
 **pageCursor** | [**string**] | Cursor string returned in &#x60;next&#x60; or &#x60;prev&#x60; of a previous response | (optional) defaults to undefined
 **pageSize** | [**number**] | Maximum number of registrations to return | (optional) defaults to 50


### Return type

**[ListVaultsForRegistrationResponse](../models/ListVaultsForRegistrationResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Paginated list of vault account IDs assigned to the legal entity |  * X-Request-ID -  <br>  |
**404** | Legal entity registration not found |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **optInAddressRegistryTenant**
> AddressRegistryTenantRegistryResponse optInAddressRegistryTenant()

Opts the workspace in. No request body. Response uses the same JSON shape as GET; status is OPTED_IN.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiOptInAddressRegistryTenantRequest, AddressRegistryTenantRegistryResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiOptInAddressRegistryTenantRequest = {
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.optInAddressRegistryTenant(body).then((res: FireblocksResponse<AddressRegistryTenantRegistryResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[AddressRegistryTenantRegistryResponse](../models/AddressRegistryTenantRegistryResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success; response body includes status OPTED_IN |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **optOutAddressRegistryTenant**
> AddressRegistryTenantRegistryResponse optOutAddressRegistryTenant()

Opts the workspace out. No request body. Response uses the same JSON shape as GET; status is OPTED_OUT.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, AddressRegistryTenantRegistryResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.compliance.optOutAddressRegistryTenant(body).then((res: FireblocksResponse<AddressRegistryTenantRegistryResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[AddressRegistryTenantRegistryResponse](../models/AddressRegistryTenantRegistryResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success; response body includes status OPTED_OUT |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **registerLegalEntity**
> LegalEntityRegistration registerLegalEntity(registerLegalEntityRequest)

Registers a new legal entity for the workspace using its LEI (Legal Entity Identifier) code. The LEI is validated against the GLEIF registry. Each workspace can register multiple legal entities. Endpoint Permission: Admin, Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiRegisterLegalEntityRequest, LegalEntityRegistration } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiRegisterLegalEntityRequest = {
  // RegisterLegalEntityRequest
  registerLegalEntityRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.registerLegalEntity(body).then((res: FireblocksResponse<LegalEntityRegistration>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerLegalEntityRequest** | **[RegisterLegalEntityRequest](../models/RegisterLegalEntityRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[LegalEntityRegistration](../models/LegalEntityRegistration.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Legal entity registered successfully |  * X-Request-ID -  <br>  |
**400** | Invalid LEI or request parameters |  * X-Request-ID -  <br>  |
**404** | LEI not found in the GLEIF registry |  * X-Request-ID -  <br>  |
**409** | A legal entity with this LEI is already registered for the workspace |  * X-Request-ID -  <br>  |
**500** | Internal Server Error |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **removeAddressRegistryVaultOptOut**
> AddressRegistryRemoveVaultOptOutResponse removeAddressRegistryVaultOptOut()

Removes this vault account id from the workspace opt-out list if it is present; otherwise the call still succeeds. Response body matches GET (`optedOut` is `false` after success). To clear the whole list, use `DELETE /v1/address_registry/vaults`.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiRemoveAddressRegistryVaultOptOutRequest, AddressRegistryRemoveVaultOptOutResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiRemoveAddressRegistryVaultOptOutRequest = {
  // number | Vault account id (non-negative integer).
  vaultAccountId: 10001,
};

fireblocks.compliance.removeAddressRegistryVaultOptOut(body).then((res: FireblocksResponse<AddressRegistryRemoveVaultOptOutResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **vaultAccountId** | [**number**] | Vault account id (non-negative integer). | defaults to undefined


### Return type

**[AddressRegistryRemoveVaultOptOutResponse](../models/AddressRegistryRemoveVaultOptOutResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success; &#x60;optedOut&#x60; is false (list entry removed if it existed) |  * X-Request-ID -  <br>  |
**400** | Invalid path parameter (e.g. negative or out-of-range vault account id) |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **removeAllAddressRegistryVaultOptOuts**
> AddressRegistryRemoveAllVaultOptOutsResponse removeAllAddressRegistryVaultOptOuts()

Removes all vault accounts from the workspace opt-out list.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, AddressRegistryRemoveAllVaultOptOutsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body:any = {};

fireblocks.compliance.removeAllAddressRegistryVaultOptOuts(body).then((res: FireblocksResponse<AddressRegistryRemoveAllVaultOptOutsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**[AddressRegistryRemoveAllVaultOptOutsResponse](../models/AddressRegistryRemoveAllVaultOptOutsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All opt-outs cleared; response body includes &#x60;removedCount&#x60;. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **retryRejectedTransactionBypassScreeningChecks**
> CreateTransactionResponse retryRejectedTransactionBypassScreeningChecks()

This endpoint is restricted to Admin API users and is only applicable to outgoing transactions.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiRetryRejectedTransactionBypassScreeningChecksRequest, CreateTransactionResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiRetryRejectedTransactionBypassScreeningChecksRequest = {
  // string | The transaction id that was rejected by screening checks
  txId: 550e8400-e29b-41d4-a716-446655440000,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.retryRejectedTransactionBypassScreeningChecks(body).then((res: FireblocksResponse<CreateTransactionResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **txId** | [**string**] | The transaction id that was rejected by screening checks | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CreateTransactionResponse](../models/CreateTransactionResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A transaction object |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setAmlVerdict**
> AmlVerdictManualResponse setAmlVerdict(amlVerdictManualRequest)

Set AML verdict for incoming transactions when **BYORK Super Light** (Manual Screening Verdict) is enabled. This endpoint is for Super Light only. For **BYORK Light**, use POST /screening/byork/verdict instead. When Super Light is retired, this endpoint will be deprecated; use the BYORK Light verdict API for new integrations.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiSetAmlVerdictRequest, AmlVerdictManualResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiSetAmlVerdictRequest = {
  // AmlVerdictManualRequest
  amlVerdictManualRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.setAmlVerdict(body).then((res: FireblocksResponse<AmlVerdictManualResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **amlVerdictManualRequest** | **[AmlVerdictManualRequest](../models/AmlVerdictManualRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[AmlVerdictManualResponse](../models/AmlVerdictManualResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | AML verdict set successfully. |  -  |
**400** | Feature not enabled for tenant. |  * X-Request-ID -  <br>  |
**425** | Too Early - transaction not yet in pending screening. |  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setByorkTimeouts**
> ByorkConfigResponse setByorkTimeouts(byorkSetTimeoutsRequest)

Updates timeout values for BYORK wait-for-response (incoming and/or outgoing). At least one of incomingTimeoutSeconds or outgoingTimeoutSeconds is required. Values must be within the ranges returned in GET config (timeoutRangeIncoming for incomingTimeoutSeconds, timeoutRangeOutgoing for outgoingTimeoutSeconds). Requires BYORK Light to be enabled for the tenant (contact your CSM to enable).

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiSetByorkTimeoutsRequest, ByorkConfigResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiSetByorkTimeoutsRequest = {
  // ByorkSetTimeoutsRequest
  byorkSetTimeoutsRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.setByorkTimeouts(body).then((res: FireblocksResponse<ByorkConfigResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **byorkSetTimeoutsRequest** | **[ByorkSetTimeoutsRequest](../models/ByorkSetTimeoutsRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ByorkConfigResponse](../models/ByorkConfigResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Timeouts updated. |  * X-Request-ID -  <br>  |
**400** | BYORK Light not enabled, or timeout value out of range, or missing both timeouts. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **setByorkVerdict**
> ByorkVerdictResponse setByorkVerdict(byorkVerdictRequest)

Submit verdict (ACCEPT or REJECT) for a transaction in the BYORK Light flow. If the transaction is awaiting your decision, the verdict is applied immediately (response status COMPLETED). If processing has not yet reached that point, the verdict is stored and applied when it does (response status PRE_ACCEPTED). Requires BYORK Light to be enabled for the tenant.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiSetByorkVerdictRequest, ByorkVerdictResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiSetByorkVerdictRequest = {
  // ByorkVerdictRequest
  byorkVerdictRequest: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.setByorkVerdict(body).then((res: FireblocksResponse<ByorkVerdictResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **byorkVerdictRequest** | **[ByorkVerdictRequest](../models/ByorkVerdictRequest.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ByorkVerdictResponse](../models/ByorkVerdictResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Verdict applied (COMPLETED) or pre-accepted (PRE_ACCEPTED). |  * X-Request-ID -  <br>  |
**400** | BYORK Light not enabled for tenant or invalid verdict. |  * X-Request-ID -  <br>  |
**409** | BYORK decision already final, screening already completed, or state inconsistent. |  * X-Request-ID -  <br>  |
**425** | Too Early - transaction not found (screening not started yet). |  * X-Request-ID -  <br>  |
**500** | Internal server error. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateAmlScreeningConfiguration**
> ScreeningConfigurationsRequest updateAmlScreeningConfiguration()

Updates bypass screening, inbound delay, or outbound delay configurations for AML.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiUpdateAmlScreeningConfigurationRequest, ScreeningConfigurationsRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiUpdateAmlScreeningConfigurationRequest = {
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.updateAmlScreeningConfiguration(body).then((res: FireblocksResponse<ScreeningConfigurationsRequest>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ScreeningConfigurationsRequest](../models/ScreeningConfigurationsRequest.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Configuration updated successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateCounterpartyGroup**
> CounterpartyGroup updateCounterpartyGroup(updateCounterpartyGroupRequest, )

Updates an existing counterparty group.  **Endpoint Permissions:** Admin, Non-Signing Admin. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiUpdateCounterpartyGroupRequest, CounterpartyGroup } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiUpdateCounterpartyGroupRequest = {
  // UpdateCounterpartyGroupRequest
  updateCounterpartyGroupRequest: param_value,
  // string | The unique identifier of the counterparty group
  groupId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.updateCounterpartyGroup(body).then((res: FireblocksResponse<CounterpartyGroup>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateCounterpartyGroupRequest** | **[UpdateCounterpartyGroupRequest](../models/UpdateCounterpartyGroupRequest.md)**|  |
 **groupId** | [**string**] | The unique identifier of the counterparty group | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[CounterpartyGroup](../models/CounterpartyGroup.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Counterparty group updated successfully |  * X-Request-ID -  <br>  |
**404** | Counterparty group not found |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateLegalEntity**
> LegalEntityRegistration updateLegalEntity(updateLegalEntityRequest, )

Updates the status of a legal entity registration. Setting isDefault to true marks the registration as the workspace default, which is applied to vault accounts that have no explicit legal entity mapping. Endpoint Permission: Admin, Non-Signing Admin.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiUpdateLegalEntityRequest, LegalEntityRegistration } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiUpdateLegalEntityRequest = {
  // UpdateLegalEntityRequest
  updateLegalEntityRequest: param_value,
  // string | The unique ID of the legal entity registration
  legalEntityId: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.updateLegalEntity(body).then((res: FireblocksResponse<LegalEntityRegistration>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateLegalEntityRequest** | **[UpdateLegalEntityRequest](../models/UpdateLegalEntityRequest.md)**|  |
 **legalEntityId** | [**string**] | The unique ID of the legal entity registration | defaults to undefined
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[LegalEntityRegistration](../models/LegalEntityRegistration.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated legal entity registration |  * X-Request-ID -  <br>  |
**400** | Registration is not in APPROVED status |  * X-Request-ID -  <br>  |
**404** | Legal entity registration not found |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateScreeningConfiguration**
> ScreeningUpdateConfigurations updateScreeningConfiguration(screeningUpdateConfigurations)

Update tenant screening configuration.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiUpdateScreeningConfigurationRequest, ScreeningUpdateConfigurations } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiUpdateScreeningConfigurationRequest = {
  // ScreeningUpdateConfigurations
  screeningUpdateConfigurations: param_value,
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.updateScreeningConfiguration(body).then((res: FireblocksResponse<ScreeningUpdateConfigurations>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **screeningUpdateConfigurations** | **[ScreeningUpdateConfigurations](../models/ScreeningUpdateConfigurations.md)**|  |
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ScreeningUpdateConfigurations](../models/ScreeningUpdateConfigurations.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Tenant Screening configuration updated successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **updateTravelRuleConfig**
> ScreeningConfigurationsRequest updateTravelRuleConfig()

Updates bypass screening, inbound delay, or outbound delay configurations for Travel Rule.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ComplianceApiUpdateTravelRuleConfigRequest, ScreeningConfigurationsRequest } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ComplianceApiUpdateTravelRuleConfigRequest = {
  // string | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. (optional)
  idempotencyKey: idempotencyKey_example,
};

fireblocks.compliance.updateTravelRuleConfig(body).then((res: FireblocksResponse<ScreeningConfigurationsRequest>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | [**string**] | A unique identifier for the request. If the request is sent multiple times with the same idempotency key, the server will return the same response as the first request. The idempotency key is valid for 24 hours. | (optional) defaults to undefined


### Return type

**[ScreeningConfigurationsRequest](../models/ScreeningConfigurationsRequest.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Configuration updated successfully. |  -  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



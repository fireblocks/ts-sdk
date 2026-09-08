# ApprovalsBetaApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApprovalById**](#getApprovalById) | **GET** /approvals/{requestId} | Get a single approval request
[**getApprovals**](#getApprovals) | **GET** /approvals | List approval requests


# **getApprovalById**
> ApprovalRequestItem getApprovalById()

Retrieve full detail for a single approval request by ID, including the payload to sign and, when requested, the request\'s `quorumStatus`.  Because this endpoint addresses one request, it accepts `quorumStatusMode=FULL`, which adds the participating approvers and their individual approval state.  `userStatus` reflects the authenticated user by default. Pass `userId` to report it for another user instead.  Endpoint Permission: Owner, Admin, Non-Signing Admin, Approver, Signer, Security Admin, Security Auditor.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ApprovalsBetaApiGetApprovalByIdRequest, ApprovalRequestItem } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ApprovalsBetaApiGetApprovalByIdRequest = {
  // string | The approval request ID.
  requestId: requestId_example,
  // string | Report `userStatus` for this user instead of the authenticated user. This selects whose approval state is returned; it does not change which requests can be fetched. Requires an Admin, Non-Signing Admin, Security Admin or Security Auditor role; other roles are rejected with 403. (optional)
  userId: 8f3c1a2e-4b7d-4c91-a0e5-2d6f8b1c3a94,
  // 'NONE' | 'SUMMARY' | 'FULL' | How much quorum detail to include in `quorumStatus`. `NONE` (the default) returns it as `null`. `SUMMARY` returns the approval thresholds, current counts and status. `FULL` adds `users` and the per-group `members` indexes identifying who may approve and who already has. Any other value is rejected with 400; the parameter is case-sensitive. (optional)
  quorumStatusMode: quorumStatusMode_example,
};

fireblocks.approvalsBeta.getApprovalById(body).then((res: FireblocksResponse<ApprovalRequestItem>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestId** | [**string**] | The approval request ID. | defaults to undefined
 **userId** | [**string**] | Report &#x60;userStatus&#x60; for this user instead of the authenticated user. This selects whose approval state is returned; it does not change which requests can be fetched. Requires an Admin, Non-Signing Admin, Security Admin or Security Auditor role; other roles are rejected with 403. | (optional) defaults to undefined
 **quorumStatusMode** | [**&#39;NONE&#39; | &#39;SUMMARY&#39; | &#39;FULL&#39;**]**Array<&#39;NONE&#39; &#124; &#39;SUMMARY&#39; &#124; &#39;FULL&#39;>** | How much quorum detail to include in &#x60;quorumStatus&#x60;. &#x60;NONE&#x60; (the default) returns it as &#x60;null&#x60;. &#x60;SUMMARY&#x60; returns the approval thresholds, current counts and status. &#x60;FULL&#x60; adds &#x60;users&#x60; and the per-group &#x60;members&#x60; indexes identifying who may approve and who already has. Any other value is rejected with 400; the parameter is case-sensitive. | (optional) defaults to 'NONE'


### Return type

**[ApprovalRequestItem](../models/ApprovalRequestItem.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested approval request. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **getApprovals**
> ListApprovalsResponse getApprovals()

Retrieve the pending approval requests the authenticated API user is eligible to act on, including requests the user has already approved that are still pending overall.  The response is scoped to the authenticated user by default. Pass `userId` to read another user\'s queue, or `includeAllUsers=true` to read every pending request in the workspace. Both require an Admin, Non-Signing Admin, Security Admin or Security Auditor role and are rejected with 403 otherwise.  Set `quorumStatusMode=SUMMARY` to include each request\'s approval thresholds and counts. The per-approver breakdown is available only when fetching a single request — see `GET /approvals/{requestId}`.  Endpoint Permission: Owner, Admin, Non-Signing Admin, Approver, Signer, Security Admin, Security Auditor.

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ApprovalsBetaApiGetApprovalsRequest, ListApprovalsResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ApprovalsBetaApiGetApprovalsRequest = {
  // boolean | When true, also include requests the authenticated user has already approved that are still pending overall. Defaults to false (only requests the user has not yet acted on). (optional)
  includeUserApproved: true,
  // string | Return the pending requests for this user instead of the authenticated user. Requires an Admin, Non-Signing Admin, Security Admin or Security Auditor role; other roles are rejected with 403. Cannot be combined with `includeAllUsers=true` — sending both is rejected with 400. (optional)
  userId: 8f3c1a2e-4b7d-4c91-a0e5-2d6f8b1c3a94,
  // boolean | When true, return every pending request in the workspace instead of a single user\'s queue. Defaults to false. Requires an Admin, Non-Signing Admin, Security Admin or Security Auditor role; other roles are rejected with 403. In this mode `userStatus` is always `USER_STATUS_NOT_APPLICABLE`, because the response is not scoped to one user, and `includeUserApproved` has no effect. Cannot be combined with `userId`. (optional)
  includeAllUsers: true,
  // 'NONE' | 'SUMMARY' | How much quorum detail to include in each request\'s `quorumStatus`. `NONE` (the default) returns it as `null`. `SUMMARY` returns the approval thresholds, current counts and status. `FULL` is rejected with 400 on this endpoint because the per-approver breakdown requires a single request — use `GET /approvals/{requestId}` for it. Any other value is rejected with 400; the parameter is case-sensitive. (optional)
  quorumStatusMode: quorumStatusMode_example,
  // number | Number of results per page. Maximum 30. Defaults to 20. (optional)
  pageSize: 56,
  // string | Cursor returned from the previous response (the `next` field) to fetch the next page. (optional)
  pageCursor: pageCursor_example,
};

fireblocks.approvalsBeta.getApprovals(body).then((res: FireblocksResponse<ListApprovalsResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeUserApproved** | [**boolean**] | When true, also include requests the authenticated user has already approved that are still pending overall. Defaults to false (only requests the user has not yet acted on). | (optional) defaults to undefined
 **userId** | [**string**] | Return the pending requests for this user instead of the authenticated user. Requires an Admin, Non-Signing Admin, Security Admin or Security Auditor role; other roles are rejected with 403. Cannot be combined with &#x60;includeAllUsers&#x3D;true&#x60; — sending both is rejected with 400. | (optional) defaults to undefined
 **includeAllUsers** | [**boolean**] | When true, return every pending request in the workspace instead of a single user\&#39;s queue. Defaults to false. Requires an Admin, Non-Signing Admin, Security Admin or Security Auditor role; other roles are rejected with 403. In this mode &#x60;userStatus&#x60; is always &#x60;USER_STATUS_NOT_APPLICABLE&#x60;, because the response is not scoped to one user, and &#x60;includeUserApproved&#x60; has no effect. Cannot be combined with &#x60;userId&#x60;. | (optional) defaults to false
 **quorumStatusMode** | [**&#39;NONE&#39; | &#39;SUMMARY&#39;**]**Array<&#39;NONE&#39; &#124; &#39;SUMMARY&#39;>** | How much quorum detail to include in each request\&#39;s &#x60;quorumStatus&#x60;. &#x60;NONE&#x60; (the default) returns it as &#x60;null&#x60;. &#x60;SUMMARY&#x60; returns the approval thresholds, current counts and status. &#x60;FULL&#x60; is rejected with 400 on this endpoint because the per-approver breakdown requires a single request — use &#x60;GET /approvals/{requestId}&#x60; for it. Any other value is rejected with 400; the parameter is case-sensitive. | (optional) defaults to 'NONE'
 **pageSize** | [**number**] | Number of results per page. Maximum 30. Defaults to 20. | (optional) defaults to 20
 **pageCursor** | [**string**] | Cursor returned from the previous response (the &#x60;next&#x60; field) to fetch the next page. | (optional) defaults to undefined


### Return type

**[ListApprovalsResponse](../models/ListApprovalsResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Approval requests the authenticated user is eligible to act on. |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



# ContactsApi

All URIs are relative to https://developers.fireblocks.com/reference/

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContacts**](#getContacts) | **GET** /contacts | List contacts


# **getContacts**
> ContactsPagedResponse getContacts()

Returns a paginated list of the workspace\'s address book contacts.  Live contacts are returned by default; pass `archived=true` to return only the archived ones. Results are sorted by `name` ascending unless `sortBy`/`order` say otherwise. Because the sort column is the page cursor\'s leading key, a `pageCursor` must be replayed with the same sort it was minted under, or the request is rejected.  Endpoint Permissions: any workspace role may read the address book. Writes are role-gated. 

### Example


```typescript
import { readFileSync } from 'fs';
import { Fireblocks, BasePath } from '@fireblocks/ts-sdk';
import type { FireblocksResponse, ContactsApiGetContactsRequest, ContactsPagedResponse } from '@fireblocks/ts-sdk';

// Set the environment variables for authentication
process.env.FIREBLOCKS_BASE_PATH = BasePath.Sandbox; // or assign directly to "https://sandbox-api.fireblocks.io/v1"
process.env.FIREBLOCKS_API_KEY = "my-api-key";
process.env.FIREBLOCKS_SECRET_KEY = readFileSync("./fireblocks_secret.key", "utf8");

const fireblocks = new Fireblocks();

let body: ContactsApiGetContactsRequest = {
  // string | Cursor indicating the page position. Omit to fetch the first page. (optional)
  pageCursor: bmFtZS1BU0M=~QWNtZSBDb3Jw:NA==,
  // number | Number of results per page (optional)
  pageSize: 25,
  // boolean | Return the total count of matching contacts alongside the page. Counting is opt-in because it costs an extra pass over the filtered set; `total` is omitted from the response unless this is `true`. (optional)
  includeTotal: true,
  // string | Filter by a case-insensitive substring of the contact name (optional)
  name: acme,
  // Array<'COUNTERPARTY' | 'OWN_ACCOUNT'> | Filter by one or more contact types (optional)
  types: ["COUNTERPARTY"],
  // string | Filter by the container holding the contact (optional)
  containerId: 11111111-1111-1111-1111-111111111111,
  // boolean | Return only archived contacts instead of live ones (optional)
  archived: false,
  // 'WHITELIST' | 'BLACKLIST' | Filter by the access control applied to the contact (optional)
  accessControl: WHITELIST,
  // Array<string> | List of tag IDs to include. Contacts with any of these tags will be included (optional)
  includeTagIds: ["df4c0987-30da-4976-8dcf-bc2dd41ae331"],
  // Array<string> | List of tag IDs to exclude. Contacts with any of these tags will be filtered out (optional)
  excludeTagIds: ["df4c0987-30da-4976-8dcf-bc2dd41ae331"],
  // 'name' | 'updatedAt' | The field to sort by (optional)
  sortBy: updatedAt,
  // 'ASC' | 'DESC' | The sort direction (optional)
  order: DESC,
};

fireblocks.contacts.getContacts(body).then((res: FireblocksResponse<ContactsPagedResponse>) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(res, null, 2));
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageCursor** | [**string**] | Cursor indicating the page position. Omit to fetch the first page. | (optional) defaults to undefined
 **pageSize** | [**number**] | Number of results per page | (optional) defaults to 100
 **includeTotal** | [**boolean**] | Return the total count of matching contacts alongside the page. Counting is opt-in because it costs an extra pass over the filtered set; &#x60;total&#x60; is omitted from the response unless this is &#x60;true&#x60;. | (optional) defaults to false
 **name** | [**string**] | Filter by a case-insensitive substring of the contact name | (optional) defaults to undefined
 **types** | **Array<&#39;COUNTERPARTY&#39; &#124; &#39;OWN_ACCOUNT&#39;>** | Filter by one or more contact types | (optional) defaults to undefined
 **containerId** | [**string**] | Filter by the container holding the contact | (optional) defaults to undefined
 **archived** | [**boolean**] | Return only archived contacts instead of live ones | (optional) defaults to false
 **accessControl** | [**&#39;WHITELIST&#39; | &#39;BLACKLIST&#39;**]**Array<&#39;WHITELIST&#39; &#124; &#39;BLACKLIST&#39;>** | Filter by the access control applied to the contact | (optional) defaults to undefined
 **includeTagIds** | **Array&lt;string&gt;** | List of tag IDs to include. Contacts with any of these tags will be included | (optional) defaults to undefined
 **excludeTagIds** | **Array&lt;string&gt;** | List of tag IDs to exclude. Contacts with any of these tags will be filtered out | (optional) defaults to undefined
 **sortBy** | [**&#39;name&#39; | &#39;updatedAt&#39;**]**Array<&#39;name&#39; &#124; &#39;updatedAt&#39;>** | The field to sort by | (optional) defaults to 'name'
 **order** | [**&#39;ASC&#39; | &#39;DESC&#39;**]**Array<&#39;ASC&#39; &#124; &#39;DESC&#39;>** | The sort direction | (optional) defaults to 'ASC'


### Return type

**[ContactsPagedResponse](../models/ContactsPagedResponse.md)**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A paginated list of contacts |  * X-Request-ID -  <br>  |
**0** | Error Response |  * X-Request-ID -  <br>  |

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)



# AllowlistEntry

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | Unique identifier for the allowlist entry | [default to undefined]|
|**address** | **string** | The blockchain address | [default to undefined]|
|**assets** | **Array&lt;string&gt;** | Assets approved for this address.  Each value is either a Fireblocks asset ID (when the provider\&#39;s asset maps to a Fireblocks-supported asset) or the raw provider asset symbol (when no mapping exists). Treat values as opaque strings.  Possible combinations:   - One or more specific asset values (e.g., &#x60;[\&quot;BTC\&quot;, \&quot;ETH\&quot;]&#x60;)  See [List assets](https://developers.fireblocks.com/reference/listassets) for the canonical list of Fireblocks asset IDs.  | [default to undefined]|
|**networks** | **Array&lt;string&gt;** | Networks approved for this address.  Each value is either a Fireblocks network ID (when the provider\&#39;s network maps to a Fireblocks-supported blockchain) or the raw provider blockchain identifier (when no mapping exists). Treat values as opaque strings.  Possible combinations:   - One or more specific network values (e.g., &#x60;[\&quot;ETHEREUM\&quot;, \&quot;POLYGON\&quot;]&#x60;)  See [List blockchains](https://developers.fireblocks.com/reference/listblockchains) for the canonical list of Fireblocks blockchain identifiers.  | [default to undefined]|
|**status** | [**AllowlistEntryStatus**](AllowlistEntryStatus.md) |  | [default to undefined]|
|**addedAt** | **string** | ISO 8601 timestamp when entry was added | [default to undefined]|
|**label** | **string** | Human-readable label for the address | [optional] [default to undefined]|
|**addressIdentifier** | **string** | Additional identifier (e.g., memo, destination tag) | [optional] [default to undefined]|
|**providerReferenceId** | **string** | Provider\&#39;s internal reference ID | [optional] [default to undefined]|
|**providerMetadata** | [**AllowlistEntryProviderMetadata**](AllowlistEntryProviderMetadata.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

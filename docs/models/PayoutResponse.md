# PayoutResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**payoutId** | **string** |  | [default to undefined]|
|**paymentAccount** | [**PaymentAccountResponse**](PaymentAccountResponse.md) |  | [default to undefined]|
|**createdAt** | **number** |  | [default to undefined]|
|**state** | [**PayoutState**](PayoutState.md) |  | [default to undefined]|
|**status** | [**PayoutStatus**](PayoutStatus.md) |  | [default to undefined]|
|**instructionSet** | [**Array&lt;PayoutInstructionResponse&gt;**](PayoutInstructionResponse.md) |  | [default to undefined]|
|**reasonOfFailure** | **string** | &lt;ul&gt;  &lt;li&gt; INSUFFICIENT_BALANCE&lt;/li&gt; &lt;li&gt; SOURCE_TRANSLATION&lt;/li&gt; &lt;li&gt; SOURCE_NOT_UNIQUE&lt;/li&gt; &lt;li&gt; SOURCE_NOT_FOUND&lt;/li&gt; &lt;li&gt; SOURCE_TYPE_NOT_SUPPORTED&lt;/li&gt; &lt;li&gt; EMPTY_SOURCE&lt;/li&gt; &lt;li&gt; DESTINATION_TRANSLATION&lt;/li&gt; &lt;li&gt; DESTINATION_NOT_UNIQUE&lt;/li&gt; &lt;li&gt; DESTINATION_NOT_FOUND&lt;/li&gt; &lt;li&gt; EMPTY_DESTINATION&lt;/li&gt; &lt;li&gt; PARSING &lt;/li&gt; &lt;li&gt; UNKNOWN&lt;/li&gt; &lt;li&gt; FIREBLOCKS_CLIENT&lt;/li&gt; &lt;li&gt; TRANSACTION_SUBMISSION&lt;/li&gt; &lt;/ul&gt;  | [optional] [default to undefined]|
|**initMethod** | [**PayoutInitMethod**](PayoutInitMethod.md) |  | [optional] [default to undefined]|
|**reportUrl** | **string** |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

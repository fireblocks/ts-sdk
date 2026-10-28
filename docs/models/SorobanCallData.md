# SorobanCallData

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**envelopeXdr** | **string** | A base64 encoded, unsigned Stellar &#x60;TransactionEnvelope&#x60; carrying exactly one &#x60;invokeHostFunction&#x60; operation that invokes a contract.  The API only checks that the value is present. The envelope is decoded and validated after the transaction is created, and a transaction whose envelope fails validation is not signed and ends as &#x60;FAILED&#x60;. An envelope is rejected if it carries signatures or authorization entries, a memo or a fee-bump wrapper, if its source account is not the Stellar address of the vault account, or if it has no bounded time window.  A Stellar transaction cannot exceed 132096 bytes, about 176128 base64 characters. | [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# TravelRuleValidateTransactionRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**transactionAsset** | **string** | Transaction asset symbol (BTC,ETH) | [default to undefined]|
|**destination** | **string** | Transaction destination address | [default to undefined]|
|**transactionAmount** | **string** | Transaction amount in the transaction asset | [default to undefined]|
|**originatorVASPdid** | **string** | This is the identifier assigned to your VASP | [default to undefined]|
|**originatorEqualsBeneficiary** | **boolean** | \&quot;True\&quot; if the originator and beneficiary is the same person and you therefore do not need to collect any information. \&quot;False\&quot; if it is a third-party transfer. | [default to undefined]|
|**transactionAssetDecimals** | **number** | Number of decimals in the transaction asset. This is used to convert the transaction amount to the smallest unit of the asset | [optional] [default to undefined]|
|**travelRuleBehavior** | **boolean** | This will also check if the transaction is a TRAVEL_RULE in the beneficiary VASP\&#39;s jurisdiction | [optional] [default to undefined]|
|**beneficiaryVASPdid** | **string** | This is the identifier assigned to the VASP the funds are being sent to | [optional] [default to undefined]|
|**beneficiaryVASPname** | **string** | Beneficiary VASP name | [optional] [default to undefined]|
|**beneficiaryName** | **string** | Beneficiary  name | [optional] [default to undefined]|
|**beneficiaryAccountNumber** | **string** | Beneficiary  name | [optional] [default to undefined]|
|**beneficiaryAddress** | [**TravelRuleAddress**](TravelRuleAddress.md) |  | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

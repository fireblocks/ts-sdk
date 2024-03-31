# TravelRuleValidateFullTransactionRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**originator** | [**TravelRulePiiIVMS**](TravelRulePiiIVMS.md) | Information about the originator of the transaction | [default to undefined]|
|**beneficiary** | [**TravelRulePiiIVMS**](TravelRulePiiIVMS.md) | Information about the beneficiary of the transaction | [default to undefined]|
|**transactionAsset** | **string** | The asset involved in the transaction | [optional] [default to undefined]|
|**transactionAmount** | **string** | The amount of the transaction | [optional] [default to undefined]|
|**originatorDid** | **string** | The DID of the transaction originator | [optional] [default to undefined]|
|**beneficiaryDid** | **string** | The DID of the transaction beneficiary | [optional] [default to undefined]|
|**originatorVASPdid** | **string** | The VASP ID of the transaction originator | [optional] [default to undefined]|
|**beneficiaryVASPdid** | **string** | The VASP ID of the transaction beneficiary | [optional] [default to undefined]|
|**beneficiaryVASPname** | **string** | The name of the VASP acting as the beneficiary | [optional] [default to undefined]|
|**transactionBlockchainInfo** | [**TravelRuleTransactionBlockchainInfo**](TravelRuleTransactionBlockchainInfo.md) | Information about the blockchain transaction | [optional] [default to undefined]|
|**encrypted** | **string** | Encrypted data related to the transaction | [optional] [default to undefined]|
|**protocol** | **string** | The protocol used to perform the travel rule | [optional] [default to undefined]|
|**notificationEmail** | **string** | The email address where a notification should be sent upon completion of the travel rule | [optional] [default to undefined]|
|**skipBeneficiaryDataValidation** | **boolean** | Whether to skip validation of beneficiary data | [optional] [default to undefined]|
|**travelRuleBehavior** | **boolean** | Whether to check if the transaction is a TRAVEL_RULE in the beneficiary VASP\&#39;s jurisdiction | [optional] [default to undefined]|
|**originatorProof** | [**TravelRuleOwnershipProof**](TravelRuleOwnershipProof.md) | Ownership proof related to the originator of the transaction | [optional] [default to undefined]|
|**beneficiaryProof** | [**TravelRuleOwnershipProof**](TravelRuleOwnershipProof.md) | Ownership proof related to the beneficiary of the transaction | [optional] [default to undefined]|
|**pii** | [**TravelRulePiiIVMS**](TravelRulePiiIVMS.md) | Personal identifiable information related to the transaction | [optional] [default to undefined]|




[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# TravelRuleCreateTransactionRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**originator** | [**TravelRulePiiIVMS**](TravelRulePiiIVMS.md) |  | [default to undefined]|
|**beneficiary** | [**TravelRulePiiIVMS**](TravelRulePiiIVMS.md) |  | [default to undefined]|
|**originatorVASPdid** | **string** | The Decentralized Identifier (DID) of the exchange (VASP) that is sending the virtual assets. This identifier is unique to the exchange and is generated when the exchange\&#39;s account is  created in the Notabene network. | [optional] [default to undefined]|
|**beneficiaryVASPdid** | **string** | The Decentralized Identifier (DID) of the exchange (VASP) that is receiving the virtual assets. This identifier is unique to the exchange and is generated when the exchange\&#39;s account is  created in the Notabene network. | [optional] [default to undefined]|
|**originatorVASPname** | **string** | The name of the VASP acting as the transaction originator. | [optional] [default to undefined]|
|**beneficiaryVASPname** | **string** | The name of the VASP acting as the transaction beneficiary. | [optional] [default to undefined]|
|**beneficiaryVASPwebsite** | **string** | The website of the VASP acting as the transaction beneficiary. | [optional] [default to undefined]|
|**transactionBlockchainInfo** | [**TravelRuleTransactionBlockchainInfo**](TravelRuleTransactionBlockchainInfo.md) |  | [optional] [default to undefined]|
|**encrypted** | **string** | Encrypted data related to the transaction. | [optional] [default to undefined]|
|**protocol** | **string** | The protocol used to perform the travel rule. | [optional] [default to undefined]|
|**targetProtocol** | **string** | The target protocol for GTR (Global Travel Rule) transfers. | [optional] [default to undefined]|
|**skipBeneficiaryDataValidation** | **boolean** | Whether to skip validation of beneficiary data. | [optional] [default to undefined]|
|**travelRuleBehavior** | **boolean** | Whether to check if the transaction complies with the travel rule in the beneficiary VASP\&#39;s jurisdiction. | [optional] [default to undefined]|
|**originatorRef** | **string** | A reference ID related to the originator of the transaction. | [optional] [default to undefined]|
|**beneficiaryRef** | **string** | A reference ID related to the beneficiary of the transaction. | [optional] [default to undefined]|
|**travelRuleBehaviorRef** | **string** | A reference ID related to the travel rule behavior. | [optional] [default to undefined]|
|**originatorProof** | [**TravelRuleOwnershipProof**](TravelRuleOwnershipProof.md) |  | [optional] [default to undefined]|
|**beneficiaryProof** | [**TravelRuleOwnershipProof**](TravelRuleOwnershipProof.md) |  | [optional] [default to undefined]|
|**beneficiaryDid** | **string** | The Decentralized Identifier (DID) of the person at the receiving exchange (VASP).  This identifier is generated when the customer is registered in the Notabene network,  or automatically created based on the &#x60;beneficiaryRef&#x60;.  - If neither &#x60;beneficiaryRef&#x60; nor &#x60;beneficiaryDid&#x60; is provided in the &#x60;txCreate&#x60; payload,    a new random DID is generated for every transaction. | [optional] [default to undefined]|
|**originatorDid** | **string** | The Decentralized Identifier (DID) of the person at the exchange (VASP) who is requesting the withdrawal. This identifier is generated when the customer is registered in the Notabene network or automatically created based on the &#x60;originatorRef&#x60;.  - If neither &#x60;originatorRef&#x60; nor &#x60;originatorDid&#x60; is provided in the &#x60;txCreate&#x60; payload,    a new random DID is generated for every transaction. | [optional] [default to undefined]|
|**isNonCustodial** | **boolean** | Indicates if the transaction involves a non-custodial wallet. | [optional] [default to undefined]|


## Enum: TravelRuleCreateTransactionRequestProtocolEnum


* `Ivms101` (value: `'IVMS101'`)

* `TrLight` (value: `'TRLight'`)

* `Trp` (value: `'TRP'`)

* `OpenVasp` (value: `'OpenVASP'`)

* `Gtr` (value: `'GTR'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

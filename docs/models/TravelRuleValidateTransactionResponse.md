# TravelRuleValidateTransactionResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**isValid** | **boolean** | \&quot;isValid\&quot; will tell you if you have collected all the information needed for the travel rule data transfer. Once this field &#x3D; \&quot;true\&quot;, you can move on to the next step which is to transfer the front-end information to your back-end and perform Travel Rule Transaction create | [default to undefined]|
|**type** | **string** | \&quot;type\&quot; will tell you if the virtual asset value converted to FIAT value of the withdrawal request is above (&#x3D;TRAVELRULE) or below (&#x3D;BELOW_THRESHOLD) the threshold in your jurisdiction. If it is to an unhosted wallet which does not require travel rule information to be sent and only collected, it will say NON_CUSTODIAL. | [default to undefined]|
|**beneficiaryAddressType** | **string** | \&quot;beneficiaryAddressType\&quot; will tell you if your blockchain analytics provider or internal address book has been able to identify the wallet address. | [default to undefined]|
|**addressSource** | **string** | \&quot;addressSource\&quot; will tell you if the address was found in your internal address book or identified by the blockchain analytics provider. | [default to undefined]|
|**beneficiaryVASPdid** | **string** | The VASP DID of the beneficiary VASP | [default to undefined]|
|**beneficiaryVASPname** | **string** | \&quot;beneficiaryVASPname\&quot; will tell you the name of the VASP that has been identified as the owner of the wallet address. This name is used in a subsequent call to get its DID. | [default to undefined]|
|**warnings** | **Array&lt;string&gt;** | \&quot;errors/warnings\&quot; will tell you what information about the beneficiary you need to collect from the sender. | [default to undefined]|


## Enum: TravelRuleValidateTransactionResponseBeneficiaryAddressTypeEnum


* `Unknown` (value: `'UNKNOWN'`)

* `Hosted` (value: `'HOSTED'`)

* `Unhosted` (value: `'UNHOSTED'`)



## Enum: TravelRuleValidateTransactionResponseAddressSourceEnum


* `Unknown` (value: `'UNKNOWN'`)

* `AddressHash` (value: `'ADDRESS_HASH'`)

* `AddressGraph` (value: `'ADDRESS_GRAPH'`)

* `Chainalysis` (value: `'CHAINALYSIS'`)

* `Elliptic` (value: `'ELLIPTIC'`)

* `Crystal` (value: `'CRYSTAL'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

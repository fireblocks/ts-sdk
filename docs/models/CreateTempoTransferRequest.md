# CreateTempoTransferRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**assetId** | **string** | The ID of the asset to transfer. Must be a non-deprecated asset supported on a Tempo-eligible blockchain; an unknown, deprecated, or unsupported asset surfaces as 400 UNSUPPORTED_ASSET. | [default to undefined]|
|**source** | [**TempoTransferSource**](TempoTransferSource.md) |  | [default to undefined]|
|**note** | **string** | A custom note that can be associated with the transaction. | [optional] [default to undefined]|
|**externalTxId** | **string** | Unique ID provided by the customer, used to identify the transaction. | [optional] [default to undefined]|
|**feeCurrency** | **string** | The asset ID used to pay the transaction fee, if different from assetId. Maps to FeeParams.feeCurrency. Must be a valid fee token for &#x60;assetId&#x60; (e.g. a TIP-20 gas token for the base asset); an invalid pairing surfaces as 400 INVALID_FEE_CURRENCY_PARAM. | [optional] [default to undefined]|
|**destination** | [**TempoTransferDestination**](TempoTransferDestination.md) |  | [optional] [default to undefined]|
|**amount** | **string** | The amount to transfer, as a numeric string. Required when &#x60;destination&#x60; is set; must be omitted when &#x60;destinations&#x60; is set (each entry carries its own amount instead). | [optional] [default to undefined]|
|**treatAsGrossAmount** | **boolean** | If true, the specified amount includes the fee (fee is deducted from amount). | [optional] [default to undefined]|
|**feeLevel** | **string** | The fee level to use, mutually exclusive with an explicit custom fee. | [optional] [default to undefined]|
|**travelRuleMessage** | **string** | Beta. An opaque travel-rule payload. | [optional] [default to undefined]|
|**travelRuleMessageId** | **string** | Beta. An identifier of a TravelRule message, already sent to the TravelRule provider. | [optional] [default to undefined]|
|**useGasless** | **boolean** | Opt in to fee-payer-sponsored (gasless) transfer. | [optional] [default to undefined]|
|**configurations** | [**TransactionConfigurations**](TransactionConfigurations.md) |  | [optional] [default to undefined]|
|**maxFeePerGas** | **string** | The maximum total fee per gas the sender is willing to pay, in wei. | [optional] [default to undefined]|
|**maxPriorityFeePerGas** | **string** | The maximum priority fee (tip) per gas the sender is willing to pay, in wei. | [optional] [default to undefined]|
|**destinations** | [**Array&lt;TempoTransferDestinationItem&gt;**](TempoTransferDestinationItem.md) | Multiple destinations for a single transfer. Mutually exclusive with &#x60;destination&#x60;. | [optional] [default to undefined]|
|**failOnLowFee** | **boolean** | Beta. If true, fail the transaction rather than sending it with a low fee. | [optional] [default to undefined]|
|**gasLimit** | **string** | The gas limit for the transaction. | [optional] [default to undefined]|
|**replaceTxByHash** | **string** | Beta. The hash of the EVM transaction to replace (RBF). | [optional] [default to undefined]|
|**feePayerAccountId** | **string** | Vault account ID of the fee payer sponsoring this transfer. | [optional] [default to undefined]|
|**nonceStrategy** | **string** | Tempo\&#39;s 2-dimensional nonce strategy: &#x60;SEQUENTIAL&#x60; runs under a single nonce lane (lane 0); &#x60;USER_DEFINED_LANE&#x60; runs in parallel under a specified lane (1–16), and requires &#x60;nonceLane&#x60;; &#x60;EXPIRING&#x60; marks the transaction with an expiry of up to 5 minutes (Tempo-defined) and does not use &#x60;nonceLane&#x60;. | [optional] [default to undefined]|
|**nonceLane** | **number** | The nonce lane to use, 1–16. Required and only meaningful when nonceStrategy is USER_DEFINED_LANE; not used for SEQUENTIAL or EXPIRING. | [optional] [default to undefined]|
|**memo** | **string** | Beta. Tempo TIP-20 memo (max 32 bytes). | [optional] [default to undefined]|


## Enum: CreateTempoTransferRequestFeeLevelEnum


* `Low` (value: `'LOW'`)

* `Medium` (value: `'MEDIUM'`)

* `High` (value: `'HIGH'`)



## Enum: CreateTempoTransferRequestNonceStrategyEnum


* `Sequential` (value: `'SEQUENTIAL'`)

* `UserDefinedLane` (value: `'USER_DEFINED_LANE'`)

* `Expiring` (value: `'EXPIRING'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

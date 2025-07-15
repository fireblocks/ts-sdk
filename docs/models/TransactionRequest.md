# TransactionRequest

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**operation** | [**TransactionOperation**](TransactionOperation.md) |  | [optional] [default to undefined]|
|**note** | **string** | Custom note, not sent to the blockchain, to describe the transaction at your Fireblocks workspace. | [optional] [default to undefined]|
|**externalTxId** | **string** | An optional but highly recommended parameter. Fireblocks will reject future transactions with same ID.  You should set this to a unique ID representing the transaction, to avoid submitting the same transaction twice. This helps with cases where submitting the transaction responds with an error code due to Internet interruptions, but the transaction was actually sent and processed. To validate whether a transaction has been processed, [Find a specific transaction by external transaction ID](https://developers.fireblocks.com/reference/get_transactions-external-tx-id-externaltxid). There is no specific format required for this parameter. | [optional] [default to undefined]|
|**assetId** | **string** | The ID of the asset to transfer, for &#x60;TRANSFER&#x60;, &#x60;MINT&#x60; or &#x60;BURN&#x60; operations. [See the list of supported assets and their IDs on Fireblocks.](https://developers.fireblocks.com/reference/get_supported-assets) | [optional] [default to undefined]|
|**source** | [**SourceTransferPeerPath**](SourceTransferPeerPath.md) |  | [optional] [default to undefined]|
|**destination** | [**DestinationTransferPeerPath**](DestinationTransferPeerPath.md) |  | [optional] [default to undefined]|
|**destinations** | [**Array&lt;TransactionRequestDestination&gt;**](TransactionRequestDestination.md) | For UTXO based blockchains, you can send a single transaction to multiple destinations. | [optional] [default to undefined]|
|**amount** | [**TransactionRequestAmount**](TransactionRequestAmount.md) |  | [optional] [default to undefined]|
|**treatAsGrossAmount** | **boolean** | \&quot;When set to &#x60;true&#x60;, the fee will be deducted from the requested amount.\&quot;  **Note**: This parameter can only be considered if a transaction’s asset is a base asset, such as ETH or MATIC. If the asset can’t be used for transaction fees, like USDC, this parameter is ignored and the fee is deducted from the relevant base asset wallet in the source account. | [optional] [default to undefined]|
|**forceSweep** | **boolean** | For Polkadot, Kusama and Westend transactions only. When set to true, Fireblocks will empty the asset wallet.     **Note:** If set to true when the source account is exactly 1 DOT, the transaction will fail. Any amount more or less than 1 DOT succeeds. This is a Polkadot blockchain limitation. | [optional] [default to undefined]|
|**feeLevel** | **string** | For UTXO or EVM-based blockchains only. Defines the blockchain fee level which will be payed for the transaction. Alternatively, specific fee estimation parameters exist below. | [optional] [default to undefined]|
|**fee** | [**TransactionRequestFee**](TransactionRequestFee.md) |  | [optional] [default to undefined]|
|**priorityFee** | [**TransactionRequestPriorityFee**](TransactionRequestPriorityFee.md) |  | [optional] [default to undefined]|
|**failOnLowFee** | **boolean** | When set to &#x60;true&#x60;, in case the current &#x60;MEDIUM&#x60; fee level is higher than the one specified in the transaction, the transaction will fail to avoid getting stuck with no confirmations. | [optional] [default to undefined]|
|**maxFee** | **string** | The maximum fee (gas price or fee per byte) that should be payed for the transaction.  In case the current value of the requested &#x60;feeLevel&#x60; is higher than this requested maximum fee.  Represented by a numeric string for accurate precision. | [optional] [default to undefined]|
|**maxTotalFee** | **string** | For BTC-based blockchains only. The maximum fee (in the units of the fee-paying asset) that should be paid for the transaction. | [optional] [default to undefined]|
|**gasLimit** | [**TransactionRequestGasLimit**](TransactionRequestGasLimit.md) |  | [optional] [default to undefined]|
|**gasPrice** | [**TransactionRequestGasPrice**](TransactionRequestGasPrice.md) |  | [optional] [default to undefined]|
|**networkFee** | [**TransactionRequestNetworkFee**](TransactionRequestNetworkFee.md) |  | [optional] [default to undefined]|
|**replaceTxByHash** | **string** | For EVM-based blockchains only. In case a transaction is stuck, specify the hash of the stuck transaction to replace it by this transaction with a higher fee, or to replace it with this transaction with a zero fee and drop it from the blockchain. | [optional] [default to undefined]|
|**extraParameters** | **object** | Additional protocol / operation specific key-value parameters:  For UTXO-based blockchain input selection, add the key &#x60;inputsSelection&#x60; with the value set the [input selection structure.](https://developers.fireblocks.com/reference/transaction-objects#inputsselection) The inputs can be retrieved from the [Retrieve Unspent Inputs endpoint.](https://developers.fireblocks.com/reference/get_vault-accounts-vaultaccountid-assetid-unspent-inputs)  For &#x60;RAW&#x60; operations, add the key &#x60;rawMessageData&#x60; with the value set to the [raw message data structure.](https://developers.fireblocks.com/reference/raw-signing-objects#rawmessagedata)  For &#x60;CONTRACT_CALL&#x60; operations, add the key &#x60;contractCallData&#x60; with the value set to the Ethereum smart contract Application Binary Interface (ABI) payload. The Fireblocks [development libraries](https://developers.fireblocks.com/docs/ethereum-development#convenience-libraries) are recommended for building contract call transactions. For **exchange compliance (e.g., Binance) and Travel Rule purposes**, include the key &#x60;piiData&#x60; containing a **custom JSON structure** with Personally Identifiable Information (PII) relevant to the transaction. This data must be fully **encrypted by the sender** before being submitted to the Fireblocks API. The recommended encryption method is **hybrid encryption** using AES-256-GCM for the payload and RSA-OAEP for key exchange, with the recipient exchange’s public key. [development libraries](https://developers.fireblocks.com/docs/a-developers-guide-to-constructing-encrypted-pii-messages-for-binance-via-fireblocks)  | [optional] [default to undefined]|
|**customerRefId** | **string** | The ID for AML providers to associate the owner of funds with transactions. | [optional] [default to undefined]|
|**travelRuleMessage** | [**TravelRuleCreateTransactionRequest**](TravelRuleCreateTransactionRequest.md) |  | [optional] [default to undefined]|
|**autoStaking** | **boolean** | This feature is no longer supported. | [optional] [default to undefined]|
|**networkStaking** | [**TransactionRequestNetworkStaking**](TransactionRequestNetworkStaking.md) |  | [optional] [default to undefined]|
|**cpuStaking** | [**TransactionRequestNetworkStaking**](TransactionRequestNetworkStaking.md) |  | [optional] [default to undefined]|
|**useGasless** | **boolean** | - Override the default gasless configuration by sending true\\false | [optional] [default to undefined]|


## Enum: TransactionRequestFeeLevelEnum


* `Low` (value: `'LOW'`)

* `Medium` (value: `'MEDIUM'`)

* `High` (value: `'HIGH'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

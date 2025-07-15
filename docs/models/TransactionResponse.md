# TransactionResponse

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**id** | **string** | ID of the transaction. | [optional] [default to undefined]|
|**externalTxId** | **string** | Unique transaction ID provided by the user. Fireblocks highly recommends setting an &#x60;externalTxId&#x60; for every transaction created, to avoid submitting the same transaction twice. | [optional] [default to undefined]|
|**status** | **string** | The primary status of the transaction. For details, see [Primary transaction statuses](https://developers.fireblocks.com/reference/primary-transaction-statuses). | [optional] [default to undefined]|
|**subStatus** | **string** | See [Transaction substatuses](https://developers.fireblocks.com/reference/transaction-substatuses) for the list of transaction sub statuses. | [optional] [default to undefined]|
|**txHash** | **string** | The hash of the transaction on the blockchain.  * This parameter exists if at least one of the following conditions is met:       1. The transaction’s source type is &#x60;UNKNOWN&#x60;, &#x60;WHITELISTED_ADDRESS&#x60;, &#x60;NETWORK_CONNECTION&#x60;, &#x60;ONE_TIME_ADDRESS&#x60;, &#x60;FIAT_ACCOUNT&#x60; or &#x60;GAS_STATION&#x60;.       2. The transaction’s source type is &#x60;VAULT&#x60; and the status is either: &#x60;CONFIRMING&#x60;, &#x60;COMPLETED&#x60;, or was in any of these statuses prior to changing to &#x60;FAILED&#x60; or &#x60;REJECTED&#x60;. In some instances, transactions in status &#x60;BROADCASTING&#x60; will include the txHash as well.       3. The transaction’s source type is &#x60;EXCHANGE_ACCOUNT&#x60; and the transaction’s destination type is &#x60;VAULT&#x60;, and the status is either: &#x60;CONFIRMING&#x60;, &#x60;COMPLETED&#x60;, or was in any of these status prior to changing to &#x60;FAILED&#x60;.   * In addition, the following conditions must be met:      1. The asset is a crypto asset (not fiat).      2. The transaction operation is not RAW or &#x60;TYPED_MESSAGE&#x60;. | [optional] [default to undefined]|
|**operation** | [**GetTransactionOperation**](GetTransactionOperation.md) |  | [optional] [default to undefined]|
|**note** | **string** | Custom note, not sent to the blockchain, that describes the transaction at your Fireblocks workspace. | [optional] [default to undefined]|
|**assetId** | **string** | The ID of the asset to transfer, for &#x60;TRANSFER&#x60;, &#x60;MINT&#x60;, &#x60;BURN&#x60;, &#x60;ENABLE_ASSET&#x60;,&#x60;STAKE&#x60; ,&#x60;UNSTAKE&#x60; or &#x60;WITHDRAW&#x60; operations. [See the list of supported assets and their IDs on Fireblocks.](https://developers.fireblocks.com/reference/get_supported-assets) | [optional] [default to undefined]|
|**source** | [**SourceTransferPeerPathResponse**](SourceTransferPeerPathResponse.md) |  | [optional] [default to undefined]|
|**sourceAddress** | **string** | For account based assets only, the source address of the transaction. **Note:** If the status is &#x60;CONFIRMING&#x60;, &#x60;COMPLETED&#x60;, or has been &#x60;CONFIRMING&#x60;; then moved forward to &#x60;FAILED&#x60; or &#x60;REJECTED&#x60;, then this parameter will contain the source address. In any other case, this parameter will be empty. | [optional] [default to undefined]|
|**tag** | **string** | Source address tag for XRP, used as memo for EOS/XLM, or Bank Transfer Description for the fiat provider BLINC (by BCB Group). | [optional] [default to undefined]|
|**destination** | [**DestinationTransferPeerPathResponse**](DestinationTransferPeerPathResponse.md) |  | [optional] [default to undefined]|
|**destinations** | [**Array&lt;TransactionResponseDestination&gt;**](TransactionResponseDestination.md) | The transaction’s destinations. **Note:** In case the transaction is sent to a single destination, the &#x60;destination&#x60; parameter is used instead of this. | [optional] [default to undefined]|
|**destinationAddress** | **string** | Address where the asset were transferred. Notes:   - For [Multi destination transactions](https://support.fireblocks.io/hc/en-us/articles/360018447980-Multi-destination-transactions), this parameter will be empty. In this case, you should refer to the destinations field.   - If the status is &#x60;CONFIRMING&#x60;, &#x60;COMPLETED&#x60;, or has been &#x60;CONFIRMING&#x60;; then moved forward to &#x60;FAILED&#x60; or &#x60;REJECTED&#x60;, then this parameter will contain the destination address. In any other case, this parameter will be empty. | [optional] [default to undefined]|
|**destinationAddressDescription** | **string** | Description of the address. | [optional] [default to undefined]|
|**destinationTag** | **string** | Destination address tag for XRP, used as memo for EOS/XLM, or Bank Transfer Description for the fiat provider BLINC (by BCB Group). | [optional] [default to undefined]|
|**contractCallDecodedData** | [**TransactionResponseContractCallDecodedData**](TransactionResponseContractCallDecodedData.md) |  | [optional] [default to undefined]|
|**amountInfo** | [**AmountInfo**](AmountInfo.md) |  | [optional] [default to undefined]|
|**treatAsGrossAmount** | **boolean** | For transactions initiated via this Fireblocks workspace, when set to &#x60;true&#x60;, the fee is deducted from the requested amount.  **Note**: This parameter can only be considered if a transaction\&#39;s asset is a base asset, such as ETH or MATIC. If the asset can\&#39;t be used for transaction fees, like USDC, this parameter is ignored and the fee is deducted from the relevant base asset wallet in the source account. | [optional] [default to undefined]|
|**feeInfo** | [**FeeInfo**](FeeInfo.md) |  | [optional] [default to undefined]|
|**feeCurrency** | **string** | The asset which was withdrawn to pay the transaction fee, for example ETH for EVM-based blockchains, BTC for Tether Omni. | [optional] [default to undefined]|
|**networkRecords** | [**Array&lt;NetworkRecord&gt;**](NetworkRecord.md) | In case a single transaction resulted with multiple transfers, for example a result of a contract call, then this parameter specifies each transfer that took place on the blockchain. In case of a single transfer transaction, this parameter is empty. | [optional] [default to undefined]|
|**createdAt** | **number** | The transaction’s creation date and time, in unix timestamp. | [optional] [default to undefined]|
|**lastUpdated** | **number** | The transaction’s last update date and time, in unix timestamp. | [optional] [default to undefined]|
|**createdBy** | **string** | User ID of the initiator of the transaction. | [optional] [default to undefined]|
|**signedBy** | **Array&lt;string&gt;** | User ID’s of the signers of the transaction. | [optional] [default to undefined]|
|**rejectedBy** | **string** | User ID of the user that rejected the transaction (in case it was rejected). | [optional] [default to undefined]|
|**authorizationInfo** | [**AuthorizationInfo**](AuthorizationInfo.md) |  | [optional] [default to undefined]|
|**exchangeTxId** | **string** | If the transaction originated from an exchange, this is the ID of this transaction at the exchange. | [optional] [default to undefined]|
|**customerRefId** | **string** | The ID for AML providers to associate the owner of funds with transactions. | [optional] [default to undefined]|
|**amlScreeningResult** | [**AmlScreeningResult**](AmlScreeningResult.md) |  | [optional] [default to undefined]|
|**complianceResults** | [**ComplianceResults**](ComplianceResults.md) |  | [optional] [default to undefined]|
|**extraParameters** | **object** | Additional protocol / operation specific key-value parameters:  For UTXO-based blockchain input selection, add the key &#x60;inputsSelection&#x60; with the value set the [input selection structure.](https://developers.fireblocks.com/reference/transaction-objects#inputsselection) The inputs can be retrieved from the [Retrieve Unspent Inputs endpoint.](https://developers.fireblocks.com/reference/get_vault-accounts-vaultaccountid-assetid-unspent-inputs)  For &#x60;RAW&#x60; operations, add the key &#x60;rawMessageData&#x60; with the value set to the [raw message data structure.](https://developers.fireblocks.com/reference/raw-signing-objects#rawmessagedata)  For &#x60;CONTRACT_CALL&#x60; operations, add the key &#x60;contractCallData&#x60; with the value set to the Ethereum smart contract Application Binary Interface (ABI) payload. The Fireblocks [development libraries](https://developers.fireblocks.com/docs/ethereum-development#convenience-libraries) are recommended for building contract call transactions. For **exchange compliance (e.g., Binance) and Travel Rule purposes**, include the key &#x60;piiData&#x60; containing a **custom JSON structure** with Personally Identifiable Information (PII) relevant to the transaction. This data must be fully **encrypted by the sender** before being submitted to the Fireblocks API. The recommended encryption method is **hybrid encryption** using AES-256-GCM for the payload and RSA-OAEP for key exchange, with the recipient exchange’s public key. [development libraries](https://developers.fireblocks.com/docs/a-developers-guide-to-constructing-encrypted-pii-messages-for-binance-via-fireblocks)  | [optional] [default to undefined]|
|**signedMessages** | [**SignedMessages**](SignedMessages.md) |  | [optional] [default to undefined]|
|**numOfConfirmations** | **number** | The number of confirmations of the transaction. The number will increase until the transaction will be considered completed according to the confirmation policy. | [optional] [default to undefined]|
|**blockInfo** | [**BlockInfo**](BlockInfo.md) |  | [optional] [default to undefined]|
|**index** | **number** | For UTXO based assets this is the vOut, for Ethereum based, this is the index of the event of the contract call.  **Note:** This field is not returned if a transaction uses the &#x60;destinations&#x60; object with more than one value. | [optional] [default to undefined]|
|**rewardInfo** | [**RewardInfo**](RewardInfo.md) |  | [optional] [default to undefined]|
|**systemMessages** | [**SystemMessageInfo**](SystemMessageInfo.md) |  | [optional] [default to undefined]|
|**addressType** | **string** |  | [optional] [default to undefined]|
|**requestedAmount** | **number** | The amount requested by the user. Deprecated - please use the &#x60;amountInfo&#x60; field for accuracy. | [optional] [default to undefined]|
|**amount** | **number** | If the transfer is a withdrawal from an exchange, the actual amount that was requested to be transferred. Otherwise, the requested amount. Deprecated - please use the &#x60;amountInfo&#x60; field for accuracy. | [optional] [default to undefined]|
|**netAmount** | **number** | The net amount of the transaction, after fee deduction. Deprecated - please use the &#x60;amountInfo&#x60; field for accuracy. | [optional] [default to undefined]|
|**amountUSD** | **number** | The USD value of the requested amount. Deprecated - please use the &#x60;amountInfo&#x60; field for accuracy. | [optional] [default to undefined]|
|**serviceFee** | **number** | The total fee deducted by the exchange from the actual requested amount (&#x60;serviceFee&#x60; &#x3D; &#x60;amount&#x60; - &#x60;netAmount&#x60;). Deprecated - please use the &#x60;feeInfo&#x60; field for accuracy. | [optional] [default to undefined]|
|**fee** | **number** | Deprecated - please use the &#x60;feeInfo&#x60; field for accuracy. | [optional] [default to undefined]|
|**networkFee** | **number** | The fee paid to the network. Deprecated - please use the &#x60;feeInfo&#x60; field for accuracy. | [optional] [default to undefined]|
|**errorDescription** | **string** | The transaction\&#39;s revert reason. This field will be returned when  &#x60;subStatus&#x60; &#x3D;  \&#39;SMART_CONTRACT_EXECUTION_FAILED\&#39;. | [optional] [default to undefined]|


## Enum: TransactionResponseAddressTypeEnum


* `Empty` (value: `''`)

* `Whitelisted` (value: `'WHITELISTED'`)

* `OneTime` (value: `'ONE_TIME'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

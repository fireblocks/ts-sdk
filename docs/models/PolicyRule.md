# PolicyRule

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**type** | **string** | Policy rule type | [default to undefined]|
|**action** | **string** | Defines what occurs when a transaction meets the rule\&#39;s criteria * ALLOW - The transaction goes through and can be signed without requiring additional approvals * BLOCK - The transaction is automatically blocked * 2-TIER - Only these users or user groups can approve             If any of them reject the transaction before the required approval threshold is met, the transaction doesn\&#39;t go through            The list of entities are set is \&quot;authorizationGroups\&quot; field  | [default to undefined]|
|**asset** | **string** | Defines the type of asset being transacted, options are * \&quot;*\&quot; - All assets * Specific asset  | [default to undefined]|
|**amountCurrency** | **string** | * USD - Limits the amount of any asset users can transfer based on the USD equivalent of the asset. * EUR - Limits the amount of any asset users can transfer based on the EURO equivalent of the asset. * NATIVE - Limits the amount of an asset a user can transfer when using a specific asset.  | [default to undefined]|
|**amountScope** | **string** | * SINGLE_TX - limit applies to a single transaction * TIMEFRAME - limit applies to all transactions within the defined time period  | [default to undefined]|
|**amount** | [**PolicyRuleAmount**](PolicyRuleAmount.md) |  | [default to undefined]|
|**periodSec** | **number** | Time period in seconds applied by the amountScope field to accumulate transferred amounts in transactions that match the rule, until the total exceeds the value you specify under Minimum. When the specified amount is reached within that period, whether by one or many transactions, further transactions in that period either fail or require more approvals.  | [default to undefined]|
|**operator** | **string** | (deprecated - replaced by \&quot;operators\&quot;)  | Defines users who can initiate the type of transaction to which the rule applies. options are * \&quot;*\&quot; - All users are allowed * Specific User id | [optional] [default to undefined]|
|**operators** | [**PolicyRuleOperators**](PolicyRuleOperators.md) |  | [optional] [default to undefined]|
|**transactionType** | **string** | Defines the type of transaction to which the rule applies.   * TRANSFER - Default. Transfers funds from one account to another   * CONTRACT_CALL - Calls a smart contract, mainly for DeFi operations.   * APPROVE - Allows a smart contract to withdraw from a designated wallet.   * MINT - Perform a mint operation (increase supply) on a supported token   * BURN - Perform a burn operation (reduce supply) on a supported token   * SUPPLY - Use for DeFi to lend assets   * REDEEM - Use for DeFi to get lending back   * STAKE - Allows you to allocate and lock certain assets for earning staking rewards.   * RAW - An off-chain message with no predefined format, use it to sign any message with your private key.   * TYPED_MESSAGE - An off-chain message type that follows a predefined format, used to sign specific messages that are not actual transactions.   * PROGRAM_CALL - In Solana refers to invoking on-chain programs (smart contracts) to execute transactions and interact with the blockchain.  | [optional] [default to undefined]|
|**designatedSigner** | **string** | (deprecated - replaced by \&quot;designatedSigners\&quot;) Id representing the user who signs transactions that match a specific rule | [optional] [default to undefined]|
|**designatedSigners** | [**PolicyRuleDesignatedSigners**](PolicyRuleDesignatedSigners.md) |  | [optional] [default to undefined]|
|**srcType** | [**PolicySrcOrDestType**](PolicySrcOrDestType.md) | (deprecated - replaced by &quot;src&quot;) source account type | [optional] [default to undefined]|
|**srcSubType** | [**PolicySrcOrDestSubType**](PolicySrcOrDestSubType.md) | (deprecated - replaced by &quot;src&quot;) source sub account type | [optional] [default to undefined]|
|**srcId** | **string** | (deprecated - replaced by &quot;src&quot;) source account id | [optional] [default to undefined]|
|**src** | [**PolicyRuleSrc**](PolicyRuleSrc.md) |  | [optional] [default to undefined]|
|**dstType** | [**PolicySrcOrDestType**](PolicySrcOrDestType.md) | (deprecated - replaced by &quot;dst&quot;) destination account type | [optional] [default to undefined]|
|**dstSubType** | [**PolicySrcOrDestSubType**](PolicySrcOrDestSubType.md) | (deprecated - replaced by &quot;dst&quot;) destination sub account type | [optional] [default to undefined]|
|**dstId** | **string** | (deprecated - replaced by &quot;dst&quot;) destination account id | [optional] [default to undefined]|
|**dst** | [**PolicyRuleDst**](PolicyRuleDst.md) |  | [optional] [default to undefined]|
|**dstAddressType** | **string** | Defines whether the destination to which you are sending funds must be whitelisted, to allow one-time transfers to non-whitelisted external addresses, or both. By default, you can only transfer to an external address after it’s whitelisted.   * WHITELISTED - Can only be sent to whitelisted addresses.   * ONE_TIME - Can only be sent to non-whitelisted external addresses.   * \&quot;*\&quot; - can be sent to whitelisted addresses or non-whitelisted external  | [optional] [default to undefined]|
|**authorizers** | **Array&lt;string&gt;** | (deprecated - replaced by \&quot;authorizationGroups\&quot;) Allowed entities which can approves a transaction | [optional] [default to undefined]|
|**authorizersCount** | **number** | (deprecated - replaced by \&quot;authorizationGroups\&quot;) Min amount of entities which are needed to approve a transaction | [optional] [default to undefined]|
|**authorizationGroups** | [**PolicyRuleAuthorizationGroups**](PolicyRuleAuthorizationGroups.md) |  | [optional] [default to undefined]|
|**amountAggregation** | [**PolicyRuleAmountAggregation**](PolicyRuleAmountAggregation.md) |  | [optional] [default to undefined]|
|**rawMessageSigning** | [**PolicyRuleRawMessageSigning**](PolicyRuleRawMessageSigning.md) |  | [optional] [default to undefined]|
|**applyForApprove** | **boolean** | Applying this rule over APPROVE type transactions (can only be enabled when rule\&#39;s transaction type is TRANSFER) | [optional] [default to undefined]|
|**applyForTypedMessage** | **boolean** | Applying this rule over TYPED_MESSAGE type transactions (can only be enabled when rule\&#39;s transaction type is CONTRACT_CALL) | [optional] [default to undefined]|
|**externalDescriptor** | **string** | A unique id identifying the rule | [optional] [default to undefined]|


## Enum: PolicyRuleTypeEnum


* `Transfer` (value: `'TRANSFER'`)



## Enum: PolicyRuleActionEnum


* `Allow` (value: `'ALLOW'`)

* `Block` (value: `'BLOCK'`)

* `_2Tier` (value: `'2-TIER'`)



## Enum: PolicyRuleAmountCurrencyEnum


* `Usd` (value: `'USD'`)

* `Eur` (value: `'EUR'`)

* `Native` (value: `'NATIVE'`)



## Enum: PolicyRuleAmountScopeEnum


* `SingleTx` (value: `'SINGLE_TX'`)

* `Timeframe` (value: `'TIMEFRAME'`)



## Enum: PolicyRuleTransactionTypeEnum


* `Transfer` (value: `'TRANSFER'`)

* `ContractCall` (value: `'CONTRACT_CALL'`)

* `Approve` (value: `'APPROVE'`)

* `Mint` (value: `'MINT'`)

* `Burn` (value: `'BURN'`)

* `Supply` (value: `'SUPPLY'`)

* `Redeem` (value: `'REDEEM'`)

* `Stake` (value: `'STAKE'`)

* `Raw` (value: `'RAW'`)

* `TypedMessage` (value: `'TYPED_MESSAGE'`)

* `ProgramCall` (value: `'PROGRAM_CALL'`)



## Enum: PolicyRuleDstAddressTypeEnum


* `Whitelisted` (value: `'WHITELISTED'`)

* `OneTime` (value: `'ONE_TIME'`)

* `Star` (value: `'*'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# UtxoOutput

## Properties

|Name | Type | Description | Notes|
|------------ | ------------- | ------------- | -------------|
|**input** | [**UtxoInput2**](UtxoInput2.md) |  | [default to undefined]|
|**utxoId** | **string** | The unique UTXO identifier | [default to undefined]|
|**address** | **string** | The address holding this UTXO | [default to undefined]|
|**amount** | **string** | The UTXO amount in the asset\&#39;s native unit | [default to undefined]|
|**status** | **string** | The UTXO status | [default to undefined]|
|**confirmations** | **number** | Number of confirmations | [optional] [default to undefined]|
|**isChange** | **boolean** | Whether this is a change output | [optional] [default to undefined]|
|**isCoinbase** | **boolean** | Whether this is a coinbase output | [optional] [default to undefined]|
|**fbTxId** | **string** | The Fireblocks transaction ID that created this UTXO | [optional] [default to undefined]|
|**createdByHash** | **string** | The on-chain block hash where this UTXO was created | [optional] [default to undefined]|
|**spentByFbTxId** | **Array&lt;string&gt;** | Fireblocks transaction IDs that selected/spent this UTXO | [optional] [default to undefined]|
|**createdByHeight** | **number** | The block height at which this UTXO was created | [optional] [default to undefined]|
|**createdAt** | **string** | The timestamp when this UTXO was created | [optional] [default to undefined]|
|**updatedAt** | **string** | The timestamp when this UTXO was last updated | [optional] [default to undefined]|
|**labels** | **Array&lt;string&gt;** | Labels attached to this UTXO | [optional] [default to undefined]|


## Enum: UtxoOutputStatusEnum


* `Pending` (value: `'PENDING'`)

* `Available` (value: `'AVAILABLE'`)

* `Frozen` (value: `'FROZEN'`)

* `Selected` (value: `'SELECTED'`)





[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

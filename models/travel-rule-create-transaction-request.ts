/* tslint:disable */
/* eslint-disable */
/**
 * Fireblocks API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.6.2
 * Contact: support@fireblocks.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { TravelRuleOwnershipProof } from './travel-rule-ownership-proof';
// May contain unused imports in some cases
// @ts-ignore
import { TravelRulePiiIVMS } from './travel-rule-pii-ivms';
// May contain unused imports in some cases
// @ts-ignore
import { TravelRuleTransactionBlockchainInfo } from './travel-rule-transaction-blockchain-info';

/**
 * 
 * @export
 * @interface TravelRuleCreateTransactionRequest
 */
export interface TravelRuleCreateTransactionRequest {
    /**
     * 
     * @type {TravelRulePiiIVMS}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'originator': TravelRulePiiIVMS;
    /**
     * 
     * @type {TravelRulePiiIVMS}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'beneficiary': TravelRulePiiIVMS;
    /**
     * The Decentralized Identifier (DID) of the exchange (VASP) that is sending the virtual assets. This identifier is unique to the exchange and is generated when the exchange\'s account is  created in the Notabene network.
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'originatorVASPdid'?: string;
    /**
     * The Decentralized Identifier (DID) of the exchange (VASP) that is receiving the virtual assets. This identifier is unique to the exchange and is generated when the exchange\'s account is  created in the Notabene network.
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'beneficiaryVASPdid'?: string;
    /**
     * The name of the VASP acting as the transaction originator.
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'originatorVASPname'?: string;
    /**
     * The name of the VASP acting as the transaction beneficiary.
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'beneficiaryVASPname'?: string;
    /**
     * The website of the VASP acting as the transaction beneficiary.
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'beneficiaryVASPwebsite'?: string;
    /**
     * 
     * @type {TravelRuleTransactionBlockchainInfo}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'transactionBlockchainInfo'?: TravelRuleTransactionBlockchainInfo;
    /**
     * Encrypted data related to the transaction.
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'encrypted'?: string;
    /**
     * The protocol used to perform the travel rule.
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'protocol'?: TravelRuleCreateTransactionRequestProtocolEnum;
    /**
     * The target protocol for GTR (Global Travel Rule) transfers.
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'targetProtocol'?: string;
    /**
     * Whether to skip validation of beneficiary data.
     * @type {boolean}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'skipBeneficiaryDataValidation'?: boolean;
    /**
     * Whether to check if the transaction complies with the travel rule in the beneficiary VASP\'s jurisdiction.
     * @type {boolean}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'travelRuleBehavior'?: boolean;
    /**
     * A reference ID related to the originator of the transaction.
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'originatorRef'?: string;
    /**
     * A reference ID related to the beneficiary of the transaction.
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'beneficiaryRef'?: string;
    /**
     * A reference ID related to the travel rule behavior.
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'travelRuleBehaviorRef'?: string;
    /**
     * 
     * @type {TravelRuleOwnershipProof}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'originatorProof'?: TravelRuleOwnershipProof;
    /**
     * 
     * @type {TravelRuleOwnershipProof}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'beneficiaryProof'?: TravelRuleOwnershipProof;
    /**
     * The Decentralized Identifier (DID) of the person at the receiving exchange (VASP).  This identifier is generated when the customer is registered in the Notabene network,  or automatically created based on the `beneficiaryRef`.  - If neither `beneficiaryRef` nor `beneficiaryDid` is provided in the `txCreate` payload,    a new random DID is generated for every transaction.
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'beneficiaryDid'?: string;
    /**
     * The Decentralized Identifier (DID) of the person at the exchange (VASP) who is requesting the withdrawal. This identifier is generated when the customer is registered in the Notabene network or automatically created based on the `originatorRef`.  - If neither `originatorRef` nor `originatorDid` is provided in the `txCreate` payload,    a new random DID is generated for every transaction.
     * @type {string}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'originatorDid'?: string;
    /**
     * Indicates if the transaction involves a non-custodial wallet.
     * @type {boolean}
     * @memberof TravelRuleCreateTransactionRequest
     */
    'isNonCustodial'?: boolean;
}

export const TravelRuleCreateTransactionRequestProtocolEnum = {
    Ivms101: 'IVMS101',
    TrLight: 'TRLight',
    Trp: 'TRP',
    OpenVasp: 'OpenVASP',
    Gtr: 'GTR'
} as const;

export type TravelRuleCreateTransactionRequestProtocolEnum = typeof TravelRuleCreateTransactionRequestProtocolEnum[keyof typeof TravelRuleCreateTransactionRequestProtocolEnum];



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
import { TravelRuleIssuers } from './travel-rule-issuers';

/**
 * 
 * @export
 * @interface TravelRuleVASP
 */
export interface TravelRuleVASP {
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'did': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'verificationStatus': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'addressLine1': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'addressLine2': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'city': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'country': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'emailDomains': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'website': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'logo': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'legalStructure': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'legalName': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'yearFounded': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'incorporationCountry': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'isRegulated': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'otherNames': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'identificationType': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'identificationCountry': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'businessNumber': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'regulatoryAuthorities': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'jurisdictions': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'street': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'number': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'unit': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'postCode': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'state': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'certificates': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'travelRule_OPENVASP': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'travelRule_SYGNA': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'travelRule_TRISA': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'travelRule_TRLIGHT': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'travelRule_EMAIL': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'travelRule_TRP': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'travelRule_SHYFT': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'travelRule_USTRAVELRULEWG': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'createdAt': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'createdBy': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'updatedAt': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'updatedBy': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'lastSentDate': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'lastReceivedDate': string;
    /**
     * 
     * @type {string}
     * @memberof TravelRuleVASP
     */
    'documents': string;
    /**
     * 
     * @type {boolean}
     * @memberof TravelRuleVASP
     */
    'hasAdmin': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TravelRuleVASP
     */
    'isNotifiable': boolean;
    /**
     * 
     * @type {TravelRuleIssuers}
     * @memberof TravelRuleVASP
     */
    'issuers': TravelRuleIssuers;
}

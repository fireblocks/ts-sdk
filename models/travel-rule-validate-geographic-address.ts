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



/**
 * 
 * @export
 * @interface TravelRuleValidateGeographicAddress
 */
export interface TravelRuleValidateGeographicAddress {
    /**
     * Name of a street or thoroughfare
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'streetName'?: string;
    /**
     * Name of a built-up area, with defined boundaries, and a local government
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'townName'?: string;
    /**
     * Nation with its own government (ISO-3166 Alpha-2 country code)
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'country'?: string;
    /**
     * Number that identifies the position of a building on a street
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'buildingNumber'?: string;
    /**
     * Identifier consisting of a group of letters and/or numbers added to a postal address to assist the sorting of mail
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'postCode'?: string;
    /**
     * Specifies the type of address. Acceptable values are: - \'HOME\': Residential, the home address - \'BIZZ\': Business, the business address - \'GEOG\': Geographic, an unspecified physical (geographical) address
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'addressType'?: TravelRuleValidateGeographicAddressAddressTypeEnum;
    /**
     * Identification of a division of a large organisation or building
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'department'?: string;
    /**
     * Identification of a sub-division of a large organisation or building
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'subDepartment'?: string;
    /**
     * Name of the building or house
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'buildingName'?: string;
    /**
     * Floor or storey within a building
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'floor'?: string;
    /**
     * Numbered box in a post office
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'postBox'?: string;
    /**
     * Building room number
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'room'?: string;
    /**
     * Specific location name within the town
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'townLocationName'?: string;
    /**
     * Identifies a subdivision within a country subdivision
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'districtName'?: string;
    /**
     * Identifies a subdivision of a country such as state, region, or province
     * @type {string}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'countrySubDivision'?: string;
    /**
     * Information that locates and identifies a specific address, presented in free format text
     * @type {Array<string>}
     * @memberof TravelRuleValidateGeographicAddress
     */
    'addressLine'?: Array<string>;
}

export const TravelRuleValidateGeographicAddressAddressTypeEnum = {
    Home: 'HOME',
    Bizz: 'BIZZ',
    Geog: 'GEOG'
} as const;

export type TravelRuleValidateGeographicAddressAddressTypeEnum = typeof TravelRuleValidateGeographicAddressAddressTypeEnum[keyof typeof TravelRuleValidateGeographicAddressAddressTypeEnum];



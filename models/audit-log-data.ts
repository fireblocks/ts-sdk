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
 * @interface AuditLogData
 */
export interface AuditLogData {
    /**
     * The unique identifier of the audit log
     * @type {string}
     * @memberof AuditLogData
     */
    'id'?: string;
    /**
     * The timestamp of the audit log
     * @type {number}
     * @memberof AuditLogData
     */
    'timestamp'?: number;
    /**
     * The timestamp of the audit log creation
     * @type {number}
     * @memberof AuditLogData
     */
    'createdAt'?: number;
    /**
     * The user who performed the action
     * @type {string}
     * @memberof AuditLogData
     */
    'user'?: string;
    /**
     * The subject of the action
     * @type {string}
     * @memberof AuditLogData
     */
    'subject'?: string;
    /**
     * The event that was performed
     * @type {string}
     * @memberof AuditLogData
     */
    'event'?: string;
    /**
     * The tenant ID of the audit log
     * @type {string}
     * @memberof AuditLogData
     */
    'tenantId'?: string;
    /**
     * The user ID of the audit log
     * @type {string}
     * @memberof AuditLogData
     */
    'userId'?: string;
}


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
import { NotificationAttempt } from './notification-attempt';
// May contain unused imports in some cases
// @ts-ignore
import { NotificationStatus } from './notification-status';
// May contain unused imports in some cases
// @ts-ignore
import { WebhookEvent } from './webhook-event';

/**
 * 
 * @export
 * @interface NotificationWithData
 */
export interface NotificationWithData {
    /**
     * 
     * @type {string}
     * @memberof NotificationWithData
     */
    'id': string;
    /**
     * The creation date of the notification in milliseconds
     * @type {number}
     * @memberof NotificationWithData
     */
    'createdAt': number;
    /**
     * The date when the notification was updated in milliseconds
     * @type {number}
     * @memberof NotificationWithData
     */
    'updatedAt': number;
    /**
     * 
     * @type {NotificationStatus}
     * @memberof NotificationWithData
     */
    'status': NotificationStatus;
    /**
     * 
     * @type {WebhookEvent}
     * @memberof NotificationWithData
     */
    'eventType': WebhookEvent;
    /**
     * The attempts related to Notification
     * @type {Array<NotificationAttempt>}
     * @memberof NotificationWithData
     */
    'attempts': Array<NotificationAttempt>;
    /**
     * The resource id of the event which the Notification is listen to
     * @type {string}
     * @memberof NotificationWithData
     */
    'resourceId'?: string | null;
    /**
     * notification data
     * @type {object}
     * @memberof NotificationWithData
     */
    'data'?: object;
}




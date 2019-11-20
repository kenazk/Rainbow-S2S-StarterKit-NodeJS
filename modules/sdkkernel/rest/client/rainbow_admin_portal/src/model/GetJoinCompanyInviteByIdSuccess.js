/**
 * Rainbow admin portal
 * # Rainbow administrator portal API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow management portal system. Services are used to manage OT Rainbow system entities  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.82.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-beta3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowAdminPortal) {
      root.RainbowAdminPortal = {};
    }
    root.RainbowAdminPortal.GetJoinCompanyInviteByIdSuccess = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GetJoinCompanyInviteByIdSuccess model module.
   * @module model/GetJoinCompanyInviteByIdSuccess
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>GetJoinCompanyInviteByIdSuccess</code>.
   * @alias module:model/GetJoinCompanyInviteByIdSuccess
   * @class
   * @param id {String} Join company invitation unique Id
   * @param companyId {String} Id of the company for which the join company invitation is
   * @param companyName {String} Name of the company for which the join company invitation is (not updated if company name change after invitation creation)
   * @param invitedUserId {String} Unique Id of the Rainbow user invited to join the company (only if invited user already exists in Rainbow)
   * @param invitedUserLoginEmail {String} Email of the Rainbow user invited to join the company
   * @param invitingAdminId {String} Inviting company admin unique Rainbow Id
   * @param invitingAdminLoginEmail {String} Inviting company admin loginEmail
   * @param invitationDate {Date} Date the join company invitation was created
   * @param lastNotificationDate {Date} Date when the last email notification was sent
   * @param requestedNotificationLanguage {String} Requested notification language (used to re-send email request in that language)
   * @param status {String} Join company invitation status: one of `pending`, `accepted`, `auto-accepted`, `declined`, `canceled`, `failed`
   * @param acceptationDate {Date} Date when the join company invitation has been accepted by the user (if applicable)
   * @param declinationDate {Date} Date when the join company invitation has been declined by the user (if applicable)
   */
  var exports = function(id, companyId, companyName, invitedUserId, invitedUserLoginEmail, invitingAdminId, invitingAdminLoginEmail, invitationDate, lastNotificationDate, requestedNotificationLanguage, status, acceptationDate, declinationDate) {
    var _this = this;

    _this['id'] = id;
    _this['companyId'] = companyId;
    _this['companyName'] = companyName;
    _this['invitedUserId'] = invitedUserId;
    _this['invitedUserLoginEmail'] = invitedUserLoginEmail;
    _this['invitingAdminId'] = invitingAdminId;
    _this['invitingAdminLoginEmail'] = invitingAdminLoginEmail;
    _this['invitationDate'] = invitationDate;
    _this['lastNotificationDate'] = lastNotificationDate;
    _this['requestedNotificationLanguage'] = requestedNotificationLanguage;
    _this['status'] = status;
    _this['acceptationDate'] = acceptationDate;
    _this['declinationDate'] = declinationDate;
  };

  /**
   * Constructs a <code>GetJoinCompanyInviteByIdSuccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetJoinCompanyInviteByIdSuccess} obj Optional instance to populate.
   * @return {module:model/GetJoinCompanyInviteByIdSuccess} The populated <code>GetJoinCompanyInviteByIdSuccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('companyId')) {
        obj['companyId'] = ApiClient.convertToType(data['companyId'], 'String');
      }
      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('invitedUserId')) {
        obj['invitedUserId'] = ApiClient.convertToType(data['invitedUserId'], 'String');
      }
      if (data.hasOwnProperty('invitedUserLoginEmail')) {
        obj['invitedUserLoginEmail'] = ApiClient.convertToType(data['invitedUserLoginEmail'], 'String');
      }
      if (data.hasOwnProperty('invitingAdminId')) {
        obj['invitingAdminId'] = ApiClient.convertToType(data['invitingAdminId'], 'String');
      }
      if (data.hasOwnProperty('invitingAdminLoginEmail')) {
        obj['invitingAdminLoginEmail'] = ApiClient.convertToType(data['invitingAdminLoginEmail'], 'String');
      }
      if (data.hasOwnProperty('invitationDate')) {
        obj['invitationDate'] = ApiClient.convertToType(data['invitationDate'], 'Date');
      }
      if (data.hasOwnProperty('lastNotificationDate')) {
        obj['lastNotificationDate'] = ApiClient.convertToType(data['lastNotificationDate'], 'Date');
      }
      if (data.hasOwnProperty('requestedNotificationLanguage')) {
        obj['requestedNotificationLanguage'] = ApiClient.convertToType(data['requestedNotificationLanguage'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('acceptationDate')) {
        obj['acceptationDate'] = ApiClient.convertToType(data['acceptationDate'], 'Date');
      }
      if (data.hasOwnProperty('declinationDate')) {
        obj['declinationDate'] = ApiClient.convertToType(data['declinationDate'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Join company invitation unique Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Id of the company for which the join company invitation is
   * @member {String} companyId
   */
  exports.prototype['companyId'] = undefined;
  /**
   * Name of the company for which the join company invitation is (not updated if company name change after invitation creation)
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * Unique Id of the Rainbow user invited to join the company (only if invited user already exists in Rainbow)
   * @member {String} invitedUserId
   */
  exports.prototype['invitedUserId'] = undefined;
  /**
   * Email of the Rainbow user invited to join the company
   * @member {String} invitedUserLoginEmail
   */
  exports.prototype['invitedUserLoginEmail'] = undefined;
  /**
   * Inviting company admin unique Rainbow Id
   * @member {String} invitingAdminId
   */
  exports.prototype['invitingAdminId'] = undefined;
  /**
   * Inviting company admin loginEmail
   * @member {String} invitingAdminLoginEmail
   */
  exports.prototype['invitingAdminLoginEmail'] = undefined;
  /**
   * Date the join company invitation was created
   * @member {Date} invitationDate
   */
  exports.prototype['invitationDate'] = undefined;
  /**
   * Date when the last email notification was sent
   * @member {Date} lastNotificationDate
   */
  exports.prototype['lastNotificationDate'] = undefined;
  /**
   * Requested notification language (used to re-send email request in that language)
   * @member {String} requestedNotificationLanguage
   */
  exports.prototype['requestedNotificationLanguage'] = undefined;
  /**
   * Join company invitation status: one of `pending`, `accepted`, `auto-accepted`, `declined`, `canceled`, `failed`
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * Date when the join company invitation has been accepted by the user (if applicable)
   * @member {Date} acceptationDate
   */
  exports.prototype['acceptationDate'] = undefined;
  /**
   * Date when the join company invitation has been declined by the user (if applicable)
   * @member {Date} declinationDate
   */
  exports.prototype['declinationDate'] = undefined;



  return exports;
}));


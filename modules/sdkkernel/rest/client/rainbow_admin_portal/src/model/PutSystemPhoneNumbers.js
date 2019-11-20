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
    root.RainbowAdminPortal.PutSystemPhoneNumbers = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PutSystemPhoneNumbers model module.
   * @module model/PutSystemPhoneNumbers
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>PutSystemPhoneNumbers</code>.
   * @alias module:model/PutSystemPhoneNumbers
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PutSystemPhoneNumbers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutSystemPhoneNumbers} obj Optional instance to populate.
   * @return {module:model/PutSystemPhoneNumbers} The populated <code>PutSystemPhoneNumbers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('isMonitored')) {
        obj['isMonitored'] = ApiClient.convertToType(data['isMonitored'], 'Boolean');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('internalNumber')) {
        obj['internalNumber'] = ApiClient.convertToType(data['internalNumber'], 'String');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('deviceType')) {
        obj['deviceType'] = ApiClient.convertToType(data['deviceType'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('deviceName')) {
        obj['deviceName'] = ApiClient.convertToType(data['deviceName'], 'String');
      }
    }
    return obj;
  }

  /**
   * Phone number country (ISO 3166-1 alpha3 format)
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * Specifies if the PhoneNumber is monitored by agent (i.e. telephony events are notified to Rainbow user through XMPP)
   * @member {Boolean} isMonitored
   */
  exports.prototype['isMonitored'] = undefined;
  /**
   * Rainbow userId to which is linked the phoneNumber
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * Internal phone number. Usable within a PBX group. By default, it is equal to `shortNumber`.    `internalNumber` must be unique in the whole system group to which the related PhoneNumber belong (an error 409 is raised if someone tries to update internalNumber to a number already used by another PhoneNumber in the same system group).
   * @member {String} internalNumber
   */
  exports.prototype['internalNumber'] = undefined;
  /**
   * Raw phone number (DDI) _Note:_ If numberE164 can't be computed from number and country fields, an error 400 is returned (ex: wrong phone number, phone number not matching country code, ...)
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * Phone number type
   * @member {module:model/PutSystemPhoneNumbers.TypeEnum} type
   * @default 'work'
   */
  exports.prototype['type'] = 'work';
  /**
   * Phone number device type
   * @member {module:model/PutSystemPhoneNumbers.DeviceTypeEnum} deviceType
   * @default 'landline'
   */
  exports.prototype['deviceType'] = 'landline';
  /**
   * firstname
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * lastname
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * device name
   * @member {String} deviceName
   */
  exports.prototype['deviceName'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "home"
     * @const
     */
    "home": "home",
    /**
     * value: "work"
     * @const
     */
    "work": "work",
    /**
     * value: "other"
     * @const
     */
    "other": "other"  };

  /**
   * Allowed values for the <code>deviceType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DeviceTypeEnum = {
    /**
     * value: "landline"
     * @const
     */
    "landline": "landline",
    /**
     * value: "mobile"
     * @const
     */
    "mobile": "mobile",
    /**
     * value: "fax"
     * @const
     */
    "fax": "fax",
    /**
     * value: "other"
     * @const
     */
    "other": "other"  };


  return exports;
}));


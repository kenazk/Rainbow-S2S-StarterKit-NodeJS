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
    root.RainbowAdminPortal.PutSiteIceServers = factory(root.RainbowAdminPortal.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PutSiteIceServers model module.
   * @module model/PutSiteIceServers
   * @version 1.82.0
   */

  /**
   * Constructs a new <code>PutSiteIceServers</code>.
   * @alias module:model/PutSiteIceServers
   * @class
   * @param urls {String} ICE server url
   */
  var exports = function(urls) {
    var _this = this;

    _this['urls'] = urls;
  };

  /**
   * Constructs a <code>PutSiteIceServers</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PutSiteIceServers} obj Optional instance to populate.
   * @return {module:model/PutSiteIceServers} The populated <code>PutSiteIceServers</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('urls')) {
        obj['urls'] = ApiClient.convertToType(data['urls'], 'String');
      }
      if (data.hasOwnProperty('username')) {
        obj['username'] = ApiClient.convertToType(data['username'], 'String');
      }
      if (data.hasOwnProperty('credential')) {
        obj['credential'] = ApiClient.convertToType(data['credential'], 'String');
      }
      if (data.hasOwnProperty('adminUrl')) {
        obj['adminUrl'] = ApiClient.convertToType(data['adminUrl'], 'String');
      }
      if (data.hasOwnProperty('adminLogin')) {
        obj['adminLogin'] = ApiClient.convertToType(data['adminLogin'], 'String');
      }
      if (data.hasOwnProperty('adminPassword')) {
        obj['adminPassword'] = ApiClient.convertToType(data['adminPassword'], 'String');
      }
      if (data.hasOwnProperty('dc')) {
        obj['dc'] = ApiClient.convertToType(data['dc'], 'String');
      }
    }
    return obj;
  }

  /**
   * ICE server url
   * @member {String} urls
   */
  exports.prototype['urls'] = undefined;
  /**
   * ICE server user login
   * @member {String} username
   */
  exports.prototype['username'] = undefined;
  /**
   * ICE server user password
   * @member {String} credential
   */
  exports.prototype['credential'] = undefined;
  /**
   * Admin URL for COTURN management
   * @member {String} adminUrl
   */
  exports.prototype['adminUrl'] = undefined;
  /**
   * Admin login for COTURN access
   * @member {String} adminLogin
   */
  exports.prototype['adminLogin'] = undefined;
  /**
   * Admin password for COTURN access
   * @member {String} adminPassword
   */
  exports.prototype['adminPassword'] = undefined;
  /**
   * Data Center identifier where the iceServer is hosted
   * @member {String} dc
   */
  exports.prototype['dc'] = undefined;



  return exports;
}));


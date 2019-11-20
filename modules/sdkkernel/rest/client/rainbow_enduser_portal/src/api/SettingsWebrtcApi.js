/**
 * Rainbow Enduser portal
 * # Rainbow end user portal API guide  ## Preamble  ### Introduction  This guide describes list of API services that are provided by OT Rainbow End user portal. This portal is dedicated to end user features.  ### Protocol  REST interface is used for sending/receiving OT rainbow API messages. HTTP requests GET, DELETE, POST, UPDATE are used. Standard HTTP responses are used to provide requested information or error status. There is no session notion in OT Rainbow system, so requests could be issued according stateless model, without transport conservation between them. Additional data could be provided in message body. JSON is used as a main format for data encoding in message body part. Each request is started with the following pattern /{module}/{version}/ where {module} is a portal module name to address and {version} is a version of used API, par example, “v1.0”.  ### Security considerations  Each request should contain some credential information to authenticate itself. Standard HTTP authentication with basic/bearer modes is used. JSON Web Token mechanism is used to provide authentication information. JWT has a expire timeout that is controlled by OT Rainbow portal to prevent very long token usage. Also authentication with application token is used. The token must be provided in the request HTTP header, using a custom header: APIKey. At server side, token is verified, and if it doesn’t match, 403 Not Allowed response is sent. TLS is used as a transport protocol to support message exchanges between OT Rainbow portal and an application.  
 *
 * OpenAPI spec version: 1.84.0
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
    define(['ApiClient', 'model/GetApiRainbowEnduserV10SettingsIceserversSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GetApiRainbowEnduserV10SettingsIceserversSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.SettingsWebrtcApi = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.GetApiRainbowEnduserV10SettingsIceserversSuccess);
  }
}(this, function(ApiClient, GetApiRainbowEnduserV10SettingsIceserversSuccess) {
  'use strict';

  /**
   * SettingsWebrtc service.
   * @module api/SettingsWebrtcApi
   * @version 1.84.0
   */

  /**
   * Constructs a new SettingsWebrtcApi. 
   * @alias module:api/SettingsWebrtcApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get available stun, turn servers
     * &lt;b&gt;⚠ Retrieving the ICE servers should now be performed from the geolocation portal. The url to request is GET /api/rainbow/geolocation/v1.0/settings/iceservers.&lt;/b&gt;
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetApiRainbowEnduserV10SettingsIceserversSuccess} and HTTP response
     */
    this.getApiRainbowEnduserV10SettingsIceserversWithHttpInfo = function(accept) {
      var postBody = null;

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getApiRainbowEnduserV10SettingsIceservers");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'accept': accept
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetApiRainbowEnduserV10SettingsIceserversSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/settings/iceservers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get available stun, turn servers
     * &lt;b&gt;⚠ Retrieving the ICE servers should now be performed from the geolocation portal. The url to request is GET /api/rainbow/geolocation/v1.0/settings/iceservers.&lt;/b&gt;
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetApiRainbowEnduserV10SettingsIceserversSuccess}
     */
    this.getApiRainbowEnduserV10SettingsIceservers = function(accept) {
      return this.getApiRainbowEnduserV10SettingsIceserversWithHttpInfo(accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
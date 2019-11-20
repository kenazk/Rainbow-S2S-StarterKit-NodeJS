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
    define(['ApiClient', 'model/DeleteRoomAvatarSuccess', 'model/GetRoomAvatarSuccess', 'model/UploadRoomAvatarSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeleteRoomAvatarSuccess'), require('../model/GetRoomAvatarSuccess'), require('../model/UploadRoomAvatarSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.RoomsAvatarApi = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.DeleteRoomAvatarSuccess, root.RainbowEnduserPortal.GetRoomAvatarSuccess, root.RainbowEnduserPortal.UploadRoomAvatarSuccess);
  }
}(this, function(ApiClient, DeleteRoomAvatarSuccess, GetRoomAvatarSuccess, UploadRoomAvatarSuccess) {
  'use strict';

  /**
   * RoomsAvatar service.
   * @module api/RoomsAvatarApi
   * @version 1.84.0
   */

  /**
   * Constructs a new RoomsAvatarApi. 
   * @alias module:api/RoomsAvatarApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Delete room avatar
     * This API can be used to delete avatar image for the given roomId.    This API can only be used by one room&#39;s moderator.       When an avatar is deleted, the field &#x60;lastAvatarUpdateDate&#x60; of the room is set to null.    User vCard is also updated: the &#x60;PHOTO&#x60; element is removed and the &#x60;LASTAVATARUPDATE&#x60; element is set to empty.       A message stanza with the attribute lastAvatarUpdateDate:null is sent to all room users. This allow clients to be notified the avatar is no more available when they join the room:       &amp;lt;message                        from&#x3D; &#39;a portal client connected&#39;                        to&#x3D;&#39;room user jid&#39;                        id&#x3D;&#39;lh2bs617&#39;                        type&#x3D;&#39;management&#39;                        xmlns: &#39;jabber :client&#39; &amp;gt;                        &amp;lt;room&amp;gt;                            roomid&#x3D;\&quot;mongoid of the room\&quot;                            roomjid&#x3D;\&quot;jid of the room\&quot;                            lastAvatarUpdateDate&#x3D;null                            xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;                            action&#x3D;\&quot;delete\&quot;                        /&amp;gt;                        &amp;lt;/message&amp;gt;                
     * @param {String} roomId Room unique identifier (like 56f42c1914e2a8a91b99e595)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeleteRoomAvatarSuccess} and HTTP response
     */
    this.deleteRoomAvatarWithHttpInfo = function(roomId, accept) {
      var postBody = null;

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling deleteRoomAvatar");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling deleteRoomAvatar");
      }


      var pathParams = {
        'roomId': roomId
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
      var returnType = DeleteRoomAvatarSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/rooms/{roomId}/avatar', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete room avatar
     * This API can be used to delete avatar image for the given roomId.    This API can only be used by one room&#39;s moderator.       When an avatar is deleted, the field &#x60;lastAvatarUpdateDate&#x60; of the room is set to null.    User vCard is also updated: the &#x60;PHOTO&#x60; element is removed and the &#x60;LASTAVATARUPDATE&#x60; element is set to empty.       A message stanza with the attribute lastAvatarUpdateDate:null is sent to all room users. This allow clients to be notified the avatar is no more available when they join the room:       &amp;lt;message                        from&#x3D; &#39;a portal client connected&#39;                        to&#x3D;&#39;room user jid&#39;                        id&#x3D;&#39;lh2bs617&#39;                        type&#x3D;&#39;management&#39;                        xmlns: &#39;jabber :client&#39; &amp;gt;                        &amp;lt;room&amp;gt;                            roomid&#x3D;\&quot;mongoid of the room\&quot;                            roomjid&#x3D;\&quot;jid of the room\&quot;                            lastAvatarUpdateDate&#x3D;null                            xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;                            action&#x3D;\&quot;delete\&quot;                        /&amp;gt;                        &amp;lt;/message&amp;gt;                
     * @param {String} roomId Room unique identifier (like 56f42c1914e2a8a91b99e595)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeleteRoomAvatarSuccess}
     */
    this.deleteRoomAvatar = function(roomId, accept) {
      return this.deleteRoomAvatarWithHttpInfo(roomId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get room&#39;s avatar
     * This API can be used to retrieve room&#39;s avatar.    Example: GET https://openrainbow.com/api/room-avatar/56c5c19f94141765119f896c?size&#x3D;128       Clients can request avatars in a given size by specifying size query string parameter.    Avatar file can be resized from 1px to its original resolution, with a maximum of 512px:   * If no size option is requested, avatar is returned by default with resolution of 80px. * Max requestable size is 512. If a higher resolution is requested, the default size is returned instead, i.e. 80px. * Original avatars resolution can&#39;t be increased. If uploaded avatar size is 128 x 128 px, even is client request avatar with size 256, the original avatar file will be returned (128px).  
     * @param {String} roomId Room unique identifier (like 56f42c1914e2a8a91b99e595)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size Specify avatar size in pixels (square size x size).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetRoomAvatarSuccess} and HTTP response
     */
    this.getRoomAvatarWithHttpInfo = function(roomId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling getRoomAvatar");
      }


      var pathParams = {
        'roomId': roomId
      };
      var queryParams = {
        'size': opts['size'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = GetRoomAvatarSuccess;
      return this.apiClient.callApi(
        '/api/room-avatar/{roomId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get room&#39;s avatar
     * This API can be used to retrieve room&#39;s avatar.    Example: GET https://openrainbow.com/api/room-avatar/56c5c19f94141765119f896c?size&#x3D;128       Clients can request avatars in a given size by specifying size query string parameter.    Avatar file can be resized from 1px to its original resolution, with a maximum of 512px:   * If no size option is requested, avatar is returned by default with resolution of 80px. * Max requestable size is 512. If a higher resolution is requested, the default size is returned instead, i.e. 80px. * Original avatars resolution can&#39;t be increased. If uploaded avatar size is 128 x 128 px, even is client request avatar with size 256, the original avatar file will be returned (128px).  
     * @param {String} roomId Room unique identifier (like 56f42c1914e2a8a91b99e595)
     * @param {Object} opts Optional parameters
     * @param {Number} opts.size Specify avatar size in pixels (square size x size).
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetRoomAvatarSuccess}
     */
    this.getRoomAvatar = function(roomId, opts) {
      return this.getRoomAvatarWithHttpInfo(roomId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upload room avatar
     * This API can be used to upload avatar image for the given roomId. This API can only be used by one room&#39;s moderator.    Rules:   * Avatar file has to be sent directly in http body (no JSon). * Only **jpeg, jpg and png** files are supported. Appropriate content-type has to be set (image/jpeg or image/png). * If room already has an avatar, the existing one is overwritten. * By default, avatar file size is limited to 4194304 bytes (4 MB) (this limit can be changed by integration team in enduser portal config file). * When an avatar is uploaded, the field &#x60;lastAvatarUpdateDate&#x60; of the room is updated to the current date. * A message stanza with the lastAvatarUpdateDate is sent to all room users. This allow clients to be notified of the up-to-date room avatar when they join the room:        &#x60;&#x60;&#x60;html &lt;message                    from&#x3D; &#39;a portal client connected&#39;                    to&#x3D;&#39;room user jid&#39;                    id&#x3D;&#39;lh2bs617&#39;                    type&#x3D;&#39;management&#39;                    xmlns: &#39;jabber :client&#39; &gt;                    &lt;room&gt;                        roomid&#x3D;\&quot;mongoid of the room\&quot;                        roomjid&#x3D;\&quot;jid of the room\&quot;                        lastAvatarUpdateDate&#x3D;\&quot;Fri Aug 18 2017 15:36:12 GMT+0200 (CEST)\&quot;                        xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;                        action&#x3D;\&quot;update\&quot;                    /&gt;                    &lt;/message&gt;           &#x60;&#x60;&#x60; 
     * @param {String} roomId Room unique identifier (like 56f42c1914e2a8a91b99e595)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/UploadRoomAvatarSuccess} and HTTP response
     */
    this.uploadRoomAvatarWithHttpInfo = function(roomId) {
      var postBody = null;

      // verify the required parameter 'roomId' is set
      if (roomId === undefined || roomId === null) {
        throw new Error("Missing the required parameter 'roomId' when calling uploadRoomAvatar");
      }


      var pathParams = {
        'roomId': roomId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Bearer'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = UploadRoomAvatarSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/rooms/{roomId}/avatar', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Upload room avatar
     * This API can be used to upload avatar image for the given roomId. This API can only be used by one room&#39;s moderator.    Rules:   * Avatar file has to be sent directly in http body (no JSon). * Only **jpeg, jpg and png** files are supported. Appropriate content-type has to be set (image/jpeg or image/png). * If room already has an avatar, the existing one is overwritten. * By default, avatar file size is limited to 4194304 bytes (4 MB) (this limit can be changed by integration team in enduser portal config file). * When an avatar is uploaded, the field &#x60;lastAvatarUpdateDate&#x60; of the room is updated to the current date. * A message stanza with the lastAvatarUpdateDate is sent to all room users. This allow clients to be notified of the up-to-date room avatar when they join the room:        &#x60;&#x60;&#x60;html &lt;message                    from&#x3D; &#39;a portal client connected&#39;                    to&#x3D;&#39;room user jid&#39;                    id&#x3D;&#39;lh2bs617&#39;                    type&#x3D;&#39;management&#39;                    xmlns: &#39;jabber :client&#39; &gt;                    &lt;room&gt;                        roomid&#x3D;\&quot;mongoid of the room\&quot;                        roomjid&#x3D;\&quot;jid of the room\&quot;                        lastAvatarUpdateDate&#x3D;\&quot;Fri Aug 18 2017 15:36:12 GMT+0200 (CEST)\&quot;                        xmlns&#x3D;\&quot;jabber:iq:configuration\&quot;                        action&#x3D;\&quot;update\&quot;                    /&gt;                    &lt;/message&gt;           &#x60;&#x60;&#x60; 
     * @param {String} roomId Room unique identifier (like 56f42c1914e2a8a91b99e595)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/UploadRoomAvatarSuccess}
     */
    this.uploadRoomAvatar = function(roomId) {
      return this.uploadRoomAvatarWithHttpInfo(roomId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
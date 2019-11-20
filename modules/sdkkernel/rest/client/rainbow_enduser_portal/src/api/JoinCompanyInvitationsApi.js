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
    define(['ApiClient', 'model/AcceptJoinCompanyInvitationSuccess', 'model/DeclineJoinCompanyInvitationSuccess', 'model/GetJoinCompanyInvitationByIdSuccess', 'model/GetJoinCompanyInvitationsSuccess'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AcceptJoinCompanyInvitationSuccess'), require('../model/DeclineJoinCompanyInvitationSuccess'), require('../model/GetJoinCompanyInvitationByIdSuccess'), require('../model/GetJoinCompanyInvitationsSuccess'));
  } else {
    // Browser globals (root is window)
    if (!root.RainbowEnduserPortal) {
      root.RainbowEnduserPortal = {};
    }
    root.RainbowEnduserPortal.JoinCompanyInvitationsApi = factory(root.RainbowEnduserPortal.ApiClient, root.RainbowEnduserPortal.AcceptJoinCompanyInvitationSuccess, root.RainbowEnduserPortal.DeclineJoinCompanyInvitationSuccess, root.RainbowEnduserPortal.GetJoinCompanyInvitationByIdSuccess, root.RainbowEnduserPortal.GetJoinCompanyInvitationsSuccess);
  }
}(this, function(ApiClient, AcceptJoinCompanyInvitationSuccess, DeclineJoinCompanyInvitationSuccess, GetJoinCompanyInvitationByIdSuccess, GetJoinCompanyInvitationsSuccess) {
  'use strict';

  /**
   * JoinCompanyInvitations service.
   * @module api/JoinCompanyInvitationsApi
   * @version 1.84.0
   */

  /**
   * Constructs a new JoinCompanyInvitationsApi. 
   * @alias module:api/JoinCompanyInvitationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Accept a join company invitation
     * This API allows to accept a join company invitation received by the user (invitation sent by admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][0]).       To accept the join company invitation, the user must be in default company (may evolve in the future)       When the user accepts a join company invitation, he is notified with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; **status&#x3D;&#39;accepted&#39;** **type&#x3D;&#39;received&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    All company administrators are notified that the invitation has been accepted with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; **status&#x3D;&#39;accepted&#39;** **type&#x3D;&#39;sent&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60; Once accepted, invited user&#39;s &#x60;companyId&#x60; and &#x60;companyName&#x60; data are updated.    User&#39;s XMPP vCard is also updated.    Like after a user profile update, a presence stanza is sent to user&#39;s resources and users being in user&#39;s roster. This allow clients to be notified that company of this user has been updated:        &#x60;&#x60;&#x60;html &lt;presence from&#x3D;&#39;3ae059e2a91c40d9bdd7df0eedc911ca@openrainbow.com&#39;&gt;        &lt;x xmlns&#x3D;&#39;vcard-temp:x:update&#39;&gt;            &lt;data/&gt;        &lt;/x&gt;        &lt;actor xmlns&#x3D;&#39;jabber:iq:configuration&#39;/x&gt;    &lt;/presence&gt; &#x60;&#x60;&#x60; If invitation has flag invitedToBeCompanyAdmin set to true, user will join this company as company_admin (added role admin + adminType company_admin)    If invitation has flag invitedToBeBpAdmin set to true, user will join this company as bp_admin (added role bp_admin)       Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations/5819ed7c9547b313509237d6/accept   [0]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite
     * @param {String} userId User unique identifier (like 56c5c19f94141765119f896c)
     * @param {String} invitationId Join company invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AcceptJoinCompanyInvitationSuccess} and HTTP response
     */
    this.acceptJoinCompanyInvitationWithHttpInfo = function(userId, invitationId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling acceptJoinCompanyInvitation");
      }

      // verify the required parameter 'invitationId' is set
      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling acceptJoinCompanyInvitation");
      }


      var pathParams = {
        'userId': userId,
        'invitationId': invitationId
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
      var returnType = AcceptJoinCompanyInvitationSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/join-companies/invitations/{invitationId}/accept', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Accept a join company invitation
     * This API allows to accept a join company invitation received by the user (invitation sent by admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][0]).       To accept the join company invitation, the user must be in default company (may evolve in the future)       When the user accepts a join company invitation, he is notified with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; **status&#x3D;&#39;accepted&#39;** **type&#x3D;&#39;received&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    All company administrators are notified that the invitation has been accepted with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; **status&#x3D;&#39;accepted&#39;** **type&#x3D;&#39;sent&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60; Once accepted, invited user&#39;s &#x60;companyId&#x60; and &#x60;companyName&#x60; data are updated.    User&#39;s XMPP vCard is also updated.    Like after a user profile update, a presence stanza is sent to user&#39;s resources and users being in user&#39;s roster. This allow clients to be notified that company of this user has been updated:        &#x60;&#x60;&#x60;html &lt;presence from&#x3D;&#39;3ae059e2a91c40d9bdd7df0eedc911ca@openrainbow.com&#39;&gt;        &lt;x xmlns&#x3D;&#39;vcard-temp:x:update&#39;&gt;            &lt;data/&gt;        &lt;/x&gt;        &lt;actor xmlns&#x3D;&#39;jabber:iq:configuration&#39;/x&gt;    &lt;/presence&gt; &#x60;&#x60;&#x60; If invitation has flag invitedToBeCompanyAdmin set to true, user will join this company as company_admin (added role admin + adminType company_admin)    If invitation has flag invitedToBeBpAdmin set to true, user will join this company as bp_admin (added role bp_admin)       Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations/5819ed7c9547b313509237d6/accept   [0]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite
     * @param {String} userId User unique identifier (like 56c5c19f94141765119f896c)
     * @param {String} invitationId Join company invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AcceptJoinCompanyInvitationSuccess}
     */
    this.acceptJoinCompanyInvitation = function(userId, invitationId) {
      return this.acceptJoinCompanyInvitationWithHttpInfo(userId, invitationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Decline a join company invitation
     * This API allows to decline a join company invitation received by the user (invitation sent by admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][0]).       Invitation must be pending (otherwise error 409 is returned).       When the user declines a join company invitation, he is notified with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; **status&#x3D;&#39;declined&#39;** **type&#x3D;&#39;received&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    All company administrators are notified that the invitation has been declined with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; **status&#x3D;&#39;declined&#39;** **type&#x3D;&#39;sent&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60; Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations/5819ed7c9547b313509237d6/decline   [0]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite
     * @param {String} userId User unique identifier
     * @param {String} invitationId Join company invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/DeclineJoinCompanyInvitationSuccess} and HTTP response
     */
    this.declineJoinCompanyInvitationWithHttpInfo = function(userId, invitationId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling declineJoinCompanyInvitation");
      }

      // verify the required parameter 'invitationId' is set
      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling declineJoinCompanyInvitation");
      }


      var pathParams = {
        'userId': userId,
        'invitationId': invitationId
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
      var returnType = DeclineJoinCompanyInvitationSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/join-companies/invitations/{invitationId}/decline', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Decline a join company invitation
     * This API allows to decline a join company invitation received by the user (invitation sent by admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][0]).       Invitation must be pending (otherwise error 409 is returned).       When the user declines a join company invitation, he is notified with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; **status&#x3D;&#39;declined&#39;** **type&#x3D;&#39;received&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    All company administrators are notified that the invitation has been declined with the following XMPP message:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;update\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; **status&#x3D;&#39;declined&#39;** **type&#x3D;&#39;sent&#39;** xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60; Example: POST https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations/5819ed7c9547b313509237d6/decline   [0]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite
     * @param {String} userId User unique identifier
     * @param {String} invitationId Join company invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/DeclineJoinCompanyInvitationSuccess}
     */
    this.declineJoinCompanyInvitation = function(userId, invitationId) {
      return this.declineJoinCompanyInvitationWithHttpInfo(userId, invitationId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get a join company invitation
     * This API allows to get a join company invitation received by the user using its invitationId (invitation sent by admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][0]).       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations/5819ed7c9547b313509237d6  [0]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite
     * @param {String} userId User unique identifier (like 56c5c19f94141765119f896c)
     * @param {String} invitationId Join company invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetJoinCompanyInvitationByIdSuccess} and HTTP response
     */
    this.getJoinCompanyInvitationByIdWithHttpInfo = function(userId, invitationId, accept) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getJoinCompanyInvitationById");
      }

      // verify the required parameter 'invitationId' is set
      if (invitationId === undefined || invitationId === null) {
        throw new Error("Missing the required parameter 'invitationId' when calling getJoinCompanyInvitationById");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getJoinCompanyInvitationById");
      }


      var pathParams = {
        'userId': userId,
        'invitationId': invitationId
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
      var returnType = GetJoinCompanyInvitationByIdSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/join-companies/invitations/{invitationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get a join company invitation
     * This API allows to get a join company invitation received by the user using its invitationId (invitation sent by admin using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][0]).       Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations/5819ed7c9547b313509237d6  [0]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite
     * @param {String} userId User unique identifier (like 56c5c19f94141765119f896c)
     * @param {String} invitationId Join company invitation unique identifier (like 5819ed7c9547b313509237d6)
     * @param {String} accept application/json
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetJoinCompanyInvitationByIdSuccess}
     */
    this.getJoinCompanyInvitationById = function(userId, invitationId, accept) {
      return this.getJoinCompanyInvitationByIdWithHttpInfo(userId, invitationId, accept)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get all join company invitations
     * This API allows to list all join company invitations received by the user (invitations sent by admins using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][0]).       When the user is invited to join a company by an administrator, he receives the following XMPP message to notify him that a join company invitation has been received:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;create\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; status&#x3D;&#39;pending&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations?status&#x3D;pending    Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations?status&#x3D;accepted&amp;status&#x3D;auto-accepted   [0]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite
     * @param {String} userId User unique identifier (like 56c5c19f94141765119f896c)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.sortField Sort items list based on the given field
     * @param {String} opts.status List all join company invitations having the provided status(es)
     * @param {String} opts.format Allows to retrieve more or less invitation details in response.    - &#x60;small&#x60;: id, companyId, invitedUserId, invitedUserLoginEmail, invitingAdminId, status    - &#x60;medium&#x60;: id, companyId, companyName, invitedUserId, invitedUserLoginEmail, invitingAdminId, invitingAdminLoginEmail, status, lastNotificationDate, invitingDate, acceptationDate, declinationDate    - &#x60;full&#x60;: all join company invitation fields
     * @param {Number} opts.limit Allow to specify the number of items to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {Number} opts.sortOrder Specify order when sorting items list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetJoinCompanyInvitationsSuccess} and HTTP response
     */
    this.getJoinCompanyInvitationsWithHttpInfo = function(userId, accept, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getJoinCompanyInvitations");
      }

      // verify the required parameter 'accept' is set
      if (accept === undefined || accept === null) {
        throw new Error("Missing the required parameter 'accept' when calling getJoinCompanyInvitations");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'sortField': opts['sortField'],
        'status': opts['status'],
        'format': opts['format'],
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sortOrder': opts['sortOrder'],
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
      var returnType = GetJoinCompanyInvitationsSuccess;
      return this.apiClient.callApi(
        '/api/rainbow/enduser/v1.0/users/{userId}/join-companies/invitations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get all join company invitations
     * This API allows to list all join company invitations received by the user (invitations sent by admins using API [POST /api/rainbow/admin/v1.0/companies/:companyId/join-companies/invitations][0]).       When the user is invited to join a company by an administrator, he receives the following XMPP message to notify him that a join company invitation has been received:        &#x60;&#x60;&#x60;html &lt;message type&#x3D;&#39;management&#39; id&#x3D;&#39;122&#39;            from&#x3D;&#39;jid_from@openrainbow.com&#39;            to&#x3D;&#39;jid_to@openrainbow.com&#39;            xmlns&#x3D;&#39;jabber:client&#39;&gt;        &lt;joincompanyinvite action&#x3D;\&quot;create\&quot; id&#x3D;&#39;582048dfe2e68a79f4979624&#39; status&#x3D;&#39;pending&#39; type&#x3D;&#39;received&#39; xmlns&#x3D;&#39;jabber:iq:configuration&#39;/&gt;     &lt;/message&gt; &#x60;&#x60;&#x60;    Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations?status&#x3D;pending    Example: GET https://openrainbow.com/api/rainbow/enduser/v1.0/users/573b46a305a4c22a19b216ce/join-companies/invitations?status&#x3D;accepted&amp;status&#x3D;auto-accepted   [0]: /admin/#api-join_company_invitations-admin_PostJoinCompanyInvite
     * @param {String} userId User unique identifier (like 56c5c19f94141765119f896c)
     * @param {String} accept application/json
     * @param {Object} opts Optional parameters
     * @param {String} opts.sortField Sort items list based on the given field
     * @param {String} opts.status List all join company invitations having the provided status(es)
     * @param {String} opts.format Allows to retrieve more or less invitation details in response.    - &#x60;small&#x60;: id, companyId, invitedUserId, invitedUserLoginEmail, invitingAdminId, status    - &#x60;medium&#x60;: id, companyId, companyName, invitedUserId, invitedUserLoginEmail, invitingAdminId, invitingAdminLoginEmail, status, lastNotificationDate, invitingDate, acceptationDate, declinationDate    - &#x60;full&#x60;: all join company invitation fields
     * @param {Number} opts.limit Allow to specify the number of items to retrieve.
     * @param {Number} opts.offset Allow to specify the position of first item to retrieve (first item if not specified). Warning: if offset &gt; total, no results are returned.
     * @param {Number} opts.sortOrder Specify order when sorting items list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetJoinCompanyInvitationsSuccess}
     */
    this.getJoinCompanyInvitations = function(userId, accept, opts) {
      return this.getJoinCompanyInvitationsWithHttpInfo(userId, accept, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
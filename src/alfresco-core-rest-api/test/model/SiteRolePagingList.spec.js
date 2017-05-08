/**
 * Alfresco Content Services REST API
 * **Core API**  Provides access to the core features of Alfresco Content Services. 
 *
 * OpenAPI spec version: 1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AlfrescoCoreRestApi);
  }
}(this, function(expect, AlfrescoCoreRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AlfrescoCoreRestApi.SiteRolePagingList();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SiteRolePagingList', function() {
    it('should create an instance of SiteRolePagingList', function() {
      // uncomment below and update the code to test SiteRolePagingList
      //var instane = new AlfrescoCoreRestApi.SiteRolePagingList();
      //expect(instance).to.be.a(AlfrescoCoreRestApi.SiteRolePagingList);
    });

    it('should have the property pagination (base name: "pagination")', function() {
      // uncomment below and update the code to test the property pagination
      //var instane = new AlfrescoCoreRestApi.SiteRolePagingList();
      //expect(instance).to.be();
    });

    it('should have the property entries (base name: "entries")', function() {
      // uncomment below and update the code to test the property entries
      //var instane = new AlfrescoCoreRestApi.SiteRolePagingList();
      //expect(instance).to.be();
    });

  });

}));
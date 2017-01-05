(function() {
  'use strict';

  angular.module('public')
  .service('MyInfoService', MyInfoService);

  function MyInfoService() {
    var service = this;
    var userInfo = {};

    service.save = function(user) {
      userInfo = user;
    };

    service.get = function() {
      return userInfo;
    };
  };

}());

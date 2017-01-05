(function() {
  'use strict';

  angular.module('public')
  .controller('MyInfoController', MyInfoController);

  MyInfoController.$inject = ['userInfo', 'ApiPath', 'MenuService'];
  function MyInfoController(userInfo, ApiPath, MenuService){
    var $ctrl = this;
    $ctrl.userInfo = userInfo;
    MenuService.getMenuItem(userInfo.favouriteDish).then(function(details) {
      $ctrl.userInfo.favouriteDish = {
        shortName: details.short_name,
        name: details.name,
        description: details.description
      };
    });
    $ctrl.ApiPath = ApiPath;
    $ctrl.isRegistered = function() {
      return !angular.equals(userInfo, {});
    };
  };

}());

(function() {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http', 'MenuApiPath'];
  function MenuDataService($http, MenuApiPath) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
        method: 'GET',
        url: (MenuApiPath + '/categories.json')
      }).then(function(response) {
        return response.data;
      });
    };

    service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: 'GET',
        url: (MenuApiPath + '/menu_items.json?category=' + categoryShortName)
      }).then(function(response) {
        return response.data.menu_items;
      });
    };
  }

}());

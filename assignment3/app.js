(function() {
  'use strict';

  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('MenuApiPath', 'https://davids-restaurant.herokuapp.com')
  .directive('foundItems', FoundItems);

  NarrowItDownController.$inject = ['MenuSearchService']
  function NarrowItDownController(MenuSearchService) {
    var vm = this;

    vm.narrowItDown = function() {
      if (vm.searchTerm) {
        MenuSearchService.getMatchedMenuItems(vm.searchTerm).then(function(result) {
          vm.found = result;
        });
      } else {
        vm.found = [];
      }
    };

    vm.removeItem = function(index) {
      vm.found.splice(index, 1);
    }
  };

  MenuSearchService.$inject = ['$http', 'MenuApiPath'];
  function MenuSearchService($http, MenuApiPath) {
    var service = this;

    service.getMatchedMenuItems = function(searchTerm) {
      var promise = $http({
        method: 'GET',
        url: (MenuApiPath + '/menu_items.json')
      });

      return promise.then(function(result) {
        var foundItems = result.data.menu_items.filter(function(item) {
          return item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1;
        });

        return foundItems;
      })
      .catch(function(error) {
        console.log(error);
      });
    };
  };

  function FoundItems() {
    var ddo = {
      restrict: 'E',
      templateUrl: 'foundItems.html',
      scope: {
        foundItems: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }

}());

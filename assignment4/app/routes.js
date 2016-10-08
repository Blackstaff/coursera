(function() {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: '<h1>Welcome to our restaurant</h1>'
      })

      .state('categories', {
        url: '/categories',
        template: '<categories list="$resolve.list"></categories>',
        resolve: {
          list: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
        url: '/categories/{shortName}/items',
        template: '<items list="$resolve.list"></items>',
        resolve: {
          list: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.shortName);
          }]
        }
      });
  };

}());

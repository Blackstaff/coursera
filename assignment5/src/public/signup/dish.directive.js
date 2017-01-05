(function() {
  'use strict';

  angular.module('public')
  .directive('dish', Dish);

  Dish.$inject = ['ApiPath', '$http']
  function Dish(ApiPath, $http) {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function(scope, element, attr, ctrl) {
        ctrl.$asyncValidators.dish = function(modelValue, viewValue) {
          return $http({
            url: ApiPath + '/menu_items/' + modelValue + '.json'
          });
        };
      }
    };
  };

}());

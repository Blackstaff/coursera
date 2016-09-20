(function() {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = '';
    $scope.onClick = function() {
      var itemsCount = countItems($scope.lunchMenu)
      if(0 < itemsCount && itemsCount <= 3) {
        $scope.message = 'Enjoy!';
      } else if (itemsCount > 3) {
        $scope.message = 'Too much!';
      } else {
        $scope.message = 'Please enter data first';
      }
    };
  };

  function countItems(items) {
    return items ? items.split(',').filter(function(x) { return x.trim() != '' }).length : 0;
  };

})();

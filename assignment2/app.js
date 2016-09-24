(function() {
  'use strict';

  angular.module('ShopListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.checkOff = function(index) {
        ShoppingListCheckOffService.checkOff(index);
    };
  };

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
      {name: 'cookie', quantity: 5},
      {name: 'soda bottle', quantity: 3},
      {name: 'cucumber', quantity: 10},
      {name: 'banana', quantity: 2},
      {name: 'orange', quantity: 6},
      {name: 'apple', quantity: 9},
    ];
    var boughtItems = [];

    service.getToBuyItems = function() {
      return toBuyItems;
    };

    service.getBoughtItems = function() {
      return boughtItems;
    };

    service.checkOff = function(index) {
      var item = toBuyItems.splice(index, 1).pop();
      boughtItems.push(item);
    };
  };

})();

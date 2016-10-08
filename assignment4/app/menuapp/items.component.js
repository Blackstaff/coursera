(function() {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'app/templates/items.template.html',
    bindings: {
      list: '<'
    }
  });

}());

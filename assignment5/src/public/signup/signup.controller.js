(function() {
  'use strict';

  angular.module('public')
  .controller('SignupController', SignupController);

  SignupController.$inject = ['MyInfoService'];
  function SignupController(myInfoService) {
    var $ctrl = this;

    $ctrl.submit = function() {
        $ctrl.completed = true;
        myInfoService.save($ctrl.user);
    };
  };

}());

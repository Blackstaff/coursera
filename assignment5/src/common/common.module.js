(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://secure-basin-88622.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();

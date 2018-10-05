'use strict';

angular.
  module('usercatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<user-list></user-list>'
        }).
        otherwise('/');
    }
  ]);

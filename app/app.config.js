'use strict';

angular.
  module('countrycatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<country-list></country-list>'
        }).
        otherwise('/');
    }
  ]);

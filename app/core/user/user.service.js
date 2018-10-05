'use strict';

angular.
  module('core.user').
  service('User', ['$http',
    function($http) {
      this.getAll = function(){
        return $http({ method: 'GET', url: 'https://randomuser.me/api'});
      }
      this.queryCode = function(code){
        return $http({ method: 'GET', url: ' https://randomuser.me/api/?results='+code});
      }
    }
  ]);

'use strict';

angular.
  module('core.country').
  service('Country', ['$http',
    function($http) {
      this.getAll = function(){
        return $http({ method: 'GET', url: 'https://restcountries.eu/rest/v2/all'});
      }
      this.queryCode = function(code){
        return $http({ method: 'GET', url: 'https://restcountries.eu/rest/v2/alpha/'+code});
      }
    }
  ]);

'use strict';

// Register `countryList` component, along with its associated controller and template
angular.
  module('countryList').
  component('countryList', {
    templateUrl: 'country-list/country-list.template.html',
    controller: ['Country',
      function CountryListController(Country) {
        var vm = this;
        var count = 0;
        vm.arrayFlag = true;
        Country.getAll().then(function(response) { 
          vm.countries = response.data; 
        });
        

        // declare a controller function that delegates to your service to save the recipe
        vm.myFunc = function() {
          count = vm.querycodeparams.length;
          if (count > 1){
            Country.queryCode(vm.querycodeparams)
              .then(function onSuccess(response) {
                // Handle success
                vm.country = response.data;
                vm.arrayFlag = false;
              }).catch(function onError(response) {
                // Handle error
                vm.country = {};
              });
          }
          else{
            Country.getAll().then(function(response) { 
              vm.countries = response.data; 
            });
            vm.arrayFlag = true;
          }
        }
      }
    ]
  });

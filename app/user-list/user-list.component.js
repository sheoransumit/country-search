'use strict';

// Register `userList` component, along with its associated controller and template
angular.
  module('userList').
  component('userList', {
    templateUrl: 'user-list/user-list.template.html',
    controller: ['User',
      function UserListController(User) {

        var vm = this;
        var count = 0;
        vm.arrayFlag = true;
        vm.users = {};
        vm.users.gender = "";
        vm.users.postcode = "";
        vm.users.email = "";
        vm.users.username = "";
        vm.users.thumbnail = "";
        vm.digit = 0;
        vm.users = {};

        // declare a controller function that delegates to your service to save the recipe
        vm.myFunc = function() {
          count = vm.querycodeparams.length;
          if (count > 1){
            User.queryCode(vm.querycodeparams)
              .then(function onSuccess(response) {
                // Handle success
                vm.user = response.data;
                vm.arrayFlag = false;
              }).catch(function onError(response) {
                // Handle error
                vm.user = {};
              });
          }
          else{
            User.getAll().then(function(response) { 
              vm.users = response.data; 
            });
            vm.arrayFlag = true;
          }
        }

        $(document).ready( function () {
            $('#table_id').DataTable();
        } );

        $("#LRUButton").click( function (event) {
          event.preventDefault();
            // var $btn = $(this);
            // var $container = $(this).closest('.details-container');
            var $fieldset = $(document).find('fieldset');
            $fieldset.removeAttr("disabled");
            User.getAll().then(function(response) {  
              vm.users.gender = response.data.results[0].gender;
              vm.users.postcode = response.data.results[0].location.postcode;
              vm.users.email = response.data.results[0].email;
              vm.users.username = response.data.results[0].login.username;
              vm.users.thumbnail = response.data.results[0].picture.thumbnail;
            });
            // $('.form-group.disabled').removeClass('disabled');
        });

        $("#LRUTDButton").click( function (event) {
          event.preventDefault();
            var $fieldset = $(document).find('fieldset');
            $fieldset.removeAttr("disabled");
            User.queryCode(vm.digit)
              .then(function onSuccess(response) {
                // Handle success
                $('#table_id').DataTable({
                  destroy: true,
                  data: response.data.results,
                  columns: [
                    { data: 'gender' },
                    { data: 'location.postcode' },
                    { data: 'email' },
                    { data: 'login.username' },
                    { data: 'phone'}
                  ]
                });
                // vm.users = response.data.results;
              }).catch(function onError(response) {
                // Handle error
                vm.users = {};
              });
        });
      }
    ]
  });

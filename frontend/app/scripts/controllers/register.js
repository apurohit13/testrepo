'use strict';

angular.module('psJwtApp')
  .controller('RegisterCtrl', function($scope, $http) {
    $scope.submit = function() {
      var url = "/";
      var user = {};
      $http.post(url, user)
        .success(function(res) {
          console.log('good');
        })
        .error(function(err) {
          console.log('bad');
        })
    }
  });

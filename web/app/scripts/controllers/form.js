'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the webApp
 */
var app = angular.module('webApp');

app.controller('FormCtrl', [
    '$scope',
    '$http',
    function FormCtrl ($scope, $http) {
        $scope.submit = function submitForm () {
            var data = {
                email: $scope.user,
                password: $scope.password
            };
            $http
                .post('/api/user', data)
                .success(function (data, status, headers, config) {
                    console.log('success');
                    console.log(arguments);
                })
                .error(function (data, status, headers, config) {
                    console.log('error');
                    console.log(arguments);
                });
        };
    }
]);

'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the webApp
 */
var app = angular.module('webApp');

app.controller('MainCtrl', [
    '$scope',
    function MainCtrl ($scope) {
        // Main.
        $scope.title = 'Home';

    }
]);

'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the webApp
 */
var app = angular.module('webApp');

app.controller('AboutCtrl', [
    '$scope',
    function AboutCtrl ($scope) {
        // About.
        $scope.title = 'About';
    }
]);

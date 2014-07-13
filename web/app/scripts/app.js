'use strict';

/**
 * @ngdoc overview
 * @name webApp
 * @description
 * # webApp
 *
 * Main module of the application.
 */
var app = angular.module('webApp', [
    'ngCookies',
    'ngRoute',
    'ngTouch'
]);

app.config(function appConfig ($routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
      })
      .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
      })
      .otherwise({
          redirectTo: '/'
      });
});

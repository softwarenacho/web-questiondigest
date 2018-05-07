'use strict';

const app = angular.module('qdApp', ['ngRoute']);

// route mgmt
app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl : 'commons/base.html',
  })
  .when('/user', {
    templateUrl : 'user/index.html',
    controller  : 'UserCtrl'
  })
  .otherwise({
    templateUrl : 'commons/error.html'
  });
  $locationProvider.html5Mode(true);
});

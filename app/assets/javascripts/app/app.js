//= require_self
//= require_tree .

(function () {
  var app = angular.module('Writer', ['ngRoute']);

  app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token').attr('content');
    $httpProvider.defaults.headers.common.Accept = 'application/json';
  }]);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'angular/books/books.html'
      })
      .when('/books/new', {
        templateUrl: 'angular/books/new.html'
      });
  }]);
}());

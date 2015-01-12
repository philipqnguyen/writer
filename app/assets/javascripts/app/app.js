//= require_self
//= require_tree .

(function () {
  var app = angular.module('Writer', ['ngRoute', 'ng-token-auth']);

  app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token').attr('content');
    $httpProvider.defaults.headers.common.Accept = 'application/json';
  }]);

  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'angular/books/books.html'
      })
      .when('/books/new', {
        templateUrl: 'angular/books/new.html',
        resolve: {
          permission: authenticateUser
        }
      })
      .when('/books/:bookId', {
        templateUrl: 'angular/books/show.html'
      })
      .when('/user_sessions/new', {
        templateUrl: 'angular/user_sessions/new.html'
      })
      .when('/user_registration/new', {
        templateUrl: 'angular/user_registration/new.html'
      })
      .when('/chapters/new', {
        templateUrl: 'angular/chapters/new.html'
      })
      .when('/books/update/:bookId', {
        templateUrl: 'angular/books/edit.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

  var authenticateUser = (['$q', '$rootScope', '$location', function ($q, $rootScope, $location) {
    if ($rootScope.user.id) {
      return true;
    } else {
      var deferred = $q.defer();
      $location.path('/user_sessions/new');
      return deferred.promise;
    }
  }]);
}());

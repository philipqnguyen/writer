(function () {
  var app = angular.module('Writer');

  app.directive('navBar', [function () {
    return {
      restrict: 'A',
      templateUrl: 'angular/header/header.html'
    };
  }]);
}());

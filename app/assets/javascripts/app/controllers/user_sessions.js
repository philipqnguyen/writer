(function () {
  var app = angular.module('Writer');

  app.controller('UserSessionsCtrl', ['$auth', '$location', function ($auth, $location) {
    var self = this;

    self.login = function () {
      $auth.submitLogin(self.loginForm)
        .then(function (resp) {
          $location.path('/');
        })
        .catch(function (resp) {
          console.log(resp);
        });
    };
  }]);
}());

(function () {
  var app = angular.module('Writer');

  app.controller('UserRegistrationCtrl', ['$auth', '$location', function ($auth, $location) {
    var self = this;
    self.register = function () {
      $auth.submitRegistration(self.registrationForm)
        .then(function (resp) {
          $auth.submitLogin({
            email: self.registrationForm.email,
            password: self.registrationForm.password
          });
          $location.path('/');
        })
        .catch(function (resp) {
          console.log(resp);
        });
    };
  }]);
}());

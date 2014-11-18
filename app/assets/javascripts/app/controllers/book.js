(function () {
  var app = angular.module('Writer');

  app.controller('BooksCtrl', ['$http', function ($http) {
    var self = this;
    self.index = function () {
      $http.get('/books')
        .success(function (data) {
          self.books = data.books;
        })
        .error(function (data, status) {
          self.errors.push(data);
          console.log(data);
          console.log(status);
        });
    }
  }]);
}());

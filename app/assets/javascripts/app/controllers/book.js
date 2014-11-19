(function () {
  var app = angular.module('Writer');

  app.controller('BooksCtrl', ['$http', '$location', function ($http, $location) {
    var self = this;
    self.books = [];
    self.errors = [];

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

    self.create = function (book) {
      $http.post('/books', {book: book})
        .success(function (data) {
          self.books.unshift(data.book);
          $location.path('/');
          console.log(self.books);
        })
        .errors(function (data, status) {
          self.errors.push(data);
          console.log(status);
        });
    }
  }]);
}());

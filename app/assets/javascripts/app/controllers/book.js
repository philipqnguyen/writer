(function () {
  var app = angular.module('Writer');

  app.controller('BooksCtrl', ['$http', '$location', '$routeParams', 'BooksService', function ($http, $location, $routeParams, BooksService) {
    var self = this;
    self.errors = [];

    self.books = function () {
      return BooksService.get();
    }

    self.index = function () {
      $http.get('/books')
        .success(function (data) {
          BooksService.set(data.books);
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
          BooksService.add(data.book);
          $location.path('/');
          console.log(self.books);
        })
        .error(function (data, status) {
          self.errors.push(data);
          console.log(status);
        });
    }

    self.show = function () {
      $http.get('/books/' + $routeParams.bookId)
        .success(function (data) {
          self.book = data.book;
        })
        .error(function (data, status) {
          self.errors.push(data);
          console.log(status);
        })
    }

  }]);
}());

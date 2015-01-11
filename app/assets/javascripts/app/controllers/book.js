(function () {
  var app = angular.module('Writer');

  app.controller('BooksCtrl', ['$http', '$location', '$routeParams', 'Books', 'Chapters', function ($http, $location, $routeParams, Books, Chapters) {
    var self = this;
    self.errors = [];

    self.books = function () {
      return Books.get();
    }

    self.index = function () {
      $http.get('/books')
        .success(function (data) {
          Books.set(data.books);
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
          Books.add(data.book);
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
          Chapters.setCurrentBook($routeParams.bookId);
        })
        .error(function (data, status) {
          self.errors.push(data);
          console.log(status);
        })
    }

  }]);
}());

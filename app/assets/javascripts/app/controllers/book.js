(function () {
  var app = angular.module('Writer');

  app.controller('BooksCtrl', ['$http', '$location', '$routeParams', 'Books', 'Book', 'Search', function ($http, $location, $routeParams, Books, Book, Search) {
    var self = this;
    self.errors = [];

    self.query = function () {
      return Search.get();
    };

    self.books = function () {
      return Books.get();
    };

    self.currentBook = function () {
      return Book.getCurrentBook();
    };

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
    };

    self.create = function (book) {
      $http.post('/books', {book: book})
        .success(function (data) {
          Books.add(data.book);
          $location.path('/');
        })
        .error(function (data, status) {
          self.errors.push(data);
          console.log(status);
        });
    };

    self.show = function () {
      $http.get('/books/' + $routeParams.bookId)
        .success(function (data) {
          self.book = data.book;
          Book.setCurrentBook(self.book);
        })
        .error(function (data, status) {
          self.errors.push(data);
          console.log(status);
        })
    };

    self.update = function (book) {
      $http({
        method: 'PATCH',
        url: '/books/' + Book.getCurrentBookId(),
        data: book
      })
        .success(function (data) {
          $location.path('/books/' + Book.getCurrentBookId())
        })
        .error(function (data, status) {
          self.errors.push(data);
          console.log(data);
          console.log(status);
        });
    };

    self.delete = function () {
      $http({
        method: 'DELETE',
        url: '/books/' + Book.getCurrentBookId()
      })
        .success(function (data) {
          $location.path('/')
        })
        .error(function (data, status) {
          self.errors.push(data);
          console.log(data);
          console.log(status);
        });
    };

  }]);
}());

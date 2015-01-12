(function () {
  var app = angular.module('Writer');

  app.service('Books', [function () {
    var books = [];

    this.get = function () {
      return books;
    };

    this.set = function (input) {
      books = input;
    };

    this.add = function (input) {
      books.unshift(input);
    };

  }]);

  app.service('Book', [function () {
    var currentBook;
    var self = this;

    self.getCurrentBook = function () {
      return currentBook;
    };

    self.setCurrentBook = function (input) {
      currentBook = input;
    };

    self.getCurrentBookId = function () {
      return currentBook.id;
    };
  }]);
}());

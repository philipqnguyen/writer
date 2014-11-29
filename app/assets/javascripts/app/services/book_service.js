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
}());

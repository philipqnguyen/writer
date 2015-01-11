(function () {
  var app = angular.module('Writer');

  app.service('Chapters', [function () {
    var currentBook;
    var self = this;

    self.getCurrentBook = function () {
      return currentBook;
    };

    self.setCurrentBook = function (input) {
      currentBook = input;
    };
  }]);
}());

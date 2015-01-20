(function () {
  var app = angular.module('Writer');

  app.controller('ChaptersCtrl', ['$http', '$location', 'Book', function ($http, $location, Book) {
    var self = this;
    self.errors = [];

    self.create = function (chapter) {
      chapter.book_id = Book.getCurrentBookId();

      $http.post('/chapters', {chapter: chapter})
        .success(function (data) {
          $location.path(/books/ + Book.getCurrentBookId())
        })
        .error(function (data, status) {
          self.errors.push(data);
          console.log(status);
        });
    }
  }]);
}());

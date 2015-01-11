(function () {
  var app = angular.module('Writer');

  app.controller('ChaptersCtrl', ['$http', '$location', 'Chapters', function ($http, $location, Chapters) {
    var self = this;
    self.errors = [];

    self.create = function (chapter) {
      chapter.book_id = Chapters.getCurrentBook();

      $http.post('/chapters', {chapter: chapter})
        .success(function (data) {
          console.log(data.chapter);
          $location.path(/books/ + Chapters.getCurrentBook())
        })
        .error(function (data, status) {
          self.errors.push(data);
          console.log(status);
        });
    }
  }]);
}());

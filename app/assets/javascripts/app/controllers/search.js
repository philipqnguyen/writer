(function () {
  var app = angular.module('Writer');

  app.controller('SearchCtrl', ['Search', function (Search) {
    var self = this;

    self.search = function (query) {
      Search.set(query);
    };
  }]);
}());

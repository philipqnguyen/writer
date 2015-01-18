(function () {
  var app = angular.module('Writer');

  app.service('Search', [function () {
    var self = this;

    self.query = "";

    self.get = function () {
      return self.query;
    }

    self.set = function (query) {
      self.query = query;
    }
  }]);
}());

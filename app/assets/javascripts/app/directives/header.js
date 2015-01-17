(function () {
  var app = angular.module('Writer');

  app.directive('navBar', [function () {
    return {
      restrict: 'A',
      templateUrl: 'angular/header/header.html',
      controller: function () {
        var menuToggle = $('#js-mobile-menu').unbind();
        $('#js-navigation-menu').removeClass("show");

        menuToggle.on('click', function(e) {
          e.preventDefault();
          $('#js-navigation-menu').slideToggle(function(){
            if($('#js-navigation-menu').is(':hidden')) {
              $('#js-navigation-menu').removeAttr('style');
            }
          });
        });
      }
    };
  }]);
}());

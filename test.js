/** Scroll to top function in AngularJS **/

angular.module('demoApp').controller('controller', ['$scope', function($scope) {
  
  $scope.scrollToTop = function($var) {
      // 'html, body' denotes the html element, to go to any other custom element, use '#elementID'
      $('html, body').animate({
          scrollTop: 0
      }, 'fast'); // 'fast' is for fast animation. 'slow' is for slow animation.
  };
  
}]);

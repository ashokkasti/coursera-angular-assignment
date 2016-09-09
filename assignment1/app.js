(function () {
  'use strict';

  angular.module('LunchChecker', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.lunchList = "";
    $scope.lunchCheck = function () {
      $scope.lunchList = $scope.lunchList.trim();
      if ($scope.lunchList == '') {
        $scope.lunchClass = "danger";
        $scope.message = "Please enter data first";
       } else {
          $scope.lunchClass = "success";
          var noOfLunch = $scope.lunchList.split(',').length;
          if (noOfLunch <= 3) {
            $scope.message = "Enjoy!";
          } else {
            $scope.message = "Too much!";
          }
       }
    }
  }

})();

angular.module('helloWorldApp')
.controller('HomeCtrl',[
    '$scope',
    function($scope){
        $scope.amount = 1000;
        $scope.todaysDate = new Date();
        $scope.rollNo = 12345;
    }
]);
var app = angular.module('cheapDate');


app.controller('cuisCtrl',function($scope, dateFactory){
  $scope.getlist = function(){
  console.log('hey');
  $scope.food =  dateFactory.dates();
  console.log($scope.food);
  }
    $scope.getlist();
});

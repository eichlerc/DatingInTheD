var app = angular.module('cheapDate');


app.controller('cuisCtrl',function($scope, dateFactory){
    $scope.price = [1,2,3,4];
  $scope.listItem = '';
  $scope.getlist = function(){
  console.log('hey');
  dateFactory.dates().then(function successCallback(response) {
    $scope.food = dateFactory.datespot();
    console.log($scope.food);
  });
  // console.log($scope.food);
  }
    $scope.getlist();
    $scope.IsVisible = false;
           $scope.ShowHide = function () {
               //If DIV is visible it will be hidden and vice versa.
               $scope.IsVisible = $scope.IsVisible ? false : true;
             }
});

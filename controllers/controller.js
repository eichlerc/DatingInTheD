var app = angular.module('cheapDate');

// var jsonObject = {};
// app.controller("cuisCtrl", function($scope, $http){
      // $scope.cuisine=function(){
      //    $http({
      //         method: "GET",
      //         url: "https://developers.zomato.com/api/v2.1/cuisines?city_id=285"
      //     }).then(function successCallback(response) {
      //         console.log(response);
      //         jsonObject = response;
      //     });
      //   }
//       //   $scope.cuisine();
// } );

app.controller('cuisCtrl',function($scope, dateFactory){
  $scope.getlist = function(){
    console.log('hey');
  $scope.food =  dateFactory.datespot();
  console.log($scope.food);
  }
    $scope.getlist();
});

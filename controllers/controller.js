var app = angular.module('cheapDate');

var jsonObject = {};
app.controller("cuisCtrl", function($scope, $http){
// $scope.jsonObject=[];

      $scope.cuisine=function(){
         $http({
              method: "GET",
              url: "https://developers.zomato.com/api/v2.1/cuisines?city_id=285",
              // headers: {"user-key":"fd1e005e05d56aaca19b77f9469c04ae"}
          }).then(function successCallback(response) {
              // $scope.jsonObject = response.data.cuisines;
              console.log(response);
              jsonObject = response;
          });
        }
        $scope.cuisine();
} );

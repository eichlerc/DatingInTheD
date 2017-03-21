var app = angular.module('cheapDate');

//needed to initiallize the jsonObject outside of the controller function.
var jsonObject = {};
app.controller("cuisCtrl", function($scope, $http){

      $scope.cuisine=function(){
         $http({
              method: "GET",
//using the cuisines url with city_id 285 (metro Detroit). We may need multiple urls to accomplish what we want.
              url: "https://developers.zomato.com/api/v2.1/cuisines?city_id=285"
          }).then(function successCallback(response) {
              console.log(response);
//the response is built in angular and automatically pulls the data from the API. Just need to set the response = jsonObject so we can access the information.
              jsonObject = response;
          });
        }
        $scope.cuisine();
} );

var app= angular.module('cheapDate');

app.factory("dateFactory", function($http){
var jsonObject=[];
var jsonObject2=[];
var jsonObject3 = [];
return {
  dates : dates,
  datespot : datespot,
  datespot2 : datespot2,
  datespot3 : datespot3
};
//gets the jsonObject data from Zomato
    function dates(){
      var places =  $http({
              method: "GET",
              url: "https://developers.zomato.com/api/v2.1/search?entity_id=285&entity_type=city"
          }).then(function successCallback(response) {
          //  console.log(response);
            jsonObject = response.data.restaurants;
          });
          var places2 =  $http({
                  method: "GET",
                  url: "https://developers.zomato.com/api/v2.1/search?entity_id=285&entity_type=city&start=21"
              }).then(function successCallback(response2) {
          //      console.log(response2);
                jsonObject2= response2.data.restaurants;
              });
              var places3 =  $http({
                      method: "GET",
                      url: "https://developers.zomato.com/api/v2.1/search?entity_id=285&entity_type=city&start=41"
                  }).then(function successCallback(response3) {
              //      console.log(response3);
                    jsonObject3= response3.data.restaurants;
                  });
          return places;
         return places2;
         return places3;
        }

//returns the jsonObject arrays
      function datespot(){

      return jsonObject;
      }

      function datespot2(){
      return jsonObject2;
      }

      function datespot3(){
      return jsonObject3;
      }


});

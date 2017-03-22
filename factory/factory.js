var app= angular.module('cheapDate');

app.factory("dateFactory", function($http){

var jsonObject={};
return {
  dates : dates,
  datespot : datespot
};
//gets the jsonObject data from Zomato
    function dates(){
      var places =  $http({
              method: "GET",
              url: "https://developers.zomato.com/api/v2.1/cuisines?city_id=285",
//              headers: {"user-key":"fd1e005e05d56aaca19b77f9469c04ae"}
          }).then(function successCallback(response) {
//            console.log(response);
            jsonObject = response.data;
            return jsonObject;


          });
          return places;
        }

//returns the jsonObject
      function datespot(){

        return jsonObject;
      }
});

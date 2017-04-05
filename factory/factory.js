var app= angular.module('cheapDate');

app.factory("dateFactory", function($http){
var jsonObject=[];
// var jsonObject2=[];
// var jsonObject3 = [];
// var jsonObject4 = [];
// var jsonObject5 = [];
return {
  dates : dates,
  datespot : datespot,
  // datespot2 : datespot2,
  // datespot3 : datespot3,
  // datespot4 : datespot4,
  // datespot5 : datespot5
};
//gets the jsonObject data from Zomato
    function dates(){
      var places =  $http({
              method: "GET",
              url: "https://developers.zomato.com/api/v2.1/search?entity_id=285&entity_type=city&start=20&lat=42.4895&lon=-83.1446&radius=20000.0"
          }).then(function successCallback(response) {
          //  console.log(response);
            jsonObject = response.data.restaurants;
          });
          // var places2 =  $http({
          //         method: "GET",
          //         url: "https://developers.zomato.com/api/v2.1/search?entity_id=285&entity_type=city&start=20&lat=42.33&lon=-83.05&radius=12874.0"
          //     }).then(function successCallback(response) {
          // //      console.log(response2);
          //       jsonObject2= response.data.restaurants;
          //     });
          //     var places3 =  $http({
          //             method: "GET",
          //             url: "https://developers.zomato.com/api/v2.1/search?entity_id=285&entity_type=city&start=40&lat=42.33&lon=-83.05&radius=12874.0"
          //         }).then(function successCallback(response) {
          //     //      console.log(response3);
          //           jsonObject3= response.data.restaurants;
          //         });
          //         var places4 =  $http({
          //                 method: "GET",
          //                 url: "https://developers.zomato.com/api/v2.1/search?entity_id=285&entity_type=city&start=60&lat=42.33&lon=-83.05&radius=12874.0"
          //             }).then(function successCallback(response) {
          //         //      console.log(response3);
          //               jsonObject4= response.data.restaurants;
          //             });
          //             var places5 =  $http({
          //                     method: "GET",
          //                     url: "https://developers.zomato.com/api/v2.1/search?entity_id=285&entity_type=city&start=80&lat=42.33&lon=-83.05&radius=12874.0"
          //                 }).then(function successCallback(response) {
          //             //      console.log(response3);
          //                   jsonObject5= response.data.restaurants;
          //                 });
         return places;
        //  return places2;
        //  return places3;
        //  return places4;
        //  return places5;
        }

//returns the jsonObject arrays
      function datespot(){

      return jsonObject;
      }

      // function datespot2(){
      // return jsonObject2;
      // }
      //
      // function datespot3(){
      // return jsonObject3;
      // }
      //
      // function datespot4(){
      // return jsonObject4;
      // }
      //
      // function datespot5(){
      // return jsonObject5;
      // }
      //

});

var app = angular.module('cheapDate', []);

//this is where the access to the API is. With it in the module it can be accessed everywhere it is needed.
//this should work for any url we use from zomato.
app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common = {
      "Accept": "application/json",
      "user-key":  "6284e75678445df82c7e04438151187c"
      };

		}]);

//we can still add the ngRoute information here in the module.

//cuisine directive setup below.
	app.directive("cuisine", function() {

    return {
        restrict: "E",
        templateUrl: "cuisines.html",
        replace: false
    }
});

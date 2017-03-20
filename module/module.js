var app = angular.module('cheapDate', []);


app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common = {
      "Accept": "application/json",
      "user-key":  "6284e75678445df82c7e04438151187c"
      };

		}]);


	app.directive("cuisine", function() {

    return {
        restrict: "E",
        templateUrl: "cuisines.html",
        replace: false
    }
});

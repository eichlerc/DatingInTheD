var app = angular.module('cheapDate', ['ngRoute']);

//this is where the access to the API is. With it in the module it can be accessed everywhere it is needed.
//this should work for any url we use from zomato.
app.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.headers.common = {
      "Accept": "application/json",
      "user-key":  "6284e75678445df82c7e04438151187c"
      };

		}]);

//we can still add the ngRoute information here in the module.
app.config(function($routeProvider, $locationProvider){

$routeProvider
//when 'userinput' is clicked the html partial in the .html file below will be loaded. using the controller inputCtrl
.when('/cuisines', {
  controller:'cuisCtrl',
  templateUrl: 'cuisines.html'
})
.when('/cuisines2', {
  controller:'cuisCtrl',
  templateUrl: 'cuisines2.html'
})
.when('/cuisines3', {
  controller:'cuisCtrl',
  templateUrl: 'cuisines3.html'
});

$locationProvider.hashPrefix('');

});
//cuisine directive setup below.
	app.directive("naviBar", function() {

    return {
        restrict: "E",
        template: "<ul><li><a href=''>HOME</a></li><li><a href='' ng-click='ShowHide()'>ABOUT</a></li></ul>",
        replace: false
    }
});

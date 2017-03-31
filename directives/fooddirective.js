var app= angular.module('cheapDate');

app.directive('foodDirective', function(){

return {
  restrict: 'AE',
  templateUrl: 'food.html',
  replace: false

};
});
//cuisine directive setup below.
	app.directive("naviBar", function() {

    return {
        restrict: "E",
        template: "<ul class='navbar'><li><a href='index.html'>HOME</a></li><li><a href='' ng-click='ShowHide()'>ABOUT</a></li></ul>",
        replace: false
    };

});

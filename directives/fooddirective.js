var app= angular.module('cheapDate');

app.directive('foodDirective', function(){

return {
  restrict: 'AE',
  templateUrl: 'food.html',
  replace: false

};

});

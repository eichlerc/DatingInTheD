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
        template: "<ul class='navbar'><li><a href='index.html'>HOME</a></li><li><a href='' ng-click='toggleModal()'>THE TEAM</a></li></ul>",
        replace: false
    };

});

app.directive('modalDialog', function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    replace: true, // Replace with the template below
    transclude: true, // we want to insert custom content inside the directive
    link: function(scope, element, attrs) {
      scope.dialogStyle = {};
      if (attrs.width)
        scope.dialogStyle.width = attrs.width;
      if (attrs.height)
        scope.dialogStyle.height = attrs.height;
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    template: "<div class='ng-modal' class='ng-cloak' ng-show='show'><div class='ng-modal-overlay' ng-click='hideModal()'></div><div class='ng-modal-dialog' ng-style='dialogStyle'><div class='ng-modal-close' ng-click='hideModal()'>X</div><div class='ng-modal-dialog-content' ng-transclude></div></div></div>"
  };
});

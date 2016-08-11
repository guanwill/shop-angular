angular.module('shopApp')
.directive('jumbotron', jumbotron); //angular translates any capitals into dashes. eg. cardView becomes card-view

function jumbotron() {
  var directive = {};
  directive.restrict = 'E'; //match element name
  directive.replace = false;
  directive.templateUrl = "_jumbotron.html"; //find the jumbotron partial
  directive.scope = {
    item: '@', //allows us to use this anywhere in the app
    callFunc: '&',
    ngModel: '='  //here you can pass it a model so you can change it
  };
  return directive;  //calls a directive and returns is
}

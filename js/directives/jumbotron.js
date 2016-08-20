angular.module('shopApp')
.directive('jumbotron', jumbotron); //angular translates any capitals into dashes. eg. cardView becomes card-view

function jumbotron() {
  var directive = {};
  directive.restrict = 'E'; //match element name
  directive.replace = false;
  directive.templateUrl = "_jumbotron.html"; //find the jumbotron partial
  directive.scope = {
    item: '@', //allows us to use this anywhere in the app
    callFunc: '&', // allows you to invoke an expression on the parent scope of whatever the directive is inside of.
    ngModel: '='  //here you can pass it a model for data-binding purposes
  };
  return directive;  //calls a directive and returns is
}



//scope: true does not create an isolate scope, it creates a new child scope that prototypically inherits from the parent scope, hence the reason $parent.model works. (An isolate scope is created when we use the scope: { ... } syntax. Here, an new child scope is also created, but it does not prototypically inherit from the parent.) In general, a child scope should be used with ng-model since you are creating a component that needs to interact with other directives (i.e., ng-model).

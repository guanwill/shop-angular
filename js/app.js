angular
  .module("shopApp", ['ui.router', 'ngResource']) //grab resources and dependencies
  .constant('API', 'http://localhost:3000/api/items')
  .config(MainRouter); //router configuration function defined below

  function MainRouter($stateProvider, $urlRouterProvider){
	$stateProvider //define diff routes here.
		.state('home', {
			url: "/", //the route
			templateUrl: "home.html" //the view
		})
		.state('about', {
			url: "/about", //the route
			templateUrl: "about.html" //the view
		})
		.state('jumbotron', {
			url: "/jumbotron", //the route
			templateUrl: "jumbotron.html" //the view
		})
		// .state('archive', { //chain states to create another route
		// 	url: "/archive",
		// 	templateUrl: "archive.html"
		// });

	$urlRouterProvider.otherwise("/"); //global route. if you go any other url, redirect to '/'
}

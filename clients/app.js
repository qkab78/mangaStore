var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'MangasController',
		templateUrl: 'views/manga.html'
	})
	.otherwise({redirectTo: '/'})
});
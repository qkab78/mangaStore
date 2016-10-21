var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'MangasController',
		templateUrl: 'views/manga.html'
	})
	.when('/mangas',{
		controller: 'MangasController',
		templateUrl: 'views/manga.html'
	})
	.when('/mangas/details/:id',{
		controller: 'MangasController',
		templateUrl: 'views/detailManga.html'
	})
	.when('/mangas/ajout',{
		controller: 'MangasController',
		templateUrl: 'views/ajoutManga.html'
	})
	.when('/mangas/edit/:id',{
		controller: 'MangasController',
		templateUrl: 'views/editManga.html'
	})
	.otherwise({redirectTo: '/'})
});
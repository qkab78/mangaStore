var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		controller: 'MangasController',
		templateUrl: 'views/mangas/manga.html'
	})
	.when('/mangas',{
		controller: 'MangasController',
		templateUrl: 'views/mangas/manga.html'
	})
	.when('/mangas/details/:id',{
		controller: 'MangasController',
		templateUrl: 'views/mangas/detailManga.html'
	})
	.when('/mangas/ajout',{
		controller: 'MangasController',
		templateUrl: 'views/mangas/ajoutManga.html'
	})
	.when('/mangas/edit/:id',{
		controller: 'MangasController',
		templateUrl: 'views/mangas/editManga.html'
	})
	.when('/connexion',{
		controller: 'UsersController',
		templateUrl: 'views/users/connexion.html'
	})
	.when('/inscription',{
		controller: 'UsersController',
		templateUrl: 'views/users/inscription.html'
	})
	.otherwise({redirectTo: '/'})
});
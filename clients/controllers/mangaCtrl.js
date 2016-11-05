var myApp = angular.module('myApp');
if (myApp) {
	console.log("Le controller angular est chargé...");
}

myApp.controller('MangasController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http,$location, $routeParams) {
	$scope.getMangas = function(){
		$http.get('/mangas').success(function(response) {
			console.log("getMangas() fonctionne !");
			$scope.mangas = response;
			console.log(response);
		});
	}
	$scope.getMangaById = function () {
		var id = $routeParams.id;
		$http.get('/mangas/details/'+id).success(function (response) {
			console.log("getManga() fonctionne !");
			$scope.manga = response;
			console.log(response);
		});
	}
	$scope.updateManga = function () {
		var id = $routeParams.id;
		$http.put('/mangas/edit/'+id, $scope.manga).success(function (response) {
			console.log("updateManga() fonctionne !");
			window.location.href="#/";
			console.log(response);
		});
	}
	$scope.deleteManga = function (id) {
		$http.delete('/mangas/delete/'+id).success(function (response) {
			console.log("deleteManga() fonctionne !");
			window.location.href="#/";
			console.log(response);
		});
	}
}]);
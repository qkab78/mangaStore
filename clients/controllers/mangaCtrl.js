var myApp = angular.module('myApp');
if (myApp) {
	console.log("Le controller angular est chargé...");
}

myApp.controller('MangasController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http,$location, $routeParams) {
	$scope.getMangas = function(){
		$http.get('/mangas').success(function(response) {
			console.log("Le controller angular fonctionne !");
			$scope.mangas = response;
			console.log(response);
		});
	}
}]);
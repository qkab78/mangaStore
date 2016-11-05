var myApp = angular.module('myApp');
if (myApp) {
	console.log("Le controller angular est chargé...");
}

myApp.controller('MangasController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http,$location, $routeParams) {
	$scope.getUsers = function(){
		$http.get('/users').success(function(response) {
			console.log("getUsers() fonctionne !");
			$scope.users = response;
			console.log(response);
		});
	}
	$scope.getUserById = function () {
		var id = $routeParams.id;
		$http.get('/users/details/'+id).success(function (response) {
			console.log("getUserById() fonctionne !");
			$scope.manga = response;
			console.log(response);
		});
	}
	$scope.updateUser = function () {
		var id = $routeParams.id;
		$http.put('/users/edit/'+id, $scope.manga).success(function (response) {
			console.log("updateUser() fonctionne !");
			window.location.href="#/";
			console.log(response);
		});
	}
	$scope.deleteUser = function (id) {
		$http.delete('/users/delete/'+id).success(function (response) {
			console.log("deleteUser() fonctionne !");
			window.location.href="#/";
			console.log(response);
		});
	}
}]);
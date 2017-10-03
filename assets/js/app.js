var app = angular.module('app',[]);
app.controller("MainController", function($scope){

    $scope.movies = [
        {
            title: "Game of Thrones",
            year: 2011,
			duration: '1h 00min',
			genre: 'Adventure, Drama, Fantasy',
            actors: 'Actor One',
			description: "Nine noble families fight for control over the mythical lands of Westeros, while a forgotten race returns after being dormant for thousands of years",
			poster: 'posters/16972.jpg',
			trailer: 'giYeaKsXnsI'
        }

    ];
	
	$scope.updateM = function() {
		$('article').removeClass('hidden');
		$scope.rndm1 = $scope.movies[Math.floor(Math.random() * $scope.movies.length)];
		$scope.rndm2 = $scope.movies[Math.floor(Math.random() * $scope.movies.length)];
		$scope.rndm3 = $scope.movies[Math.floor(Math.random() * $scope.movies.length)];
		do {
			$scope.rndm2 = $scope.movies[Math.floor(Math.random() * $scope.movies.length)];
			$scope.rndm3 = $scope.movies[Math.floor(Math.random() * $scope.movies.length)];
		} while ( $scope.rndm2 == $scope.rndm1 || $scope.rndm3 == $scope.rndm2 || $scope.rndm3 == $scope.rndm1 );
	}
	
});
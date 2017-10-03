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
        },
        {
            title: "Walking Dead",
            year: 2010,
			duration: '1h 00min',
			genre: 'Drama, Horror, Thriller',
			actors: 'Actor One',
			description: "Sheriff Deputy Rick Grimes wakes up from a coma, to learn the world is in ruins, and must lead a group of survivors to stay alive",
			poster: 'posters/15532.jpg',
			trailer: 'MWSF9RZiUos'
        },
        {
            title: "Firefly",
            year: 2002,
			duration: '1h 00min',
			genre: 'Adventure, Drama, Sci-Fi',
			actors: 'Actor One',
			description: "Five hundred years in the future, a renegade crew aboard a small spacecraft tries to survive as they travel the unknown parts of the galaxy and evade warring factions as well as authority agents out to get them",
			poster: 'posters/3802.jpg',
			trailer: 'mG9bSBGLtMc'
        },
        {
            title: "Banshee",
            year: 2013,
			duration: '1h 00min',
			genre: 'Action, Crime, Drama',
			actors: 'Actor One',
			description: "An ex-con assumes the identity of a murdered sheriff in the small town of Banshee, Pennsylvania, where he has some unfinished business",
			poster: 'posters/24931.jpg',
			trailer: 'VI7haj7HTCA'
        },
        {
            title: "Grey's Anatomy",
            year: 2005,
			duration: '1h 00min',
			genre: 'Drama, Romance',
			actors: 'Actor One',
			description: "A drama centered on the personal and professional lives of five surgical interns and their supervisors",
			poster: 'posters/4861.jpg',
			trailer: 'q1pcpgREQ5c'
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
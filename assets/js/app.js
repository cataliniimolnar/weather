var app = angular.module('app',[]);
app.controller("MainController", function($scope){

    $scope.movies = [
        {
            title: "2 Guns",
            year: 2013,
			duration: ' 1:49',
			genre: 'Action, Comedy, Crime',
            actors: 'Denzel Washington, Mark Wahlberg, Paula Patton',
			description: "Two hardened criminals get into trouble with the US border patrol after meeting with a Mexican drug lord, and then revelations start to unfold.",
			poster: 'https://borgdotcom.files.wordpress.com/2014/05/2-guns-movie-poster.jpg',
			trailer: 'AK6EbfdnTHg'
        },
        {
            title: "3 10 to Yuma",
            year: 2007,
			duration: ' 2:02',
			genre: 'Adventure, Crime, Drama',
            actors: 'Russell Crowe, Christian Bale, Ben Foster',
			description: "TA small-time rancher agrees to hold a captured outlaw who's awaiting a train to go to court in Yuma. A battle of wills ensues as the outlaw tries to psych out the rancher.",
			poster: 'https://upload.wikimedia.org/wikipedia/en/2/27/310_to_Yuma_%282007_film%29.jpg',
			trailer: 'mmtYNhFTPpw'
        },
        {
            title: "3 Idiots",
            year: 2009,
			duration: ' 2:44',
			genre: 'Adventure, Comedy, Drama',
            actors: 'Aamir Khan, Madhavan, Mona Singh',
			description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently, even as the rest of the world called them 'idiots'.",
			poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BZWRlNDdkNzItMzhlZC00YTdmLWIwNjktYjY5NjQ1ZmQ3N2FkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,747,1000_AL_.jpg',
			trailer: 'K0eDlFX9GMc'
        }






        /*
        ,
        {
            title: "",
            year: 2007,
			duration: '1:00',
			genre: '',
            actors: '',
			description: "",
			poster: '',
			trailer: ''
        }
        */

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
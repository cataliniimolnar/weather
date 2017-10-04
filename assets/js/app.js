var app = angular.module('app',[]);
app.controller("MainController", function($scope){

    $scope.movies = [
{ 
title: "10 Things I Hate About You ", year: 1999, duration: '1:37', genre: 'Comedy, Drama, Romance', actors: 'Heath Ledger,  Julia Stiles,  Joseph Gordon-Levitt', description: "A pretty, popular teenager can't go out on a date until her ill-tempered older sister does.", poster: "https://s1.r-l.ro/sm/1/4/14.jpg", trailer: 'uE7qjQlfoRs'}
, { title: "10,000 B.C. ", year: 2008, duration: '1:49', genre: 'Action, Adventure, Drama', actors: 'Camilla Belle,  Steven Strait,  Cliff Curtis', description: "A prehistoric epic that follows a young mammoth hunter's journey through uncharted territory to secure the future of his tribe.", poster: "https://s1.r-l.ro/sm/8/4/8444.jpg", trailer: 'kxLKoa6pkxo'}
, { title: "The 11th Hour ", year: 2007, duration: '1:35', genre: 'Documentary', actors: 'Leonardo DiCaprio,  Kenny Ausubel,  Thom Hartmann', description: "A look at the state of the global environment including visionary and practical solutions for restoring the planet's ecosystems. ", poster: "https://s3.r-l.ro/sm/8/6/8642.jpg", trailer: '7IBG2V98IBY'}
, { title: "12 Years a Slave ", year: 2013, duration: '2:14', genre: 'Biography, Drama, History', actors: 'Chiwetel Ejiofor,  Michael Fassbender, Brad Pitt', description: "In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. ", poster: "https://s4.r-l.ro/sm/2/2/22837.jpg", trailer: 'z02Ie8wKKRg'}
, { title: "13 ", year: 2010, duration: '1:31', genre: 'Drama, Thriller', actors: 'Jason Statham, Sam Riley,  Alice Barrett', description: "A naive young man assumes a dead man's identity and finds himself embroiled in an underground world of power, violence, and chance where men gamble behind closed doors on the lives of other men.", poster: "https://s1.r-l.ro/sm/1/5/15830.jpg", trailer: '7mQr3vUQzYc'}
, { title: "13 Hours", year: 2016, duration: '2:24', genre: 'Action, Drama, History', actors: 'John Krasinski,  Pablo Schreiber,  James Badge Dale', description: "During an attack on a U.S. compound in Libya, a security team struggles to make sense out of the chaos. ", poster: "https://s1.r-l.ro/sm/2/7/27890.jpg", trailer: '5MBjAN7jqsQ'}



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
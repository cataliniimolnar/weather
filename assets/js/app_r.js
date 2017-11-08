var app = angular.module('app',[]);
app.filter('shuffle', function() {
    var shuffledMov = [],
        shuffledLength = 0;
    return function(arr) {
        var o = arr.slice(0, arr.length);
        if (shuffledLength == arr.length) return shuffledArr;
        for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        shuffledArr = o;
        shuffledLength = o.length;
        return o;
    };
	});
app.controller("MainController", ["$scope", "$http", function($scope, $http){
    
    $http.get("assets/data/data.json").success(function(data){
        $scope.movies = data;
    });

	}]);
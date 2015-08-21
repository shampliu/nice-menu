var main = angular.module('main', []);



function mainCtrl($scope, $http) {

	$scope.decimal = function(num) {
		if (Math.floor(num) != num) {
			return true;
		}
		return false; 
	}

	$scope.parseReview = function(string) {
		return string.split('-')[1];
	}

	$scope.parseRating = function(string) {
		var stars = Math.floor(string.split('-')[0]);

		return new Array(stars * 1);
	}

	$scope.sortProp = 'title.$t';

	var url = "https://spreadsheets.google.com/feeds/list/1n5OTsDtiKS39NUgeDtl_zCYn6YgYwoqT2tLbgwNhHWw/od6/public/values?alt=json";
	$http.get(url).success(function(data){
		$scope.places = data.feed.entry;
	});

	$scope.truncate = function(string) {
		return (string.length >  14 ? string.substring(0, 14) + '...' : string);
	}
	
	

	// $.ajax({
	// 	url : url,
	// 	dataType : "jsonp",
	// 	success : function(data) {
	// 		console.log(data);
	// 	}
	// });

	

	

	

}


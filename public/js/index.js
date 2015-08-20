var main = angular.module('main', []);



function mainCtrl($scope, $http) {

	$scope.sortProp = 'title.$t';

	var url = "https://spreadsheets.google.com/feeds/list/1n5OTsDtiKS39NUgeDtl_zCYn6YgYwoqT2tLbgwNhHWw/od6/public/values?alt=json";
	$http.get(url).success(function(data){
		console.log(data.feed.entry);
		$scope.places = data.feed.entry;


	    // console.log(JSON.parse(data));
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


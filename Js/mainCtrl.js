var app = angular.module('quoteBook');

app.controller('mainCtrl', function($scope, dataService) {


	$scope.showAddQuote = 1;

	var getData = function() {
		$scope.quotes = dataService.getData()

	}
	getData();

	$scope.addData = function(text, author) {
		dataService.addData({
			"text": text,
			"author": author
		});
	}

	$scope.removeData = function(text) {
		dataService.removeData(text);
	}

});
var app = angular.module('listExample', []);

app.controller('monthListCtrl', function($scope) {
	$scope.months = {
		"01"	:	"January",
		"02"	:	"February",
		"03"	:	"March",
		"04"	:	"April",
		"05"	:	"May",
		"06"	:	"June",
		"07"	:	"July",
		"08"	:	"August",
		"09"	:	"September",
		"10"	:	"October",
		"11"	:	"November",
		"12"	:	"December"
	};
});

app.controller('countryListCtrl', function($scope) {
	$scope.countries = {
		'India': {
			'Maharashtra': ['Pune', 'Mumbai', 'Nagpur', 'Akola'],
			'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur'],
			'Rajasthan': ['Jaipur', 'Ajmer', 'Jodhpur']
		},
		'USA': {
			'Alabama': ['Montgomery', 'Birmingham'],
			'California': ['Sacramento', 'Fremont'],
			'Illinois': ['Springfield', 'Chicago']
		},
		'Australia': {
			'New South Wales': ['Sydney'],
			'Victoria': ['Melbourne']
		}
	};
});

app.controller('productListCtrl', function($scope) {
	var data=[{"Product":[{"ProductId":1, "Name":"Samsung Tab"},{"ProductId":2, "Name":"iPad"}],"CategoryId":1, "Name":"Tablet"},
				{"Product":[{"ProductId":3, "Name":"Dell XPS"},{"ProductId":4, "Name":"Asus Ultrabook"}],"CategoryId":2, "Name":"Laptop"},
				{"Product":[{"ProductId":5, "Name":"iPhone"},{"ProductId":6, "Name":"Sony XPeria"}],"CategoryId":3, "Name":"Mobile Phone"}];
  
	$scope.Category1= data;
	$scope.$watch('Category1Val', function(newValue) {
		if($scope.Category1.Product != undefined){
			$scope.Category2Val = $scope.Category1.Product[0];
		}
	});
});
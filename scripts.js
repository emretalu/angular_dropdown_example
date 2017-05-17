﻿var app = angular.module('listExample', []);

app.controller('monthListCtrl', function($scope) {
	$scope.months = {
		"01"	:	"Ocak",
		"02"	:	"Şubat",
		"03"	:	"Mart",
		"04"	:	"Nisan",
		"05"	:	"Mayıs",
		"06"	:	"Haziran",
		"07"	:	"Temmuz",
		"08"	:	"Ağustos",
		"09"	:	"Eylül",
		"10"	:	"Ekim",
		"11"	:	"Kasım",
		"12"	:	"Aralık"
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
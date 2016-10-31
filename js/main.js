'use strict';

requirejs.config({
	urlArgs: "vol.1.12",
	waitSeconds: 40,
	paths: {
		jquery: 'vendors/jquery-3.0.0.min',
		angular: 'vendors/angular.min',
		bootstrap: 'vendors/bootstrap.min',
	},
	waitSeconds: 40,
    baseUrl: 'js/',
    priority: [
        'jquery',
        'angular'
    ]
});

requirejs([
	'jquery',
	'angular',	
	'bootstrap',
    'app',
	'modules/controllers'
]);
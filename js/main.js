'use strict';

requirejs.config({
	urlArgs: "vol.1.11",
	waitSeconds: 2000,
    baseUrl: 'js/',
	paths: {
		jquery: 'vendors/jquery-3.0.0.min',
		angular: 'vendors/angular.min',
		bootstrap: 'vendors/bootstrap.min',

	},
    priority: [
        "jquery",
        "angular"
    ]
});

requirejs([
	'jquery',
	'angular',	
	'bootstrap',
    'app',
	'modules/controllers'
]);
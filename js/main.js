'use strict';

requirejs.config({
	urlArgs: "vol.1.0",
	waitSeconds: 200,
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
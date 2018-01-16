// Self executable function that handles the site routes and get's all the external modules
// ngSamples = Application module
// ngRoute = handles the routes
// ui.bootstrap = helps with the bootstrap UI
// ngCookies = helps with creating cookies
// ngulartics & angulartics.segment = helps with tracking user clicks on the page that get sent to Segment
// ngAnimate = for using Angular animations
(function() {
    var app = angular.module('ngSamples', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.modal', 'ngCookies', 'angulartics', 'angulartics.segment', 'ngAnimate', 'ngSanitize', 'ngDialog', 'ngMessages']);

    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'samplesController',
                templateUrl: 'app/views/home.html'
            })
            .when('/solutions', {
                controller: 'samplesController',
                templateUrl: 'app/views/solutions.html'
            })
            .when('/blogs', {
                controller: 'samplesController',
                templateUrl: 'app/views/blogs.html'
            })
            .when('/samples', {
                controller: 'samplesController',
                templateUrl: 'app/views/samples.html'
            })
            .when('/about', {
                controller: 'samplesController',
                templateUrl: 'app/views/about.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
}());

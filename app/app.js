(function () {
    var app = angular.module('TwanaApp', ['ngRoute', 'ngCookies', 'ngAnimate', 'ngSanitize', 'ui.bootstrap']);
    app.config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'BlogController',
                templateUrl: 'app/views/blogs.html'
            })
            .when('/articles', {
                controller: 'BlogController',
                templateUrl: 'app/views/blogs.html'
            })
            .when('/articles/:articleId', {
                controller: 'PageController',
                templateUrl: 'app/views/page.html'
            })
            .when('/about', {
                controller: 'BlogController',
                templateUrl: 'app/views/about.html'
            })
            .when('/contact', {
                controller: 'ContactController',
                templateUrl: 'app/views/contact.html'
            })

            .when('/play', {
                controller: 'PlayController',
                templateUrl: 'app/views/play.html'
            })
            .otherwise({redirectTo: '/'});
    });
}());
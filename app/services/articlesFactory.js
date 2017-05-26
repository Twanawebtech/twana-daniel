(function () {
    var articlesFactory = function ($http) {

        var factory = {};

        // getArticles from a node.js backend
        factory.getArticles = function () {
            //return $http.get('https://twana-daniel.mybluemix.net/articles');
            return $http.get('app/posts/data.json');
        };

        factory.getArticle = function () {
            //return $http.get('https://twana-daniel.mybluemix.net/articles/' + articlesId);
            return $http.get('app/posts/data.json');
        };

        return factory;
    };

    articlesFactory.$inject = ['$http'];
    angular.module('TwanaApp').factory('articlesFactory', articlesFactory);
}());

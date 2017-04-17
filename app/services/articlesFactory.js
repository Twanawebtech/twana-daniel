(function () {
    var articlesFactory = function ($http) {

        var factory = {};
        // getArticles is just a made up function
        factory.getArticles = function () {
            return $http.get('https://twana-daniel.mybluemix.net/articles');
        };

        factory.getArticle = function (articlesId) {
            return $http.get('https://twana-daniel.mybluemix.net/articles/' + articlesId);
        };
        return factory;
    };

    articlesFactory.$inject = ['$http'];
    angular.module('TwanaApp').factory('articlesFactory', articlesFactory);
}());
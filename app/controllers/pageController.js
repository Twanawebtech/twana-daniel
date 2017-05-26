(function() {

    var PageController = function ($scope, $routeParams, articlesFactory, $log) {
        console.log("PageController Active");
        var articleId = $routeParams.articleId;
        $scope.articles = [];

        $scope.pageid = articleId;

        // function to load the articles and call the function
        function init() {
            //synchronous call to the factory where factory has the data
            //$scope.articles = articlesFactory.getArticles();

            //asynchronous call to factory where factory makes an api call to our nodeApp
            articlesFactory.getArticles()
                .success(function (articles) {
                    $scope.articles = articles;
                })
                .error(function (data, status, headers, config) {
                    $log.log(data.error + '' + status);
                });
        }
        init();
    };
    PageController.$inject = ['$scope', '$routeParams', 'articlesFactory', '$log'];
    angular.module('TwanaApp')
        .controller('PageController', PageController);

}());

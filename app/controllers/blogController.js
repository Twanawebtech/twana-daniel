// function for the blog
(function() {

    var BlogController = function ($scope, $log, articlesFactory, siteSettings) {
        console.log("BlogController 2");
        $scope.articles = [];
        $scope.siteSettings = siteSettings;

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

    BlogController.$inject = ['$scope', '$log', 'articlesFactory', 'siteSettings'];

    angular.module('TwanaApp')
        .controller('BlogController', BlogController);

}());

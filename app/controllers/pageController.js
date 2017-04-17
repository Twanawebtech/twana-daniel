(function() {

    var PageController = function ($scope, $routeParams, articlesFactory, $log) {
        console.log("PageController Active");
        var articleId = $routeParams.articleId;
        $scope.articleData = null;

        function init() {
            articlesFactory.getArticle(articleId)
                .then(function (response) {
                    $scope.articleData = response.data;
                    console.log(response.data);
                },
                function (data, status, headers, config) {
                    $log.log(data.error + '' + status);
                });
        }
        init();

    };
    PageController.$inject = ['$scope', '$routeParams', 'articlesFactory', '$log'];
    angular.module('TwanaApp')
        .controller('PageController', PageController);

}());


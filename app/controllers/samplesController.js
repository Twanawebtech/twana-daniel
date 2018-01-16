angular
    .module('ngSamples')
    .controller('samplesController', function ($scope, solutionFactory, blogFactory, sampleFactory) {
        $scope.samples = [];

        $scope.scrollToRight = function () {
            console.log('scrollToRight');
        }

        $scope.scrollToLeft = function () {
            console.log('scrollToLeft');
        }

        // load solutions from the factory
        solutionFactory.getSolutions().then(function (data) {
            $scope.solutions = data.data;
        }).catch(function (error) {
            console.log(error);
        });

        // load blogs from the factory
        blogFactory.getBlogs().then(function (data) {
            $scope.blogs = data.data;
        }).catch(function (error) {
            console.log(error);
        });

        // load samples from the factory
        sampleFactory.getSamples().then(function (data) {
            $scope.samples = data.data;
        }).catch(function (error) {
            console.log(error);
        });
    });






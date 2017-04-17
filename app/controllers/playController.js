// function for playing
(function() {

    var PlayController = function ($scope, $cookieStore) {
        console.log("PlayController");
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers = [
            {joined: '2000-12-02', name: 'John', city: 'Chandler', orderTotal: 9.9956},
            {joined: '1965-01-25', name: 'Zed', city: 'Las Vegas', orderTotal: 19.99},
            {joined: '1944-06-15', name: 'Tina', city: 'New York', orderTotal: 44.99},
            {joined: '1995-03-28', name: 'Dave', city: 'Seattle', orderTotal: 101.50}
        ];


        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };


        // Randomly display the samples
        $scope.random = function(){
            return 0.5 - Math.random();
        };


        // Create and then delete cookie - cookies must be enabled to use analytics
        $scope.areCookiesEnabled = false;
        $cookieStore.put("TestCookie", "Test Cookie added!");
        $scope.cookieValue = $cookieStore.get("TestCookie");

        console.log($scope.cookieValue);
        if ($scope.cookieValue) {
            $cookieStore.remove("TestCookie");
            $scope.areCookiesEnabled = true;
        }
    };


    PlayController.$inject = ['$scope', '$cookieStore'];

    angular.module('TwanaApp')
        .controller('PlayController', PlayController);

}());



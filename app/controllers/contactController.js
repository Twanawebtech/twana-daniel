// function for the blog
(function () {
    var ContactController = function ($scope, $http, $log) {
        // setting message logic to false not display any message by default
        $scope.emailSent = false;

        //The send button will call this method to make an API to a nodeJS app.
        $scope.sendMail = function () {
            // scope binding the form data
            var data = ({
                myName: $scope.myName,
                myEmail: $scope.myEmail,
                mySubject: $scope.mySubject,
                myDescription: $scope.myDescription
            });

            // Simple POST request example (passing data) :
            $http.post('/contact-form', data).success(function (data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                $log.log('Email Sent with status of: ' + status);
                $scope.emailSent = true;

                // Injecting success into the array of alerts
                $scope.alerts = [ {type: 'success', msg: ''} ];
                $scope.alerts[0].msg = 'Thanks ' + data.myName + ', I will be in touch soon!';

                // After user sent the email, then clear the values to be empty
                $scope.myName = "";
                $scope.myEmail = "";
                $scope.mySubject = "";
                $scope.myDescription = "";

            }).error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $log.log("Error occurred: " + '' + status);

                // if there was an error, then display this message
                $scope.alerts = [
                    {type: 'danger', msg: ''}
                ];
                $scope.alerts[1].msg = 'Oops there was a problem sending your request, please contact me directly on twanawebtech@gmail.com';
            });
        };

        // Remove alert message area
        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };
    };
    //Inject the dependencies
    ContactController.$inject = ['$scope', '$http', '$log'];
    angular.module('TwanaApp')
        .controller('ContactController', ContactController);
}());
// Auto execute function

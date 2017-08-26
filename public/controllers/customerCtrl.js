var app = angular.module("myApp");

//Customer Controller
app.controller('customerCtrl', function ($scope, $http) {

    /*AngularJS inbuilt filter filters on the basis of "CONTAINS",
    this  is a Custom Filter to Filter on the basis of "STARTS WITH"*/

    $scope.startsWith = function (actual, expected) {
        var lowerStr = (actual + "").toLowerCase();
        return lowerStr.indexOf(expected.toLowerCase())===0;
    };

    /*Using REST GET Request to get data from the back end in the form of a response,
    .then is a promise which only fires after the get request is successful,
    Assigning the received response data to a $scope.customerList variable to use it in the home.html page*/

    $http.get("/customers")
        .then(function(response) {
            $scope.customerList = response.data;
            console.log($scope.customerList);
        })
        .catch(function (err) {
            console.log('Error is '+err);
        });

    /*Update function triggers when a change is made in the select tag in the home.html page,
        it fires a put request which sends the id and the status to the back end
        after receiving it as parameters from the front end*/

    $scope.update = function (id,status) {
        $http.put('/customers/'+id+"/"+status)
            .then(function (response) {
        })
            .catch(function (err) {
            console.log('Error is '+err);
        });
    };
});
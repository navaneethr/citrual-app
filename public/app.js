var app = angular.module("myApp", ["ngRoute"]);

//Route Configuration
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl : 'views/home.html'
        })
        .when("/inbox", {
            templateUrl : 'views/inbox.html'
        })
        .when("/calender", {
            templateUrl : 'views/calender.html'
        })
        .when("/profile", {
            templateUrl : 'views/profile.html'
        })
        .otherwise({
            templateUrl: 'views/home.html'
        });
});


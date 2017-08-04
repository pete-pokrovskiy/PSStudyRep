(function() {
    var app = angular.module("angularFormsApp", ["ngRoute", "ui.bootstrap"]);

    app.config(function($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "app/Home/Home.html",
                controller: "HomeController"
            })
            .when("/newEmployee", {
                templateUrl: "app/EmployeeForm/efTemplate.html",
                controller: "efController"
            })
            .when("/updateEmployee/:id",
            {
                templateUrl: "app/EmployeeForm/efTemplate.html",
                controller:"efController"
            })
            .otherwise({ redirectTo: "/home" });
    });

}());
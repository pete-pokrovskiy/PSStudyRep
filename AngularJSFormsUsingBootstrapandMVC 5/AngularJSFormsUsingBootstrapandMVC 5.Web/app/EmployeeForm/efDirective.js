(function() {
    var app = angular.module("angularFormsApp");

    app.directive('employeeForm', function() {
        return {
            restrict: "E",
            templateUrl: "app/EmployeeForm/efTemplate.html"
        };
    });
}());
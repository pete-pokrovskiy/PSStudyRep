(function() {
    var HomeController = function ($scope, $location, DataService) {
        $scope.showCreateEmployeeForm = function () {
            $location.path("/newEmployee");

        };

        $scope.showUpdateEmployeeForm = function(id) {
            $location.path("/updateEmployee/" + id);
        }
    }

    var app = angular.module("angularFormsApp");
    app.controller("HomeController", HomeController);
}());
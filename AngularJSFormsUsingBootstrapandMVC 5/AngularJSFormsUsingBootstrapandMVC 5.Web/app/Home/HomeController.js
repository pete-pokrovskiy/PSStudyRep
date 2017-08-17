(function() {
    var HomeController = function ($scope, $location, $uibModal, DataService) {
        $scope.showCreateEmployeeForm = function() {
            $location.path("/newEmployee");

            //для открытия формы с модальном окне
            //$uibModal.open({
            //    templateUrl: "app/EmployeeForm/efTemplate.html",
            //    controller: "efController"
            //});
        };

        $scope.showUpdateEmployeeForm = function(id) {
            $location.path("/updateEmployee/" + id);
        }
    }

    var app = angular.module("angularFormsApp");
    app.controller("HomeController", HomeController);
}());
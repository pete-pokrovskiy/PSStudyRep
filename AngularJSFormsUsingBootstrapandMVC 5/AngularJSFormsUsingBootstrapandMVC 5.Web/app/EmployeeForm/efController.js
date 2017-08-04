(function() {

    var efController = function ($scope, $window, $routeParams, $uibModalInstance, DataService) {

        if ($routeParams.id)
            $scope.employee = DataService.getEmployee($routeParams.id);
        else
            $scope.employee = { id: 0 };

        //делаем deep copy основного объекта для возможности отмены изменений
        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
            "Enginerring",
            "Markerting",
            "Finance",
            "Administration"
        ];



        $scope.submitForm = function () {


            if ($scope.editableEmployee.id === 0) {
                DataService.createEmployee($scope.editableEmployee);
            } else {
                DataService.updateEmployee($scope.editableEmployee);
            }


            $scope.employee = angular.copy($scope.editableEmployee);
            //$window.history.back();
            $uibModalInstance.close();
        };

        $scope.cancelForm = function() {
            //$window.history.back();
            $uibModalInstance.dismiss();
        };


    };

    var app = angular.module("angularFormsApp");
    app.controller("efController", efController);


}());
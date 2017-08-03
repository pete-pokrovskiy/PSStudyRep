angularFormsApp.controller('efController', function($scope, efService) {
    $scope.employee = efService.employee;

    $scope.departments = [
        "Enginerring",
        "Markerting",
        "Finance",
        "Administration"
    ];

    $scope.submitForm = function() {
    };
});
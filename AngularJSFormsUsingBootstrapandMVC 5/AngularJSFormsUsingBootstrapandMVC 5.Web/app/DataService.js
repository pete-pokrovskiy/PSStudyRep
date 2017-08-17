(function() {

    var DataService = function() {

        var getEmployee = function(id) {

            if (id == 123) {

                return {
                    id: 123,
                    fullName: "Adam Johns",
                    notes: "CROC kitchen employee",
                    department: "Administration",
                    hireDate: new Date(),
                    breakTime: new Date(),
                    perkCar: true,
                    perkStock: false,
                    perkSixWeek: true,
                    payrollType: "none"

                };

            }

            return undefined;

        };


        var createEmployee = function(employee) {

            return true;
        };

        var updateEmployee = function(employee) {

            return true;
        };


        return {
            getEmployee: getEmployee,
            createEmployee: createEmployee,
            updateEmployee: updateEmployee

        };
    };

    var app = angular.module("angularFormsApp");

    app.factory('DataService', DataService);
}());
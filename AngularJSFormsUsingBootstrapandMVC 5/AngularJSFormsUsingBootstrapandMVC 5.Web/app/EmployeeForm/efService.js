angularFormsApp.factory('efService', function() {
    return {
        employee: {
            fullName: "Adam Johns",
            notes: "CROC kitchen employee",
            department: "Administration",
            perkCar: true,
            perkStock: false,
            perkSixWeek: true,
            payrollType: "none"
        }
    };
});
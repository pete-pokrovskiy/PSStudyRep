(function() {

    var efController = function ($scope, $window, $routeParams, DataService) {// для работы с модальным окном добавить $uibModalInstance,

        if ($routeParams.id)
            $scope.employee = DataService.getEmployee($routeParams.id);
        else
            $scope.employee = { id: 0 };

        //делаем deep copy основного объекта для возможности отмены изменений
        $scope.editableEmployee = angular.copy($scope.employee);


        //выпадающий список с департаментами
        $scope.departments = [
            "Enginerring",
            "Markerting",
            "Finance",
            "Administration"
        ];


        //кнопка сохранения формы
        $scope.submitForm = function () {


            if ($scope.editableEmployee.id === 0) {
                DataService.createEmployee($scope.editableEmployee);
            } else {
                DataService.updateEmployee($scope.editableEmployee);
            }


            $scope.employee = angular.copy($scope.editableEmployee);
            $window.history.back();
            
            //в случае редактирования в модальном окне
            //$uibModalInstance.close();
        };

        //кнопка отмены сохранения формы
        $scope.cancelForm = function() {
            $window.history.back();
            
            //в случае редактирования в модальном окне
            //$uibModalInstance.dismiss();
        };


        //настройки поля даты Hire Date
        //******************start******************
        $scope.dateFormat = "dd.MM.yyyy";

        $scope.dateOptions = {
            dateDisabled: disabled,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };

        function disabled(data) {
            var date = data.date,
              mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.popup1 = {
            opened: false
        };

        $scope.open1 = function () {
            $scope.popup1.opened = true;
        };
        //******************finsih******************



        //настройки поля времени Break time
        //******************start******************

        $scope.timePickerIptions = {
            showSeconds: true,
            showMeridian: false
        };
        //******************finsih******************


    };

    var app = angular.module("angularFormsApp");
    app.controller("efController", efController);


}());
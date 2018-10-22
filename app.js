(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheck);

    LunchCheck.$inject = ['$scope'];
    function LunchCheck ($scope) {
        $scope.menuLunch = '';
        $scope.menuStatus = '';

        $scope.itemCount = function calculateProducts (products) {
            var menuProductCalculate = 0;
            var menuProductList = [];

            if (products.trim() !== '' && products !== null &&
                products !== undefined && products != Infinity) {
                menuProductList = products.split(',');
                for (var item in menuProductList) {
                    if (menuProductList[item].trim().length > 0) {
                        menuProductCalculate += 1;
                    }
                }
            }

            return menuProductCalculate;
        };

        $scope.isTooMuch = function menuSize () {
            var countMenuItem = $scope.itemCount($scope.menuLunch);
            var displayMessage = 'Please enter data first';
            if (countMenuItem> 0 && countMenuItem <= 3) {
                displayMessage = 'Enjoy!';

            }
            else if (countMenuItem > 3) {
                displayMessage = 'Too much!';
            }

            $scope.menuStatus = displayMessage;
        };

    }
})();

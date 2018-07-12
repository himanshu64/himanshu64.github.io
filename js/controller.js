app.controller("calc", ($scope) => {
    $scope.msg = "Calculator App";
    $scope.append = (num) => {
        if (num) {
            $scope.number += num.toString();
        }
    }
    $scope.reset = () => {
        $scope.flag = 0;
        $scope.number = "";
    }
    $scope.clear = () => {
        $scope.number = 0;
        $scope.num1 = "";
        $scope.num2 = "";
    }
    $scope.internalClear = () => {
        $scope.number = "";
    }
    $scope.store = () => {
        $scope.num1 = $scope.number;
    }
    $scope.addition = () => {
        $scope.flag = 1;
        $scope.store();
        $scope.internalClear();
    }
    $scope.subtract = () => {
        $scope.flag = 2;
        $scope.store();
        $scope.internalClear();
    }
    $scope.multiply = () => {
        $scope.flag = 3;
        $scope.store();
        $scope.internalClear();
    }
    $scope.divide = () => {
        $scope.flag = 4;
        $scope.store();
        $scope.internalClear();
    }
    $scope.check = () => {
        if ($scope.flag == 1) {
            $scope.num2 = $scope.number;
            $scope.number = varOperations.add($scope.num1, $scope.num2);
        }
        if ($scope.flag == 2) {
            $scope.num2 = $scope.number;
            $scope.number = varOperations.sub($scope.num1, $scope.num2);
        }
        if ($scope.flag == 3) {
            $scope.num2 = $scope.number;
            $scope.number = varOperations.mul($scope.num1, $scope.num2);
        }
        if ($scope.flag == 4) {
            $scope.num2 = $scope.number;
            $scope.number = varOperations.div($scope.num1, $scope.num2);
        }
    }

});
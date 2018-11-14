moduloDirectivas.directive('addModalVar', [function () {
        return {
            restrict: 'A',
            templateUrl: 'modal/modal.html',
            scope: {
                arrayDeVariables: '=arrayDeVariables'
            },
            link: function (scope, element, attrs) {
                scope.newVariableAndValue = {
                    name: '',
                    value: ''
                };
                scope.save = function () {
                    var tempVariableAndValue = {
                        name: scope.newVariableAndValue.name,
                        value: scope.newVariableAndValue.value
                    }
                    scope.arrayDeVariables.push(tempVariableAndValue);
                };
            }
        };
    }]);

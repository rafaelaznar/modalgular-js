moduloDirectivas.directive('addModalVar', [function () {
        return {
            restrict: 'A',
            templateUrl: 'modal/modal.html',
            scope: {
                locations: '=locations'
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
                    scope.locations.push(tempVariableAndValue);
                };
            }
        };
    }]);

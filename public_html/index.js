app.controller('indexControl', function ($scope) {
    $scope.variables = [];
    $scope.variables = [{name: "variable 1 pre-cargada", value: 1}, {name: "variable 2 pre-cargada", value: 2}]
    
    
    
    
    $scope.newVariableAndValue = {
        name: '',
        value: ''
    };
    $scope.save = function () {
        var tempVariableAndValue = {
            name: $scope.newVariableAndValue.name,
            value: $scope.newVariableAndValue.value
        }
        $scope.variables.push(tempVariableAndValue);
    };
    $scope.initialize = function () {
        // posible llamada ajax 
        var respuestaAJAX={name:"repuesta AJAX al cargar la modal",value:"oooooooooo"};       
        $scope.variables.push(respuestaAJAX);
        
    };
//    self.$onInit = function () {
//        //ajax 
//        var respuestaAJAX={name:"ooooooo",value:"oooooooooo"};
//        
//        self.arrayDeVariables.push(respuestaAJAX);
//    };
    
    
    
    
});
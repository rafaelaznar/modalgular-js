moduloDirectivas.component('caddModalVar', {
    //restrict: 'A',
    templateUrl: 'cmodal/cmodal.html',
    bindings: {
        arrayDeVariables: '='
    },
    controllerAs: 'c',
    controller: addModalVarController
});

function addModalVarController($http) {
    var self = this;
    self.newVariableAndValue = {
        name: '',
        value: ''
    };
    self.save = function () {
        var tempVariableAndValue = {
            name: self.newVariableAndValue.name,
            value: self.newVariableAndValue.value
        }
        self.arrayDeVariables.push(tempVariableAndValue);
    };
//    self.$onInit = function () {
//        //ajax 
//        var respuestaAJAX={name:"ooooooo",value:"oooooooooo"};
//        
//        self.arrayDeVariables.push(respuestaAJAX);
//    };
}



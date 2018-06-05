var Billetes={
    "Dolares":[
        {"c":100,"v":200},
        {"c":100,"v":100},
        {"c":100,"v":50},
        {"c":100,"v":20},
        {"c":100,"v":10}
    ],
    "Euros":[
        {"c":100,"v":200},
        {"c":100,"v":100},
        {"c":100,"v":50},
        {"c":100,"v":20},
        {"c":100,"v":10}
    ],
    "Soles":[
        {"c":100,"v":200},
        {"c":100,"v":100},
        {"c":100,"v":50},
        {"c":100,"v":20},
        {"c":100,"v":10}
    ]
};

var cant = 0;
var rest = 0;
var rB = {
    "Dolares":[
        {"c":0,"v":200},
        {"c":0,"v":100},
        {"c":0,"v":50},
        {"c":0,"v":20},
        {"c":0,"v":10}
    ],
    "Euros":[
        {"c":0,"v":200},
        {"c":0,"v":100},
        {"c":0,"v":50},
        {"c":0,"v":20},
        {"c":0,"v":10}
    ],
    "Soles":[
        {"c":0,"v":200},
        {"c":0,"v":100},
        {"c":0,"v":50},
        {"c":0,"v":20},
        {"c":0,"v":10}
    ]
};;

var cajero = angular.module('Cajero',[]);
cajero.controller('contenedor',function($scope){
    $scope.res="Esperando Accion";
    $scope.bill=Billetes;

    $scope.totalActual=function(tp){
        var T_A=0;
        for(var i in Billetes[tp]){
            T_A = T_A + (Billetes[tp][i].c * Billetes[tp][i].v);  
        }
        return T_A;
    }

    $scope.Retirar = function(){
        if($scope.moneda==null || $scope.moneda==""){
            $scope.res="Tipo de Moneda no Seleccionada";
        }
        else if($scope.Dinero==null||$scope.Dinero=="" ){
            $scope.res="No se a Ingresado Monto";
            
        }else if($scope.Dinero<10){
            $scope.res="Monto minimo es 10 "+$scope.moneda;
        }
        else if($scope.Dinero % 1 != 0){
            $scope.res="No se permiten decimales";
        }
        else if($scope.totalActual($scope.moneda) < $scope.Dinero){
            $scope.res="Cajero no Cuenta con la Cantidad Solicitada";
        }
        else{
            for (var B in Billetes[$scope.moneda]) {
                if(Billetes[$scope.moneda][B].c > 0 ){
                    cant = Math.floor($scope.Dinero / parseInt(Billetes[$scope.moneda][B].v));
                    if(cant > Billetes[$scope.moneda][B].c){
                        rest = cant - Billetes[$scope.moneda][B].c;
                        cant = cant - rest;
                    }
                    rB[$scope.moneda][B].c = rB[$scope.moneda][B].c + cant;
                    $scope.Dinero = $scope.Dinero - (cant * Billetes[$scope.moneda][B].v);
                    Billetes[$scope.moneda][B].c = Billetes[$scope.moneda][B].c - cant;
                    if($scope.Dinero == 0){
                        if(Billetes[$scope.moneda][B].c <= 0){
                            delete Billetes[$scope.moneda][B];
                        }
                        break;
                    }
                }
            }
        }
    }
});

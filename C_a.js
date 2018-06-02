var Billetes={
    "Dolares":[
        {"c":100,"v":200},
        {"c":100,"v":100},
        {"c":100,"v":50},
        {"c":100,"v":20},
        {"c":100,"v":10}
    ],
    "Euros":[
        {"c":100,"v":2000},
        {"c":100,"v":100},
        {"c":100,"v":50},
        {"c":100,"v":20},
        {"c":100,"v":10}
    ],
    "Soles":[
        {"c":100,"v":20000},
        {"c":100,"v":100},
        {"c":100,"v":50},
        {"c":100,"v":20},
        {"c":100,"v":10}
    ]
};
//var T_A = 0; // Total de Efectivo actual

//var resultado="";

var cajero = angular.module('Cajero',[]);
cajero.controller('contenedor',function($scope){
    $scope.res="Esperando Accion";
    $scope.bill=Billetes;

    $scope.totalActual=function(tp){
        var T_A=0;
        console.log(tp);
        for(var i in Billetes[tp]){
            T_A = T_A + (Billetes[tp][i].c * Billetes[tp][i].v);  
        }
        return T_A;
    }

    $scope.Retirar = function(){
        console.log($scope.Dinero);
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
    }
});

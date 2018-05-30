var Billetes={
    "Dolar":[
        {"c":10,"v":200},
        {"c":10,"v":100},
        {"c":10,"v":50},
        {"c":10,"v":20},
        {"c":10,"v":10}
    ],
    "Euro":[
        {"c":10,"v":200},
        {"c":10,"v":100},
        {"c":10,"v":50},
        {"c":10,"v":20},
        {"c":10,"v":10}
    ],
    "Soles":[
        {"c":10,"v":200},
        {"c":10,"v":100},
        {"c":10,"v":50},
        {"c":10,"v":20},
        {"c":10,"v":10}
    ]
};

var resultado="";

var cajero = angular.module('Cajero',[]);
cajero.controller('contenedor',function($scope){
    for(var i in Billetes){
       resultado=resultado+"Billete: "+i+"\n";
       for(var x in Billetes[i]){
        resultado=resultado+" Valor: "+Billetes[i][x].v;
        resultado=resultado+" Cantidad: "+Billetes[i][x].c+"\n";
       }
    }
    console.log(resultado);
    $scope.res=Billetes;
});
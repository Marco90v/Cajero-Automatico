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

//var resultado="";

var cajero = angular.module('Cajero',[]);
cajero.controller('contenedor',function($scope){
    /*for(var i in Billetes){
       resultado=resultado+"Billete: "+i+"\n";
       for(var x in Billetes[i]){
        resultado=resultado+" Valor: "+Billetes[i][x].v;
        resultado=resultado+" Cantidad: "+Billetes[i][x].c+"\n";
       }
    }
    console.log(resultado);*/
    $scope.res=Billetes;
});
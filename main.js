const Random = require("random-js");
//var random = new Random(Random.engines.mt19937().autoSeed());
//var value = random.integer(1, 100);const random = require('random-js')();

function main(){

    let random = new Random(Random.engines.mt19937().autoSeed());
    let value = random.integer(0, 15);

    console.log('simulação iniciando');
    //gerar fila

    let fila = [];
    let tarefaCliente = getActType(1);

    for (let i = 0; i < value; i++) {
        fila.push(createClient());
    }
    console.log(value + ' clientes gerados aleatoriamente');

    fila.push({ act : tarefaCliente });

    var total = fila
        .map(el => el.act.duration)
        .reduce(function(acc, val, i, ar){
            return acc + val;
        });
    
    console.log('total de tempo para pagar uma conta: ' + total + ' minutos');
}

function createClient(){
    return {
       act: getRandomAct() 
    }
}


function getRandomAct(){

    let random = new Random(Random.engines.mt19937().autoSeed());
    let value = random.integer(1, 100);
    let actType = 0;

    if(value < 31)
        actType = 1;
    else if(value > 30 && value < 71)
        actType = 2;
    else if(value > 70 && value < 76)
        actType = 3;
    else if(value > 75 && value < 86)
        actType = 4;
    else if(value > 85 && value < 91)
        actType = 5;
    else if(value > 90 && value < 101)
        actType = 6;

    return getActType(actType);
        
}

function getActType(val){
    switch (val) {
        case 1:

            return { type:1, name: 'pagar conta', duration: 5 };
        case 2:
            
            return { type:2, name: 'sacar dinheiro', duration: 2 };
        case 3:
            
            return { type:3, name: 'abrir conta', duration: 20 };
        case 4:
            
            return { type:4, name: 'pedir cartao novo', duration: 8 };
        case 5:
            
            return { type:5, name: 'negociar divida', duration: 10 };
        case 6:
            return { type:6, name: 'bloquear cartao', duration: 10 };
        default:
            return { type:1, name: 'pagar conta', duration: 5 };
    }
}

main();
function prinGreeting() {
    console.log("Oi");
    // return => retorno dessa função
}

// printGreeting(); => chamada da função

//Adicione seu nome na função.

function printGreeting(name) {
    console.log("Oi", + name + " tudo bem com você?");

}

let primeiroNome = "Dayane";
printGreeting(primeiroNome);

//

function makeGreeting(name) {
    return " Oi, " + name + " tudo bem com você ?";
}

console.log(makeGreeting("Vanessa"));

let greeting = makeGreeting(" Leandro");

console.log(greeting)

// outra maneira de fazer
function makeGreeting(name) {
    let text = " olá, " + name + " tudo bem com você ?"
    return text;
}

// que parametro usar para saber se uma pessoa pode dirigir?

function canDrive(age) {
    if (age >= 18) {
        return true;
    }
    else {
        return false;
    }
}

let dayaneDrive = canDrive(32);

console.log(dayaneDrive)

// Estrutura de uma função:

// function nomeDaFuncao(param1, param2)=> entrada de valores { 
// => os paramentros serão convertidos em variaveis dentro da função.
// return param1 + param2 => retorna um valor
// let resultado = param1 + param2; => se necessário podemos declarar uma funcao.
//}delimita o corpo de nossa função
// invocar uma funcao/ chamada:
// nomeDaFuncao(10, 20); => param1(10) param2(20) ou
// nomeDaFuncao(); => qdo nao tem parametro

// desenvolver um jogo que temos que desenvolver um carro com sua funcionalidades
// ligar/desligar, direcionar, dar seta, acelerar, frear.

//=> declarar o estado inicial do carro: 
let statusCarro = "desligado";
let aceleracao = 0;
let rotacaoDoVolante = 0;

function ligarDesligar() {
    if (statusCarro === "desligado") {
        stausCarro = "ligado";
    } else {
        statusCarro = "desligado"
    }
    return statusCarro;
}

function acelerar(incremento) {
  aceleracao = aceleracao + incremento;

  return "Acelerando a" + aceleracao + "m/s2";
}

function frear(decremento) {
    aceleracao = aceleracao - decremento;

    return "Desacelerando para" + aceleracao + "m/s2";

}

function girarVolante(rotacao) {
    rotacaoDoVolante = anguloRotacao;

    return rotacaoDoVolante + "Q";
 
}


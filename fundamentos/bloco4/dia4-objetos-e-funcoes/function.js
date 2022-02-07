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




// O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24

// fatorial = return 10

let numero = 10
let resultado = 1

for (let index = 1; index < numero; index += 1) {
    resultado *= index;
}

console.log(resultado)
// O fatorial é representado pelo sinal !
//! = 4 x 3 x 2 x 1 = 24

// fatorial = return 10

let numero = 10
let resultado = 1

for (let index = 1; index < numero; index += 1) {
    resultado *= index;
}

console.log(resultado)

// desenvolva um algoritimo capaz de inverter uma palavra

let word = ["tryber", "Fioravante", "Dayane"];
 for (let index = 0; index < word.length; index += 1){
    let invertida = word[index].split('').reverse().join('');
    console.log(invertida);
 }

 let palavra = "tryber";
 let palavraInvertida = ''
 for ( let index = palavra.length - 1; index >= 0; index -= 1) {
    palavraInvertida += palavra[index];
 }
console.log(palavraInvertida)



















































































































































































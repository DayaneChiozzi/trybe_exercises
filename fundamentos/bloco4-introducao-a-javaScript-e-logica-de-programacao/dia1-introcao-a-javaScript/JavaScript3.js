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
for (let index = 0; index < word.length; index += 1) {
   let invertida = word[index].split('').reverse().join('');
   console.log(invertida);
}

let palavra = "tryber";
let palavraInvertida = ''
for (let index = palavra.length - 1; index >= 0; index -= 1) {
   palavraInvertida += palavra[index];
}
console.log(palavraInvertida)

// desenvolva um algoritimo capaz de inverter cada palavra dentro do array utilizando apenas o for.

let palavra1 = ["tryber", "Fioravante", "Dayane"];
let palavraInvertida2 = "";

//for (let index1 = 0; index1 < palavra1.length; index1 += 1) {
//console.log(palavra1[index1])

for (let index = palavra1.length - 1; index >= 0; index -= 1) {
   palavraInvertida2 += palavra1[index];
}
//}
console.log(palavraInvertida2)

// EXERCICIO 3 -escreva dois algoritimos: 1 que retorne a maior palavra deste array e 
//outro que retorne a menor.considere o nº de caracteres de cada palavra. 


let lista = ['java', 'javascript', 'python', 'html', 'css'];
let max = "";

for (let index = 0; index < lista.length; index += 1) {
   if (lista[index].length > max.length ) {
      max = lista[index]
   }  
}

console.log(max)


let lista = ['java', 'javascript', 'python', 'html', 'css'];
let min = "";
for (let index = 0; index < lista.length; index += 1) {
   if  (lista[index].length < min.length){
      min = lista[index];
   }
}
console.log(min)

// EXERCICIO 4 -Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, 
//escreva um algoritmo que retorne o maior número primo entre 0 e 50.













































































































































































let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for (let index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let lista of names) {
  console.log(lista);
}

// exercicio 1
let total = 0;
let media = 0;

// exercicio 2
for (let index = 0; index < numbers.length; index += 1) {
  total += numbers[index];
}

// exercicio 3
media = total / numbers.length;

// exercicio 4
if (media > 20) {
  console.log("Valor maior que 20.");
} else {
  console.log(" Valor menor ou igual a 20")
}

// exercicio 5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumero ) {
    maiorNumero = numbers[index]
  }
}
console.log(maiorNumero);
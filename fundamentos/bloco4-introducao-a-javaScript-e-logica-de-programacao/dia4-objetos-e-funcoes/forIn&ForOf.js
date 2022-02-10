// for in

let pizzasDoces = ["chocolate", "banana", "morango"];
for (let key in pizzasDoces) {
    console.log(key, pizzasDoces[key]); // => ele mostra a posição do indice + valor correspondente
}

console.log(key);// => retorna as posições do Array
console.log(pizzasDoces); // => ele vai os valores (no caso 3 vezes por conta que são 3 posicoes)
console.log(pizzasDoces[key]); // ele vai mostrar o indice 1 por vez

// for off

//1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome,
//substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

//for (let key in names)
  //  console.log("olá " + names[key])

// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.


let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020,
    
};

for (let  in car);

console.log(indice, car[indice]);
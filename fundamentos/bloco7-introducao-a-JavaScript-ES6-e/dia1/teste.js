//template literals

const myName = "Isabella";
console.log("Welcome" + " " + myName + "!");

const myName = "Isabella";
console.log(`Welcome ${myName}!`);

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`);

// Sem o template literals:
console.log("Primeira linha;\n" + "Segunda linha;\n" + "Terceira linha;\n");

//arrow function

// sem utilizar arrow function
const printName = function () {
  const myName = "Lucas";
  return myName;
};

console.log(printName());

//utilizando arrow function
const printName = () => {
  const myName = "Lucas";
  return myName;
};

console.log(printName());

//simplificado
const printName = () => "Lucas";
console.log(printName());

//Quando a função recebe apenas um argumento podemos omitir os parênteses
const multiplyByTwo = (number) => number * 2;
console.log(multiplyByTwo(10));

//funções que recebem mais de um parâmetro, os parênteses não são omitidos:

//ternary operator
// Situação em que é mais simples usar o operador ternário:
const checkIfElse = (age) => {
  if (age >= 18) {
    return `Você tem idade para dirigir!`;
  } else {
    return `Você ainda não tem idade para dirigir...`;
  }
};
console.log(checkIfElse(15));

const checkTernary = (age) =>
  age >= 18
    ? `Você tem idade para dirigir!`
    : `Você ainda não tem idade para dirigir...`;

console.log(checkTernary(15));

// ------------------------

// Situação em que usar o operador ternário não faz muito sentido:
const checkIfElse = (fruit) => {
  if (fruit === `maçã`) {
    return `Essa fruta é vermelha`;
  } else if (fruit === `banana`) {
    return `Esta fruta é amarela`;
  } else {
    return `Não sei a cor`;
  }
};

console.log(checkIfElse(`morango`));

const checkTernary =
  fruit === `maçã`
    ? `Essa fruta é vermelha`
    : fruit === `banana`
    ? `Esta fruta é amarela`
    : `Não sei a cor`;

// Aninhar operadores  ternários, como no exemplo acima, não é uma boa prática,
// pois torna o seu código truncado e difícil de ler, tirando todo o sentido de um
// operador cujo objetivo é facilitar a sua vida e a da pessoa que lerá seu código
// no futuro!

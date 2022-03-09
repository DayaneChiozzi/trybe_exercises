//Passar funções como argumento para outras funções:
const sayHello = () => {
  return 'hello trybers';
};

const printGreeting = (callback) => {
  // console.log(callback());
};

printGreeting(sayHello);

//Retornar uma função de outra função:
const sumFixAmount = (amount) => {
  return (number) => amount + number;
};

const initialSum = sumFixAmount(15);
console.log(initialSum(5));

// para fixar

const wakeUp = () => {
  return 'Acordando!!';
};

const coffee = () => 'Bora Tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => func();
console.log(doingThings(wakeUp));

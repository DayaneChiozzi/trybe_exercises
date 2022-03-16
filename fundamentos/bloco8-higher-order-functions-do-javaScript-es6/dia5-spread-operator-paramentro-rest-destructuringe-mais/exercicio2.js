const sumAll = (...numbers) => {
  let sum = 0;
  numbers.forEach((element) => {
    sum += element;
  });
  return sum;
};

console.log(sumAll(10, 01, 2019, 31, 08, 1989, 07, 07, 1988));

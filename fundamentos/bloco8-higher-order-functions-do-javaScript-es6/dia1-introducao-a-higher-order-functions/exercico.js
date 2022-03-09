const newEmployees = (generalEmployees) => {
  const employees = {
    id1: generalEmployees('Pedro Guerra'),
    id2: generalEmployees('Luiza Drumond'),
    id3: generalEmployees('Carla Paiva'),
  };
  return employees;
};

const generalEmployees = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com` };
};

console.log(newEmployees(generalEmployees));

// para executar esse exercicio precisei da ajuda do gabarito
// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio.
//  Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e
//  uma função que checa se o número apostado é igual ao número sorteado.
//  O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

const checkerNumber = (numberApostado, numberSorteado) =>
  numberApostado === numberSorteado;

const resultSorteio = (numberApostado, checkerNumber) => {
  const numberSorteado = Math.floor(Math.random() * 5 + 1);

  return checkerNumber(numberApostado, numberSorteado)
    ? 'Lucky day,you won!'
    : 'Try Again';
};

console.log(resultSorteio(5, checkerNumber));

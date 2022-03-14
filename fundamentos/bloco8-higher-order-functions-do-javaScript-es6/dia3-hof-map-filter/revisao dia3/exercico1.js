const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

exercico 1 - revisao
const dadosBook = (element) => {
  const resultDadosBook = `${element.name} - ${element.genre} - ${element.author.name}`;
  return resultDadosBook;
};

const result = books.map(dadosBook);
console.log(result);

exercicio 2 - revisao

const arrayObject = (element) => {
  return {
    age: element.releaseYear - element.author.birthYear,
    author: element.author.name,
  };
};

const resultArrayObject = books.map(arrayObject);
const resutAgeAndName = resultArrayObject.sort((a, b) => a.age - b.age);
console.log(resutAgeAndName);

exercicio 3 -revisao

const arrayGenre = (array) => {
  const resultGenre = array;
  if (array.genre === 'Fantasia' || array.genre === 'Ficção Científica') {
    return resultGenre;
  }
};

const genre = books.filter(arrayGenre);

console.log(genre);

exercicio 4 -revisao

const booksMore60 = (element) => {
  const resultbooksMore60 = 2022 - element.releaseYear;
  return resultbooksMore60 > 60;
};

const resulteMore60 = books.filter(booksMore60);
const moreAge = resulteMore60.sort((a, b) => a.releaseYear - b.releaseYear);
console.log(moreAge);

// exercicio 5 - revisao
const arrayAuthorGenre = (array) => {
  const resultGenre = array;
  if (array.genre === 'Fantasia' || array.genre === 'Ficção Científica') {
    return resultGenre;
  }
};

const genre = books.filter(arrayAuthorGenre);
const nameAuthor = genre.map((element) => element.author.name).sort();
console.log(nameAuthor);

exercicio 6 -revisao

const booksMore60 = (element) => {
  const resultbooksMore60 = 2022 - element.releaseYear;
  return resultbooksMore60 > 60;
};

const resulteMore60 = books.filter(booksMore60);
const arraybooksMore60 = resulteMore60.map((element) => element.name).sort();

console.log(arraybooksMore60);

const nameBookAuthor = (element) => {
  const result = element.author.name === 'J. R. R. Tolkien';
  return result;
};

const resultNameBookAuthor = books.filter(nameBookAuthor);
const nameBook = resultNameBookAuthor.map((element) => element.name);
console.log(nameBook);

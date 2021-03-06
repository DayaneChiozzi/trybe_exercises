function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercício 1:

const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

function dayMonthDez() {
  let daylist = document.querySelector("#days");
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement("li");

    if (day === 24 || day === 31) {
      dayItem.className = "day holiday";
      dayItem.innerHTML = day;
      daylist.appendChild(dayItem);
    } else if (day === 4 || day === 11 || day === 18) {
      dayItem.className = "day friday";
      dayItem.innerHTML = day;
      daylist.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = "day holiday Friday";
      dayItem.innerHTML = day;
      daylist.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = "day";
      daylist.appendChild(dayItem);
    }
  }
}
dayMonthDez();
//let dayItem = document.createElement("li"); //criar o list Item que vai representar o dia da nossa lista
//let day = dezDaysList[index]; // aonde eu vou armazenar o elemento atual em cada loop

//exercicio 2

function botaoFeriados() {
  let containerbtn = document.querySelector(".buttons-container"); //trouxe do html a classe(buttons-container)
  let createbtn = document.createElement("button"); //criado elemento botao.
  createbtn.id = "btn-holiday"; // incluido na var createbtn(botao) o id btn-holiday
  createbtn.innerHTML = "Feriado"; //nesse botao, foi incluso o nome Feriado
  containerbtn.appendChild(createbtn); //para add o elemento criado aplicado funcao appendChild, utilizando
  //a var containerbtn onde foi trazido a class buttons-container(pai)e colocado o parametro sobre a funcao
  //creatbtn, elemento botao criado.
  //console.log(containerbtn);
}
botaoFeriados();

// 3-Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias
//que possuem a classe "holiday" .
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração
//inicial com a cor "rgb(238,238,238)" .
function aoClicar() {
  let holidaysDec = document.getElementsByClassName("day holiday");

  for (index = 0; index < holidaysDec.length; index += 1) {
    holidaysDec[index].style.backgroundColor = "red";
  }
}

function mudaCorDeFundo() {
  let botao = document.querySelector("#btn-holiday");

  botao.addEventListener("click", aoClicar);
}

mudaCorDeFundo();

// 4- Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com
//o nome "Sexta-feira".
//Adicione a este botão o ID "btn-friday" .
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .

// 5- mplemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido
//nos dias que são Sexta-feira.
//É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração
//inicial exibindo os dias.

//6-Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no
//calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar
//ao tamanho original.
//Dica - Propriedade: event.target .

//7-Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro
//a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

//8- mplemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função
//deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .

//9- Implemente uma função que adiciona um evento que, ao clicar no elemento com a tag <div> referente a cor da sua
//tarefa, atribua a este elemento a classe task selected , ou seja, quando sua tarefa possuir a classe task selected ,
// ela estará selecionada.
//Ao clicar novamente no elemento, a sua classe deverá voltar a ser somente task , ou seja, esta tarefa está deixando
//de ser uma tarefa selecionada.

//10-Implemente uma função que adiciona um evento que, ao clicar em um dia do mês no calendário, atribua a este dia
// a cor da legenda da sua tarefa selecionada.
//Ao clicar novamente no dia com a cor da legenda, a sua cor deverá voltar à configuração inicial rgb(119,119,119) .

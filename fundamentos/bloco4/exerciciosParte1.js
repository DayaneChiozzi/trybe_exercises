// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome

let info = {
  personagem: 'Margarida ',
  origem: 'Pato Donald ',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald ',
};

info.recorrente ='sim ';
 for (let key in info){
  //console.log(key);
  //console.log(info[key]);
 }

 let info2 = {
  personagem: 'Tio Patinhas ',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178 ',
  nota: 'O último MacPatinhas ', 
  recorrente: 'Sim ', 
};
 
for ( let key in info2){
  //console.log(info2[key]); 
};

console.log(info.personagem + " e " + info2.personagem);
console.log(info.origem + " e " + info2.origem);
console.log(info.nota + " e " + info2.nota);
console.log(info.recorrente + " e " + info2.recorrente);



 //console.log("Bem-vinda, " + info.personagem);

//console.log(info);


// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, 
//imprima o objeto no console.

// 3 - Faça um for/in que mostre todas as chaves do objeto.

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. 

// 5- Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes 
// valores:'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último  
// MacPatinhas','Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. 

let info2 = {
  personagem: 'MargaridaTio Patinhas',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178'
  nota: 'O último MacPatinhas', 'Sim'. 
};
//1-Acesse o elemento elementoOndeVoceEsta .
document.querySelector("#elementoOndeVoceEsta");

//2-Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector("#elementoOndeVoceEsta").parentNode.style.color =
  "green";

// 3-Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
let test = document.querySelector("#primeiroFilhoDoFilho");
test.innerText = "Meu Filme Favorito.";

//okay

// 4- Acesse o primeiroFilho a partir de pai .
const test1 = document.getElementById("pai").children[0];

//console.log(test1);

//5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.querySelector("#elementoOndeVoceEsta").parentNode.children[0];

//6-Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
// 1º eu trouxe o elemento, elementoOndeVoceEsta e coloquei dentro de uma variavel
// depois eu acessei o pai dele, depois o 1º elemento filho, depois o próximo elemento e
//por fim o próximo nó.
let test2 = document.getElementById("elementoOndeVoceEsta").parentNode
  .firstElementChild.nextElementSibling.nextSibling;

//console.log(test2);

//7-Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

let test3 = document.getElementById("elementoOndeVoceEsta").parentNode
  .children[2];
//okay

//console.log(test3);
//8-Agora acesse o terceiroFilho a partir de pai .
let test4 = document.getElementById("pai").children[2];
// okay

//1-Crie um irmão para elementoOndeVoceEsta .
let father = document.getElementById("pai");
let test5 = document.createElement("section");
test5.id = "irmaoElementoOndeVoceEsta";

father.appendChild(test5);

console.log(father); //okay

//2-Crie um filho para elementoOndeVoceEsta .

let filhoElemento = document.createElement("section");
filhoElemento.id = "elementoOndeVoceEstavaFilho";

paiElement.appendChild(filhoElemento);

//console.log(paiElement);okay

//3-Crie um filho para primeiroFilhoDoFilho .
let test6 = document.getElementById("primeiroFilhoDoFilho");
let neto = document.createElement("section");
neto.id = "primeiroFilhoDoFilho2";

test6.appendChild(neto);

//console.log(test6);

//4-A partir desse filho criado, acesse terceiroFilho .

document.getElementById("PrimeiroFilhoDoFilho2");

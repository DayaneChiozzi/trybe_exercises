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
let test2 = (document.getElementById(
  "elementoOndeVoceEsta"
).parentNode.nextSibling.nodeName = "#text");

console.log(test2);

//console.log(test2); não consegui

//7-Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .

let test3 = document.getElementById("elementoOndeVoceEsta").parentNode
  .children[2];
//okay

//8-Agora acesse o terceiroFilho a partir de pai .
let test4 = document.getElementById("pai").children[2];
// okay

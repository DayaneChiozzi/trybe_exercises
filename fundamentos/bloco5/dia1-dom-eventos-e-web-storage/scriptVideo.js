//console.log(document.getElementById("teste")) => imprimindo via Id
// console.log(document.getElementById("teste").innerHTML) => imprimi todo o conteudo dessa id, paragrafo, outras tags..
//console.log(document.getElementById("teste").innertext) => filtra tudo, imprimi apenas o texto.
////console.log(document.getElementById("teste").style) =  imprimi todo css aplicado naquela id
//document.getElementById("teste").innertext) = " Aprendizados da aula de hoje."; => acessando essa id e alterando
// o texto dela.

//exercicio para praticar
const paragraph = document.getElementById("paragraph");
const pageTitle = document.getElementById("page-title");
const secondParagraf = document.getElementById("second-paragraph");

paragraph.style.color = "red";
paragraph.innerHTML = "Filme de comédia romantica";
paragraph.style.fontSize = "30px";

pageTitle.innerHTML = "O Casamento do Meu melhor amigo";
pageTitle.style.fontSize = "30px";

secondParagraf.console.log(pageTitle);

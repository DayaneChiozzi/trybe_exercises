// 1- Crie um objeto player contendo as variáveis listadas abaixo.
//let name = 'Marta';
//let lastName = 'Silva';
//let age = 34;
//let medals = { golden: 2, silver: 3 };

let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,    
    medals: {
        golden: 2,
        silver: 3,
    }       
}
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]; // => nova propriedade que não tinha
// no objeto.

//console.log(player.name+player.lastName+player.age+player.medals.golden+player.medals.silver)

// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console
// uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
//console.log(" A Jogadora " +  player.name + " " + player.lastName + " tem " + player.age + " anos de idade")

// exercico 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo 
// as datas em que a jogadora Marta foi considerada a melhor do mundo.
//console.log(player[bestInTheWorld];

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva
// foi eleita a melhor do mundo por 6 vezes".

console.log(" A Jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por 6 vezes; " + player["bestInTheWorld"] + ".");

//5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".


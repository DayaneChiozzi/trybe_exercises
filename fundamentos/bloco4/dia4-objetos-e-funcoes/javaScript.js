// 1- Crie um objeto player contendo as variáveis listadas abaixo.

//let name = 'Marta';
//let lastName = 'Silva';
//let age = 34;
//let medals = { golden: 2, silver: 3 };

let player = {
    name:'Marta',
    lastName:'Silva',
    age: 34,
    medals:{ 
        golden: 2,
        silver: 3, 
        }
}
//console.log(player.name+player.lastName+player.age+player.medals.golden+player.medals.silver)

// 2 - Acesse as chaves name , lastName e age e concatene as suas informações para imprimir no console
// uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log(" A Jogadora" + player.name + "" + player.lastName + " tem " + player.age + " anos de idade")
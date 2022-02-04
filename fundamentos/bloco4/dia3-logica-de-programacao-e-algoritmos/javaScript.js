let total = 0
let fruits = [3, 4, 10, 1, 12];
for (let index = 0; index < fruits.length; index += 1) {
    total += fruits[index];
}
if (total > 15) {
    console.log(total);
} else {
    console.log("Valor menor que 16.")
}

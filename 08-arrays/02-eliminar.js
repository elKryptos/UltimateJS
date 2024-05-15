const letras = ['a', 'b', 'c', 'd']

//pop sirve para eliminar el ultimo valor de un array 
//y sucesivamente restituirlo
const final = letras.pop();
console.log(final, letras)

//comienzo
const comienzo = letras.shift();
console.log(comienzo, letras);

//sirver para eliminar elementos al interno di un array, ver 01, agregar 
//para mas detalles
letras.splice(1, 2);
console.log(letras);
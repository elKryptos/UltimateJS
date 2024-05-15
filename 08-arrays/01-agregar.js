const letras = ['a', 'b'];

//push viene usado para agregar al final del array
letras.push('c', 'd', 'e', 'f');

//para agregar al comienzo del array
letras.unshift('y', 'z');

//sirver para poder agregar elemento entre medio de valores
//el primer numero es el indice de donde quiero que inicie
//el segundo el para eliminiar el numero de valores partiendo
//desde el indice dado al inicio
letras.splice(3, 0, 1, 2, 'hello', 3, 4);

console.log(letras);
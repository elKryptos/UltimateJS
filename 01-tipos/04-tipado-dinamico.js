/*
 Ci sono 2 tipi di tipado : Tipado Statico (Java) e Tipado Dinamico (JavaScript)
 Nel Tipado statico se assegno un valore a una variable, il linguaggio non mi 
 permetterà di farlo e viene definito il tipo della variabile; per esempio: 
 String nome = "Hola";
 nome = 12;  -> DA ERRORE 
 
 Invece nel tipado dinamico non è necessario che il tipo venga definito come
 avviene in java; per esempio:
 nombre = "Hola";
 nombre = 42;
 */

let number = 42;
let nombre = "Hola mundo";
let verdader = true;
let falso = false;
let undef;
let nulo = null;

console.log(typeof number);
console.log(typeof nombre);
console.log(typeof verdader);
console.log(typeof undef);
console.log(typeof nulo);
/*
"arguments"s serve a passare tutti i valori 
che possono essere dati a una function con 
variabili interne.
E come una specie di array che salva i valori.
Non è raccomandabile farlo ma esiste.
E da non confondere con gli array che sono totalmente diversi.

In questo caso i parametri sono i valori che sono all'interno di 
suma(a,b) quando vengono riferenziate, in questo caso function

Mentre in un richiamo come in 
let resultado = summa(3, 6, 1, 2, 3); si chiamano arguments
 */

function suma(a, b){
    console.log(arguments);
    return a + b;
}
let resultado  = suma(3, 6, 1, 2, 3);

console.log(resultado); 
console.log(suma(5, 9));
console.log(typeof suma); 

function exeer (h){
    return h + 2;
}
console.log(exeer(10));
// function hello(){
//     return 'Test di prova'
// }

// const result = hello();

// console.log(hello)

//todas las fat arrow functions son anonimas
//quiere decir que no existe ninguan parte donde le doy un nombre
//y para referenciarla en futuro tengo que asignarla a una const o variable
//para poder llarmarlo la llamo come si fuera una funcion 

const hello = () =>{
    return "hello world";
}
//esta sintaxis tiene la misma funcion de la que esta arriba, pero 
//puedo usar de este modo solo si dentro della funcion lo que escribo es 
//solo de una linea
const ciao = () => 'Hello World'

const result = hello();
const test = ciao();
console.log(result);
console.log(test);

//dentro de () puedo escribir mas paramteros -> (text, text2, text3)
//pero si tenemos solo un parametro dento, las parentesis pueden ser omitidas
//const saluta = (text) => text + ', ' + 'Hello world';
const saluta = text => text + ', ' + 'Hello world';
const rest1 = saluta('Hans');
console.log(rest1);
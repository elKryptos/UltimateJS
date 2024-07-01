// console.log(saludo)
// console.log(vieja)
// console.log(hello)
// console.log(hola)

// JavaScript hace partir una function siempre al inicio
// Tambien hace lo mismo con las variables declaradas con var
// solo que le asigna el valor de undefined y no le pasa su contenido
// Mientras que con las variable declaradas con let y const no sucede
// como con var, solo que non viene inicializada

function saludo() {}
let hola = 'hola';
const hello = 'hello';
var vieja = 'ya no se usa';

// Cuando declaro variable o funciones usando function o var, van siempre dentro 
// el objeto de window mientras que let y const no van dentro window
console.log(window)

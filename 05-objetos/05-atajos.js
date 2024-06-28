 // todos los objetos que son creados en javascript contienen una propiedad
// llamada constructor y esta propiedad non indica con que constructor 
// fue creado el objeto


let obj = {};
let obj1 = new Object();

/*
new String(); []
new Array();  "" '' ``
new Number(); 12
new Boolean(); true false
*/

function Usuario(){
    this.name = 'Hans';
}

let user = new Usuario();
console.log(user.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(eval(s1), eval(s2));
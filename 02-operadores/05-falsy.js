// short-circuit

// Veamos que valores evaluan en Falso
// false
// 0
// ''
// null
// undefined
// Nan
// Todos estos valores son conocidos como Falsy


// da como resultado el primer valor que encuentra en true
let nombre = 'Chanchito feliz';
let username = nombre || 'Anonimo';
console.log(username);

// viene usada para evaluar funciones siempre en cuando
// la primera aya evaluado en true
function fn1(){
    console.log('soy funcion 1');
    return false;
}
function fn2(){
    console.log('soy funcion 2');
    return true;
}

let x = fn1() && fn2();
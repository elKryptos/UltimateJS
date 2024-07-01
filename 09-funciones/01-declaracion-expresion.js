function suma() {
    console.log('sumando...');
}

// console.log(resta); //hoisting explicacion en el siguiente file

[].map(function() {
    console.log('funcion anonima...');
})

// function expression
let resta = function() {  // Anonymous function expression
    console.log('restando...'); 
}

let multiplica = function multi() {
    console.log('multiplicando...') // Named function expression
}

const divide = () => { // siempre anonima
    console.log('dividiendo...')
}

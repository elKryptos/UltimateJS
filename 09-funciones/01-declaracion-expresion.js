
function suma() {
    console.log('sumando...');
}

console.log(resta); //hoisting explicacion en el siguiente file

[].map(function() {
    console.log('funcion anonima...');
})

// function expression
let resta = function() {  // Anonymousd functin expression
    console.log('restando...'); 
}

let multiplica = function multi() {
    console.log('multiplicando...') // named functions expressions
}

const divide = () => { // siempre anonima
    console.log('dividiendo...')
}


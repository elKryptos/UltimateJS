let ususarios = [
    { id: 1, activo: true },
    { id: 2, activo: false },
    { id: 3, activo: false },
];

// Controla si todos los elementos de un array superan una determinada condición
// Regresa true si TODOS los elementos pasan el test de la función dada si no regresa un false
// Para apenas encuntra un elemento que no supera la condición (osea un false)
let todosActivos = ususarios.every( u => {
    console.log('todos activos', u.id);
    return u.activo;
})

console.log(todosActivos);

// Controla si todos los elementos de un array superan una determinada condición
// Regresa true si almenos un elemento pasa el test de la función dada si no regresa un false
// Para apenas encuentra un elemento que no supera la condición (osea un false)
let algunoActivo = ususarios.some(u => {
    console.log(u.id)
    return u.activo
})

console.log(algunoActivo)
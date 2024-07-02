function sumaTodo(arr) {
    if(!Array.isArray(arr)) {
        throw new Error('El parametro no es un array');
    }
    return arr.reduce((acc, el) => { 
        if(typeof el !== 'number' || Number.isNaN(el)) {
            throw new Error(`Elemento ${el} no es un numero`)
        }
        return acc + el
    });
}


console.log(sumaTodo([1, 2, 3, 4]));
/**
 * Si cambio el valor al interno del array y pongo una stringa
 * o un valor diverso a un numero como NaN, me vota el Throw 
 * avisando y gestionando el error
 */
try{
console.log(sumaTodo([1, 2, 3, 4]));
} catch(e) {
    console.log(e.message);
}

console.log("despues de try catch");
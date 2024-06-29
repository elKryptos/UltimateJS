const numeros = [1, 2, 3, 4];

// El metodo reduce acepta hasta 4 elemento, en este caso
// acc esta por acumulador y es el valr que yo pongo al final de
// la funcion, en este caso he puesto 0, mientras que "el" es
// el primer valor del array que va cambiando a cada operacion 
// efectuada, similar a un for

const suma = numeros.reduce((acc, el) => {
    return acc + el;
}, 0);

console.log(suma);

const anidado = [[1, 2], 3, [4, 5]];

const plano = anidado.reduce((acc, el) => acc.concat(el), []);

console.log(plano);

const usarios = [
    { edad: 34, nombre: 'Nico' },
    { edad: 45, nombre: 'Hans' },
    { edad: 12, nombre: 'Mario' },
    { edad: 10, nombre: 'Luigi' },
];

const index = usarios.reduce((acc, el) => ({
    ...acc, [el.nombre]: el,
}), {});

console.log(index);
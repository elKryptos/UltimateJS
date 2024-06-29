const usarios = [
    { edad: 34, nombre: 'Nico' },
    { edad: 45, nombre: 'Hans' },
    { edad: 12, nombre: 'Mario' },
    { edad: 10, nombre: 'Luigi' },
];

// ??? verlo mas adelando para aclaraciones
const list = usarios.map(u => `<li>${u.nombre}</li>`)

console.log(list);

const list1 = usarios.map(u => u.edad);
console.log(list1)
const usuarios = [
    { edad: 19, nombre: 'Nico' },
    { edad: 17, nombre: 'Hans' },
    { edad: 27, nombre: 'Mario' },
    { edad: 57, nombre: 'Luigi' },
];

// El metodo de filter sirve para filtrar segun las condiciones que necesito 
const mayores = usuarios.filter( u => u.edad > 17);
console.log(mayores);

const menores = usuarios.filter( u => u.edad < 18);
console.log(menores)
let numeros = [15, 10, -3]

// El metodo sort() sirve para ordenar los numero de menor a mayor
numeros.sort();
console.log(numeros);
// El metodo reverse() sirve para ordenar de mayor a menor
numeros.reverse();

let lettere = ['c', 'q', 'z', 'r', 'a'];
lettere.sort();
console.log(lettere);

// let conMay = ['Z', 'f', 'a', 'A']
// conMay.sort((a, b) => {
//     let alower = a.toLowerCase();
//     let blower = b.toLowerCase();

//     if(alower < blower){
//         return -1;
//     }
//     if(alower > blower){
//         return 1;
//     }
//     return 0;
// });
// console.log(conMay);

let usuarios = [
    { edad: 15, nombre: 'Felipe' },
    { edad: 25, nombre: 'Nicolas'},
    { edad: 14, nombre: 'Poli'}
];

usuarios.sort((a,b) => {
    if (a.edad < b.edad) return -1;
    if (a.edad > b.edad) return 1;
})

console.log(usuarios)
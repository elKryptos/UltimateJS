// let user = {
//     id: 1,
//     email: 'hans@gmail.com',
//     name: 'Hans', 
//     activo: true,
//     recuperarClave: function(){
//         console.log('Recuperando clave...')
//     } ,
// };
// Esta funcion sirve para no tener el codigo repetitivo 
// en este caso creamos una function con los valores que voy a usar
// se usa return dentro de la function y agrego los atributos dentro 
// de las parentesis, y para cambiar los valores doy distintos nombres 
// o lo que necesite para crear diversos users en este ejemplo


function crearUsuario(name, email){
    return {
        email,
        name, 
        activo: true,
        recuperarClave: function(){
            console.log('Recuperando clave...')
        } ,
    };
}

let user1 = crearUsuario('Hans', 'hans@gmail.com');
let user2 = crearUsuario('Marco', 'marco@gmail.com');
let user3 = crearUsuario('Daria', 'daria@gmail.com');

console.log(user1, user2, user3);
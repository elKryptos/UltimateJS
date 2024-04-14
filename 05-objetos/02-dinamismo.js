/* 
Cuando definimos un valor con const no podemos cambiar su valor, 
en cambio si la variable que definimos es un objeto podemos cambiar 
el valor a las propiedades del objeto, aumentar o quitar,
lo que no podemos hacer es eliminar el hecho de
que sea un objeto
*/

const user = { id: 1, nome : 'Hans'};

console.log(user);


user.nome = 'Marco'
user.guardar = function(){
    console.log('Guardando nuevo nombre', user.nome);
}
user.guardar();

delete user.nome;
delete user.guardar;
console.log(user);


// con Object.freeze non es posible agregar o modificar sus valores
const user1 = Object.freeze({id: 1});
user1.name = 'Nico';
console.log(user1);
console.log(user1.name);

// para cambiar a las propiedades que ya tiene, sin poder aumentar o quitar
// se usa Object.seal

const user2 = Object.seal({ id: 1, name: 'Hans'})
user2.name = 'Marco';
user2.id = 4;
console.log(user2);
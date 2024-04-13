const user = {id: 1, name: 'Hans'};
console.log(user);

user.name = 'Luigi';
user.guardar = function(){
    console.log('Guardando', user.name);
}

user.guardar();

delete user.name;
delete user.guardar;

console.log(user);
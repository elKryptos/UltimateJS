function createUser(nome){
   return {
    id: Math.random(),
    nome,
   };
}

let user = createUser('Hans');
let user2 = createUser('Luigi');
console.log(user, user2);
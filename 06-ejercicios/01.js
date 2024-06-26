function User(name){
    this.id = Math.random();
    this.name = name;
}

let user1 = new User('Felipe');
let user2 = new User('Chanchito');
console.log(user1, user2)
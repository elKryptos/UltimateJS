function similare(obj1, obj2){
    let distintos = false;
    for(let llave in obj1){
       if (obj1[llave] !== obj2[llave]){
        distintos = true;
       }
    }
    return !distintos;
}

let resultato = similare(
    {id: 1, name: 'Lalo'},
    {id: 1, name: 'Nico'},
);

console.log(resultato);
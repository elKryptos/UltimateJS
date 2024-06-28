const usuarios =[
    {id: 1, name: 'Chanchito'},
    {id: 2, name: 'Hans'},
    {id: 3, name: 'Felipe'},
  
];

// const rest = usuarios.indexOf({id: 1, name: 'Chanchito'});

const res= usuarios.find(function(usuario) {
    return usuario.id === 1;
})

// In JavaScript, un "predicate" è una funzione che restituisce un valore booleano, 
// generalmente utilizzata per valutare una condizione su un elemento o 
// una serie di elementi di una collezione.

// I "predicates" sono comunemente utilizzati in varie funzioni di 
// libreria o metodi di array per filtrare, ordinare o eseguire altre operazioni 
// su una serie di elementi.

// He usado las fat arrow functions para escribir en modo mas cortos las funciones
const res1 = usuarios.find(usuario => 
    usuario.name === 'Felipe');
console.log(res);
console.log(res1)

// Se nella console usando il metodo findIndex o indexOf, lastIndexOf
// da come risultato -1 allora vuol dire che il valore o l'elemento 
// non è stato trovato
const res2 = usuarios.findIndex(usuario  => usuario.name === 'Chanchito');
console.log(res2)
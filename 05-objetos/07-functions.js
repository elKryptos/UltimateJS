// existe un constructor llamado functions
// usando la propiedad call, puedo llamar a la funcion y agregar 
// una variable para despues darle un valor, en el ejemplo hemos 
// agregado un valor de z
// Tambien existe apply con la diferencia que los argumentos se 
// pasan como array mientras en call se pasa 1 a uno


function Punto (x, y){
    this.x = x;
    this.y = y;
    this.dibujar = function() {console.log ('Dibujando...')}
}
 let punto = {z:7};
 Punto.call(punto, 1, 2);
 console.log(punto);


/* const Point = new Function ('x', 'y', `
this.x = x;
this.y = y;
this.dibujar = function() {console.log ('Dibujando...')}
`);

const p = new Point (1, 2);
console.log(p); */
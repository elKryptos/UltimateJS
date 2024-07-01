function suma(a, b) {
   // return a + b
   return Array.from(arguments)
      .reduce((acc, el) => acc + el);
}
/** Arguments es muy similar a un array per no lo es, es un Objeto
 * que esta disponible solo al interno de funciones tradicionales y non 
 * arrow functions () => {}
 * Argumentos dinamico, permite de trabajar con funciones que puede
 * aceptar un numero indefinido de argumentos, permitiendo gestionar 
 * funciones varias 
 */

console.log(suma(2, 6));
console.log(suma(5,2, 3, 4, 5, 6));
let a = 10;

console.log (a>5);
console.log (a>=5);
console.log (a<5);
console.log(a<=5);

/**este tipo de simbolos (==) ya no es usado porque puede generar errores
 * y compara solo el valor pero no el tipo 
 * Este tipo di comparacion era muy usado en el pasado y lo puedo encontrar
 * en codigos escritos en el pasado
 */
console.log(a==10);
console.log(a!=10);

/** si en cambio por el valor que quiero comparar con ''
 * compara el valor al suo intero y ademas el tipo, si es una string,
 * un numero, un boolean etc
 * Actualmente es preferible usar este tipo de simbolo comparador
 * que permite evitar errores en el codigo
 */
console.log(a=='10');
console.log(a!=='10');
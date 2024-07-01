const suma = (a, b) => {
    return Array.from(arguments)  //da error porque no tiene arguments
        .reduce((acc, el) => acc + el)
}

/**Las fat arrow function non tienen arguments por lo que en la 
 * console me aparece error, una fat arrow function es como una function
 * pero reducida y es usada generalmente para hacer calculos.
 * Una fat arrow function no tiene el propio binding 'this' ma viene
 * eredado del contexto lexical en el que viene definidas.
 * 
 * Una fat arrow function tampoco tienen un super();
 **/

console.log(suma(1,23,3,4,5))
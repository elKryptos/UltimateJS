function suma1 (a, b, ...rest) {
    console.log(rest);
}

const suma = (a, b, ...rest) => {
    console.log(rest);
}

/** En JavaScript el operador rest (`...`) es utilizado para
 * recoger un numero indefinido de arguments en un array.
 * El operador rest viene usado principalmente en los parametros de
 * las funciones y la destructuracion de los objetos
 * Puede ser usado con una arrow function
 */
suma(1, 2, 3, 4, 5, 6, 7, 8);

const logMsg = (desc, ...msgs) => {
    for( let msg of msgs) {
        console.log(desc, msg)
    }
}

// logMsg('Event: ', 'Error 1', 'Error 2', 'No data access')

let mensajes = ['Event: ', 'Error 1', 'Error 2', 'No data access'];
logMsg('Client Mobile: ', ...mensajes, 'otro erro')
/**
 * Dentro de un objeto this hace referencia a un objeto
 * En una funcion this hace referencia al objeto window, global
 * Si se usa new have referencia al objeto que serà creado
 */

const user = {
    name: 'Nicolas', 
    login() {
        console.log(this);
    }
};

user.logout = function() {
    console.log(this)
}

user.logout();

function log() {
    console.log(this)
}

log();


function Log(mensaje) {
    this.mensaje = mensaje;
    console.log(this);
}

// al usar new se crea un objeto literal
// se vincula este objeto a this
// se vincula el prototipo
// si no retorna nada entonces retorna this
const l = new Log('Hola mundo');
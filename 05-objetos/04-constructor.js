// {id: 1, recuperarClave: function(){} }

// cuando tenemos una propiedad en JavaScript y le estamos asignando 
// una funcion ya sea con una funcion constructora o factoryfunction a 
// estas dejamos de llamarle funciones, se iniciaran a llamar metodos

function Usuario () {
    this.id = 1;
    this.recuperarClave = function () {
        console.log('Recuperando clave...')
    }
}

// para istanciar el metodo como sucede en java, se una la palabra
// reservada 'new'
let usuario = new Usuario();

console.log(usuario);
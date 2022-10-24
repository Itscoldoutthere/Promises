// const paises = ['Belgica', 'Mexico', 'Chile', 'Puerto Rico', 'Perú'];
// Programación Asíncrona   async
// La programación asíncrona requiere algo de tiempo para dar respuesta a tu petición.
// Cuando la programación asíncrona no existía, las pags web sólo podían "predecir".
// Los callbacks me obligan a esperar las respuestas.
// Las promesas son como un callback pero actualizado. Facilitan el control de la información.


const paises = []

function nuevoPais(pais, callback) {

    paises.push(pais)
    console.log(`Agregado: ${pais}`)
    callback()
}

function mostrarPaises() {
    console.log(paises)
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises)
        setTimeout(() => {
            nuevoPais('Mexico', mostrarPaises)
            setTimeout(() => {
                nuevoPais('Canada', mostrarPaises)
            },1500)
        },1100)
    },900)
}

iniciarCallbackHell();

// mostrarPaises();
// nuevoPais('Alemania',mostrarPaises);


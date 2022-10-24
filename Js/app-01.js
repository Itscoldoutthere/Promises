// const paises = ['Belgica', 'Mexico', 'Chile', 'Puerto Rico', 'Perú'];
// Programación Asíncrona   async
// La programación asíncrona requiere algo de tiempo para dar respuesta a tu petición.
// Cuando la programación asíncrona no existía, las pags web sólo podían "predecir".
// Los callbacks me obligan a esperar las respuestas.
// Las promesas son como un callback pero actualizado. Facilitan el control de la información.


function nuevoPais(pais, callback){
    setTimeout(()=>{
        paises.push(pais)
        callback()
    },1500)
}

function mostrarPaises() {
    setTimeout(() => {
        paises.forEach(pais => {
            console.log(pais)
        })
    }, 2000)
}

// mostrarPaises();
// nuevoPais('Alemania',mostrarPaises);

const paises=[]
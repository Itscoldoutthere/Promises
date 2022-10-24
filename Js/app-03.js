// Resulto o verdadero  - then
// Rechazo/falsa promesa/promesa no resuelta    - catch .- Te regresamos un error a la promesa que se te hizo pq no se cumplió la promesa;
// Valor pendiente (no sabe qué es lo que va a pasar)       -
// Then & catch. Then me returna la promesa y me dice que se cumpliió. Catch. Nos returna el valor no cumplido.
// Finally  me devuelve la promesa. Una promesa es x default un callback



// La promesa es el descuento. Resolve para cuando se cumple. Reject cuando no.
const aplicarDescuento = new Promise((resolve, reject) => {
    const descuento = false;
    // const descuento = true;
    if (descuento) {
        resolve('Descuento se ha aplicado')
    } else {
        reject('No se pudo aplicar el descuento')

    }
})

aplicarDescuento
    .then(resultado => {
        console.log(resultado)        
    }) .catch(error => {
        console.log(error)
    })

console.log(aplicarDescuento);

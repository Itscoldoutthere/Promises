// Callback to promise

const paises = []
const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais)
        resolve(`Agregado: ${pais}`)
    }, 1500)
})

nuevoPais('Mexico').then(resultado=>{
    console.log(resultado)
    console.log(paises)
    return nuevoPais("EUA")
})
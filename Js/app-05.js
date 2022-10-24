const paises =[]
const nuevoPais = pais => new Promise(resolve =>{
    setTimeout (()=>{
        paises.push(pais)
        resolve(`Se agregó: ${pais}`)
    }) , 2000
})

// El setTimeout  sólo es para simular la espera de una resuesta


nuevoPais('Mexico').then(resultado =>{  //Agrega México
    console.log (resultado)   //Me muestra el arreglo w/Mex
    console.log (paises)
    return nuevoPais('EUA')
})
.then(resultado =>{
    console.log (resultado)    //se agrero eua
    console.log (paises)        //Muestra array con mex & eua
    return nuevoPais('Francia')
})
.then(resultado => {
    console.log (resultado)         //Se agrega Francia
    console.log (paises)            //Muestra mex, eua, francia
    // return nuevoPais('EUA')
})
let textoEntrada01 = "Escuela", textoEntrada02 = "ORT"; 
let textoSalida = ""; 

textoSalida = concatInvert(textoEntrada01, textoEntrada02); 
console.clear(); 
console.log(`Textos de Entrada: "${textoEntrada01}" y "${textoEntrada02}"`); console.log(`Texto de Salida: "${textoSalida}"`); 

console.log(concatInvert(textoEntrada01, textoEntrada02))

function concatInvert (texto1, texto2){ 
    let returnValue = ''; 
    let invertido = "";
    let indice = 0;

    for (let i = texto1.length - 1; i >= 0; i--) {

        //invertido = texto1.replace(texto1[indice], texto1[i - 1])
        //indice++
            let letra = texto1[i]
            invertido = invertido.concat('', letra)
        
    }

    //invertido = texto1.replace(texto1[0], texto1[6])


    console.log(invertido)

    returnValue.concat(texto2, texto1)

    return invertido; 
}


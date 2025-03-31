let miUrl    = null;
let miObjeto = null;

miUrl    = 'https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2217247/tp-3-node';
miObjeto = parsearUrl (miUrl);

console.log(miObjeto);

function parsearUrl(laURL){

    const objeto = new URL(laURL)
    objeto.Host = URL.host
    objeto.Pathname = URL.pathname
    objeto.Parametros = new URLSearchParams() 
    return objeto
    
}
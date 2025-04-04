function parsearUrl(laurl)
{

    let miUrl    = null;
    let miObjeto = null;

    miUrl    = 'https://campus.ort.edu.ar/secundaria/almagro/informatica/tp/2217247/tp-3-node';
    miObjeto = parsearUrl(miUrl);

    console.log(miObjeto);

    function parsearUrl(laURL) {
        try {
            const objeto = new URL(laURL);
            return {
                Host: objeto.host,
                Pathname: objeto.pathname,
                Parametros: objeto.searchParams.toString()
            };
        } catch (error) {
            console.error("Error al parsear la URL:", error);
            return { 
                    Host: null, 
                    Pathname: null, 
                    Parametros: null 
            };
        }
    }

}
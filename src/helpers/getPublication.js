const localUrl = 'http://localhost:5000/'

export const getPublication = async (tipo) => {

    const url = `${localUrl}${tipo}/listar`;
    const token = window.localStorage.getItem('x-token') || '';
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'x-token': token
        }
    });
    
    const { publicaciones } = await resp.json();

/*     const info = publicaciones.map(data => {
        return {
            id: data.nombre,
            nombre: data.nombre,
            tipo: data.tipo,
            especie: data.especie
        }
    }) */

    return console.log(publicaciones);


}
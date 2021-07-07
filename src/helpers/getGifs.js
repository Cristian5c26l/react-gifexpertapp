const getGifs = async(category) => {//peticion javascript, devuelve una promesa
    //encodeURI para eliminar espacios de una cadena
    //end point
    //api.giphy.com/v1/gifs/search?q=Crash Bandicoot&limit=10&api_key=ku98RqvWri2FIQcH1eKCIxvq888qNnwm
    //const url = 'https://api.giphy.com/v1/gifs/search?q=Crash Bandicoot&limit=10&api_key=ku98RqvWri2FIQcH1eKCIxvq888qNnwm';
    const url = 'https://api.giphy.com/v1/gifs/search?q='+encodeURI(category)+'&limit=10&api_key=ku98RqvWri2FIQcH1eKCIxvq888qNnwm';
    const resp = await fetch(url);
    //const data = await resp.json();
    //console.log(data);
    const {data} = await resp.json();
    //gifs es un arreglo de datos
    //images? (si viene la url de la imagen, que se utilice)
    const gifs = data.map(imgGif=>{
        return{
                id: imgGif.id,
                title: imgGif.title,
                url: imgGif.images?.downsized_medium.url
            }
        
    })
    //console.log(gifs);//hasta aqui ya tenemos los gifs gracias a la peticion que hemos hecho usando post man (solo 10)
    //setImages(gifs);
    return gifs;
}

export default getGifs;
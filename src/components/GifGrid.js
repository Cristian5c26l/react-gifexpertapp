import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';//ESTE ES UN CUSTOM HOOK
import GifGridItem from './GifGridItem';
//Recibe categoria y realiza una funcion http
const GifGrid = ({category}) => {
    //usamos desestructuracion, sacamos la data que devuelve useFetchGifs(category) y la renombramos a gifImagenes
    const {data:gifsImagenes,loading} = useFetchGifs(category);//useFetchGifs cambia el estado de este componente en el loading

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>
            {/*loading?'Cargando...':'Data cargada'*/}
            {loading&&<p className="animate__animated animate__flash">Loading...</p>}
            <div className="card-grid">
                {
                    gifsImagenes.map((img)=><GifGridItem key={img.id} {...img} />)                 
                }
            </div>
        
        </>
    )
}

export default GifGrid;

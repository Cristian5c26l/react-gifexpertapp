import { useEffect, useState } from "react"
import getGifs from "../helpers/getGifs";
//un custom hook tambien pueden tener estados, por eso usamos useState. Funciona como un functional component
//EXTRAIMOS UNA PEQUEÑA Logica QUE SE IMPLEMENTA ABAJO para realizar una carga automatica
//Cuando tenemos la data despues de 3 segundos, se re-renderiza
//Este custom hook se relaciona con el componente GifGrid
export const useFetchGifs = (category) => {
    const [state,setState] = useState({
        data: [],
        loading: true
    });

    //getGifs es una promesa que retorna (en teoria con exito) un arreglo de gifs, este arreglo es tratado en el then y nombrado imgsGifs
    useEffect(()=>{
        getGifs(category).then(imgsGifs=>{

            //setTimeout(()=>{
                console.log(imgsGifs);//imprime un arreglo de 10 objetos, que son los gifs de getGifs
                setState({
                    data: imgsGifs,
                    loading: false
                })//hasta aqui ya tengo mi custoom hook que regresa
            //},3000);//3 segundos para ejecutarse esto, que seria el setState
        })
    },[category]);//Solo se ejecuta una vez este use effect por cada categoria que el usuario ingrese

    /*setTimeout(()=>{ VIDEO 78
        setState({
            data: [1,2,3,4,5,6,7],
            loading: false
        }

        );
    },3000);//primero retorna el estado*/

    return state;//state = {data[],loading}
}
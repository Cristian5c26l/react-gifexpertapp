//import React from 'react';
import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
//imrs
//rafce
//Primer componente
const GifExpertApp = () => {
    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['Dragon Ball']);
    /*const handleAdd = () => {
        //categories.push('Otro');//esto esta mal, solo se puede cambiar el valor de categories con setCategories
        //setCategories([...categories,'SpiderMan']);//con setCategories cambiamos el estado
        setCategories(cats => [...cats,'Spiderman']);
    }*/
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/**<button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {/**Barremos con expresion que regrese algo*/}
                {
                    categories.map((category)=> 
                        <GifGrid key={category} category={category} />
                        
                    )//recorremos arreglo y category es el actual
                }
            </ol>
        </>
    )
}

export default GifExpertApp;

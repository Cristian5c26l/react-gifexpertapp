//componente que representa un form que contiene un input donde se escribe una categoria y usa la funcion setCategories de el componente GifExpertApp. Se actualizara dicho componennte
import React,{useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {
    const [inputValue,setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value);//actualiza el inputValue y muestra su contenido en el sitio (en este casi input text) donde este se encuentre
    }
    const handleSubmit = (e) => {
        e.preventDefault();//para que no se vaya a otra pagina
        if(inputValue.trim().length > 2){
            setCategories(cats=>[inputValue,...cats]);//setCategories viene de GifExpertApp, que recordemos que cuando llamamos este Set, este re renderiza la parte del .map del arreglo de categories para imprimirlas con <li></li>
            //cats es el arreglo categories de GifExpertApp
            setInputValue('');
        }
       
    }//onSubmit: al presionar enter sobre el unico input que esta en el form
    return (
        <form onSubmit={handleSubmit}>
          {/**e.target.value contiene el valor del input text */}  
          {/**onChange={(e) => {setInputValue(e.target.value)}}   */}
          <input 
              type="text"
              value={inputValue}
              onChange={handleInputChange}
          />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired//se necesita que setCategories sea una propiedad de AddCategory obligatoria. SetCategories debe ser una funcion
}

export default AddCategory;

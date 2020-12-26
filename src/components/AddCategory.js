import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
  const [inputCategorie, setInputCategory] = useState('');

  const handlerInputCategorie = (e) => {
    let {value} = e.target;
    setInputCategory(value);
  }

  const saveCategorie = (e) => {
    if(inputCategorie) setCategories(categories => [inputCategorie,...categories]);
    setInputCategory('');
  }

  const handlerSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <h2>{inputCategorie}</h2>
      <form onSubmit={handlerSubmit}>
        <input type="text" onChange={handlerInputCategorie} value={inputCategorie}/>
        <button onClick={saveCategorie}>Guardar</button>
      </form>
    </div>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}
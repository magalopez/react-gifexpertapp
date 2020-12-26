import React, {useState} from 'react'
// import PropTypes from 'prop-types'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = props => {
  const [add, setAdd] = useState(false);
  const [categories, setcategories] = useState(['One Punch']);

  const handlerButtomAdd = () => {
    setAdd(!add)
  }

  return (
    <>
      <h2>Gif Expert App</h2>
      <hr/>
      <button onClick={handlerButtomAdd}>{!add ? 'Add' : 'Close'}</button>
      {add && <AddCategory setCategories={setcategories} />}
      <ol>
        {categories.map(item => (
          <GifGrid key={item} category={item}/>))}
      </ol>
    </>
  )
}

// GifExpertApp.propTypes = {

// }

export default GifExpertApp

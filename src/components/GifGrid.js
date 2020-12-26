import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import {GifGridItem}  from './GifGridItem';

export const GifGrid = ({category}) => {

  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__bounceInUp">{category}</h3>

      {loading && <p>Cargando...</p>}

      <div className="container-card-images">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img}/>))}
      </div>
    </>
  )
}

import React from 'react'

export const GifGridItem = ({title, url}) => {
  return (
    <div className="card-image animate__fadeIn">
      <img className="card-image__image" src={url} alt={title}/>
      <h2 className="card-image__title">{title}</h2>
    </div>
  )
}
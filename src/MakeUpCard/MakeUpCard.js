import React from 'react'
import './MakeUpCard.css'

function MakeUpCard({ name, price, brand, type, tags, image}) {
  
  return (
    <div className='makeup-card'>
      <div className='product-img'>
        <img src={image}/>
      </div>
      <div className='product-description'>
        <p className='name'>{name}</p>
        <p className='brand'>{brand}</p>
        <p className='price'>Est. Cost - ${price}</p>
      </div>
    </div>
  )
}

export default MakeUpCard
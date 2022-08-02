import React from 'react'
import './MakeUpCard.css'

function MakeUpCard({ name, price, brand, type, tags, image}) {
  
  return (
    <div className='makeup-card'>
      {/* {image && <img src={image}/>} */}
      <p className='name'>{name}</p>
      <p className='brand'>{brand}</p>
      <p className='price'>${price}</p>
    </div>
  )
}

export default MakeUpCard
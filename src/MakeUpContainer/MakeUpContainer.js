import React from 'react'
import MakeUpCard from '../MakeUpCard/MakeUpCard';
import './MakeUpContainer.css'

function MakeUpContainer({ allMakeUp }) {

  const makeUpCards = allMakeUp.map((makeUp) => {
    if(makeUp.image_link) {
      return ( <MakeUpCard 
      key={makeUp.id}
      name={makeUp.name}
      price={makeUp.price}
      brand={makeUp.brand}
      type={makeUp.product_type}
      tags={makeUp.tag_list}
      image={makeUp.image_link}
    />
    )}
  })

  return(
    <section className='makeup-container'>
      {makeUpCards}
    </section>
  )
}

export default MakeUpContainer;
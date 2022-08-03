import React, { useEffect } from 'react';
import MakeUpCard from '../MakeUpCard/MakeUpCard';
import './MakeUpContainer.css';

function MakeUpContainer({ allMakeUp, type, filterByType }) {

  useEffect(() => {
    if(type && filterByType) {
      filterByType(type)
    }
  }, [type]); 

  let makeUpCards;
  
  if(allMakeUp) {
    makeUpCards = allMakeUp.map((makeUp) => 
        <MakeUpCard 
          key={makeUp.id}
          name={makeUp.name}
          price={makeUp.price}
          brand={makeUp.brand}
          type={makeUp.product_type}
          image={makeUp.image_link}
        /> 
    )
  };

  return(
    <section className='makeup-container'>
      {makeUpCards}
    </section>
  )
}

export default MakeUpContainer;
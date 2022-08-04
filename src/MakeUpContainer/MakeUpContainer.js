import React, { useEffect } from 'react';
import MakeUpCard from '../MakeUpCard/MakeUpCard';
import './MakeUpContainer.css';
import PropTypes from 'prop-types';

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

MakeUpContainer.propTypes = {
  allMakeUp: PropTypes.array,
  type: PropTypes.string,
  filterByType: PropTypes.func
}
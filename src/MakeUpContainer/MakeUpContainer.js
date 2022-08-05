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
          type={makeUp.product_type}
          image={makeUp.image_link}
        /> 
    )
  };

  return(
    <section>
      <p className='num-items'>{allMakeUp.length} Items</p>
      <div className='makeup-cards'>
        {makeUpCards}
      </div>
    </section>
  );
};

export default MakeUpContainer;

MakeUpContainer.propTypes = {
  allMakeUp: PropTypes.array,
  type: PropTypes.string,
  filterByType: PropTypes.func
}
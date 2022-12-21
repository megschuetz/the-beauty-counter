import React from 'react';
import './MakeUpCard.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MakeUpCard({ id, name, price, brand, type, image}) {
  
  return (
    <Link className='makeup-card' to={`./id/${id}`} end='true'>
      <div className='product-img'>
        <img alt={`${type}-product-img`} src={image}/>
      </div>
      <div className='product-description'>
        <p className='name'>{name}</p>
        <p className='brand'>{brand}</p>
        <p className='price'>Est. Cost - ${parseInt(price).toFixed(2)}</p>
      </div>
    </Link>
  );
};

export default MakeUpCard;

MakeUpCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  brand: PropTypes.string,
  type: PropTypes.string,
  image: PropTypes.string
}
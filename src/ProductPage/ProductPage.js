import React from 'react';
import './ProductPage.css';
import stars from '../stars.jpeg'


function ProductPage({allMakeUp, id}) {

  const product = allMakeUp.find((product) => product.id === parseInt(id))

  const { image_link, name, product_type, brand, price, description, product_link, website_link } = product

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  
  const getPrice = () => {
    if(!price) {
      return 'Price Unknown'
    }
    return `$${parseInt(price).toFixed(2)}`
  }


 return(
  <div className='product-view'>
    <section className='single-img-container'>
      <img className='single-img' src={image_link} onClick={() => openInNewTab(product_link)}></img>
    </section>
    <section className='single-prod-description'>
      <p className='single-brand' onClick={() => openInNewTab(website_link)}>{brand}</p>
      <p className='single-name'>{name}</p>
      <p className='tiny-text'>Beauty | {product_type}</p>
      <div className='rating'>
        <img className='stars' src={stars}/>
        <p className='rating'>4.2</p>
      </div>
      <p className='single-price'>{getPrice()}</p>
      <p className='single-description'>{description}</p>
      <button className='find' onClick={() => openInNewTab(product_link)}>Find</button>
    </section>
  </div>
 );
};

export default ProductPage
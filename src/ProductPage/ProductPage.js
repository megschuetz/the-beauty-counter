import React from 'react';
import './ProductPage.css';
import stars from '../stars.jpeg'


function ProductPage({allMakeUp, id}) {

  
  const product = allMakeUp.find((product) => product.id === parseInt(id))

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
  
  console.log('details', product)

 return(
  <div className='product-view'>
    <img className='single-img' src={product.image_link} onClick={() => openInNewTab(product.product_link)}></img>
    <section className='single-prod-description'>
      <p className='single-brand' onClick={() => openInNewTab(product.website_link)}>{product.brand}</p>
      <p className='single-name'>{product.name}</p>
      <p className='tiny-text'>Beauty | {product.product_type}</p>
      <div className='rating'>
        <img className='stars' src={stars}/>
        <p className='rating'>4.2</p>
      </div>
      <p className='single-price'>${parseInt(product.price).toFixed(2)}</p>
      <p className='single-description'>{product.description}</p>
      <button className='find' onClick={() => openInNewTab(product.product_link)}>Find</button>
    </section>
  </div>
 );
};

export default ProductPage
import React from 'react';
import "./Dropdown.css";
import { NavLink } from 'react-router-dom';

function Dropdown({ allMakeUp }) {

  // const productTypes = allMakeUp.reduce((types, makeup) => {
  //   if(!types.includes(makeup.product_type)) {
  //     types.push(makeup.product_type)
  //   }
  //   return types
  // }, []);

  // const navLinks = productTypes.map((type) => {
  //   return <NavLink className='link' to={`./${type}`}>{type}</NavLink>
  // });


  return (
    <div className='type-list'>
      <NavLink className='all' to={`/`}>ALL</NavLink>
      <NavLink className='link' to={`./mascara`}>mascara</NavLink>
      <NavLink className='link' to={`./eyebrow`}>eyebrow</NavLink>
      <NavLink className='link' to={`./eyeliner`}>eyeliner</NavLink>
      <NavLink className='link' to={`./foundation`}>foundation</NavLink>
      <NavLink className='link' to={`./bronzer`}>bronzer</NavLink>
      <NavLink className='link' to={`./blush`}>blush</NavLink>
      <NavLink className='link' to={`./lip_liner`}>lip liner</NavLink>
      <NavLink className='link' to={`./lipstick`}>lipstick</NavLink>
      <NavLink className='link' to={`./eyeshadow`}>eyeshadow</NavLink>
    </div>
  );
};

export default Dropdown;
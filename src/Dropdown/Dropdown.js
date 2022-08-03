import React from 'react';
import "./Dropdown.css";
import { NavLink } from 'react-router-dom';

function Dropdown({ allMakeUp }) {

  const productTypes = allMakeUp.reduce((types, makeup) => {
    if(!types.includes(makeup.product_type)) {
      types.push(makeup.product_type)
    }
    return types
  }, []);

  const navLinks = productTypes.map((type) => {
    return <p><NavLink className='link' to={`./${type}`}>{type}</NavLink></p>
  });


  return (
    <div name='types'>
      {navLinks}
    </div>
  );
};

export default Dropdown;
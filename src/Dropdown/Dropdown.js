import React from 'react'
import "./Dropdown.css"
import { NavLink } from 'react-router-dom'

function Dropdown() {
  return (
  <div name='types'>
    <NavLink className='link' to={'./blush'}><p>Blush</p></NavLink>
    <NavLink className='link' to={'./bronzer'}><p>Bronzer</p></NavLink>
    <NavLink className='link' to={'./eyebrow'}><p>Eyebrow</p></NavLink>
    <NavLink className='link' to={'./eyeliner'}><p>Eyeliner</p></NavLink>
    <NavLink className='link' to={'./eyeshadow'}><p>Eyeshadow</p></NavLink>
    <NavLink className='link' to={'./foundation'}><p>Foundation</p></NavLink>
    <NavLink className='link' to={'./lip_liner'}><p>Lip Liner</p></NavLink>
    <NavLink className='link' to={'./lipstick'}><p>Lip Stick</p></NavLink>
    <NavLink className='link' to={'./mascara'}><p>Mascara</p></NavLink>
  </div>
  )
}

export default Dropdown;
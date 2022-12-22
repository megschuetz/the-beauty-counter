import React from "react";
import './Footer.css';
import logo from '../make-up.png'

function Footer () {

  return(
    <div className='footer'>
      <img className='footer-logo' alt='makeup logo' src={logo} />
      <section className='footer-list'>
        <h3>Social</h3>
        <p>GitHub</p>
        <p>LinkedIn</p>
        <p>Portfolio</p>
      </section>
      <section className='footer-list'>
        <h3>Contact</h3>
        <p>mschuetz411@gmail.com</p>
      </section>
      <section className='footer-list last'>
        <h3>Created By</h3>
        <p>Megan Schuetz</p>
        <p>Denver CO</p>
        <p>Turing School of Developement</p>
        <p>Colorado State University</p>
      </section>
    </div>
  )
}

export default Footer;
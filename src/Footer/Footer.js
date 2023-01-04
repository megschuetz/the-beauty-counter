import React from "react";
import './Footer.css';
import logo from '../make-up.png'

function Footer () {

  return(
    <div className='footer'>
      <img className='footer-logo' alt='makeup logo' src={logo} />
      <section className='footer-list'>
        <h3>Social</h3>
        <a href='https://github.com/megschuetz'>GitHub</a>
        <a href='https://www.linkedin.com/in/megan-schuetz/'>LinkedIn</a>
        <a href='https://terminal.turing.edu/alumni/1493-megan-schuetz'>Portfolio</a>
      </section>
      <section className='footer-list email'>
        <h3>Contact</h3>
        <a href='mailto:mschuetz411@gmail'>mschuetz411@gmail.com</a>
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
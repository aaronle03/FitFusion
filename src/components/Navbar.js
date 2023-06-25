import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
      <nav className='navbar'>
        <section className='navbar-container'>
          <h1>FIT FUSION</h1>
        </section>
        <section className='navbar-links'>
          <a href="https://www.google.com/">HOME</a>
          <a href="https://www.google.com/">MEET US</a>
          <a href="https://www.google.com/">MEMBERSHIPS</a>
          <a href="https://www.google.com/">CLASSES + PROGRAMS</a>
          <a href="https://www.google.com/">CONTACT</a>
        </section>
      </nav>
    );
}

export default Navbar;



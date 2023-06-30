import React from 'react';
import './Navbar.css';

function Navbar() {
    const scrollToMeetUs = (event) => {
      event.preventDefault();
      const trainersSection = document.getElementById('Trainers');
      trainersSection.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <nav className='navbar'>
        <section className='navbar-container'>
          <h1>FIT FUSION</h1>
        </section>
        <section className='navbar-links'>
          <a href="#Trainers" onClick={scrollToMeetUs}>MEET US</a>
          <a href="https://www.google.com/">MEMBERSHIPS</a>
          <a href="https://www.google.com/">CLASSES + PROGRAMS</a>
          <a href="https://www.google.com/">CONTACT</a>
        </section>
      </nav>
    );
}

export default Navbar;



import React from 'react';
import './Navbar.css';

function Navbar() {
  const scrollToMeetUs = (event) => {
    event.preventDefault();
    const trainersSection = document.getElementById('Trainers');
    trainersSection.scrollIntoView({ behavior: 'smooth' });
  };


  return (
      <nav className='nav'>
          <section className='logo'>
            <img src="https://icongr.am/jam/chevrons-up.svg?size=82&color=e1d5d9" alt="Avatar" border="0" />
            <h1>FIT FUSION</h1>
          </section>
          <section className='navbar-links'>
                <a href="#Trainers" onClick={scrollToMeetUs}>MEET US</a>
                <a href="https://www.google.com/">MEMBERSHIPS</a>
                <a href="https://www.google.com/">CLASSES + PROGRAMS</a>
                <a href="https://www.google.com/">CONTACT</a>
          </section>
          <section className='profilejoin'>
            <a href="https://github.com/aaronle03" className="profile-link">
              <img src="https://icongr.am/clarity/avatar.svg?size=45&color=e1d5d9" alt="Avatar" border="0" />
            </a>
            <a href="https://github.com/aaronle03" className="join-link">
              JOIN CLASS NOW
            </a>
          </section>
      </nav>
  );
}

export default Navbar;

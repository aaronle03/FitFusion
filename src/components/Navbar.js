import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
          <section className='logo'>
            <img src="https://icongr.am/jam/chevrons-up.svg?size=82&color=e1d5d9" alt="Avatar" border="0" />
            <h1>FIT FUSION</h1>
          </section>
          <section className='navbar-links'>
                <a href="#Trainers">MEET US</a>
                <a href="https://www.google.com/">MEMBERSHIPS</a>
                <a href="https://www.google.com/">CLASSES + PROGRAMS</a>
                <a href="https://www.google.com/">CONTACT</a>
          </section>
          <section className='profilejoin'>
            <a href="https://github.com/aaronle03" className="profile-link">
              <img src="https://icongr.am/clarity/avatar.svg?size=45&color=e1d5d9" alt="Avatar" border="0" />
            </a>
            <a href="/other_pages/SignUp.js" className="join-link" target="_blank">
              JOIN CLASS NOW
            </a>
          </section>
      </nav>
  );
}

export default Navbar;

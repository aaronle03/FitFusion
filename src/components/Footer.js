import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <section className="footer-left-logo">
                        <img src="https://icongr.am/jam/chevrons-up.svg?size=70&color=e1d5d9" alt="Avatar" border="0" />
                        <h1>FIT FUSION</h1>
                    </section>
                    <section className="footer-left-bio">
                        <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                    </section>
                    <section className="footer-left-socials">
                        <img src="https://icongr.am/entypo/facebook.svg?size=40&color=e1d5d9" alt="Avatar2" border="0" />
                        <img src="https://icongr.am/entypo/twitter-with-circle.svg?size=40&color=e1d5d9" alt="Avatar3" border="0" />
                        <img src="https://icongr.am/entypo/pinterest-with-circle.svg?size=40&color=e1d5d9" alt="Avatar4" border="0" />
                        <img src="https://icongr.am/entypo/instagram.svg?size=40&color=e1d5d9" alt="Avatar5" border="0" />
                    </section>
                    <section className="footer-left-copyrights">
                        <h2>Privacy Policy | © 2023 Fit Fusion</h2>
                        <h2>Design by Aaron Le</h2>
                    </section>
                </div>
                <div className="footer-middle">
                    <h1>Our Classes</h1>
                    <ul>
                      <li><a href="#classes">Fitness Classes</a></li>
                      <li><a href="#classes">Full-Body Strength</a></li>
                      <li><a href="#classes">HIIT Sessions</a></li>
                      <li><a href="#classes">Meditation</a></li>
                      <li><a href="#classes">Power Yoga</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <h1>Working Hours</h1>
                    <h2>Monday - Friday:</h2>
                    <h3>7:00am - 10:00pm</h3>
                    <h2>Saturday:</h2>
                    <h3>9:00am - 8:00pm</h3>
                    <h2>Sunday - Closed</h2>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
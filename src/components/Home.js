import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <div className="middleTitle">
                    <h1>Unleash the Power of Fit Fusion</h1>
                </div>
                <div className="middleText">
                    <h1>Where Fitness Meets Transformation</h1>
                </div>
                <button type="button" id="enrollButton">Enroll Now →</button>
            </div>
        </div>
    );
}

export default Home;
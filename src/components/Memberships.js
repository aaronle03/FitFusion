import React from 'react';
import './Memberships.css';

function Memberships() {
    return(
        <div className="memberships">
            <h2>Memberships</h2>
            <h1>Exclusive Pricing Plan</h1>
            <h3>Ignite your fitness journey with the power of gym memberships.</h3>
            <div className="levels">
                <div className="levelCard">
                    <div className="levelOnePhoto" id="levelPhoto">
                    </div>
                    <div className="levelBio">
                        <h1>BASIC</h1>
                        <h2>$30 / month</h2>
                        <ul>
                            <li>Free Hand</li>
                            <li>Gym Fitness</li>
                            <li>Weight Loss</li>
                            <li>Personal Trainer</li>
                            <li>HIIT Class</li>
                        </ul>
                    </div>
                </div>
                <div className="levelCard">
                    <div className="levelTwoPhoto" id="levelPhoto">
                    </div>
                    <div className="levelBio">
                        <h1>INTERMEDIATE</h1>
                        <h2>$50 / month</h2>
                        <ul>
                            <li>Free Hand</li>
                            <li>Gym Fitness</li>
                            <li>Weight Loss</li>
                            <li>Personal Trainer</li>
                            <li>HIIT Class</li>
                        </ul>
                    </div>
                </div>
                <div className="levelCard">
                    <div className="levelThreePhoto" id="levelPhoto">
                    </div>
                    <div className="levelBio">
                        <h1>ADVANCED</h1>
                        <h2>$75 / month</h2>
                        <ul>
                            <li>Free Hand</li>
                            <li>Gym Fitness</li>
                            <li>Weight Loss</li>
                            <li>Personal Trainer</li>
                            <li>HIIT Class</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Memberships;
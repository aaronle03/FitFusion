import React from 'react';
import './Trainers.css';

function Trainers(props) {
    return (
        <div id={props.id} className="trainers-page">
            <h1>Meet Our Instructors</h1>
            <div className="profiles">
                <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front1">
                      </div>
                      <div class="flip-card-back">
                        <h2>Benjamin Shpee</h2>
                        <p>Gym Trainer</p>
                        <p>Motivated gym coach inspiring fitness progress through personalized training and support.</p>
                      </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front2">
                      </div>
                      <div class="flip-card-back">
                        <h2>Jonathan Shih</h2>
                        <p>HIIT Coach</p>
                        <p>Dynamic HIIT coach igniting transformation with high-energy workouts and motivation.</p>
                      </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front3">                      </div>
                      <div class="flip-card-back">
                        <h2>Juco Malfoy</h2>
                        <p>Wellness Coach</p>
                        <p>Empowering wellness coach guiding your journey to holistic well-being.</p>
                      </div>
                    </div>
                </div>
                <div class="flip-card">
                    <div class="flip-card-inner">
                      <div class="flip-card-front4">
                      </div>
                      <div class="flip-card-back">
                        <h2>Aimee Krogly</h2>
                        <p>Yoga Instructor</p>
                        <p>Nurturing yoga coach fostering mindful growth and inner harmony.</p>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trainers;
import React from "react";
import './Classes.css';


function Classes() {
    return (
        <div className="class-container">
            <h2>Classes</h2>
            <h1>Diverse Class Options</h1>
            <h3>Embark on an invigorating fitness journey fueled by the dynamic energy of gym classes.</h3>
            <div className="class-block-container">
                <div className="class-block" id="class1">
                    <h1>CARDIO</h1>
                </div>
                <div className="class-block" id="class2">
                    <h1>BOXING</h1>
                </div>
                <div className="class-block" id="class3">
                    <h1>HIIT</h1>
                </div>
                <div className="class-block" id="class4">
                    <h1>MEDITATION</h1>
                </div>
                <div className="class-block" id="class5">
                    <h1>STRENGTH</h1>
                </div>
                <div className="class-block" id="class6">
                    <h1>YOGA</h1>
                </div>
            </div>
        </div>
    );}

export default Classes;
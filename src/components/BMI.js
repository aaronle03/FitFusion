import React, { useState } from 'react';
import './BMI.css';

function BMI() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [BMI_Value, setBMIValue] = useState('');

    const multValue = 703;

    const handleWeightChange = (event) => {
        setWeight(event.target.value);
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log('Weight:', weight);
        //console.log('Height:', height);
        const calculatedBMI = multValue * (weight / (height * height));
        setBMIValue(calculatedBMI.toFixed(2));
        console.log(BMI_Value);
        setWeight('');
        setHeight('');
    };

    return (
        <div className="BMI-container">
            <div className="BMI-Calc">
                <h1>Let's Calculate Your BMI</h1>
                <h3>Easily determine your body mass index with our accurate calculation tool.</h3>
                <section className="BMI-results">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="weight">Weight in lbs - </label>
                        <input type="text" id="weight" name="weight" value={weight} onChange={handleWeightChange}/><br/><br/>
                        <label htmlFor="height">Height in inches - </label>
                        <input type="text" id="height" name="height" value={height} onChange={handleHeightChange}/><br/><br/>
                        <input type="submit" value="Submit" className="bmi-submit-button"/>
                    </form>
                    <section className="BMI-results-final">
                        <p>Weight: {weight}</p>
                        <p>Height: {height}</p>
                        <p>BMI = {BMI_Value}</p>
                    </section>
                </section>
            </div>
        </div>
    );
}

export default BMI;

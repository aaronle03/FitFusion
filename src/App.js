import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import Trainers from '../src/components/Trainers'
import Memberships from '../src/components/Memberships'
import Footer from '../src/components/Footer'
import BMI from '../src/components/BMI'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Trainers id="Trainers"></Trainers>
      <Memberships id="Memberships"></Memberships>
      <BMI></BMI>
      <Footer></Footer>
    </div>
  );
}

export default App;
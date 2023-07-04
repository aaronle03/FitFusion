import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import Trainers from '../src/components/Trainers'
import Memberships from '../src/components/Memberships'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Trainers id="Trainers"></Trainers>
      <Memberships id="Memberships"></Memberships>
    </div>
  );
}

export default App;
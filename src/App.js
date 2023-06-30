import './App.css';
import Navbar from '../src/components/Navbar'
import Home from '../src/components/Home'
import Trainers from '../src/components/Trainers'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Trainers id="Trainers"></Trainers>
    </div>
  );
}

export default App;
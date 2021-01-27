import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Lineup from './components/Lineup';

function App() {
  const [lineup, setLineup] = useState([])

  return (
    <div className="App">
      <Navbar />
      <Lineup />
    </div>
  );
}

export default App;

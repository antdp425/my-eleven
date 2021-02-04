import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Lineup from './components/Lineup';
import ActionBar from './components/ActionBar';

function App() {
  const [lineup, setLineup] = useState([])

  return (
    <div className="App">
      <Navbar />
      <Lineup />
      <ActionBar />
    </div>
  );
}

export default App;

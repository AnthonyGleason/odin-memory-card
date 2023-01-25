import { useState } from 'react';
import './App.css';

//import components
import Content from './components/Content.js';
import Header from './components/Header.js';
import Instructions from './components/Instructions';

function App() {
  const [score,setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  return (
    <div className='app'>
      <Header score={score} bestScore={bestScore} />
      <Instructions />
      <Content score={score} bestScore={bestScore} setScore={setScore} setBestScore={setBestScore} />
    </div>
  );
}

export default App;

import './App.css';

//import components
import Content from './components/Content.js';
import Header from './components/Header.js';
import Instructions from './components/Instructions';

function App() {
  return (
    <div className='app'>
      <Header />
      <Instructions />
      <Content />
    </div>
  );
}

export default App;

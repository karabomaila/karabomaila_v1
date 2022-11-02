import './App.css';
import { Route, Routes} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact'
import About from './components/About';

// Navbar component

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
          
              <Route exact path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/about" element={<About/>}/>
        </Routes>
  </div>
  );
}

export default App;

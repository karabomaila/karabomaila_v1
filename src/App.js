import './App.css';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact'
import About from './pages/About';
import Photography from './pages/Photography';
import Blogs from './pages/Blogs';

// Navbar component

function App() {
  return (
    <div>
        <Navbar></Navbar>
        <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/blogs" element={<Blogs/>}/>
              <Route path="/photography" element={<Photography/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/about" element={<About/>}/>
        </Routes>
  </div>
  );
}

export default App;

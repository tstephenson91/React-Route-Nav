import './App.css';
import{ BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (    
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    <Routes>
      <Route path="/"element={ <Home />}/>
      <Route path="/about"element={ <About />}/>
      <Route path="/contact"element={ <Contact />}/>
      <Route path="/mainroute">
      </Route>
    </Routes>
  </Router>

  );
}

export default App;

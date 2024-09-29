import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import About from './About';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src="/intern project 1-1.png" className="App-bg" alt="background" />
          <nav className="navbar">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/https://localhost:3000/Aboutpage.png">About</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/get-involved">Get involved</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/shop">Shop</Link></li>
            </ul>
          </nav>
        </header>

        <div className="images">
          <img src="/intern project1.jpg" alt="Description 1" />
          <img src="/image2.jpg" alt="Description 2" />
          <img src="/image3.jpg" alt="Description 3" />
        </div>

        <Routes>
          <Route path="/about" element={<About />} />
          {/* Add more routes here as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

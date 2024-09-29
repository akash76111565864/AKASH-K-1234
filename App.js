import React from 'react';
import './App.css'; 
import backgroundImage from '../src/pages/internproject1-1.png';
import image1 from '../src/pages/MacBook Air - 2.png';
import image2 from '../src/pages/MacBook Air - 3.png';
import image3 from '../src/pages/MacBook Air - 4.png';
import image4 from '../src/pages/MacBook Air - 62.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={backgroundImage} alt="Background" className="App-bg" />
        <nav className="navbar">
          <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Get Involved</li>
            <li>Contact</li>
            <li>Shop</li>
          </ul>
        </nav>
      </header>
      <div className="image-container">
        <img src={image1} alt="Description 1" className="additional-image" />
        <img src={image2} alt="Description 2" className="additional-image" />
        <img src={image3} alt="Description 3" className="additional-image" />
        <img src={image4} alt="Description 4" className="additional-image" />
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '/App.css'; 
import About from './pages/About'
import Blog from './pages/Blog'
const App = () => {
    return (
        <Router>
            <div className="app">
                <nav className="navbar">
                    <li>
                    <ul>home</ul>
                    <ul><Link to="/About">About</Link></ul>
                    <ul><Link to="/Blog">Blog</Link></ul>
                    <ul>Get involved</ul>
                    <ul>Contact</ul>
                    <ul>Shop</ul>
                    </li>                 
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </div>
        </Router>
    );
};

const Home = () => (
    <div className="home-content">
        <h1>Welcome to My Website</h1>
        <div className="image-gallery">
            <img src="../public/internproject1-1.png" alt="Image1" />
            <img src="../public/internproject1-1.png" alt="Image2" />
            <img src="../public/internproject1-1.png" alt="Image3" />
        </div>
    </div>
);
export default App;

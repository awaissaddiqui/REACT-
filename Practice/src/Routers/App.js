import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Card from './Card'
import Products from './Products'

const App = () => {
    return (
        <Router>
            <Nav >
                <li>
  <div style={{width: 90}} variant="container-fluid">
    <Link variant="navbar-brand" to="/">Home</Link>
        <Link variant="nav-link" to="/about">About</Link>
        <Link variant="nav-link" to="/products">Products</Link>
        <Link variant="nav-link" to="/card">Card</Link>
  </div>
  </li>
</Nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/card" element={<Card />} />
                <Route path="/products" element={<Products />} />
            </Routes>
        </Router>

    )
}

export default App
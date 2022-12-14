//import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import About from './pages/About';
import Works from './pages/Works';
import Navbar from './components/layout/navigation/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout'
import Signup from './components/forms/Signup';
import Login from './components/forms/Login';



const App = () => {

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/works' element={<Works />} />
          <Route path='/shop' element={<Shop />} />
          <Route path="/cart" element={<Checkout />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>

  )
}




export default App
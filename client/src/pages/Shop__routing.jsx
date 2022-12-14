import React from 'react'
import NavbarShop from '../components/layout/navigation/Navbar__shop'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Checkout from './Checkout'
import Signup from '../components/forms/Signup';
import Login from '../components/forms/Login';
import NavbarShop from '../components/layout/navigation/Navbar__shop';


const Shop = () => {
    return (
        <div>
            <NavbarShop>
                <Router>
                    <div className="shop__div">
                        <Navbar />
                        <Routes>
                            <Route path='/' exact element={<Home />} />
                            <Route path="/cart" element={<Checkout />} />
                            <Route path="/Signup" element={<Signup />} />
                            <Route path="/Login" element={<Login />} />
                        </Routes>
                    </div>
                </Router>
            </NavbarShop>
        </div>
    )
}

export default Shop
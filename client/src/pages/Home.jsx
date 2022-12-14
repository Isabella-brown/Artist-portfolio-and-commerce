import React from 'react'
import Slideshow from "../components/slideshow/Slideshow"
import Home__header from "./page.styles"
import Footer from "../components/layout/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (
        <div>
            <Home__header>Recent works</Home__header>
            <Slideshow />
            <Footer />
        </div>
    )
}

export default Home
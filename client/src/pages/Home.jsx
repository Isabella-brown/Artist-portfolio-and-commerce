import React from 'react'
import Slideshow from "../components/slideshow/Slideshow"
import Home__header from "./page__styles"
import Footer from "../components/layout/Footer"

const Home = () => {
    return (
        <div>
            <Home__header>Recent works</Home__header>
            <Slideshow />
            <Footer />
        </div>
    )
}

export default Home
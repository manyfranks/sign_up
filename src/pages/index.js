import React, { useState } from 'react';
import HomeHero from '../components/HomeHero';
import Navbar from '../components/Navbar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar toggle={toggle} />
            <HomeHero />
        </>
    )
}

export default Home

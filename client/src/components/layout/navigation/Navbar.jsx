//import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineShopping } from 'react-icons/ai';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system';
import { Button } from '@mui/material';




import React from 'react'

const Navbar = () => {
    return (
        <>
            <AppBar position="static" color="inherit" elevation={0}>
                <Toolbar>
                    <Link to="/" style={{ textDecoration: 'none' }}><h2>Isabella Brown</h2></Link>
                    <Link to="/works" style={{ textDecoration: 'none' }}><ul>Works</ul></Link>
                    <Link to="/about" style={{ textDecoration: 'none' }}><ul>About</ul></Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}> <ul>Contact</ul></Link>
                    <Link to="/shop" style={{ textDecoration: 'none' }}><ul>Store</ul></Link>
                    <a href="https://www.linkedin.com/in/isabella-brown-11825a244/">
                        <ul><FaLinkedinIn /></ul></a>
                    <ul><AiOutlineInstagram /></ul>
                    <Link to="/login" style={{ textDecoration: 'none' }}> <ul>Login</ul></Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }}><ul>Signup</ul></Link>
                    <Link to="/cart"><Button><AiOutlineShopping /></Button></Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
//import React from 'react'
import { Link } from 'react-router-dom'
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography'
import { styled } from '@mui/system';
import { Button } from '@mui/material';




import React from 'react'

const NavbarShop = () => {

    return (
        <>
            <AppBar position="static" color="inherit" elevation={0}>
                <Toolbar>
                    <Link to="/login" style={{ textDecoration: 'none' }}> <ul>Login</ul></Link>
                    <Link to="/signup" style={{ textDecoration: 'none' }}><ul>Signup</ul></Link>
                    <Link to="/logout" style={{ textDecoration: 'none' }}><ul>Logout</ul></Link>
                    <Link to="/cart"><Button><AiOutlineShopping /></Button></Link>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default NavbarShop
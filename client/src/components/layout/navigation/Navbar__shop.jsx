//import React from 'react'
import { Link } from 'react-router-dom'
import {
    Nav,
    NavLink,
    NavMenu,
    SocialLink
} from "./Navbar.styles"
import { AiOutlineShopping } from 'react-icons/ai'


import React from 'react'

const NavbarShop = () => {

    return (
        <>
            <Nav position="static" color="inherit" elevation={0}>
                <NavMenu>
                    <NavLink to="/login" style={{ textDecoration: 'none' }}> <ul>Login</ul></NavLink>
                    <NavLink to="/signup" style={{ textDecoration: 'none' }}><ul>Signup</ul></NavLink>
                    <NavLink to="/logout" style={{ textDecoration: 'none' }}><ul>Logout</ul></NavLink>
                    <NavLink to="/cart"><button><AiOutlineShopping /></button></NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavbarShop
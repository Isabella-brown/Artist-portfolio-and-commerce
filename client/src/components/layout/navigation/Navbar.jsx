import React from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineInstagram, AiOutlineShopping } from 'react-icons/ai';
import { styled } from '@mui/system';
import { Button } from '@mui/material';

import {
    Nav,
    NavLink,
    NavMenu
} from './Navbar.styles';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/" ><h2>Isabella Brown</h2></NavLink>
                <NavMenu>
                    <NavLink to="/works" ><ul>Works</ul></NavLink>
                    <NavLink to="/about" ><ul>About</ul></NavLink>
                    <NavLink to="/contact"> <ul>Contact</ul></NavLink>
                    <NavLink to="/shop"><ul>Store</ul></NavLink>
                    <ul><AiOutlineInstagram /></ul>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom'
import { AiOutlineInstagram, AiOutlineShopping } from 'react-icons/ai';
import {
    Nav,
    NavLink,
    NavMenu,
    SocialLink
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
                    <SocialLink href="https://instagram.com"><AiOutlineInstagram /></SocialLink>
                    <SocialLink href="https://www.artstation.com/isabellabrown3"><img src="https://img.icons8.com/windows/25/null/artstation.png" /></SocialLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;
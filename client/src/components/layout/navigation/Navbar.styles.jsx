import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  background: #ffffff;
  height: 80px;
  display: flex;
  z-index: 10;
  justify-content:flex-start;
`;

export const NavLink = styled(Link)`
  color: #000000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &:hover {
    text-decoration:underline;
    color:grey;
  }
`;



export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  margin-left:auto;
  padding-right:90px;
  justify-content:flex-end;
`;



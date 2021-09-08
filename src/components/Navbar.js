import React from 'react';
import styled, {css} from 'styled-components/macro'
import {Link} from 'react-router-dom';
import { menudata } from '../data/MenuData';
import {Button} from './Button';
import {FaBars} from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  height: 60px;
  positioned: fixed;
  z-index: 100;
  padding: 2rem 1rem;
  background: coral;
  justify-content: space-between;
`;



const NavLink = css`
height: 100%;
padding: 0 1rem;
align-items: center;
display: flex;
cursor: pointer;
text-decoration: none;
   `  

const Logo = styled(Link)`
  ${NavLink} 
  color: #fff;
 `


const MenuBar = styled(FaBars)`
display: none;

@media screen and (max-width: 768px) {
  display: block;
  background-size: contain;
  height: 30px;
  width: 30px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-70%, 70%);
}

`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
 
  @media screen and (max-width: 768px) {
    display: none;
  }

`;

const NavMenuLink = styled(Link)`
        ${NavLink}
     color:#fff ;
    
`;
const Navbtn = styled.div`
display:flex;
align-items: center;
margin-right: 24px;
`



const Navbar = ({toggle}) => {
    return (
        
        <Nav>
        <Logo>Tourism</Logo>
        <MenuBar onClick={toggle}></MenuBar>
        <NavMenu>
            {menudata.map((item, index) => (
                <NavMenuLink to={item.link} key={index}>
                    {item.title}
                </NavMenuLink>
            ))}
             <Navbtn >
            <Button primary='true'>Contact Us</Button>
            </Navbtn>
        </NavMenu>
       
        </Nav>
        
    )
}

export default Navbar;
import React from 'react'
import { FaBars } from 'react-icons/fa';
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItems, NavLinks, Button, NavButtonLink } from './NavBarElements'

const NavBar = ({toggleNav, toggleHome}) => {
    return ( 
        <Nav>
            <NavBarContainer>
                <NavLogo to='/' onClick={toggleHome}>emily jones</NavLogo>
                <MobileIcon onClick={toggleNav}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItems>
                        <NavLinks to='experience' smooth={true} duration={500} spy={true} exact='true' offset={-65}> experience </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to='skills' smooth={true} duration={500} spy={true} exact='true' offset={-65}> skills </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-65}> projects </NavLinks>
                    </NavItems>
                    <NavItems>
                        <NavLinks to='socials' smooth={true} duration={500} spy={true} exact='true' offset={-65}> socials </NavLinks>
                    </NavItems>
                    <Button>
                        <NavButtonLink target="_blank" href='https://docs.google.com/document/d/1ZHTrwHaKlqKNbNjy8lO0M8_1_IcbslrlQHWD7gCf1JE/edit?usp=sharing'>resume</NavButtonLink>
                    </Button>
                </NavMenu>
            </NavBarContainer>
        </Nav>
    )
}



export default NavBar

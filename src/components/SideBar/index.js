import React from 'react'
import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, Button, NavButtonLink } from './SideBarElements'
const SideBar = ({ isOpen, toggleNav, toggleHome}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggleNav}>
            <Icon onClick={toggleNav}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to='experience' onClick={toggleNav} offset={-65}>experience</SideBarLink>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarLink to='skills' onClick={toggleNav} offset={-65}>skills</SideBarLink>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarLink to='projects' onClick={toggleNav} offset={-65}>projects</SideBarLink>
                </SideBarMenu>
                <SideBarMenu>
                    <SideBarLink to='socials' onClick={toggleNav} offset={-65}>socials</SideBarLink>
                </SideBarMenu>
                <Button>
                    <NavButtonLink target="_blank" href='https://docs.google.com/document/d/1ZHTrwHaKlqKNbNjy8lO0M8_1_IcbslrlQHWD7gCf1JE/edit?usp=sharing'>resume</NavButtonLink>
                </Button>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar

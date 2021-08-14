import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll'; 

export const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
    z-index: 99;
    //background: white;
    height: 65px;
    font-size: 1.3rem;
    font-family: Raleway-Thin, serif;
    letter-spacing: 0.15em;
`

export const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 24px; // hacky centering
    width: 100%;
    max-width: 1100px;
    margin-left: 10%;
    margin-right: 10%;
    font-size: 1.3rem;
`

export const NavLogo = styled(LinkS)`
    display: flex;
    align-items: center;
    font-size: 1.7rem;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
        transition: 0.2s ease-in-out;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 1150px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 95%);
        cursor: pointer;
        margin-right: 10%;
        font-size: 1.3rem;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;

    @media screen and (max-width: 1150px) {
        display: none;
    }
`

export const NavItems = styled.li`
    height: 65px;
`

export const NavLinks = styled(LinkS)`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        border-bottom: 3px solid #ED5B95;
    }

    &:hover{
        transform: scale(1.05);
        transition: 0.2s ease-in-out;
    }
`

export const Button = styled.nav`
    display: flex;
    align-items: center;
    padding-left: 30px;

    @media screen and (max-width: 1150px) {
        display: none;
    }
`

export const NavButtonLink = styled.a`    
    padding: 10px 25px;
    background: #ED5B95;
    border-radius: 40px;
    font-size: 1.1rem;
    //color: white;
    text-decoration: none;

    &:hover{
        transform: scale(1.05);
        transition: 0.2s ease-in-out;
    }
`
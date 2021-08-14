import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll'; 

export const SideBarContainer = styled.aside`
    display: grid;
    position: fixed;
    align-items: center;
    height: 100%;
    width: 100%;
    background: white;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) =>  (isOpen ? '100%' : '0%' )};
    top: ${({ isOpen }) =>  (isOpen ? '0' : '-100%' )};
    z-index: 999;
    font-family: Raleway-Thin, serif;
    letter-spacing: 0.15em;
`

export const Icon = styled.div`
    display: block;
    position: absolute;
    top:0;
    right:0;
    font-size: 1.7rem;
    transform: translate(-140%, 80%);
    cursor: pointer;

`

export const CloseIcon = styled(FaTimes)`
    color: black;

    &:hover{
        transform: scale(1.05);
        transition: 0.2s ease-in-out;
    }
`

export const SideBarWrapper = styled.div`
`

export const SideBarMenu = styled.div`
    height: 65px;
`

export const SideBarLink = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    transition: 0.2s ease-in-out;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
        transition: 0.2s ease-in-out;
    }
`

export const Button = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const NavButtonLink = styled.a`    
    padding: 10px 25px;
    background: #ED5B95;
    border-radius: 40px;
    font-size: 1.1rem;
    color: white;
    outline: none;
    text-decoration: none;

    &:hover{
        transform: scale(1.05);
        transition: 0.2s ease-in-out;
    }
`
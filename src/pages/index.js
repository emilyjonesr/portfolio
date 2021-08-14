//rafce
import React, { useState } from 'react'
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import HomePage from '../components/HomePage';
import SkillsPage from '../components/SkillsPage';
import ProjectsPage from '../components/ProjectsPage';
import SocialsPage from '../components/SocialsPage';
import { animateScroll as scroll } from 'react-scroll';
import ExperiencePage from '../components/ExperiencePage';
import Footer from '../components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    const toggleHome = () => {
        scroll.scrollToTop();
    } 

    return (
        <div>
            <SideBar isOpen={isOpen} toggleNav={toggleNav} toggleHome={toggleHome}/>
            <NavBar toggleNav = {toggleNav} toggleHome={toggleHome}/>
            <HomePage/>
            <ExperiencePage/>
            <SkillsPage/>
            <ProjectsPage/>
            <SocialsPage/>
            <Footer/>
        </div>
    )
}

export default Home

import React, { useState } from 'react'
import { FullBackground, ProjectsContainer, Projects, Project, Front, Back, Description, TagWrapper, TechTag, GitHubLink, DTE } from './ProjectsPageElements';
import minesweeper from '../../images/ProjectsPics/minesweeper.png';
import suturingVR from '../../images/ProjectsPics/hi.png';
import epic from '../../images/ProjectsPics/epic.png';
import DTELogo from '../../images/ProjectsPics/DTE.png';

const ProjectsPage = () => {
    const [flipped1, setFlipped1] = useState(false);
    const [flipped2, setFlipped2] = useState(false);
    const [flipped3, setFlipped3] = useState(false);
    const [flipped4, setFlipped4] = useState(false);

    const handleHover1 = () => {
        setFlipped1(!flipped1);
    }

    const handleHover2 = () => {
        setFlipped2(!flipped2);
    }

    const handleHover3 = () => {
        setFlipped3(!flipped3);
    }

    const handleHover4 = () => {
        setFlipped4(!flipped4);
    }

    return (
        <FullBackground id={'projects'}>
            <ProjectsContainer>
                <h1>projects</h1>
                <Projects>
                    <Project onMouseEnter={() => handleHover1(flipped1)} onMouseLeave={ () => handleHover1(flipped1)} flipped={flipped1}>
                        <Front>
                            <img src={epic} alt="epic" style={{ width: '300px', height: '250px' }}/>
                            <h2 style={{ marginLeft: '7px', marginTop: '17px', marginBottom: '9px'}}>Hospital Data App</h2>
                            <h4 style={{ marginLeft: '7px', marginTop: '9px'}}>Spring 2021 – Fall 2021</h4>
                        </Front>
                        <Back>
                            <Description>
                                <p>Collaborating on a mobile app for patients of Shands Hospital to easily upload medical data to the hospital's Epic record system. Includes user authentication, graphs to visually track data, as well as the ability to upload, alter, and delete data. </p>
                            </Description>
                            <TagWrapper>
                                <TechTag>Flutter</TechTag>
                                <TechTag>Dart</TechTag>
                                <TechTag>Firebase</TechTag>
                            </TagWrapper>
                            <DTE target="_blank" href='https://www.ufdreamteam.org/dream-team-engineering'>
                                <img src={DTELogo} alt="DTELogo" style={{ width: '110px', height: '30px' }}/>
                            </DTE>
                        </Back>
                    </Project>
                    <Project onMouseEnter={() => handleHover2(flipped2)} onMouseLeave={() => handleHover2(flipped2)} flipped={flipped2}>
                        <Front>
                            <img src={suturingVR} alt="suturingVR" style={{ width: '300px', height: '250px' }}/>
                            <h2 style={{ marginLeft: '7px', marginTop: '17px', marginBottom: '7px'}}>Suturing VR</h2>
                            <h4 style={{ marginLeft: '7px', marginTop: '7px'}}>Fall 2020</h4>
                        </Front>
                        <Back>
                            <Description>
                                <p>Worked in a team setting to develop a program that takes patients undergoing painful procedures through calming sceneries, such as forests or deserts, to interact with and take pictures of animals.</p>
                            </Description>
                            <TagWrapper>
                                <TechTag>C#</TechTag>
                                <TechTag>VR</TechTag>
                                <TechTag>Unity</TechTag>
                            </TagWrapper>
                            <GitHubLink target="_blank" href='https://suturingvr.github.io/'>Learn More</GitHubLink>
                            <DTE target="_blank" href='https://www.ufdreamteam.org/dream-team-engineering'>
                                <img src={DTELogo} alt="DTELogo" style={{ width: '110px', height: '30px' }}/>
                            </DTE>
                        </Back>
                    </Project>
                    <Project onMouseEnter={() => handleHover3(flipped3)} onMouseLeave={() => handleHover3(flipped3)} flipped={flipped3}>
                        <Front>
                            <img src={minesweeper} alt="minesweeper" style={{ width: '300px', height: '250px' }}/>
                            <h2 style={{ marginLeft: '7px', marginTop: '17px', marginBottom: '7px'}}>Minesweeper</h2>
                            <h4 style={{ marginLeft: '7px', marginTop: '7px'}}>Spring 2020</h4>
                        </Front>
                        <Back>
                            <Description>
                                <p>A recreation of the classic game that includes a button to toggle mines and buttons to load in games boards from binary files, in addition to basic game functionality.</p>
                            </Description>
                            <TagWrapper>
                                <TechTag>C++</TechTag>
                                <TechTag>SFML</TechTag>
                            </TagWrapper>
                        </Back>
                    </Project>
                </Projects>
                <Projects>
                    <Project onMouseEnter={() => handleHover4(flipped4)} onMouseLeave={() => handleHover4(flipped4)} flipped={flipped4}>
                        <Front>
                            <img src={minesweeper} alt="minesweeper" style={{ width: '300px', height: '250px' }}/>
                            <h2 style={{ marginLeft: '7px', marginTop: '17px', marginBottom: '7px'}}>Minesweeper</h2>
                            <h4 style={{ marginLeft: '7px', marginTop: '7px'}}>Spring 2020</h4>
                        </Front>
                        <Back>
                            <Description>
                                <p>A recreation of the classic game that includes a button to toggle mines and buttons to load in games boards from binary files, in addition to basic game functionality.</p>
                            </Description>
                            <TagWrapper>
                                <TechTag>C++</TechTag>
                                <TechTag>SFML</TechTag>
                            </TagWrapper>
                        </Back>
                    </Project>
                </Projects>
            </ProjectsContainer>
        </FullBackground>
    )
}

export default ProjectsPage

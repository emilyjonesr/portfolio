import React from 'react'
import { FullBackground, ExperienceContainer, Experiences, Experience, Description, ImageContainer, Text, Icon, CalIcon, MapIcon } from './ExperiencePageElements';
import amazon from '../../images/ExperienceLogos/amazon.png';
import L3Harris from '../../images/ExperienceLogos/L3.png';

const ExperiencePage = () => {
    return (
        <FullBackground id='experience'>
            <ExperienceContainer>
                <h1>experience</h1>
                <Experiences>
                    <Experience className='even'>
                        <Description>
                            <h2>Amazon</h2>
                            <h3>Software Engineer Intern</h3>
                            <Text>
                                <Icon>
                                    <CalIcon/>
                                </Icon>
                                <p style={{paddingRight: '20px', margin: '2px'}}>Fall 2021</p>
                                <Icon>
                                    <MapIcon/>
                                </Icon>
                                <p style={{margin: '2px'}}>Bay Area, CA</p>
                            </Text>
                            <p>uwbefjwek jwHBDJwh ajwhefbjkaec. ahbwfjecsmads. wbefhcjwefnlasdc wbefhcjwefnlasdc wbefhcjwefnlasdc wbefhcjwefnlasdc wbefhcjwefnlasdc</p>
                        </Description>
                        <ImageContainer>
                            <img src={amazon} alt='Amazon logo' style={{height: '200px', width: '200px'}}/>
                        </ImageContainer>
                    </Experience>
                    <Experience className='odd'>
                        <Description>
                            <h2>L3Harris Technologies</h2>
                            <h3>Software Engineer Intern</h3>
                            <Text>
                                <Icon>
                                    <CalIcon/>
                                </Icon>
                                <p style={{paddingRight: '20px', margin: '2px'}}>Summer 2021</p>
                                <Icon>
                                    <MapIcon/>
                                </Icon>
                                <p style={{margin: '2px'}}>Tulsa, OK</p>
                            </Text>
                            <p>uwbefjwek jwHBDJwh ajwhefbjkaec. ahbwfjecsmads. wbefhcjwefnlasdc wbefhcjwefnlasdc wbefhcjwefnlasdc wbefhcjwefnlasdc wbefhcjwefnlasdc</p>
                        </Description>
                        <ImageContainer>
                            <img src={L3Harris} alt='L3Harris logo' style={{height: '190px', width: '190px'}}/>
                        </ImageContainer>
                    </Experience>
                </Experiences>
            </ExperienceContainer>
        </FullBackground>
    )
}

export default ExperiencePage

import React from 'react'
import { FullBackground, SocialsContainer, Socials, Social } from './SocialsPageElements';
import insta from '../../images/SocialsLogos/instagram.png';
import linkedin from '../../images/SocialsLogos/linkedin.png';
import github from '../../images/SocialsLogos/github.png';

const SocialsPage = () => {
    return (
        <FullBackground id='socials'>
            <SocialsContainer>
                <h1>let's connect</h1>
                <Socials>
                    <Social target="_blank" href='https://www.instagram.com/_emily_jones/'>
                        <img src={insta} alt='insta' style={{width:'250px', height: '250px', display: 'block', marginLeft: 'auto'}}/>
                    </Social>
                    <Social target="_blank" href='https://www.linkedin.com/in/jones-emily/'>
                        <img src={linkedin} alt='linkedin' style={{width:'320px', height: '320px', display: 'block', marginLeft: 'auto'}}/>
                    </Social>
                    <Social target="_blank" href='https://github.com/emilyjonesr'>
                        <img src={github} alt='github' style={{width:'250px', height: '250px', display: 'block', marginLeft: 'auto'}}/>
                    </Social>
                </Socials>
            </SocialsContainer>
        </FullBackground>
    )
}

export default SocialsPage

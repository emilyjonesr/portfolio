import React, {useEffect} from 'react'
import { FullBackground, SkillsContainer, SkillsWrapper, Skills, Skill, SkillTitle, SkillBarB, SkillBarT } from './SkillsPageElements';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

const SkillsPage = () => {
    const { ref, inView } = useInView();
    //const animation = useAnimation();

    // useEffect(() => {
    //     if(inView)
    //     {
    //         // animation.start({
    //         //     y:0,
    //         //     opacity: 1,
    //         //     transition: {
    //         //         duration: 1
    //         //     }
    //         // })
    //     }
    //     else
    //     {
    //         // animation.start({
    //         //     y: '30vw',
    //         //     opacity: 0,
    //         // })
    //     }
    // }, [inView]);

    return (
        <FullBackground id={'skills'}>
            <SkillsContainer>
                <h1>skills</h1>
                <SkillsWrapper ref={ref}>
                    <Skills>
                        <Skill
                            // variants={fadeLeft}
                            // initial='hidden'
                            // animate='visible'
                            // transition={{ duration: 1 }}
                            //drag={true}
                        >
                            <SkillTitle>
                                <h1>C/C++</h1>
                            </SkillTitle>
                            <SkillBarT className='skill1' inView={inView}/>
                            <SkillBarB className='skill1' inView={inView}/>
                        </Skill>
                        <Skill>
                            <SkillTitle>
                                <h1>Java</h1>
                            </SkillTitle>
                            <SkillBarT className='skill2' inView={inView}/>
                            <SkillBarB className='skill2' inView={inView}/>
                        </Skill>
                        <Skill>
                            <SkillTitle>
                                <h1>Javascript</h1>
                            </SkillTitle>
                            <SkillBarT className='skill3' inView={inView}/>
                            <SkillBarB className='skill3' inView={inView}/>
                        </Skill>
                    </Skills>
                    <Skills>
                        <Skill>
                            <SkillTitle>
                                <h1>React</h1>
                            </SkillTitle>
                            <SkillBarT className='skill4' inView={inView}/>
                            <SkillBarB className='skill4' inView={inView}/>
                        </Skill>
                        <Skill>
                            <SkillTitle>
                                <h1>Flutter</h1>
                            </SkillTitle>
                            <SkillBarT className='skill5' inView={inView}/>
                            <SkillBarB className='skill5' inView={inView}/>
                        </Skill>
                        <Skill>
                            <SkillTitle>
                                <h1>HTML/CSS</h1>
                            </SkillTitle>
                            <SkillBarT className='skill6' inView={inView}/>
                            <SkillBarB className='skill6' inView={inView}/>
                        </Skill>
                    </Skills>
                </SkillsWrapper>
            </SkillsContainer>
        </FullBackground>
    )
}

export default SkillsPage

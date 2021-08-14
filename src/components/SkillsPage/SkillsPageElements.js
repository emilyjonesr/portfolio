import styled from 'styled-components';
import { motion } from "framer-motion";

export const FullBackground = styled.div`
    height: 370px;
    font-family: Raleway-Thin, serif;
    letter-spacing: 0.15em;

    @media screen and (max-width: 900px) {
        height: 540px;
    }
`

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    margin-left: 13%;
    margin-right: 13%;
`

export const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 0.5rem;
    padding-top: 40px;

    @media screen and (max-width: 900px) {
        flex-direction: column;
    }
`

export const Skills = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 70px;
    padding-right: 70px;
`

export const Skill = styled(motion.div)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 30px;

    &:hover{
        transform: scale(1.05);
        transition: 0.2s ease-in-out;
    }
`
export const SkillTitle = styled.div`
    display: flex;
    align-items: center;        
    //background: red;    
    width: 100px;
    height: 30px;
`

// OUT OF 150
export const SkillBarB = styled.div`
    height: 10px;    
    background: #EDEDED;
    border-radius: 0px 5px 5px 0px;

    &.skill1 {
        width: ${({inView}) => (inView ? `0px` : `150px`)};
        transition: 900ms;
    }
    &.skill2 {
        width: ${({inView}) => (inView ? `40px` : `150px`)};
        transition: 900ms;
    }
    &.skill3 {
        width: ${({inView}) => (inView ? `20px` : `150px`)};
        transition: 900ms;
    }
    &.skill4 {
        width: ${({inView}) => (inView ? `20px` : `150px`)};
        transition: 900ms;
    }
    &.skill5 {
        width: ${({inView}) => (inView ? `40px` : `150px`)};
        transition: 900ms;
    }
    &.skill6 {
        width: ${({inView}) => (inView ? `30px` : `150px`)};
        transition: 900ms;
    }
`

export const SkillBarT = styled.div`
    height: 10px;
    border-radius: 5px 0px 0px 5px;
    background: #ED5B95;
    margin-left: 20px;

    &.skill1 {
        width: ${({inView}) => (inView ? `150px` : `0px`)};
        border-radius: 5px 5px 5px 5px;
        transition: 900ms;
    }
    &.skill2 {
        width: ${({inView}) => (inView ? `110px` : `0px`)};
        transition: 900ms;
    }
    &.skill3 {
        width: ${({inView}) => (inView ? `130px` : `0px`)};
        transition: 900ms;
    }
    &.skill4 {
        width: ${({inView}) => (inView ? `130px` : `0px`)};
        transition: 900ms;
    }
    &.skill5 {
        width: ${({inView}) => (inView ? `110px` : `0px`)};
        transition: 900ms;
    }
    &.skill6 {
        width: ${({inView}) => (inView ? `120px` : `0px`)};
        transition: 900ms;
    }
`
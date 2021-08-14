import styled from 'styled-components';
import { FaRegCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export const FullBackground = styled.div`
    background: #F5F5F5;
    height: 770px;
    font-family: Raleway-Thin, serif;
    letter-spacing: 0.15em;

    @media screen and (max-width: 1000px) {
        height: 1050px;
    }
`

export const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    margin-left: 13%;
    margin-right: 13%;
`

export const Experiences = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Experience = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 90px;    
    height: 250px;


    @media screen and (max-width: 1000px) {
        flex-direction: column;
        margin-bottom: 240px;  
    }
    // &.odd {
    //     text-align: right;
    //     right: 0;
    // }
`

export const Description = styled.div`
    max-width: 700px;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;  
    align-items: center;  
    height: 250px;

    @media screen and (max-width: 1000px) {
        margin-top: 30px;  
    }
`

export const Text = styled.div`
    display: flex;
    justify-content: row;    
`

export const Icon = styled.div`
    display: block;
    font-size: 1.2rem;
    padding-right: 10px;
`

export const CalIcon = styled(FaRegCalendarAlt)`
    color: black;
`
export const MapIcon = styled(FaMapMarkerAlt)`
    color: black;
`
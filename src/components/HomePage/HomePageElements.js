import styled from 'styled-components';

export const FullBackground = styled.div`
    height: 770px;
    font-family: Raleway-Thin, serif;
    letter-spacing: 0.15em;
    position: 'relative';
    @media screen and (max-width: 1000px) {
        height: 1500px;
    }
`

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    //padding-top: 20px;
    //margin-left: 13%;
    //margin-right: 13%;
    position: 'relative';
    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`

export const SliderContainer = styled.div`
    padding-right: 15px;
    max-width: 55%;
    height: auto;
    position: 'relative';
    z-index: 2;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;  
    align-items: center;  
    padding-left: 15px;
    position: 'relative';
    z-index: 2;
`

export const AboutCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    height: 600px;
    transition: all 0.2s ease-in-out;
    cursor:pointer;
    
    &:hover{
        transform: scale(1.02);
        transition: 0.2s ease-in-out;
    }
`

export const CardTextWrapper = styled.div`
    display: flex;
    flex-direction: column;  
    text-align: right;  
    padding-top: 200px;
    width: 95%;
    bottom: 0;
`


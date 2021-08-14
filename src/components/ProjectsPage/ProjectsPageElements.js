import styled from 'styled-components';

export const FullBackground = styled.div`
    background: #F5F5F5;    
    height: 920px;
    font-family: Raleway-Thin, serif;
    letter-spacing: 0.15em;

    @media screen and (max-width: 1050px) {
        height: 1700px;
    }
`

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
    margin-left: 13%;
    margin-right: 13%;
`

export const Projects = styled.div`
    display: flex;

    @media screen and (max-width: 1050px) {
        flex-direction: column;
    }
`

export const Project = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
    width: 300px;
    height: 350px;
    border-style: solid;
    border-width: 0.5px;
    border-radius: 0px 0px 7px 7px;
    border-color: #989898;
    transform: perspective(1000) rotateY(${({flipped}) => (flipped ? `180deg` : `0deg`)});
    transform-style: preserve-3d;
    transition: 800ms;
`

export const Front = styled.div`
    backface-visibility: hidden;
`

export const Back = styled.div`
    position: absolute;
    backface-visibility: hidden;
    transform: rotateY(180deg);
    height: 100%;
`

export const Description = styled.div`
    width: 290px;
    line-height: 1.5;
`

export const TagWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const TechTag = styled.div`
    background: #ffdbe9;
    border-radius: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: auto;
    padding: 7px;
    margin-right: 7px;
`

export const GitHubLink = styled.a`
    display: flex;
    float: right;
    justify-content: center;
    padding: 10px;
    margin: 15px;
    width: auto;
    background: #ED5B95;
    border-radius: 40px;
    outline: none;
    text-decoration: none;
    color: white;
    cursor: pointer;
    position: fixed;
    bottom: 0;
    right: 0;
`

export const DTE = styled.a`
    display: flex;
    position: fixed;
    bottom: 7px;
    margin-left: -3px;
    cursor: pointer;

`
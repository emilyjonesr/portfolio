import styled from 'styled-components';

export const FullBackground = styled.div`
    height: 600px;
    font-family: Raleway-Thin, serif;
    letter-spacing: 0.15em;

    @media screen and (max-width: 1150px) {
        height: 1200px;
    }
`

export const SocialsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    margin-left: 13%;
    margin-right: 13%;
`

export const Socials = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 35px;

    @media screen and (max-width: 1150px) {
        flex-direction: column;
    }
`

export const Social = styled.a`
    padding: 30px;
    cursor: pointer;

    &:hover{
        transform: scale(1.05);
        transition: 0.2s ease-in-out;
    }
`
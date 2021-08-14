import styled from 'styled-components';

export const FullBackground = styled.div`
    display: flex;
    flex-direction: column;
    background: #F5F5F5;
    height: 100px;
    font-family: Raleway-Thin, serif;
    letter-spacing: 0.15em;
    align-items: center;
    justify-content: center;
`

export const Link = styled.div`
    &:hover{
        transform: scale(1.05);
        transition: 0.2s ease-in-out;
    }
`
import React from 'react'
import { FullBackground, Link } from './FooterElements';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <FullBackground>
            <Link>
                <a target="_blank" href='https://github.com/emilyjonesr/portfolio' style={{margin: '15px', color: 'black', textDecoration: 'none' }}>Source Code</a>
            </Link>
            <p style={{marginTop: '15px'}}>© {year} Emily Jones</p>
        </FullBackground>
    )
}

export default Footer

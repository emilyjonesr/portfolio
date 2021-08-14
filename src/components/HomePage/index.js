import React, { useEffect } from 'react'
import Slider from 'react-styled-carousel';
import { FullBackground, AboutContainer, SliderContainer, ImageContainer, AboutCard, CardTextWrapper } from './HomePageElements'
import student from '../../images/HomeGraphics/student.svg';
import developer from '../../images/HomeGraphics/developer.svg';
import designer from '../../images/HomeGraphics/designer.svg';
import headshot from '../../images/temp.jpeg';

const HomePage = () => {

    const handleMousemove = (e) => {
        const shapes = document.getElementsByClassName('shape');

        [...shapes].forEach((shape) => {
            const speed = shape.getAttribute('speed');

            const x = (window.innerWidth - e.pageX*speed)/100;
            const y = (window.innerHeight - e.pageY*speed)/100;

            shape.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMousemove)

    }, []);

    return (
        <FullBackground>
            <AboutContainer>
                {/* <div className='shape' speed='2' style={{background: 'red', width: '20px', height: '20px', margin: '50px'}}></div>
                <div className='shape' speed='8' style={{background: 'pink', width: '20px', height: '20px', margin: '80px'}}></div>
                <div className='shape' sspeed='5' tyle={{background: 'green', width: '20px', height: '20px', margin: '100px'}}></div>
                <div className='shape' speed='11' style={{background: 'purple', width: '20px', height: '20px', margin: '10px'}}></div> */}
                {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF0066" d="M41.6,22.4C29,45.9,-23.4,44.9,-37,20.8C-50.6,-3.3,-25.3,-50.4,0.9,-49.9C27.1,-49.4,54.3,-1.2,41.6,22.4Z" transform="translate(100 100)" />
                </svg>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF0066" d="M61.4,-1.1C61.4,30.5,30.7,60.9,-0.8,60.9C-32.2,60.9,-64.5,30.5,-64.5,-1.1C-64.5,-32.6,-32.2,-65.2,-0.8,-65.2C30.7,-65.2,61.4,-32.6,61.4,-1.1Z" transform="translate(100 100)" />
                </svg> */}
                {/* <div style={{zIndex: 1, position: 'relative', }}> */}
                    {/* <svg style={{ position: 'relative', zIndex: 1, top: '200px', left: '100px' }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF0066" d="M46.1,-62.2C60.9,-52.7,74.9,-40.8,81.7,-25.3C88.4,-9.8,88,9.4,80.6,24.4C73.2,39.4,58.8,50.3,44.2,54.6C29.6,58.9,14.8,56.6,2.3,53.5C-10.3,50.3,-20.6,46.4,-31.6,40.9C-42.7,35.5,-54.5,28.5,-63.6,16.8C-72.7,5.1,-79.1,-11.3,-73,-21.8C-66.9,-32.3,-48.5,-36.8,-34.2,-46.4C-20,-56.1,-10,-70.9,2.8,-74.8C15.7,-78.7,31.3,-71.7,46.1,-62.2Z" transform="translate(120 120)" />
                    </svg> */}
                {/* </div> */}
                
                {/* <div style={{ position: 'relative', zIndex: '2', top: '200px', left: '100px'}}>
                    <div style={{background: 'yellow', width:'400px', height: '400px',}}>
                    </div>
                </div>
                <div style={{background: 'blue', width:'500px', height: '500px', position: 'relative', zIndex: '1', top: '40px', left: '27px'}}></div>
                <div style={{background: 'red', width:'200px', height: '200px', position: 'relative', zIndex: '3', top: '50px', left: '-500px'}}></div> */}


                {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FF0066" d="M44.5,-22.7C56.3,-5.3,63.4,17.7,55.2,34.8C47,52,23.5,63.3,-1.2,64C-25.9,64.7,-51.8,54.8,-60,37.6C-68.3,20.4,-58.9,-4.1,-45.9,-22.1C-33,-40.2,-16.5,-51.9,-0.1,-51.8C16.4,-51.8,32.8,-40.1,44.5,-22.7Z" transform="translate(100 100)" />
                </svg>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path fill="#FF0066" d="M49.4,-45.6C64.7,-34.2,78.1,-17.1,74.6,-3.5C71,10,50.6,20.1,35.3,27.4C20.1,34.7,10,39.3,-0.7,40C-11.5,40.8,-23,37.6,-31.9,30.3C-40.8,23,-47.1,11.5,-52.4,-5.3C-57.7,-22.1,-62,-44.2,-53.1,-55.6C-44.2,-67.1,-22.1,-67.9,-2.5,-65.4C17.1,-62.9,34.2,-57.1,49.4,-45.6Z" transform="translate(100 100)" />
</svg> */}
                {/* <SliderContainer>
                    <Slider showArrows={true} cardsToShow={1} autoSlide={8000} showDots={false} pauseOnMouseOver={true}>
                        <AboutCard>
                            <CardTextWrapper>
                                <h1>student.</h1>
                                <p> I am a Computer Science student at the University of Florida. Outside of my primary studies, I enjoy learning new laguages, frameworks, and technologies! </p>
                            </CardTextWrapper>
                            <img src={student} alt='student' style={{width:'250px', height: '250px', display: 'block', marginLeft: 'auto'}}/>
                        </AboutCard>
                        <AboutCard>
                            <h1>developer.</h1>
                            <p> In my free time, I enjoy dreaming up and brining to life new ideas. new languges and frameworks. Check out my projects below! developing new .</p>
                            <img src={developer} alt='developer' style={{width:'250px', height: '250px'}}/>
                        </AboutCard>
                        <AboutCard>
                            <CardTextWrapper>
                                <h1>designer.</h1>
                                <p> I am fascinated by the intersection of technology, business, and design, and aspire to be a Product Manager one day.</p>
                                <img src={designer} alt='designer' style={{width:'250px', height: '250px'}}/>
                            </CardTextWrapper>
                        </AboutCard>
                        <AboutCard>
                            <CardTextWrapper>
                                <h1>aspiring product manager.</h1>
                                <p> The intersection of technology(engineering), business, and design fascinates me. I aspire/aim to combine or leverage or utilize these disciplines to develop(shape, engineer) emerging technology.</p>
                            </CardTextWrapper>
                        </AboutCard>
                    </Slider>
                </SliderContainer>
                <ImageContainer>
                    <img src={headshot} alt='headshot' style={{ maxWidth: '100%', width: 'auto', height: 'auto', padding: '15px'}}/>
                </ImageContainer> */}
            </AboutContainer>
        </FullBackground>
    )
}

export default HomePage

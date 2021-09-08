
import styled, {css} from 'styled-components/macro';
import { Button } from './Button';
import {IoMdArrowForward} from 'react-icons/io';
import {IoArrowForward, IoArrowBack} from 'react-icons/io5';
import { useEffect, useRef, useState } from 'react';


const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;

`;
const HeroWrapper = styled.div`
 width: 100%;
 height: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 position: relative;
 overflow: hidden;
`

const HeroSlide = styled.div`
z-index: 1;
width: 100%;
height: 100%;
`

const HeroSlider = styled.div`
position: absolute;
width: 100%;
height: 100%;
display: flex;
align-items: center;
top: 0;
left: 0;
justify-content: center;
`;


const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
height: 100vh;
width: 100vw;
object-fit: cover;

`;

const HeroContent = styled.div`
position: relative;
display: flex;
z-index: 10;
flex-direction: column;
max-width: 1600px;
width: calc(100% - 100px);

h1 {
    font-size: clamp(1rem, 8vw, 2rem);
    font-weight: 700;
    text-transform: uppercase;
    text-align: left;
    margin-bottom:  0.8rem;

}
p {
    margin-bottom: 1.2rem;
    font-weight: 500;
    

}

`

const Arrow = styled(IoMdArrowForward)`
  margin-left: 0.5rem;
`

const arrow = css`
height: 50px;
width: 50px;
background: #000d1a;
border-radius: 25px;
transition: 0.5s;
margin-right: 1rem;
user-select: none;
cursor: pointer;
color: #fff;

&:hover {
    background: #cd853f;
    transform: scale(1.05)
}

`


const NextButton = styled(IoArrowForward)` ${arrow} `;
const PrevButton = styled(IoArrowBack)` ${arrow} `;

const SliderButtons = styled.div`
position: absolute;
bottom: 50px;
right: 50px;
display: flex;
z-index: 10;
  
   
  `


const Hero = ({slides}) => {
   const [current, setCurrent] = useState(0);
   const length  = slides.length;
   const timeout = useRef(null) ;
   console.log(length);

   const nextSlide = () => {
       setCurrent(current === length - 1 ? 0 : current + 1);
       console.log(current);
   }
   const prevSlide = () => {
       setCurrent(current === 0 ? length -  1 : current - 1);
       console.log(current)
   }

   useEffect(() => {
       const nextSlide = () => {
           setCurrent(current => (current === length -1 ? 0 : current +1));


       }

       timeout.current = setTimeout(nextSlide, 1500);

       return function() {
           if(timeout.current) {
               clearTimeout(timeout.current);
           }
       }
   }, [current , length])




    return (
        <HeroSection>
            <HeroWrapper>
                {slides.map((slide, index) => {
                    return (
                        <HeroSlide key={index}>
                            {index === current && (
                                 <HeroSlider>
                                 <HeroImage src={slide.image}  alt={slide.alt}/>
                                     <HeroContent>
                                     <h1>{slide.title}</h1>
                                     <p>{slide.price}</p>
                                     <Button to={slide.path} primary='true' css={` max-width: 160px; `}>
                                         {slide.label}
                                         <Arrow></Arrow>
                                     </Button>
 
 
                                     </HeroContent>
                                   
                               
                             </HeroSlider>

                            )}
                           
                        </HeroSlide>

                    )
                })}
            <SliderButtons>
                <PrevButton onClick={prevSlide}></PrevButton>
                <NextButton onClick={nextSlide}></NextButton>
            </SliderButtons>

            </HeroWrapper>
        

        </HeroSection>

    )
}

export default Hero;
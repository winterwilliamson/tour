import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';


const Section = styled.section`
width: 100%,
height: 100%;
padding: 4rem 0rem;
`;

const Container = styled.div`
padding: 3rem calc((100vw / 1300px) / 2);
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 800px;

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

}

`;

const ColumnLeft = styled.div`
 display: flex;
 align-items: center;
 flex-direction: column;
 justify-content: center;
 align-items: flex-start;
 padding: 1rem 2rem;
 line-height: 1.4;
 order: ${({reverse }) => (reverse ? '1 ' : '2')};

 h1 {
     margin-bottom: 20px;
     font-size: 2rem;

 }

 p{
    margin-bottom: 20px;

 }

`;

const ColumnRight = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 1rem 2rem;
 order: ${({reverse }) => (reverse ? '1 ' : '2')};


@media screen and (max-width: 768px) {

 order: ${({reverse }) => (reverse ? '1 ' : '2')};


}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

`;


const InfoSection = ({
    title, paragraph, buttonLabel, image, reverse, delay

}) => {
    return (
        <Section>
            <Container>
       
       
         <ColumnRight>
         <img src={image}  alt='home' />
         </ColumnRight>
         <ColumnLeft>
         <h1>{title}</h1>
         <p>
       {paragraph} </p>
         <Button primary='true' to='/home' >
          {buttonLabel}
         </Button>
         </ColumnLeft>
           </Container> 

        </Section>

        
    )

}

export default InfoSection;
import styled, {css} from 'styled-components/macro';
import {TiSocialFacebook} from 'react-icons/ti';
import {TiSocialSkype} from 'react-icons/ti';
import {TiSocialLinkedin} from 'react-icons/ti';
import {TiSocialTwitter} from 'react-icons/ti';


const Section = styled.section`
  background: #111;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 2rem 3rem;

  
@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
  }
`;

const FooterRight = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: row;


@media screen and (max-width: 600px){
   flex-direction: column;
  

}
 
`;

const FooterLeft = styled.div``;

const FooterSection = styled.div``;

const FooterHead = styled.h4`

color: coral;
margin-bottom: 10px;

`;

const FooterLink = styled.div`
color: coral;
padding: 1rem 3rem;



@media screen and (max-width: 768px){
  display: flex;
  padding: 1.5rem 1rem;
  font-size: 0.5rem;

  
   
 }


`;




const Icons = css`

font-size: 2rem;
margin-left: 20px;


@media screen and (max-width: 768px){
  
  font-size: 1.5rem;

  
   
 }



`

const FooterIcons = styled(TiSocialTwitter)`
${Icons}

`;

const FooterIconsTwo = styled(TiSocialFacebook)`

 ${Icons}
`;

const FooterIconsThree = styled(TiSocialSkype)`

${Icons}

`;

const FooterIconsFour = styled(TiSocialLinkedin)`

${Icons}

`;




const FooterName = styled.li`
margin-bottom: 10px;
list-style: none;
cursor: pointer;
`;


const FooterContent = styled.div`
padding: 0 2rem;
`;

const FooterContentOne = styled.div`
padding: 0 2rem;`;






const Footer = ({footer, footerTwo}) => {
    return (
      <Section>
        <FooterLeft>
          <h1>Let us Find Your Dream Trip 🚩</h1>
          <FooterLink>
            <FooterIcons></FooterIcons>
            <FooterIconsTwo></FooterIconsTwo>
            <FooterIconsThree></FooterIconsThree>
            <FooterIconsFour></FooterIconsFour>
          </FooterLink>
        </FooterLeft>
        <FooterRight>
          <FooterContent> 
        <FooterHead >
                Contact Us
        </FooterHead>
          {footer.map((item, index) => (
            <FooterSection key={index}>
              <FooterName to={item.to}>
                {item.name}
                  
              </FooterName>
            

            </FooterSection>
          
          ))}
          </FooterContent >
          <FooterContentOne> 
        <FooterHead >
                Tourism
        </FooterHead>
          {footerTwo.map((item, index) => (
            <FooterSection key={index}>
              <FooterName to={item.to}>
                {item.name}
                  
              </FooterName>
            

            </FooterSection>
          
          ))}
          </FooterContentOne >


        </FooterRight>

      </Section>
    )
}

export default Footer;
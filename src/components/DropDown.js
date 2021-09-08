import styled from 'styled-components';
import { menudata } from '../data/MenuData';
import { Button } from './Button';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa'

const DropDownContainer = styled.div`
position: fixed;
height: 100%;
width: 100%;
z-index: 999;
display: grid;
align-items: center;
top: 0;
right: 0;
transition: 0.3s ease-in-out;
opacity: ${({isOpen} ) => (isOpen ? '1' : '0')};
background: coral;
right: ${({isOpen}) => (isOpen ? '0' : '-100%')}


`
const DropDownWrapper = styled.div``;
const DropDownMenu = styled.div`
display: grid;
 grid-template-columns: 1fr;
 grid-template-rows: repeat(4, 80px);
 text-align: center;
 margin-bottom: 4rem;
 text-decoratin: none;

 @media screen and max-width(468px ) {
    grid-template-rows: repeat(4, 60px);
      
}


`;
const Icon = styled.div`
position : absolute;
top: 1.2rem;
right: 1.5rem;
outline: none;
cursor: pointer;
font-size: 2rem;
`;

const CloseIcon = styled(FaTimes)`
color: #0001da; `;


const DropDownLink = styled(Link)`
 display: flex;
 align-items: center;
 justify-content: center;
 color: #fff;
 text-decoration: none;
 list-style: none;
 cursor: pointer;
 transition: 0.5s ease-in-out;
  
 &:hover {
     color: #111;
 }
`


const Btnwrap = styled.div`
 display: flex;
 justify-content: center;
`;


const DropDown = ({toggle, isOpen}) => {
    return (
        <DropDownContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon></CloseIcon>
           </Icon>
           <DropDownWrapper>
               <DropDownMenu>
                   {menudata.map((item, index) => (
                       <DropDownLink to={item.link} key={index}>
                        {item.title}
                       </DropDownLink>

                   ))}

               </DropDownMenu>
               <Btnwrap>
                   <Button primary='true' big='true' to='/contact' >
                       Contact Us
                   </Button>
               </Btnwrap>
           </DropDownWrapper>
        </DropDownContainer>

    ) 

}

export default DropDown 
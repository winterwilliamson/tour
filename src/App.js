import React, {useState} from 'react';

import Navbar from './components/Navbar'
import GlobalStyle from './GlobalStyle';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import DropDown from './components/DropDown';
import InfoSection from './components/InfoSection';
import InfoSectionTwo from './components/InfoSectionTwo'
import { InfoData, InfoDataTwo } from './data/InfoData';
import Footer from './components/Footer';
import { footer, footerTwo, icons } from './data/footer';



function App() {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
      setOpen(!isOpen);
  }

  return (
    <>

    <GlobalStyle></GlobalStyle>
      <Navbar toggle={toggle} ></Navbar>
      <DropDown isOpen={isOpen} toggle={toggle}></DropDown>
      <Hero slides={SliderData}></Hero>
      <InfoSection {...InfoData}/>
      <InfoSectionTwo {...InfoDataTwo}/>
      < Footer footer={footer} footerTwo={footerTwo} icons={icons} />
    
    </>
  );
}

export default App;

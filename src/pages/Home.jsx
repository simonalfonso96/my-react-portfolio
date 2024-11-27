import React from 'react';
import Navbar from '../components/navbar';
import Herosection from '../components/Herosection';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


export default function Home() {
    
  return (
    <>
    <Navbar/>
    <Herosection/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

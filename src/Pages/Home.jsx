import React, { useRef } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Resume from "../Components/Resume/Resume";
import Services from "../Components/Services/Services";
import Skills from "../Components/Skills/Skills";
import Projects from "../Components/Projects/Projects";
import Contact from "../Components/Contect/Contact";
import Footer from "../Components/Footer/Footer";

function Home() {
  const Ref1 = useRef()
  const Ref2 = useRef()
  const Ref3 = useRef()
  const Ref4 = useRef()
  const Ref5 = useRef()
  const Ref6 = useRef()
  const Ref7 = useRef(null)

  const handleScroll = async(sectionRef)=>{


    console.log( );
    window.scrollTo({
      top: sectionRef.current.offsetTop - 70,
      behavior: 'smooth',
    });
}
  
  return (
    <>
      <Navbar handleScroll={handleScroll} Ref1={Ref1} Ref2={Ref2}Ref3={Ref3} Ref4={Ref4} Ref5={Ref5} Ref6={Ref6} Ref7={Ref7}/>
      {/* <section ref={Ref1} ><Hero /></section> */}
      <section  ref={Ref2}> <About/></section>
      <section ref={Ref3} ><Resume /></section>
      <section ref={Ref4}><Services /></section>
      <section ref={Ref5}><Skills /></section>
      <section ref={Ref6}> <Projects /></section>
      {/* <section ref={Ref7}> <Contact /></section> */}
      <Footer />
    </>
  );
}

export default Home;

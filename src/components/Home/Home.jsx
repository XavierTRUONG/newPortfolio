/* eslint-disable jsx-a11y/img-redundant-alt */
import Banner from '../Banner/Banner';
import Navbar from '../NavBar/Navbar';
import photoProfilDark from '../../images/profil-dark.png';
import photoProfilLight from '../../images/profil-light.png';
import logoLinkedin from '../../images/logo-linkedin.svg';
import logoGithub from '../../images/logo-github.svg';
import { useRef, useEffect } from "react";

const Home = () => {
    const title = useRef(null);
    const subtitle = useRef(null);
    const linkedin = useRef(null);
    const github = useRef(null);
    const button = useRef(null);
  
    useEffect(() => {
        const elementsToObserve = [title, subtitle];

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-bottom');
              } else {
                entry.target.classList.remove('fade-in-bottom');
              }
            });
          },
          { threshold: 1 }
        );
    
        elementsToObserve.forEach((element) => {
          if (element.current) {
            observer.observe(element.current);
          }
        });
    
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const elementsToObserve = [linkedin, github, button];

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('bounce-top');
              } else {
                entry.target.classList.remove('bounce-top');
              }
            });
          },
          { threshold: 1 }
        );
    
        elementsToObserve.forEach((element) => {
          if (element.current) {
            observer.observe(element.current);
          }
        });
    
        return () => observer.disconnect();
    }, []);

  return (
    <section className='home'>
        <Navbar/>
        <Banner/>
        <div className='home__content'>
            <div className='home__content--text'>
                <div className='containerTitle'>
                    <h1 ref={title}>HI ! I am Xavier,</h1>
                    <h2 ref={subtitle}>DEVELOPER JUNIOR</h2>
                </div>
                <a ref={button} href='#contact' className='contactButton'>
                    CONTACT ME
                </a>
            </div>
            <div className='home__content--image fade-in-bottom'>
                <img src={photoProfilDark} alt="photo de profil"/>
                <img src={photoProfilLight} alt="photo de profil"/>
            </div>
            <div className='home__content--logos'>
            <a ref={linkedin} href="https://www.linkedin.com/in/xavier-truong/">
                <img src={logoLinkedin} alt="logo Linkedin"/>
            </a>
            <a ref={github} href="https://github.com/XavierTRUONG">
                <img src={logoGithub} alt="logo Github"/>
            </a>
            </div>
        </div>
    </section>
  )
}

export default Home;
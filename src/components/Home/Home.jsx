import Banner from '../Banner/Banner';
import Navbar from '../NavBar/Navbar';
import photoProfilDark from '../../images/profil-dark.png';
import photoProfilLight from '../../images/profil-light.png';
import logoLinkedin from '../../images/logo-linkedin.svg';
import logoGithub from '../../images/logo-github.svg';

const Home = () => {
  return (
    <section className='home'>
        <Navbar/>
        <Banner/>
        <div className='home__content'>
            <div className='home__content--text'>
                <div className='containerTitle'>
                    <h1 className='fade-in-bottom'>HI ! I am Xavier,</h1>
                    <h2 className='fade-in-bottom'>DEVELOPER JUNIOR</h2>
                </div>
                <a href='#contact' className='contactButton bounce-top'>
                    CONTACT ME
                </a>
            </div>
            <div className='home__content--image fade-in-bottom'>
                <img src={photoProfilDark} alt="photo de profil"/>
                <img src={photoProfilLight} alt="photo de profil"/>
            </div>
            <div className='home__content--logos'>
            <a className='bounce-top' href="https://www.linkedin.com/in/xavier-truong/">
                <img src={logoLinkedin} alt="logo Linkedin"/>
            </a>
            <a className='bounce-top' href="https://github.com/XavierTRUONG">
                <img src={logoGithub} alt="logo Github"/>
            </a>
            </div>
        </div>
    </section>
  )
}

export default Home;
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/NavBar/Navbar';
import photoProfil from '../../images/profil-image.png';
import logoLinkedin from '../../images/logo-linkedin.svg';
import logoGithub from '../../images/logo-github.svg';

const Home = () => {
  return (
    <section className='home'>
        <Navbar/>
        <Banner/>
        <div className='home__content'>
            <div className='home__content--text'>
            <div>
                <h2>HI ! I am Xavier,</h2>
                <h1>DEVELOPER JUNIOR</h1>
            </div>
            <div className='contactButton'>
                CONTACT ME
            </div>
            </div>
            <div className='home__content--image'>
            <img src={photoProfil} alt="" />
            </div>
            <div className='home__content--logos'>
            <a href="https://www.linkedin.com/in/xavier-truong/">
                <img src={logoLinkedin} alt="logo Linkedin"/>
            </a>
            <a href="https://github.com/XavierTRUONG">
                <img src={logoGithub} alt="logo Github"/>
            </a>
            </div>
        </div>
    </section>
  )
}

export default Home;
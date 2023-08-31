import LogoPortfolio from '../../images/logoPorfolio.svg';
import DarkMode from '../DarkMode/DarkMode';

const Navbar = () => {
  return (
    <div className='navbar fade-in-top'>
        <div className='navbar__logo'>
            <img src={LogoPortfolio} alt="logo" />
            <p>TRUONG</p>
        </div>
        <div className='navbar__links'>
            <a href='#homepage'>HOME</a>
            <a href='#about'>ABOUT</a>
            <a href='#experience'>EXPERIENCE</a>
            <a href='#skill'>SKILL</a>
        </div>
        <DarkMode/>
    </div>
  )
}

export default Navbar;
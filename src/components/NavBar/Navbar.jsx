import LogoPortfolio from '../../images/logoPorfolio.svg'
import buttonTheme from '../../images/dark-theme-button.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
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
        <div className='navbar__theme'>
            <img src={buttonTheme} alt="dark theme button" />
        </div>
    </div>
  )
}

export default Navbar;
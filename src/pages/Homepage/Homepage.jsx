import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Experience from "../../components/Experience/Experience";
import Home from "../../components/Home/Home";
import Skill from "../../components/Skill/Skill";

const Homepage = () => {
  return (
    <div id="homepage" className='homepage'>
      <Home/>
      <About/>
      <Experience/>
      <Skill/>
      <Contact/>
    </div>
  )
}

export default Homepage;
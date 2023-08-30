import LogoMail from '../../images/mail.svg';
import LogoPhone from '../../images/phone.svg';
import { useState, useRef, useEffect } from "react";

const Contact = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const title = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        }, { threshold: 1 }
      );

      observer.observe(title.current);

      if (isIntersecting) {
        title.current.style.display = 'inline-block';
        console.log(title.current.style.display);
      } else {
        title.current.style.display = 'none';
        console.log(title.current.style.display);
      }
  
      return () => observer.disconnect();
    }, [isIntersecting]);
    
  return (
    <section id='contact' className="contact">
        <h2>CONTACT</h2>
        <h3 ref={title}>INTERRESTING BY MY PROFIL ? DO NOT HESITATE TO CONTACT ME !</h3>
        <div className="contact--card">
            <img src={LogoMail} alt="logo mail" />
            <div>
                <h4>CHAT WITH ME</h4>
                <p>xaviertruong@test.fr</p>
            </div>
        </div>
        <div className="contact--card">
            <img src={LogoPhone} alt="logo phone" />
            <div>
                <h4>CALL ME</h4>
                <p>+1-202-555-0190</p>
            </div>
        </div>
    </section>
  )
}

export default Contact;
import LogoMail from '../../images/mail.svg';
import LogoPhone from '../../images/phone.svg';
import { useRef, useEffect } from "react";

const Contact = () => {
    const title = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            title.current.classList.add('fade-in-bottom');
          } else {
            title.current.classList.remove('fade-in-bottom');
          }
        }, { threshold: 1 }
      );

      observer.observe(title.current);
      return () => observer.disconnect();
    }, []);
    
  return (
    <section id='contact' className="contact">
        <h2>CONTACT</h2>
        <h3 ref={title}>INTERRESTING BY MY PROFIL ? DO NOT HESITATE TO CONTACT ME !</h3>
        <div className="contact--card">
            <div className='bulle'></div>
            <img src={LogoMail} alt="logo mail" />
            <div>
                <h4>CHAT WITH ME</h4>
                <p>xaviertruong@test.fr</p>
            </div>
        </div>
        <div className="contact--card">
            <div className='bulle'></div>
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
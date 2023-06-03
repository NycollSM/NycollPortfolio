import React from 'react';
import gmail from '../../images/gmail.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin-logo.png';
import '../../sass/footer/footer.scss';



const Footer = () => {
  return (
    <div id='contact' className='color--container'>
       <div>
          <a href="https://github.com/NycollSM" target= '_black' className="links"><img src={github}></img></a>
          <a href="mailto:nycollsotomorales21@gmail.com" target= '_black' className="links"><img src={gmail} alt=""></img></a>
          <a href="https://www.linkedin.com/in/nycoll-soto-morales-6b2430169/" target= '_black' className="links"><img src={linkedin} alt=""></img></a>
      </div> 
      <div id="footer" className="link--footer">
          <a className="contact" href="mailto:nycollsotomorales21@gmail.com">nycollsotomorales21@gmail.com</a>
      </div> 
    </div>
  )
}

export default Footer;

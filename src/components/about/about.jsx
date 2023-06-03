import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import imgPrueba from '../../images/about/about3.jpg';
import img2 from '../../images/about/about4.jpg'
import Dalimg from '../../images/about/DalCR.png'

const About = () => {

  return (
    <div className='color--container' id='about'>
        <Container  className='py-4'>
        <Row>
          <Col  className='py-4'> 
            <h2 className='title-design'>About me</h2>
          </Col>
        </Row>

        <Row>
          <Col > 
            
            <img src={img2} className='img-fluid'  alt="" />
            
          </Col>
          <Col xs={8} className='pt-3'>
            <p className="fs-4">Hello there! I'm Nycoll, a passionate and skilled UX/UI designer and web developer with a knack for creating immersive digital experiences. Let me give you a glimpse into my world of design and development!</p>
            <p className="fs-4">My journey into technology started early when I joined an Introductive code course MenTe en Accion for young women in Costa Rica, which encourages and inspires teenagers to pursue scientific and technology careers. After attending the immersive code course, I participated in a Hackaton (Dal2015 - Costa Rica), a software competition that seeks technological solutions to social problems using open data.</p>
          </Col>
        </Row>
        <Row className='pt-4'>
          
          <Col xs={8}>
            <p className="fs-4 pt-3">In addition to my education and experience, I graduated from the Center of Visual Arts and Technology (Cetav) in Web Design and Development. I hold certifications such as:
              <ul>
                <li>UI Design Patters for Success Software - Interaction Design Foundation (IxDF)</li>
                <li>UX Design - Google Certificate</li>
              </ul>
            </p>
          
          </Col>
          <Col>
            <img src={Dalimg} className='img-fluid'  alt="" />
          </Col>
        
        </Row>

      </Container>
      <Container>
        <Row>
          <Col>
          <h4 className='fs-4'>Let's connect!</h4>
            <p className='fs-4'>Currently based in Phoenix, Arizona. </p>
            
          </Col>
        </Row>
        
      </Container>
      
    
    </div>
   

  )
}

export default About;
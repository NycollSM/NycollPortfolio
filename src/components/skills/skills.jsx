import React from 'react';
import '../../sass/skills/skills.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Skills = () => {
  return (
    <div id='skills' className='color--container py-4'>
       <Container className='py-4'>
          <Row  className='py-4'>
            <Col> 
              <h2 className='title-design'>Skills</h2>
            </Col>
          </Row>
          <Row>
            <Col className="wrapper-item"> 
              <h3 className='titles-skills'>Web</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript / Node JS</li>
                <li>WordPress / Drupal</li>
              </ul>
            </Col>
            <Col className="wrapper-item">
              
                <h3 className='titles-skills'>Design</h3>
                <ul>
                  <li>UX / UI Design</li>
                  <li>Figma / Sketch</li>
                  <li>Adobe Photoshop</li> 
                  <li>Adobe Illustrator</li>
                </ul>
              
            </Col>
            <Col className="wrapper-item">
              
                <h3 className='titles-skills'>Tools</h3>
                <ul>
                  <li>Git</li>
                  <li>Sass / PostCss</li>
                  <li>Bootstrap</li>
                  <li>Webpack / Gulp</li> 
                </ul>
              
            </Col>
            <Col className="wrapper-item">
            
              <h3 className='titles-skills'>Soft Skills</h3>
              <ul>
                <li>Non-violent Communication</li>
                <li>Design Thinking</li>
                <li>Agile Methodologies</li>
              </ul>
            

            </Col>
          </Row>
        </Container>

  </div>
  )
}

export default Skills;
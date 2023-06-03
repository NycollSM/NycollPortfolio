import React from 'react';
import logo from '../../images/cherry.png';
import '../../sass/header/header.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  return (
    <div >
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  >
        <Container>
          <Row>
            <Col>
              <Navbar.Brand href="#home" className='name'>Nycoll Soto M</Navbar.Brand>
              <p className="career">UX/UI Designer - Web Dev </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#design">Design</Nav.Link>
                  <Nav.Link href="#projects">Code</Nav.Link>
                  <Nav.Link href="#skills">Skills</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                  
                </Nav>
                
              </Navbar.Collapse>
            </Col>
          </Row>
          
        </Container>
      </Navbar>
    </div>
  )

}

export default Header;
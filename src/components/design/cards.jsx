import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal1 from './Model';

function CaseStudies() {
  const [show, setShow] = useState(false);

  return (
    <>
     <Container>
      <Row className='py-4'>
        <Col >
         <h3 className='title-design'>UX Case Studies</h3>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col>
        
        <p>

          img
        </p>
        </Col>
        <Col xs={6}>
          <h4>CMS Dashboard</h4>
          <p>This dashboard was designed for the company's managers who needed to keep track on the clients who are actively working and clients who have not been active in a long period of time.</p>
          <p><span class="badge text-bg-secondary">Research</span> <span class="badge text-bg-secondary">Desktop Application</span> <span class="badge text-bg-secondary">Figma</span></p>
        
     
          <Button variant="primary" onClick={() => setShow(true)}>
            Find out more
          </Button>
          <Modal1></Modal1>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col>
        <p>
          img
        </p>
        </Col>
        <Col xs={6}>
          <h4>Reports</h4>

          <p>My task was to redesign the Reports feature since it was outdated and users were not very familiar with the language used in the reports. The goal was to make the reports easier to understand and use for the clients.</p>

          <Button variant="primary" onClick={() => setShow(true)}>
            Find out more
          </Button>

         
        </Col>
      </Row>
      <Row className='py-4'>
        <Col>
        <p>
          img
        </p>
        </Col>
        <Col xs={6}>
          <h4>Dr. Lookup</h4>
          <p>This project needed to be redesign since the search results was hard to understand, it needed more herarchy and make the data more readable.</p>
          <Button variant="primary" onClick={() => setShow(true)}>
            Find out more
          </Button>

         
            <p>
             jajajajajajaja
            </p>
          
        </Col>
      </Row>
      <Row className='py-4'>
        <Col>
        <p>
          img
        </p>
        </Col>
        <Col xs={6}>
          <h4>Subject Line</h4>
          <p>Creating a subject line for an email campaign could be complicated and this tool was designed to help the user and provide tips of how to add a successful subject line and avoid the email campaign to be send into the spam section.</p>
  
          <Button variant="primary" onClick={() => setShow(true)}>
            Custom Width Modal
          </Button>
          
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
              Custom Modal Styling
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              mkmkmk
            </p>
          </Modal.Body>
        </Modal> 
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default CaseStudies;
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class Model extends Component {
  
  render () {
    let modelStyle = {
    display: 'block',
    backgroundColor: 'rgba(0,0,0,0.8)',

  }
    return (
      <div>
        <div className="modal show fade" style={modelStyle}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title ps-4">{this.props.title}</h4>
                <button type="button" className="btn-close" onClick={this.props.hide}></button>
              </div>
              <div className="modal-body p-4">
                <Container className='p-4'>
                  <Row>
                    <Col>
                      <img src={this.props.img} className='img-fluid'/>
                    </Col>
                    <Col>
                      <p>{this.props.desc}</p>
                      <p>{this.props.fullDescr}</p>
                      <p>The Problem: <br/> {this.props.problem}</p>
                      <p>Duration: <br/> {this.props.duration}</p>
                      <p>My role: <br/> {this.props.role}</p>
                      <p>Responsabilities: <br/> {this.props.responsabilities} </p>

                    </Col>
                  </Row>
                </Container>
              </div>
              
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}
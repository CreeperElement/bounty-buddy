import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PayPalButton} from 'react-paypal-button-v2';
import {Col, Row} from 'react-flexbox-grid';
import ProjectCard from './Project Card/ProjectCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row className='max-width height-fill scroll' >
          <Col id='dashboard' className="curved-border" style={{height: "100%"}}>
            <div className="colum-main-content">
                <h1>Account</h1>
            </div>
          </Col>
          <Col id='main-content' className="curved-border" style={{height: "100%"}}>
            <div className="header">
                <h1>Details</h1>
            </div>
            <div className='colum-main-conent'>My name is! Who?</div>
          </Col>
          <Col id='other-projects' className="curved-border" style={{height: "100%"}}>
            <div style={{height: "95%"}}>
              <div className="header">
                <h1>Projects</h1>
              </div>
              <div className='curved-border scroll' style={{height: "85%"}}>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
            </div>
          </Col>
        </Row>
      </header>
    </div>
  );
}

export default App;


/*
<PayPalButton
    client-id="sb"
    amount = "5.00"
    currency = "USD"
    />
*/
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
          <Col id='dashboard' className="max-height">
            <div className='curved-border'>Hello there.</div>
          </Col>
          <Col id='main-content'>
            <div className='curved-border'>My name is! Who?</div>
          </Col>
          <Col id='other-projects'>
            <div className='curved-border scroll'>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
              <ProjectCard/>
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
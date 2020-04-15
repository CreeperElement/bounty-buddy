import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PayPalButton} from 'react-paypal-button-v2';
import {Col, Row} from 'react-flexbox-grid';
import ProjectCard from './Project Card/ProjectCard';
import SideBar from './sidebar/SideBar';

function App() {
  return (
    <div className="App height-fill">
     <SideBar/>
      <header className="App-header height-fill">
        <Row className='max-width height-fill' >
          <Col id='main-content' className="curved-border" >
            <div className="header">
                <h1>Details</h1>
            </div>
            <div className='colum-main-conent'>My name is! Who?</div>
          </Col>
          <Col id='other-projects' className="curved-border" >
            <div className="header">
              <h1>Projects</h1>
            </div>
            <div id='project-cards' className='curved-border scroll'>
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
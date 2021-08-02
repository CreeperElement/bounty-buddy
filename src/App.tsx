import React from 'react';
import './App.css';
import {Col, Row} from 'react-flexbox-grid';
import ProjectCard from './Project Card/ProjectCard';

function App() {
  return (
    <div className="App height-fill">
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
              <ProjectCard onClick={()=>{}}/>
              <ProjectCard onClick={()=>{}}/>
              <ProjectCard onClick={()=>{}}/>
              <ProjectCard onClick={()=>{}}/>
              <ProjectCard onClick={()=>{}}/>
              <ProjectCard onClick={()=>{}}/>
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
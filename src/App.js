import React from 'react';
import logo from './logo.svg';
import './App.css';
import {PayPalButton} from 'react-paypal-button-v2';
import {Col, Row} from 'react-flexbox-grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Row className='max-width'>
          <Col id='dashboard' className='curved-border'>
            Hello there.
          </Col>
          <Col id='main-content' className='curved-border'>
            My name is! Who?
          </Col>
          <Col id='other-projects' className='curved-border'>
            Slim Shady
          </Col>
        </Row>

      <PayPalButton
        client-id="sb"
        amount = "5.00"
        currency = "USD"
      />
      </header>
    </div>
  );
}

export default App;

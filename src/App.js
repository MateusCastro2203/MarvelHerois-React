import React from 'react';
import logo from './logo.svg';
import './App.css';
import Herois from './herois/herois';
import { Container, Row, Col } from 'reactstrap';
import Header from './header/Header';

function App() {
  return (
    <div className="App">
      <Container className="themed-container">
          <Row>
            <Header />
            <hr/>
            <Herois />
          </Row>
      </Container>
    </div>
  );
}

export default App;

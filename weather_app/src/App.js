import logo from './logo.svg';
import './App.css';
import Current from './components/Current'
import Forecast from './components/Forecast'
import Search from './components/Search'
import {Container, Row, Col } from 'react-bootstrap'

function App() {


  return (
    
    <Container style={{height: '100vh'}}>
      <Row style={{height: '20%', marginBottom: '20px'}}>
        <Col><Search /></Col>
      </Row>
      <Row style={{ height: '45%'}}>
        <Col><Current/></Col> 
      </Row>
      <Row style={{ height: '35%'}}>
        <Col><Forecast /></Col>
      </Row>
   </Container>
   
  );
}

export default App;

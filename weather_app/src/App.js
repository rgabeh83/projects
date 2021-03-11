import logo from './logo.svg';
import './App.css';
import Current from './components/Current'
import Forecast from './components/Forecast'
import Search from './components/Search'
import {Container, Row, Col, fluid, Breadcrumb } from 'react-bootstrap'
import { useContext } from 'react'
import { Context } from './Context'
import context from 'react-bootstrap/esm/AccordionContext';
function App() {

  const { weather, hasLoaded, setHasloaded, error, setError} = useContext(Context)

  const theme = (weather.isDay === 1 ) ? 'day' : 'night'

  const dayNightClass = (weather.isDay !== 0) ? 'day' : 'night'

  return (
    <div className={`body ${theme}` }> 

    { !hasLoaded  ? 
<div>
    <Search/> </div> :   
    
        <Container fluid >
      <Row style={{backgroundColor: 'black'}}className='search-bar' style={{paddingTop: '20px'}}>
        
        <Col ><Search/></Col>
        
      </Row>
      <Row >
        <Col ><Current/></Col>
       
      </Row>
      
      
    </Container>   
    
  
}

   </div>
  );
}

export default App;

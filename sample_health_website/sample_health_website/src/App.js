import './App.css';
import Navbar from './components/pages/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/homePage/home'
import Footer from './components/footer/footer'
import Pricing from './components/pricing'
import Services from './components/services'
import Products from './components/pages/products/products'

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" component={Services}/>
          <Route path="/Products" component={Products}/>
          </Switch> 
          <Footer/>
        </Router>
        </div>
  );
}

export default App;

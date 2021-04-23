
import './App.css';
import React, { useContext } from 'react'
import Home from './pages/home'
import Signup  from './pages/signup'
import Login from './pages/login'
// import jwtDecode from 'jwt-decode'
import { Store } from './store/store'

//Material UI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import themeFile from './util/theme'

//components
import Navbar from './components/navbar'
import  { GlobalState  } from './store/store';

const { BrowserRouter, Switch, Route } = require('react-router-dom')


const theme = createMuiTheme(themeFile)


// let authenticated
// const token = localStorage.FBIdToken
// if(token) {
//   const decodedToken = jwtDecode(token)
//   if(decodedToken.exp * 1000 < Date.now()){
//     window.location.href= '/login'
//     authenticated = false
//   } else {
//     authenticated = true
//   }
// }



function App() {
  return (
  
    <MuiThemeProvider theme={theme}>
     <GlobalState >
     
      <header className="App-header">
         
            <Navbar/>
            <div className="container">
            <Switch>
                <Route exact path to="/" component={Home}/>
                <Route  component={Login}to="/login" />
                 <Route  component={Signup} to="/signup" />   
            </Switch>
            </div>
          
      </header>
      </GlobalState>
    </MuiThemeProvider>
    
  );
}

export default App;

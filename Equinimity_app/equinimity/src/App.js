
import './App.css';
import Home from './pages/home'
import Signup  from './pages/signup'
import Login from './pages/login'
import jwtDecode from 'jwt-decode'
import { ContextProvider } from './context/context'


//Material UI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import themeFile from './util/theme'


//components
import Navbar from './components/navbar'


import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


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
    <ContextProvider>
      <header className="App-header">
      
     
            <div className="container">
            
             <Router>
             <Navbar/> 
            <Switch>
            
              <Route exact path="/" component={Home}/> 
              <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
            </Switch>
            </Router>
            </div>
            
      </header>
      </ContextProvider>
    </MuiThemeProvider>
    
  
    
  );
}

export default App;

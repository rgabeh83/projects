
import './App.css';
import React from 'react'


//pages
import Home from './pages/home'
import Signup from './pages/signup'
import Login from './pages/login'

//Material UI
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

//components
import Navbar from './components/navbar'
const { BrowserRouter , Route, Switch } = require('react-router-dom')

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    useNextVariants: true
  }
})

function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <p>
          
          <BrowserRouter>
            <Navbar/>
            <div className="container">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={Signup}/>
            </Switch>
            </div>
          </BrowserRouter> 
          
        </p>
      </header>
    </div>
    </MuiThemeProvider>
  );
}

export default App;

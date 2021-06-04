import React, { useContext, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../context/context'
import MyButton from '../util/myButton'
//MUI stuff
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

//Icons
import AddIcon from '@material-ui/icons/Add'
import HomeIcon from '@material-ui/icons/Home'
import Notifications from '@material-ui/icons/Notifications'

function Navbar(props){


const { state: { authenticated }} = useContext(Context)
console.log(authenticated)
    return (
        <AppBar position="fixed">
            <Toolbar className="nav-container">
                 {authenticated ? ( 
                     <Fragment>
                         <MyButton tip="Create a post">
                             <AddIcon color="primary"/>
                         </MyButton>
                         <Link>
                         <MyButton tip="Home">
                             <HomeIcon color="primary"/>
                        </MyButton>
                            </Link>
                        <MyButton tip="Notifications">
                            <Notifications/>
                        </MyButton>

                     </Fragment>
                 ): (
                    <Fragment>
                         <Button color="inherit" component={Link} to="/login">Login</Button>
                        <Button color="inherit" component={Link} to="/">Home</Button>
                        <Button color="inherit" component={Link} to="/signup">Signup</Button>
                    </Fragment>
                 )}
               
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
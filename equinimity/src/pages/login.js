import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom/'
import PropTypes from 'prop-types'
import AppIcon from './yogiIcon.png'
import axios from 'axios'
import { Store } from '../store/store'


//MUI stuff
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'
import CircularProgress from '@material-ui/core/CircularProgress'


const styles = (theme) => ({
    typography: {
        useNextVariants: true
      },
      form: { 
        textAlign: 'center',
      },
      image: {
        maxHeight: 40,
        margin: '20 auto 20 auto'
      },
      pageTitle: {
        margin: '10px auto 10px auto'
      },
      textField: {
        margin: '10px auto 10px auto'
      },
      button: {
        marginTop: '10px',
        position: 'relative'
      },
      customeError: {
        color: 'red', 
        fontSize: 'o.8rem',
        },
      progress: {
        position: 'absolute'
    
    }
})

function Login(props) {
  
    const [state, dispatch] = useContext(Store)
    const [user, setUser] = useState({
        email: '',
        password: '',
        errors: {}
    })
 //might need use effect , redux had will will receive props
    function handleSubmit(event){
       dispatch({type: 'LOADING'})
        event.preventDefault()
            const userData = {
                email: user.email,
                password: user.password
            } 
            console.log(userData)
            axios
                .post('/login', userData)
                .then((res) => {
                            const token = res.data.token
                            const FBIdToken = `Bearer ${token}`
                            localStorage.setItem('FBIdToken', FBIdToken);
                            axios.default.headers.common['Authorization'] = FBIdToken
                            getUserData ()
                            dispatch({ type: 'CLEAR_ERRORS' })
                            // history.push('/')
                    })

                    .catch((err) => {
                        dispatch({
                            type: 'SET_ERRORS',
                            payload: err.response.data
                    })
                })
           
    }
    
    function handleChange(event){
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
        
    }

    function getUserData (){
        dispatch({ type: 'LOADING_USER' })
        axios.get('/user')
            .then(res => {
                  dispatch({
                      type: 'SET_USER',
                      payload: res.data
                  })        
            })
            .catch(err => console.log(err))
    }
    

    const { classes } = props
    const { errors, loading } = state
    
   
    return (
       <Grid container className={classes.form}>
           <Grid item sm/>
           <Grid item sm>
               <img className={classes.image} src={AppIcon} alt="Icon"/>
               <Typography variant="h3" className={classes.pageTitle}>
                   Login
               </Typography>
               <form noValidate onSubmit={handleSubmit}>
                   <TextField id="email" 
                   name="email" 
                   type="email" 
                   label="email"
                    className={classes.textField}
                    helperText={errors.email}
                    error={errors.email ? true : false}
                    value={user.email}
                    onChange={handleChange}
                    fullWidth>
                    </TextField>
                    <TextField id="password" 
                   name="password" 
                   type="password" 
                   label="Password"
                    className={classes.textField}
                    helperText={errors.password}
                    error={errors.passwordl ? true : false}
                    onChange={handleChange}
                    value={user.password}
                    fullWidth>
                    </TextField>
                   {errors.general && (<Typography variant="body2" className={classes.customErrors}></Typography>)}
                                   
                    <Button type="submit"
                    disabled={loading}
                    varient="contained"
                    color="primary"
                    className={classes.button}
                    onSubmit={handleSubmit}>Login {state.loading && (
                        <CircularProgress size={30} className={classes.progress}/>)}</Button>
                    <br/>
                    <small>Don't have an account? <Link to="/signup" >Sign Up </Link></small>
                    </form>
           </Grid>
           <Grid item sm/>
       </Grid>
    )
}






Login.propTypes = {
    classes: PropTypes.object.isRequired,
    loginUser: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired
}
export default (withStyles(styles)(Login))
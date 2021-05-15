// import React, { useState, useEffect, useContext } from 'react'
// import { Link } from 'react-router-dom/'
// import PropTypes from 'prop-types'
// import AppIcon from './yogiIcon.png'
// import { Context } from '../context/context'
// //MUI stuff
// import Grid from '@material-ui/core/Grid'
// import Typography from '@material-ui/core/Typography'
// import TextField from '@material-ui/core/TextField'
// import Button from '@material-ui/core/Button'
// import withStyles from '@material-ui/core/styles/withStyles'
// import CircularProgress from '@material-ui/core/CircularProgress'
// const styles = (theme) => ({
//     typography: {
//         useNextVariants: true
//       },
//       form: { 
//         textAlign: 'center',
//       },
//       image: {
//         maxHeight: 40,
//         margin: '20 auto 20 auto'
//       },
//       pageTitle: {
//         margin: '10px auto 10px auto'
//       },
//       textField: {
//         margin: '10px auto 10px auto'
//       },
//       button: {
//         marginTop: '10px',
//         position: 'relative'
//       },
//       customeError: {
//         color: 'red', 
//         fontSize: 'o.8rem',
//         },
//       progress: {
//         position: 'absolute'
//     }
// })
// function Login(props) {
//     const [user, setUser] = useState({
//         email: '',
//         password: '',
//         errors: {}
//     })
//     const { state, loginUser  } = useContext(Context)
//     function handleSubmit(event){
//         event.preventDefault()
//             const userData = {
//                 email: user.email,
//                 password: user.password
//             } 
//             console.log(userData)
//           loginUser(userData, props.history)
//           }
//     function handleChange(event){
//         setUser({
//             ...state,
//             [event.target.name]: event.target.value
//         })
//     }
//     const { classes } = props
//     const { errors, loading } = state
//     return (
//        <Grid container className={classes.form}>
//            <Grid item sm/>
//            <Grid item sm>
//                <img className={classes.image} src={AppIcon} alt="Icon"/>
//                <Typography variant="h3" className={classes.pageTitle}>
//                    Login
//                </Typography>
//                <form noValidate onSubmit={handleSubmit}>
//                    <TextField id="email" 
//                    name="email" 
//                    type="email" 
//                    label="email"
//                     className={classes.textField}
//                     helperText={errors.email}
//                     error={errors.email ? true : false}
//                     value={state.email}
//                     onChange={handleChange}
//                     fullWidth>
//                     </TextField>
//                     <TextField id="password" 
//                    name="password" 
//                    type="password" 
//                    label="Password"
//                     className={classes.textField}
//                     helperText={errors.password}
//                     error={errors.passwordl ? true : false}
//                     onChange={handleChange}
//                     value={state.password}
//                     fullWidth>
//                     </TextField>
//                    {errors.general && (<Typography variant="body2" className={classes.customErrors}></Typography>)}
//                     <Button type="submit"
//                     disabled={loading}
//                     varient="contained"
//                     color="primary"
//                     className={classes.button}
//                     onSubmit={handleSubmit}>Login {state.loading && (
//                         <CircularProgress size={30} className={classes.progress}/>)}</Button>
//                     <br/>
//                     <small>Don't have an account? <Link to="/signup" >Sign Up </Link></small>
//                     </form>
//            </Grid>
//            <Grid item sm/>
//        </Grid>
//     )
//                     }
// Login.propTypes = {
//     classes: PropTypes.object.isRequired,
//     user: PropTypes.object.isRequired,
//     loginUser: PropTypes.func.isRequired,
//     UI: PropTypes.object.isRequired
// }
// export default (withStyles(styles)(Login))
"use strict";
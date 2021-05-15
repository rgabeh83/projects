// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom/'
// import PropTypes from 'prop-types'
// import AppIcon from './yogiIcon.png'
// import axios from 'axios'
// //REDUX
// import { connect } from 'react-redux'
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
//       customError: {
//         color: 'red', 
//         fontSize: 'o.8rem',
//         },
//       progress: {
//         position: 'absolute'
//     }
// })
// function Signup(props) {
//     const [newUser, setNewUser] = useState({
//         email: '',
//         password: '',
//         confirmPassword: '',
//         handle: '',
//         errors: {}
//     })
//     // useEffect(() => {
//     //   setNewUser({
//     //     ...newUser,
//     //     errors: props.UI.errors
//     //   })
//     // }, [])
//   function handleSubmit(event){
//         event.preventDefault()
//             const newUserData = {
//                 email: newUser.email,
//                 password: newUser.password,
//                 confirmPassword: newUser.confirmPassword,
//                 handle: newUser.handle
//             }
//             props.signupUser(newUserData, props.history)
//           }
//     function handleChange(event){
//         setNewUser({
//             ...newUser,
//             [event.target.name]: event.target.value
//         })
//     }
//   const loading = ''
//     const { classes, history } = props
//     const errors   = ''
//     return (
//        <Grid container className={classes.form}>
//            <Grid item sm/>
//            <Grid item sm>
//                <img className={classes.image} src={AppIcon} alt="Icon"/>
//                <Typography variant="h3" className={classes.pageTitle}>
//                    Signup
//                </Typography>
//                <form noValidate onSubmit={handleSubmit}>
//                    <TextField id="email" 
//                    name="email" 
//                    type="email" 
//                    label="email"
//                     className={classes.textField}
//                     value={newUser.email}
//                     onChange={handleChange}
//                     fullWidth>
//                     </TextField>
//                     <TextField id="password" 
//                    name="password" 
//                    type="password" 
//                    label="Password"
//                     className={classes.textField}
//                     error={errors.password ? true : false}
//                     onChange={handleChange}
//                     value={newUser.password}
//                     fullWidth>
//                     </TextField>
//                     <TextField id="confirmPassword" 
//                    name="confirmPassword" 
//                    type="confirmPassword" 
//                    label="confirmPassword"
//                     className={classes.textField}
//                     helperText={errors.confirmPasswordassword}
//                     error={errors.confirmPassword ? true : false}
//                     onChange={handleChange}
//                     value={newUser.confirmPassword}
//                     fullWidth>
//                     </TextField>
//                     <TextField id="handle" 
//                    name="handle" 
//                    type="handle" 
//                    label="handle"
//                     className={classes.textField}
//                     error={errors.handle ? true : false}
//                     onChange={handleChange}
//                     value={newUser.handle}
//                     fullWidth>
//                     </TextField>
//                     {newUser.errors.general ? (
//                      <Typography variant="body2" className={classes.customError}>
//                         {newUser.errors.general}
//                         </Typography>) : null
//                     }
//                     <Button type="submit"
//                     disabled={loading}
//                     varient="contained"
//                     color="primary"
//                     className={classes.button}
//                     onSubmit={handleSubmit}>Signup {loading && (
//                         <CircularProgress size={30} className={classes.progress}/>)}</Button>
//                     <br/>
//                     <small>Already have an account? <Link to="/signup"> Login </Link></small>
//                     </form>
//            </Grid>
//            <Grid item sm/>
//        </Grid>
//     )
// }
//  Signup.propTypes = {
// classes: PropTypes.object.isRequired,
// user: PropTypes.object.isRequired,
// UI: PropTypes.object.isRequired,
// signupUser: PropTypes.func.isRequired
// }
// export default (withStyles(styles)(Signup))
"use strict";
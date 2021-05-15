import React, { createContext, useState } from 'react' 
import { useHistory } from 'react-router-dom'
import axios from 'axios'



const Context = createContext()

function ContextProvider({ children, history }) {

    

        const [state, setState] = useState({
            credentials: {},
            loading: false,
            authenticated: false,
            likes: [],
            notifications: [],
            errors: {}

        })

        function loginUser(userData, history) {
            setState({
                ...state,
                loading: true
            })
                axios
                .post('/login', userData)
                .then((res) => {
                       setAuthorizationHeader(res.data.token)
                                setState({
                                ...state,
                                loading: false,
                                authenticated: true,
                            })
                            getUserData()
                            history.push('/')
                            
                            
                    })
                    

                    .catch((err) => {
                        console.log('err=', err)
                    })
                }

                function getUserData (){
                    setState({
                        ...state,
                        loading: true,
                       
                    })
                    axios.get('/user')
                        .then(res => {
                             setState({
                                 ...state,
                                 loading: false,
                                 credentials: res.data.credentials,
                                 likes: res.data.likes,
                                 notifications: res.data.likes,
                             } )
                             console.log(state)
                                     
                        })
                        .catch(err => console.log(err))
                }
            
               function signupUser(newUserData, history){
                    setState({
                        ...state,
                        loading: true
                    })
                    axios
                      .post('/signup', newUserData)
                      .then((res) => {
                        setAuthorizationHeader(res.data.token);
                       
                        getUserData();
                        history.push('/');
                      })
                      .catch((err) => {
                       setState({
                           ...state,
                           errors: err.response.data
                       })
                      });
                  };

                function logout(event) {
                    event.preventDefault()
                       localStorage.removeItem('FBIdToken');
                        delete axios.defaults.headers.common['Authorization'];
                      };
                

        function setAuthorizationHeader(token) {
            const FBIdToken = `Bearer ${token}`
            console.log(FBIdToken)
            localStorage.setItem('FBIdToken', FBIdToken);
            axios.defaults.headers.common['Authorization'] = FBIdToken
        }

    return (
        <Context.Provider value={{
            state,
            loginUser,
            signupUser,
            logout
        }}>
               {children} 
       </Context.Provider>
    )

}


export { ContextProvider, Context }
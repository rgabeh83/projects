import React, { createContext, useState } from 'react' 
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { IndeterminateCheckBox } from '@material-ui/icons'



const Context = createContext()

function ContextProvider({ children, history}) {
        const [state, setState] = useState({
            credentials: {},
            loading: false,
            authenticated: false,
            likes: [],
            notifications: [],
            posts: [],
            post: {},
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
                            })
                            getUserData()
                            history.push('/')
                            
                    })
                      .catch((err) => {
                        console.log('err=', err)
                    })
                }
                function setAuthorizationHeader(token) {
                    const FBIdToken = `Bearer ${token}`
                    console.log(FBIdToken)
                    localStorage.setItem('FBIdToken', FBIdToken);
                    axios.defaults.headers.common['Authorization'] = FBIdToken
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
                                 authenticated: true,
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
                        console.log('logout')
                       localStorage.removeItem('FBIdToken');
                        delete axios.defaults.headers.common['Authorization'];
                        setState({
                            ...state,
                            authenticated: false
                        })
                      };
            function getPosts() {
                setState({
                    ...state, 
                    loading: true
                })
                axios.get('/allposts')
                    .then(res => {
                        setState({
                            ...state,
                            posts: res.data,
                            loading: false
                        })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }

            function getPost(postId) {
                setState({
                    ...state,
                    loading: true
                })
                axios.get(`/post/${postId}`)
                .then((res) => {
                    setState({...state,
                        post: res.data.post
                    })
                })
            }

    // like post
            function likePost(postId){
                axios.get(`/posts/${postId}/like`)
                    .then(res => {
                        let index = state.posts.findIndex((post) => post.postId === res.data.postId)
                        state.posts[index] = res.data
                        console.log(state.posts[index])
                            setState({
                                ...state,
                                likes: [
                                    ...state.likes,
                                    {
                                        userHandle: state.credentials.handle,
                                        postId: res.data.postId
                                    }
                                ]
                            })
                            console.log(state)
                            

                                
                       
                })
                .catch((err) => console.log(err))
            }
            

            function unlikePost(postId){
                axios.get(`/posts/${postId}/unlike`)
                    .then(res => {
                        let index = state.posts.findIndex((post) => post.postId === res.data.postId)
                        state.posts[index] = res.data
                        console.log(state.posts[index])
                        const newLikes = state.likes.filter((like) => like.postId !== res.data.postId)
                        setState({
                           ...state,
                           likes: [
                               newLikes
                           ]
                        })
                    })
                    .catch((err) => console.log(err))
            }
     //unlike post

      
        
        function uploadImage(formData) {
       
            axios.post('/user/image', formData)
                .then(() => {
                    
                })
                .catch(err => console.log(err))
        }

        function editUserDetails(userDetails) {
            setState({
                ...state,
                loading: true,
            })
            axios.post('/users', userDetails)
            .then(() => {
                getUserData()
            })
            .catch((err) => console.log(err))
        }

        function deletePost(postId){
            axios.delete(`posts/${postId}`)
            .then(() => {
                let newPosts = state.posts.filter((post) => (post.postId !== postId))
                setState({
                    ...state,
                    posts: newPosts
                })
            })
            .catch(err=> {
                console.log(err)
            })
        }

    return (
        <Context.Provider value={{
            state,
            loginUser,
            signupUser,
            logout,
            uploadImage,
            logout,
            editUserDetails,
            getPost,
            getPosts,
            likePost,
            unlikePost,
            deletePost
           
            
        }}>
               {children} 
       </Context.Provider>
    )

}



export { ContextProvider, Context }
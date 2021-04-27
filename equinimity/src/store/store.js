import React, { createContext, useReducer } from 'react'
import Reducer from './reducers'

const initialState = {
        screams: [],
        scream: {},
        loading: false,
        errors: null,
        authenticated: false,
        credentials: {},
        likes: [],
        notifications: []
        
}


export const Store = createContext()

function GlobalState({ children }) {
const [state, dispatch] = useReducer(Reducer, initialState)
        
        return (
            <Store.Provider value={[state, dispatch]}>
                {children}
            </Store.Provider>
        )
        

    
}




export { GlobalState }
import React, { createContext, useReducer } from 'react'
import Reducer from './reducers'

const initialState = {
    
        userId: '',
        email: '',
        handle: '',
        createdAt: '',
        imageUrl: "",
        bio: "",
        website: "",
        location: '',
        loading: false,
        errors: []
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
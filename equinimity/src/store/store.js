import React, { createContext, useReducer } from 'react'
import Reducer from './reducer'

const initialState = {
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
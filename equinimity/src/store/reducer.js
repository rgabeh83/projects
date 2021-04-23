export const Reducer = (state, action) => {
switch(action.type){
    case 'SET_ERRORS':
        return {
            ...state,
            loading: false,
            errors: action.payload
        }
    case 'CLEAR_ERRORS':
        return {
                ...state,
                loading: false,
                errors: null
            }
    case 'LOADING_UI':
        return {
            ...state,
            loading: true
        }
    case 'SET_AUTHENTICATED':
        return {
            ...state, 
            authenticated: true
                }
    case 'SET_UNAUTHENTICATED': 
        return {
                ...state
            }
        case 'SET_USER': 
        return {
               ...state,
                authenticated: true,
                ...action.payload
                }
    default: 
        return state
    }
}
export default Reducer


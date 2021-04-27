

export default function Reducer(state, action, initialState) {
    switch (action.type) {
      case 'SET_AUTHENTICATED':
        return {
          ...state,
          authenticated: true
        };
      case 'SET_UNAUTHENTICATED':
        return {
          initialState
          }      
      case 'SET_USER':
        return {
          authenticated: true,
          loading: false,
          ...action.payload
        };
      case 'LOADING_USER':
        return {
          ...state,
          loading: true
        };
        case 'LOADING_UI':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_ERRORS':
            return {
                ...state,
                loading: false,
                errors: null
            }
        case 'SET_ERRORS':
            return {
              ...state,
              loading: false,
              errors: action.payload
            }
        case 'STOP_LOADING_UI':
            return {
                ...state,
                loading: false
              }
      default:
        return state;
    }
  }
export default function(state = initialState, action) {
    switch (action.type) {
      case 'SET_AUTHENTICATED':
        return {
          ...state,
          authenticated: true
        };
      case 'SET_UNAUTHENTICATED':
        return {
            ...state
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
        case 'LOADING':
            return {
                ...state,
                loading: true
            }
        case 'CLEAR_ERRORS':
            return {
                ...state,
                
            }
      default:
        return state;
    }
  }
import { AUTH_PROFILE_SIGN, AUTH_PROFILE_SIGNOUT } from "./actions";


const initialStateAuth = {
    auth:null
}
export const reducerAuth = (state=initialStateAuth, {type}) => {
    
    switch (type) {
        case AUTH_PROFILE_SIGN:
            return {
                ...state,
                auth:true
            }
        case AUTH_PROFILE_SIGNOUT:
            return {
                ...state,
                auth:false
            }            
    
        default:
           return state
    }
}
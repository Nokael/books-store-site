import { USERS_LOGIN_FAIL, USERS_LOGIN_REQUEST, USERS_LOGIN_SUCCESS, USERS_LOGOUT_SUCCESS, USERS_REGISTER_FAIL, USERS_REGISTER_REQUEST, USERS_REGISTER_SUCCESS } from "../../actions/actionTypes";

const userReducer = (state = [], action) => {
    switch (action.type) {
        case USERS_REGISTER_REQUEST:
            return {
                loading: true
            }
        case USERS_REGISTER_SUCCESS:
            return {
                userInfo: action.payload
            }
        case USERS_REGISTER_FAIL:
        return {
            error: action.payload,
            loading: false
        }

        // LOGIN
        case USERS_LOGIN_REQUEST:
            return {
                loading: true
            }
        case USERS_LOGIN_SUCCESS:
            return {
                userInfo: action.payload
            }
        case USERS_LOGIN_FAIL:
            return {
                error: action.payload,
                loading: false
            }
        
            // LOGOUT
        case USERS_LOGOUT_SUCCESS:
            return {}
            
        default:
            return state;
    }

}

export {userReducer};
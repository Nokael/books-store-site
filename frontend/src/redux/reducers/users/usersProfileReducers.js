import { USERS_PROFILE_FAIL, USERS_PROFILE_REQUEST, USERS_PROFILE_SUCCESS } from "../../actions/actionTypes";


const userProfileReducer = (state={}, action) => {
    switch (action.type) {
        case USERS_PROFILE_REQUEST:
            return {
                loading: true
            }
        case USERS_PROFILE_SUCCESS:
            return {
                user: action.payload
            }    
        case USERS_PROFILE_FAIL:
            return {
                error: action.payload,
                loading: false
            }   

        default:
            return state;
    }
}

export {userProfileReducer};


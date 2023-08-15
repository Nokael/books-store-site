import axios from "axios";
import {USERS_LOGIN_FAIL, USERS_LOGIN_REQUEST, USERS_LOGIN_SUCCESS, USERS_LOGOUT_SUCCESS, USERS_PROFILE_FAIL, USERS_PROFILE_REQUEST, USERS_PROFILE_SUCCESS, USERS_REGISTER_FAIL, USERS_REGISTER_REQUEST, USERS_REGISTER_SUCCESS, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS} from "../actionTypes";

const userRegisterAction = (name, email, password) => {
    return async dispatch => {
      
        try {
            dispatch({
                type: USERS_REGISTER_REQUEST,
    
            });
    
            const config = {
                Headers: {
                    "Content-Type": "application/json"
                }
            }
    //MAKE THE MAIN CALL
            const {data} = await axios.post ('/api/users/register', {name, email, password}, config)
    
            dispatch({
                type: USERS_REGISTER_SUCCESS,
                payload: data
            })
            
    // SAVE THE USER INTO LOCAL STORAGE
            localStorage.setItem("userAuthData", JSON.stringify(data))

        } catch (error) {
            dispatch({
                type: USERS_REGISTER_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    }
}



// user login action

const userLoginAction = (email, password) => {
    return async dispatch => {
        try {
            dispatch({
                type: USERS_LOGIN_REQUEST
            });

            // make the actual login request
            const config = {
                headers: {
                    "Content-Type": "application/json"
                }
            }
            const {data} = await axios.post("/api/users/login", {email, password}, config )
            dispatch({
                type: USERS_LOGIN_SUCCESS,
                payload: data
            })

            // SAVE THE USER INTO LOCAL STORAGE
            localStorage.setItem("userAuthData", JSON.stringify(data))

        } catch (error) {
            dispatch({
                type: USERS_LOGIN_FAIL,
                payload: error.response && error.response.data.message
            })
        }
    }
}


// LOGOUT ACTION
const userLogoutAction = () => {
    return async dispatch => {
        try {
            localStorage.removeItem("userAuthData")
            
            dispatch({
                type: USERS_LOGOUT_SUCCESS,

            })


        } catch (error) {
            
        }
    }
}


// PROFILE ACTION

const userProfileAction = () => {
    return async (dispatch, getState) => {

        // grab user token from store
        const {userInfo} = getState().userLogin

        try {
            dispatch({
                type: USERS_PROFILE_REQUEST
            });
            const config = {
                headers: {
                    authorization: `Bearer ${userInfo.token}`
                }
            }

            // make the actual request
            const {data} = await axios.get('/api/users/profile', config)
            dispatch({
                type: USERS_PROFILE_SUCCESS,
                payload: data 
            })

        } catch (error) {
            dispatch({
                type: USERS_PROFILE_FAIL,
                error: error.response && error.response.data.message
            })
        }
    }
}


// USER UPDATE
const updateUser = (name, email, password) => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: USER_UPDATE_REQUEST
            })

            const {userInfo} = getState().userLogin

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${userInfo.token}`
                }
            }

            const { data } = await axios.put('/api/users/update', {name, email, password}, config)
            dispatch({
                type: USER_UPDATE_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: USERS_PROFILE_FAIL,
                error: error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            })
        }
    }
}


export {userRegisterAction, userLoginAction, userLogoutAction, userProfileAction, updateUser };
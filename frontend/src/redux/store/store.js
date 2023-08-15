import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { createBookReducer } from "../reducers/books/createBookReducer";
import { bookListReducer } from "../reducers/books/bookListReducer";
import { userReducer } from "../reducers/users/usersAuthReducers";
import { userProfileReducer } from "../reducers/users/usersProfileReducers";
import usersUpdateReducer from "../reducers/users/usersUpdateReducer";

const middlewares = [thunk];


const reducer = combineReducers({
    bookCreated: createBookReducer,     //create book
    bookLists: bookListReducer,         //display books
    userLogin: userReducer,      //login and register
    userProfile: userProfileReducer,     //user profile update
    updatedUser: usersUpdateReducer,      //update user
});


// save user into local storage and save it into our store
const userAuthFromStorage = localStorage.getItem("userAuthData")
 ? JSON.parse(localStorage.getItem("userAuthData")) : null;

const initialState = {
    userLogin : {userInfo: userAuthFromStorage}
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export {store};
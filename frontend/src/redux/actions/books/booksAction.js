import axios from "axios"
import {CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, FETCH_BOOK_FAIL, FETCH_BOOK_SUCCESS, FETCH_BOOK_REQUEST, SEARCH_BOOK_REQUEST, FILTER_BOOKS} from "../actionTypes"

// create books
const createBookAction = (bookData) => {

    return async (dispatch, getState) => {
         // grab user token from store
         const {userInfo} = getState().userLogin

       try {
        
        dispatch({
            type: CREATE_BOOK_REQUEST
        });

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${userInfo.token}`
                }
            }

        const {data} = await axios.post("/api/books", bookData, config);

        dispatch({
            type: CREATE_BOOK_SUCCESS,
            payload: data,
        });

      
       } catch (error) {

        dispatch({
            type: CREATE_BOOK_FAIL,
            payload: {
              message: error.response && error.response.data.message,
              error: error, // Include the error object
            },
          });

       }
    }

}


// fetch books
const fetchBookAction = () => {
    return async (dispatch) => {

        try {
            dispatch({
                type: FETCH_BOOK_REQUEST 
            })

            const config = {
                'Content-Type': 'application/json'
            }

            const {data} = await axios.get('api/books', config);
            dispatch({
                type: FETCH_BOOK_SUCCESS,
                payload: data
            })
        } catch (error) {
            dispatch({
                type: FETCH_BOOK_FAIL,
                payload: {
                  message: error.response && error.response.data.message,
                  error: error, // Include the error object
                },
              });
            
        }
    }
}


//search Books

const searchBooks = (searchTerm) => {
    return async (dispatch) => {

        try {
            dispatch({
                type: SEARCH_BOOK_REQUEST,
                payload: searchTerm 
            });

            const config = {
                'Content-Type': 'application/json'
            }

            const response = await axios.get(`/api/books/search?q=${searchTerm}`, config);

            dispatch({
                type: FETCH_BOOK_SUCCESS,
                payload: response.data,
            });

        } catch (error) {
            dispatch({
                type: FETCH_BOOK_FAIL,
                payload: {
                  message: error.response && error.response.data.message,
                  error: error, // Include the error object
                },
              });
            
        }
    }
}

// book category
const filterBooks = (category) => (dispatch) => {
    dispatch({ type: FILTER_BOOKS, payload: category });
  
    axios
      .get(`/api/books/category/${category}`)
      .then((res) => dispatch({ type: FETCH_BOOK_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: FETCH_BOOK_FAIL, payload: err }));
  };

export {createBookAction, fetchBookAction, searchBooks, filterBooks};

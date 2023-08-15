import { FETCH_BOOK_FAIL, FETCH_BOOK_REQUEST, FETCH_BOOK_SUCCESS, FILTER_BOOKS, SEARCH_BOOK_SUCCESS } from "../../actions/actionTypes";

const initialState = {
    books: [],
    filteredBooks: [],
    isLoading: false,
  };

const bookListReducer = (state= initialState, action) => {

    switch (action.type) {
        case FETCH_BOOK_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_BOOK_SUCCESS:
            return {
                ...state,
                books: action.payload,
                filteredBooks: action.payload,
                loading: false,
            };
        case FETCH_BOOK_FAIL:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
                
        case SEARCH_BOOK_SUCCESS:
                const searchTerm = action.payload.toLowerCase();
                const filteredBySearch = state.books.filter(
                  (book) => book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm)
                );
                return {
                  ...state,
                  filteredBooks: filteredBySearch,
                };
        case FILTER_BOOKS:
            const category = action.payload;
            const filteredByCategory = category
                ? state.books.filter((book) => book.category === category)
                : state.books;
            return {
                ...state,
                filteredBooks: filteredByCategory,
            };
       
        default:
            return state;
    }

}

export {bookListReducer};
import * as types from '../../Constants/actionTypes';
import initialState from '../../Reducers/initialState';

export default function libraryReducer(state = initialState.book, action) {
    switch (action.type) {
        case types.BEGIN_GET_LIST_BOOK:
            return {
                ...state,
                ...{
                    isLoading: true,
                }
            };
        case types.GET_LIST_BOOK_SUCCESS:
            return {
                ...state,
                ...{
                    books: action.books,
                    isLoading: false,
                }
            };
        case types.BEGIN_GET_MORE_LIST_BOOK:
            return {
                ...state,
                ...{
                    isLoadingMore: true,
                }
            };
        case types.GET_MORE_LIST_BOOK_SUCCESS:
            return {
                ...state,
                ...{
                    books: [...state.books, ...action.books],
                    isLoadingMore: false,
                }
            };
        case types.BEGIN_SEARCH_BOOK:
            return {
                ...state,
                ...{
                    isLoadingSearch: true,
                }
            };
        case types.SEARCH_BOOK_SUCCESS:
            return {
                ...state,
                ...{
                    books: action.books,
                    isLoadingSearch: false,
                }
            };
        case types.BEGIN_SEARCH_MORE_BOOK:
            return {
                ...state,
                ...{
                    isLoadingMore: true,
                }
            };
        case types.SEARCH_MORE_BOOK_SUCCESS:
            return {
                ...state,
                ...{
                    books: [...state.books, ...action.books],
                    isLoadingMore: false,
                }
            };

        case types.BEGIN_GET_TYPE_BOOK:
            return {
                ...state,
                ...{
                    isLoadingTypeBook: true,
                }
            };
        case types.GET_TYPE_BOOK_SUCCESS:
            return {
                ...state,
                ...{
                    typeBooks: action.typeBooks,
                    isLoadingTypeBook: false,
                }
            };
        case types.BEGIN_REFRESH_LIST_BOOK :
            return {
                ...state,
                ...{
                    isRefreshing : true
                }
            };
        case types.REFRESH_LIST_BOOK_SUCCESS: {
            let array1 = state.books.slice(0, 12);
            let array2 = action.books;
            let array3 = [];
            for (let i = 0; i < 13; i++) {
                if (array2[i].id !== array1[i].id) {
                    array3.push(array2[i]);
                }
            }
            return {
                ...state,
                ...{
                    isRefreshing: false,
                    books: [array3, ...state.books]
                }
            }
        }
        case types.REFRESH_LIST_BOOK_ERROR:
            return {
                ...state,
                ...{
                    isRefreshing : false
                }
            };
        default:
            return state
    }
}
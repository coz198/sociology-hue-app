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
        case types.BEGIN_GET_TYPE_BOOK:
            return {
                ...state,
                ...{
                    isLoading: true,
                }
            };
        case types.GET_TYPE_BOOK_SUCCESS:
            return {
                ...state,
                ...{
                    typeBooks: action.typeBooks,
                    isLoading: false,
                }
            };


        default:
            return state
    }
}
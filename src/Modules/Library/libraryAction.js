import * as libraryApi from './libraryApi';
import * as types from '../../Constants/actionTypes';

export function getBook() {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_LIST_BOOK
        });
        libraryApi.libraryApi()
            .then(function (res) {
                dispatch({
                    type: types.GET_LIST_BOOK_SUCCESS,
                    books: res.data.books,
                });
                console.log(res.data.books)
            })
            .catch(function (error) {
                throw (error);
            });
    }
}

export function getMoreListBook(page) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_MORE_LIST_BOOK
        });
        libraryApi.libraryLoadMoreApi(page)
            .then(function (res) {
                dispatch({
                    type: types.GET_MORE_LIST_BOOK_SUCCESS,
                    books: res.data.books,
                });
                console.log(res.data.books)
            })
            .catch(function (error) {
                throw (error);
            });
    }
}

export function getTypeBook() {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_TYPE_BOOK
        });
        libraryApi.libraryTypeApi()
            .then(function (res) {
                dispatch({
                    type: types.GET_TYPE_BOOK_SUCCESS,
                    typeBooks: res.data.data.type_books,
                });
            })
            .catch(function (error) {
                throw (error);
            });
    }
}

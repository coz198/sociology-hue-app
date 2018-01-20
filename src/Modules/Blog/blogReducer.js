import * as types from '../../Constants/actionTypes';
import initialState from '../../Reducers/initialState';

export default function blogReducer(state = initialState.blog, action) {
    switch (action.type) {
        case types.BEGIN_GET_DETAIL_BLOG:
            return {
                ...state,
                ...{
                    isLoading: true,
                }
            };
        case types.GET_DETAIL_BOOK_SUCCESS:
            return {
                ...state,
                ...{
                    data: action.data,
                    isLoading: false,
                }
            };
        default:
            return state
    }
}
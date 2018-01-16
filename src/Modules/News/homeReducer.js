import * as types from '../../Constants/actionTypes';
import initialState from '../../Reducers/initialState';

export default function homeAction(state = initialState.home, action) {
    switch (action.type) {
        case types.GET_NEWS:
            return {
                ...state,
                ...{
                    news: action.news
                }
            };
        default:
            return state
    }
}
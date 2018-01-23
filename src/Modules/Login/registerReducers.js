import * as registerTypes from '../../Constants/actionTypes';
import initialState from '../../Reducers/initialState';

export default function registerReducer (state = initialState.register, action) {
    switch (action.type) {
        case registerTypes.BEGIN_REGISTER :
            return {
                ...state,
                ...{
                    isLoading : true,
                    error : action.error,
                }
            };
        case registerTypes.REGISTER_SUCCESS :
            return {
                ...state,
                ...{
                    isLoading : false,
                    error : action.error,
                    status : action.status
                }
            };
        case registerTypes.REGISTER_ERROR :
            return {
                ...state,
                ...{
                    isLoading : false,
                    error : action.error,
                    status: action.status,
                }
            };
        default :
            return state

    }
}
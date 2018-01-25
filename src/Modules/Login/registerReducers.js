import * as registerTypes from '../../Constants/actionTypes';
import initialState from '../../Reducers/initialState';

export default function registerReducer (state = initialState.register, action) {
    switch (action.type) {
        case registerTypes.BEGIN_REGISTER :
            return {
                ...state,
                ...{
                    isLoading : true,
                    error : false,
                }
            };
        case registerTypes.REGISTER_SUCCESS :
            return {
                ...state,
                ...{
                    isLoading : false,
                    error : false,
                    status : 1
                }
            };
        case registerTypes.REGISTER_ERROR :
            return {
                ...state,
                ...{
                    isLoading : false,
                    error : true,
                    status: 0,
                }
            };
        default :
            return state

    }
}
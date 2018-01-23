import * as types from '../../Constants/actionTypes';
import initialState from '../../Reducers/initialState';

export default function blogReducer(state = initialState.survey, action) {
    switch (action.type) {
        case types.BEGIN_GET_SURVEY:
            return {
                ...state,
                ...{
                    isLoading: true,
                }
            };
        case types.GET_SURVEY_SUCCESS:
            return {
                ...state,
                ...{
                    surveys: action.surveys,
                    isLoading: false,
                }
            };
        case types.BEGIN_GET_SURVEY_QUESTION:
            return {
                ...state,
                ...{
                    isLoadingQuestion: true,
                }
            };
        case types.GET_SURVEY_QUESTION_SUCCESS:
            return {
                ...state,
                ...{
                    questions: action.questions,
                    isLoadingQuestion: false,
                }
            };
        default:
            return state
    }
}
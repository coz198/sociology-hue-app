import * as surveyApi from './surveyApi';
import * as types from '../../Constants/actionTypes';

export function getDataSurvey(token) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_SURVEY,
        });
        surveyApi.surveyApi(token)
            .then(function (res) {
                dispatch({
                    type: types.GET_SURVEY_SUCCESS,
                    surveys: res.data.surveys
                });
            })
            .catch(function (error) {
               throw (error);
            });
    }
}

export function getDataSurveyQuestion(id, token) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_SURVEY_QUESTION,
        });
        surveyApi.surveyQuestionApi(id, token)
            .then(function (res) {
                dispatch({
                    type: types.GET_SURVEY_QUESTION_SUCCESS,
                    questions: res.data.data.survey,
                });
            })
            .catch(function (error) {
               throw (error);
            });
    }
}

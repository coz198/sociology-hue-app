import * as surveyApi from './surveyApi';
import * as types from '../../Constants/actionTypes';
import * as homeApi from "../Home/homeApi";

export function getDataSurvey(page, token) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_SURVEY,
        });
        surveyApi.surveyApi(1, token)
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

export function getMoreDataSurvey(page, token) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_MORE_SURVEY,
        });
        surveyApi.surveyApi(page, token)
            .then(function (res) {
                dispatch({
                    type: types.GET_MORE_SURVEY_SUCCESS,
                    surveys: res.data.surveys
                });
            })
            .catch(function (error) {
               throw (error);
            });
    }
}

export function refreshDataSurvey(token) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_REFRESH_SURVEY
        });
        surveyApi.surveyApi(1, token)
            .then(function (res) {
                dispatch({
                    type: types.REFRESH_SURVEY_SUCCESS,
                    surveys: res.data.surveys,
                });
            })
            .catch(function (error) {
                dispatch({
                    type: types.REFRESH_SURVEY_ERROR,
                })
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
                    lesson: res.data.data.user_lesson_survey,
                });
                console.log(res.data.data.user_lesson_survey)
            })
            .catch(function (error) {
               throw (error);
            });
    }
}

export function sentAnswerSurveyQuestion(id_question, id_lesson ,token, answer) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_ANSWER_SURVEY_QUESTION,
        });
        surveyApi.surveyAnswerQuestionApi(id_question, id_lesson ,token, answer)
            .then(function (res) {
                dispatch({
                    type: types.ANSWER_SURVEY_QUESTION_SUCCESS,
                    statusAnswer: res.status
                });
                console.log(res.status)
            })
            .catch(function (error) {
                throw (error);
            });
    }
}

export function closeSurveyLesson(id_lesson ,token) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_CLOSE_SURVEY_LESSON,
        });
        surveyApi.closeSurveyLessonApi(id_lesson ,token)
            .then(function (res) {
                dispatch({
                    type: types.CLOSE_SURVEY_LESSON_SUCCESS,
                });
            })
            .catch(function (error) {
                throw (error);
           });

    }
}

export function getHistorySurvey(page, token) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_HISTORY_SURVEY,
        });
        surveyApi.getHistorySurvey(page, token)
            .then(function (res) {
                dispatch({
                    type: types.HISTORY_SURVEY_SUCCESS,
                    historySurvey: res.data.user_lesson_surveys
                });
            })
            .catch(function (error) {
                throw (error);
            });
    }
}

export function getMoreHistorySurvey(page, token) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_MORE_HISTORY_SURVEY,
        });
        surveyApi.getHistorySurvey(page, token)
            .then(function (res) {
                dispatch({
                    type: types.GET_MORE_HISTORY_SURVEY_SUCCESS,
                    historySurvey: res.data.user_lesson_surveys
                });
            })
            .catch(function (error) {
                throw (error);
            });
    }
}

export function refreshHistorySurvey(token) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_REFRESH_HISTORY_SURVEY
        });
        homeApi.listBlogApi(1, token)
            .then(function (res) {
                dispatch({
                    type: types.REFRESH_HISTORY_SURVEY_SUCCESS,
                    historySurvey: res.data.user_lesson_surveys,
                });
            })
            .catch(function (error) {
                dispatch({
                    type: types.REFRESH_HISTORY_SURVEY_ERROR,
                })
            });
    }
}


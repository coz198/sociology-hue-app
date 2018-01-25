import * as env from '../../Constants/env';
import axios from 'axios';

export function surveyApi(page, token) {
    let url = env.API_SOCIOLOGY_MANAGE + '/v2/survey?page=' + page + '&token=' + token;
    return axios.get(url);
}

export function surveyQuestionApi(surveyID, token) {
    let url = env.API_SOCIOLOGY_MANAGE + '/v2/survey/' + surveyID +'/user-lesson?token=' + token;
    return axios.post(url);
}

export function surveyAnswerQuestionApi(id_question, id_lesson ,token, answer) {
    let url = env.API_SOCIOLOGY_MANAGE + '/v2/survey/question/' + id_question + '/user-lesson/' + id_lesson + '/answer?token=' + token;
    return axios.post(url, {
        answer_content: answer
    });
}

export function closeSurveyLessonApi(id_lesson ,token) {
    let url = env.API_SOCIOLOGY_MANAGE + '/v2/survey/user-lesson-survey/' + id_lesson + '?token=' + token;
    return axios.put(url);
}

export function getHistorySurvey(page, token) {
    let url = env.API_SOCIOLOGY_MANAGE + '/v2/survey/history?page=' + page + '&token=' + token;
    return axios.get(url);
}
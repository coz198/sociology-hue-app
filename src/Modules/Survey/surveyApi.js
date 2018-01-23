import * as env from '../../Constants/env';
import axios from 'axios';

export function surveyApi(token) {
    let url = env.API_SOCIOLOGY_MANAGE + '/v2/survey?token=' + token;
    return axios.get(url);
}

export function surveyQuestionApi(surveyID, token) {
    let url = env.API_SOCIOLOGY_MANAGE + '/v2/survey/' + surveyID +'/user-lesson?token=' + token;
    return axios.post(url);
}
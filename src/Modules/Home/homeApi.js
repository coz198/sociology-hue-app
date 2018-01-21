import * as env from '../../Constants/env';
import axios from 'axios';

export function listBlogApi(page) {
    let url = env.API_URL + '/blogs?page=' + page;
    return axios.get(url);
}

export function searchBlogApi(page, text) {
    let url = env.API_URL + '/blogs?page=' + page + '&search=' + text;
    return axios.get(url);
}
import * as env from '../../Constants/env';
import axios from 'axios';

export function libraryApi() {
    let url = env.API_GRAPHICS + '/book/all';
    return axios.get(url);
}

export function libraryLoadMoreApi(page) {
    let url = env.API_GRAPHICS + '/book/all?page=' + page;
    return axios.get(url);
}

export function libraryTypeApi() {
    let url = env.API_GRAPHICS + '/types-book';
    return axios.get(url);
}

export function searchBook(page, text, type) {
    let url = env.API_GRAPHICS + '/book/all?page=' + page + '&search=' + text + '&type=' + type;
    return axios.get(url);
}


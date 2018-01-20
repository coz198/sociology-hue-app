import * as env from '../../Constants/env';
import axios from 'axios';

export function blogApi(id) {
    let url = env.API_URL2 + '/api/blog/' + id;
    return axios.get(url);
}
import * as env from '../../Constants/env';
import axios from 'axios';

export function login(login) {
    let url = env.API_SOCIOLOGY + '/login';
    return axios.post(url,{
        email: login.email,
        password: login.password,
    });
}
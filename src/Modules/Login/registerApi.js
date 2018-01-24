import axios from 'axios';
import * as env from '../../Constants/env';

export function register(register) {
    let url = env.API_SOCIOLOGY + '/user';
    return axios.post(url,{
        name : register.name,
        email : register.email,
        username : register.username,
        password : register.password,
    });
}
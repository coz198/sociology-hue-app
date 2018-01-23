import * as types from '../../Constants/actionTypes';
import * as registerApi from './registerApi'
import {Alert,AsyncStorage} from 'react-native'
export function beginRegister (){
    return{
        type : types.BEGIN_REGISTER,
        isLoading : true,
        error : false,
    }
}

export function registerSuccess (response){
    return {
        type : types.REGISTER_SUCCESS,
        isLoading : false,
        error : false,
        status : response.status,
    }
}
export function registerError (error){
    return {
        type : types.REGISTER_ERROR,
        isLoading: false,
        error: true,
        status : error.response.status,
    }
}

export function registerUser(register){
    return (dispatch) => {
        dispatch(beginRegister());
        registerApi.register(register)
            .then( async function(response) {
                dispatch(registerSuccess(response));
                Alert.alert('Đăng kí thành công')
            })
            .catch(function (error) {
                if (error.response.data.error) {
                    dispatch(registerError(error))
                    if (error.response.data.error.email && error.response.data.error.username == null) {
                        Alert.alert(error.response.data.error.email)
                    }
                    if (error.response.data.error.username && error.response.data.error.email == null) {
                        Alert.alert(error.response.data.error.username)
                    }
                    if (error.response.data.error.username && error.response.data.error.email) {
                        Alert.alert(error.response.data.error.email + '\n' + error.response.data.error.username)
                    }
                    ;
                } else {
                    Alert.alert('Kiểm tra lại kết nối mạng')
                }

            })
    }
}
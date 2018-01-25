import * as types from '../../Constants/actionTypes';
import * as registerApi from './registerApi'
import {Alert,AsyncStorage} from 'react-native'

export function registerUser(register){
    return (dispatch) => {
        dispatch({
            type : types.BEGIN_REGISTER,
        });
        registerApi.register(register)
            .then( async function(response) {
                dispatch({
                    type : types.REGISTER_SUCCESS,
                });
                Alert.alert('Đăng kí thành công', 'Chào mừng bạn đến với khoa Xã Hội Học Trường Đại Học Khoa Học Huế!')
            })
            .catch(function (error) {
                if (error.response.data.error) {
                    dispatch({
                        type : types.REGISTER_ERROR,
                    })
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
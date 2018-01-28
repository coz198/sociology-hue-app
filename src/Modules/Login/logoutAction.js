import * as types from '../../Constants/actionTypes'
import {AsyncStorage} from 'react-native'


export function logout() {
    return async function (dispatch) {
        try {
            await AsyncStorage.removeItem('@ColorMe:email')
            dispatch({
                type: types.LOGOUT,
                status: 1,
                statusLogin: false,
            })
        }
        catch (error) {
        };
    }
}




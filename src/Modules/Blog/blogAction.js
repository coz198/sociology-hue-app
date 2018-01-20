import * as blogApi from './blogApi';
import * as types from '../../Constants/actionTypes';

export function getDetailBlog(id) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_DETAIL_BLOG
        });
       blogApi.blogApi(id)
            .then(function (res) {
                dispatch({
                    type: types.GET_DETAIL_BOOK_SUCCESS,
                    data: res.data.data.product
                });
                console.log(res.data.data.product)
            })
            .catch(function (error) {
               throw (error);
            });
    }
}

import * as homeApi from './homeApi';
import * as types from '../../Constants/actionTypes';

export function getListBlog(page) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_LIST_BLOG
        });
        homeApi.listBlogApi(page)
            .then(function (res) {
                dispatch({
                    type: types.GET_LIST_BLOG_SUCCESS,
                    blogs: res.data.blogs
                });
                console.log(res.data.blogs)
            })
            .catch(function (error) {
                throw (error);
            });
    }
}

export function refreshListBlog() {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_REFRESH_NEW_FEED
        });
        homeApi.listBlogApi(1)
            .then(function (res) {
                dispatch({
                    type: types.REFRESH_NEW_FEED_SUCCESS,
                    blogs: res.data.blogs,
                });
            })
            .catch(function (error) {
                dispatch({
                    type: types.REFRESH_NEW_FEED_ERROR,
                });
            })
    }
}

export function getMoreListBlog(page) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_MORE_LIST_BLOG
        });
        homeApi.listBlogApi(page)
            .then(function (res) {
                dispatch({
                    type: types.GET_MORE_LIST_BLOG_SUCCESS,
                    blogs: res.data.blogs,
                });
            })
            .catch(function (error) {
                throw (error);
            });
    }
}
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
export function beginRefreshNewFeed() {
    return {
        type: types.BEGIN_REFRESH_NEW_FEED,
        isRefreshing: true,
    }
}

export function refreshNewFeedSuccess(response) {
    return {
        type: types.REFRESH_NEW_FEED_SUCCESS,
        blogs: response.data.blogs,
        isRefreshing: false,
    }
}

export function refreshNewFeedError() {
    return {
        type: types.REFRESH_NEW_FEED_ERROR,
        isRefreshing: false
    }
}

export function refreshNewFeed(page) {
    return (dispatch) => {
        dispatch(beginRefreshNewFeed());
        homeApi.listBlogApi(page)
            .then(function (response) {
                dispatch(refreshNewFeedSuccess(response));
            })
            .catch(function (error) {
                dispatch(refreshNewFeedError(error));
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
                console.log(res.data.blogs)
            })
            .catch(function (error) {
                throw (error);
            });
    }
}
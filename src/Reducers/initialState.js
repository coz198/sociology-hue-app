
import {StyleSheet} from 'react-native';
import * as colorLight from '../Styles/color';
import * as style from '../Styles/generalStyle';

let color = colorLight;

export default {
    login:{
        login: {},
        token: undefined,
        isLoading: false,
        error: false,
        result: false,
        isGetLocalData: false,
        status: 0,
        user : {},
    },
    register: {
        register: {},
        isLoading: false,
        error: false,
        status : 0,
    },
    home: {
        isLoading: false,
        news: [
            {
                "url": "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=334&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1501159873713-dc65286617cc?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1485436442739-c12c6e3673af?auto=format&fit=crop&w=553&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1485893226355-9a1c32a0c81e?auto=format&fit=crop&w=500&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
            {
                "url": "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
                "title": "THIS IS SAMPLE TEXT",
                "description": "Sample description goes here",
                "created_at": "24h ago"
            },
        ],
    },
    theme: {
        theme: true,
        colorText: '#FFFFFF',
        colors: [color.colorGradient0, color.colorGradient1, color.colorGradient2],
        colorsDrawer: [color.colorGradient0, color.colorGradient1],
        general:
            StyleSheet.create(style.style)

    },
    // getNewFeed : {
    //     products : [],
    //     isLoading: false,
    //     error : false,
    //     result : false,
    //     isRefreshing : false,
    // },
    //
    // infoAboutPost: {
    //     likers:[],
    //     post:{},
    //     comments:[],
    //     isLoading: false,
    //     error: false,
    //     result: false,
    //     statusPostComment: 0,
    //     idComment: 0,
    //     liked : {},
    // },
    // userInformation : {
    //     isLoading: false,
    //     isLoadingUserProfile: false,
    //     isLoadingUserProducts: false,
    //     isLoadingUserProgress: false,
    //     errorUserProfile: false,
    //     errorUserProducts: false,
    //     errorUserProgress: false,
    //     user:{},
    //     products: [],
    //     progress: [],
    //     dataSideNav: {},
    //     isLoadingUserSideNav: false,
    // },
    // myAccountInformation : {
    //     isLoading: false,
    //     isLoadingUserProfile: false,
    //     isLoadingUserProducts: false,
    //     isLoadingUserProgress: false,
    //     errorUserProfile: false,
    //     errorUserProducts: false,
    //     errorUserProgress: false,
    //     user:{},
    //     products: [],
    //     progress: [],
    // },
    //
    // search:{
    //     users:[],
    //     products:[],
    //     isLoading: false,
    //     error: false,
    //     result: false,
    // },
    // updateProfile : {
    //     isLoading : false,
    //     error : false,
    //     status : 0,
    // },
    // getCourse:{
    //     message: '',
    //     courses: [],
    //     courseInformation: {},
    //     isLoading : false,
    //     isLoadingLearnRegister: false,
    //     isLoadingCourseInformation: false,
    // },
    // getNotification:{
    //     notification:[],
    //     isLoading : false,
    //     isLoadingRef : false,
    //     error : false,
    // },
    // getComment:{
    //     isLoading : false,
    //     error : false,
    //     comments : []
    // },
    //
    // changeAvatar : {
    //     isLoading: false,
    // },
    // group:{
    //     isLoadingGroupTopics: false,
    //     isLoadingGroupProducts: false,
    //     isLoadingGroupMembers: false,
    //     errorGroupTopics: false,
    //     errorGroupProducts: false,
    //     errorGroupMembers: false,
    //     groupName: '',
    //     groupAvatar: '',
    //     topics:[],
    //     products:[],
    //     members:[],
    // },
    //
    // report:{
    //     isLoading: false,
    //     reportPostResult: {},
    // },
    //
    // sideNav:{
    //     attendGroup:[],
    //     data: {},
    //     isLoading: false,
    // },
    // feedback : {
    //     isLoadingFeedback : false,
    // },
    // topic :{
    //     isLoading: false,
    //     isLoadingProducts: false,
    //     topic: {},
    //     products:[]
    // },
    // curriculum: {
    //     isLoadingCurriculum: false,
    //     isLoadingResources: false,
    //     data:{},
    //     resources: [],
    // }
}
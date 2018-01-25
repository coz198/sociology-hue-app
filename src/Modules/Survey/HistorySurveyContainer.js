import React, {Component} from 'react';
import {FlatList, Image, RefreshControl, Text, TouchableOpacity, View, Animated, Easing, Keyboard} from 'react-native';
import {Container, Content, Item, Left, Right, Button, Input} from 'native-base';
import SearchButton from '../../Commons/SearchButton';
import Loading from '../../Commons/Loading';
import Icon from '../../Commons/Icon';
import HamburgerButton from '../../Commons/HamburgerButton';
import general from '../../Styles/generalStyle';
import * as surveyAction from './surveyAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as size from "../../Styles/size";


class HistorySurveyContainer extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            historySurveyState:[]
        }
    }

    componentWillMount() {
        const {token} = this.props;
        this.props.surveyAction.getHistorySurvey(1, token);
    }

    getMoreListHistorySurvey() {
        const {historySurvey, surveyAction, token} = this.props;
        if (historySurvey.length >= this.state.page * 20) {
            let page = this.state.page + 1;
            this.setState({page: page});
            surveyAction.getMoreHistorySurvey(page, token);
        }
    }

    componentWillReceiveProps(nextProps) {
        const newArr = this.props.historySurvey.map((item, i)=>{
            return{
                ...item,
                index: i
            }
        })
        this.setState({historySurveyState: newArr})
        console.log('rerrerere')
    }

    loadMore() {
        if (this.props.isLoadingMoreHistorySurvey)
            return (<Loading/>)
        else
            return (<View/>)
    }

    render() {
        const {navigate} = this.props.navigation;
        const {user, isLoadingHistorySurvey, historySurvey, isRefreshingHistorySurvey} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{flex: 1}}
                    >
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../assets/image/logoSurvey.jpg')}
                            style={{height: 30, width: 176}}
                        />
                    </TouchableOpacity>
                    <HamburgerButton navigate={navigate}/>
                </View>
                {
                    isLoadingHistorySurvey
                        ?
                        <Loading/>
                        :
                        <View style={{flex: 1}}>
                            <View style={{flex: 1, alignItems: 'center'}}>
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={this.state.historySurveyState}
                                    onEndReachedThreshold={5}
                                    onEndReached={
                                        () => this.getMoreListHistorySurvey()
                                    }
                                    refreshControl={
                                        <RefreshControl
                                            refreshing={isRefreshingHistorySurvey}
                                            onRefresh={
                                                () => this.props.surveyAction.refreshHistorySurvey(this.props.token)
                                            }
                                        />
                                    }
                                    ListHeaderComponent={
                                        <View
                                            style={[general.wrapperRowCenter, general.padding, general.marginBottomFar]}>
                                            <Image
                                                style={[general.imageCircleNormal]}
                                                source={{uri: user ? user.avatar_url : ''}}
                                            />
                                            <View style={general.marginLR}>
                                                <Text style={general.textTitleBig}>{user.name}</Text>
                                                <Text style={general.textDescriptionCard}>Dữ liệu về cuộc khảo sát mà
                                                    bạn đã thực hiện.</Text>
                                            </View>
                                        </View>
                                    }

                                    ListFooterComponent={
                                        this.loadMore()
                                    }
                                    renderItem={({item}) =>
                                        <TouchableOpacity
                                            onPress={() => navigate('DetailHistorySurvey', {data: item})}
                                            activeOpacity={1}
                                            style={[general.shadow, general.marginBottom, general.wrapperSurvey, general.paddingFar, general.margin, general.marginBottomFar]}>
                                            <Text style={general.textTitleCard}>{item.survey.name.toUpperCase()}</Text>
                                            <View style={general.wrapperRowCenter}>
                                                <Image style={general.imageCircleTiny}
                                                       source={{uri: item.user ? item.user.avatar_url : ''}}
                                                />
                                                <Text
                                                    style={[general.textNameCard, general.paddingLine]}>&nbsp;&nbsp;{item.user ? item.user.name.toUpperCase() : ''}<Text
                                                    style={general.textTimeCard}>&nbsp;-&nbsp;{item.survey ? item.survey.created_at : ''}</Text></Text>
                                            </View>
                                            <Text
                                                style={[general.textDescriptionCard, general.marginBottom]}>{item.survey.description}</Text>
                                            <View style={general.wrapperSpace}/>
                                            <Text
                                                style={[general.categoryInImage, general.textDescriptionCardLight, {right: 10}]}>
                                                {item.created_at}
                                            </Text>
                                            <View style={general.wrapperSpace}/>
                                        </TouchableOpacity>
                                    }
                                />
                            </View>
                        </View>
                }
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user,
        token: state.login.token,
        isLoadingHistorySurvey: state.survey.isLoadingHistorySurvey,
        isLoadingMoreHistorySurvey: state.survey.isLoadingMoreHistorySurvey,
        isRefreshingHistorySurvey: state.survey.isRefreshingHistorySurvey,
        historySurvey: state.survey.historySurvey,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        surveyAction: bindActionCreators(surveyAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistorySurveyContainer);
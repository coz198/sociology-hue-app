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


class SurveyContainer extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
        }
    }

    componentWillMount() {
        this.props.surveyAction.getDataSurvey(1, this.props.token)
    }

    getMoreLisSurvey() {
        const {surveys, surveyAction, token} = this.props;
        if (surveys.length >= this.state.page * 20) {
            let page = this.state.page + 1;
            this.setState({page: page});
            surveyAction.getMoreDataSurvey(page, token);
        }
    }

    loadMore() {
        if (this.props.isLoadingMoreSurvey)
            return (<Loading/>)
        else
            return (<View/>)
    }

    render() {
        const top = this.state.searchMove;
        const {navigate} = this.props.navigation;
        const {surveys, isLoading, isRefreshingSurvey, user} = this.props;
        return (
            <Container style={general.wrapperContainer}>
                <View style={[general.wrapperHeader, general.paddingBorder]}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{flex: 1}}
                        onPress={() => isLoading ? {} : this.refs.listRef.scrollToOffset({x: 0, y: 0, animated: true})}
                    >
                        <Image
                            resizeMode={'contain'}
                            source={require('../../../assets/image/logoSurvey.jpg')}
                            style={{height: 30, width: 176}}
                        />
                    </TouchableOpacity>
                    <HamburgerButton navigate={navigate}/>
                </View>
                <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFF'}}>
                    {
                        user.role == 0
                            ?
                            <Text style={[general.textTitleCard, {textAlign: 'center'}]}>Hiện tại bạn chưa thể truy cập
                                được vào Survey.</Text>
                            :
                            isLoading
                                ?
                                <Loading/>
                                :

                                <FlatList
                                    ref="listRef"
                                    showsVerticalScrollIndicator={false}
                                    data={surveys}
                                    refreshControl={
                                        <RefreshControl
                                            refreshing={isRefreshingSurvey}
                                            onRefresh={
                                                () => this.props.surveyAction.refreshDataSurvey(this.props.token)
                                            }
                                        />
                                    }
                                    onEndReachedThreshold={5}
                                    onEndReached={
                                        () => this.getMoreLisSurvey()
                                    }
                                    ListFooterComponent={
                                        this.loadMore()
                                    }
                                    renderItem={({item}) =>
                                        <TouchableOpacity
                                            key={item.id}
                                            onPress={() => navigate('DetailSurvey', {data: item})}
                                            activeOpacity={1}
                                            style={[general.paddingLR, general.marginBottomFar, general.paddingTop]}>
                                            <View style={[general.shadow, general.imageFeature]}>
                                                <Image
                                                    style={[general.imageFeature]}
                                                    source={{uri: item.image_url}}/>
                                            </View>
                                            <View style={general.wrapperSpace}/>
                                            <Text style={general.textTitleCard}>{item.name.toUpperCase()}</Text>
                                            <View style={general.wrapperRowCenter}>
                                                <Image style={general.imageCircleTiny}
                                                       source={{uri: item.staff ? item.staff.avatar_url : ''}}
                                                />
                                                <Text
                                                    style={[general.textNameCard, general.paddingLine]}>&nbsp;&nbsp;{item.staff ? item.staff.name.toUpperCase() : ''}<Text
                                                    style={general.textTimeCard}>&nbsp;-&nbsp;{item.created_at}</Text></Text>
                                            </View>
                                            <Text
                                                style={[general.textDescriptionCard, general.marginBottom]}>{item.description}</Text>
                                            <View style={[general.wrapperProcessDark, general.marginTop]}>
                                                <View
                                                    style={[general.process, {width: item.target > item.take ? (size.wid - 80) / item.target * item.take : (size.wid - 80)}]}/>
                                            </View>
                                            <View style={[general.wrapperSpace, general.marginBottom]}/>
                                            <Text style={[general.categoryInImage, general.textDescriptionCardLight,{right: 20}]}>
                                                {item.questions_count} câu hỏi
                                            </Text>
                                            <Text style={[general.textTimeCard, {
                                                position: 'absolute',
                                                bottom: 10,
                                                left: 20,
                                            }]}>
                                                {item.take} / {item.target}
                                            </Text>
                                            <View style={general.wrapperSpace}/>
                                        </TouchableOpacity>
                                    }
                                />
                    }
                </View>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.survey.isLoading,
        isRefreshingSurvey: state.survey.isRefreshingSurvey,
        surveys: state.survey.surveys,
        token: state.login.token,
        user: state.login.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        surveyAction: bindActionCreators(surveyAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);
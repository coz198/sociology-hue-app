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

    getMoreListHistorySurvey() {
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
        const {surveys, isLoading, isRefreshingSurvey} = this.props;
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
                <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFF'}}>
                    {
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
                                ListFooterComponent={
                                    this.loadMore()
                                }
                                renderItem={({item}) =>
                                    <TouchableOpacity
                                        key={item.id}
                                        onPress={() => navigate('DetailSurvey', {data: item})}
                                        activeOpacity={1}
                                        style={[general.shadow, general.marginBottom, general.wrapperSurvey, general.paddingFar, general.margin, general.marginBottomFar]}>
                                        <Text style={general.textTitleCard}>{item.name.toUpperCase()}</Text>
                                        <View style={general.wrapperRowCenter}>
                                            <Image style={general.imageCircleTiny}
                                                   source={{uri: item.staff ? 'http://' + item.staff.avatar_url : ''}}
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
                                        <View style={general.wrapperSpace}/>
                                        <Text style={[general.categoryInImage, general.textDescriptionCardLight]}>
                                            {item.questions_count} câu hỏi
                                        </Text>
                                        <Text style={[general.textTimeCard, {position: 'absolute', bottom: 10, left: 20,}]}>
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        surveyAction: bindActionCreators(surveyAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveyContainer);